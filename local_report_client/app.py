#!/usr/bin/env python3
import argparse
import datetime as dt
from ftplib import FTP, error_perm
import html
import json
import os
import shutil
import smtplib
import sqlite3
import socket
import subprocess
import threading
import webbrowser
import zipfile
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


APP_DIR = Path(__file__).resolve().parent
DB_PATH = APP_DIR / "reports.sqlite3"
EXPORT_DIR = APP_DIR / "exports"
ATTACHMENTS_DIR = APP_DIR / "attachments"
DELETED_DIR = APP_DIR / "deleted"
WEB_STORAGE_REMOTE = "/public_html/captain-fin/storage"
DRIVE_FOLDER_ID = "1x9m41AUYPocx7H0UezF_lZnFvzWO54zQ"
SECRET_FILE = Path("/home/alexey/GoogleDrive/FOR CODEX/Копия пароли brkovic.ltd.md")


HTML_PAGE = r"""<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Локальные отчеты</title>
  <style>
    :root {
      --bg: #f6f7f4;
      --panel: #ffffff;
      --ink: #18201b;
      --muted: #657065;
      --line: #d9ded7;
      --accent: #0f766e;
      --accent-dark: #0a5b54;
      --danger: #b42318;
      --soft: #eaf3f0;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--ink);
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 24px;
      border-bottom: 1px solid var(--line);
      background: #fbfcfa;
      position: sticky;
      top: 0;
      z-index: 4;
    }
    h1 { margin: 0; font-size: 22px; font-weight: 720; }
    main {
      display: grid;
      grid-template-columns: minmax(280px, 380px) minmax(480px, 1fr);
      min-height: calc(100vh - 66px);
    }
    aside {
      border-right: 1px solid var(--line);
      padding: 18px;
      background: #fbfcfa;
    }
    section { padding: 18px 22px 28px; }
    .toolbar, .row, .summary, .send-grid {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }
    .stack { display: grid; gap: 14px; }
    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(180px, 1fr));
      gap: 12px;
    }
    label { display: grid; gap: 5px; font-size: 13px; color: var(--muted); }
    input, textarea, select {
      width: 100%;
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 9px 10px;
      color: var(--ink);
      background: white;
      font: inherit;
    }
    textarea { min-height: 84px; resize: vertical; }
    button {
      border: 1px solid var(--accent);
      border-radius: 6px;
      padding: 9px 12px;
      background: var(--accent);
      color: white;
      font: inherit;
      cursor: pointer;
      min-height: 38px;
    }
    button:hover { background: var(--accent-dark); }
    button.secondary {
      background: white;
      color: var(--accent-dark);
    }
    button.danger {
      border-color: var(--danger);
      color: var(--danger);
      background: white;
    }
    .reports {
      display: grid;
      gap: 8px;
      margin-top: 14px;
    }
    .report-item {
      border: 1px solid var(--line);
      border-radius: 7px;
      background: white;
      padding: 10px;
      cursor: pointer;
      transition: opacity .16s ease, background .16s ease, border-color .16s ease;
    }
    .report-item.active { border-color: var(--accent); background: var(--soft); }
    .report-item.submitted {
      opacity: .54;
      background: #f3f5f2;
    }
    .report-item.submitted.active {
      opacity: .68;
      background: #e8eeee;
    }
    .report-item strong { display: block; font-size: 14px; }
    .report-item span { color: var(--muted); font-size: 12px; }
    .report-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .submitted-toggle {
      display: inline-flex;
      grid-template-columns: none;
      align-items: center;
      gap: 6px;
      color: var(--muted);
      font-size: 12px;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
    }
    .submitted-toggle input {
      width: auto;
      margin: 0;
      accent-color: var(--accent);
    }
    .submitted-badge {
      display: inline-block;
      margin-top: 4px;
      color: var(--accent-dark);
      font-size: 12px;
      font-weight: 650;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border: 1px solid var(--line);
      border-radius: 7px;
      overflow: hidden;
    }
    th, td {
      border-bottom: 1px solid var(--line);
      padding: 8px;
      text-align: left;
      vertical-align: top;
    }
    th { color: var(--muted); font-size: 12px; font-weight: 650; background: #f9faf8; }
    td input, td select { min-width: 120px; }
    td .amount { min-width: 110px; }
    .summary {
      align-items: stretch;
      display: grid;
      grid-template-columns: repeat(5, minmax(130px, 1fr));
    }
    .metric {
      background: white;
      border: 1px solid var(--line);
      border-radius: 7px;
      padding: 12px;
    }
    .metric span { display: block; color: var(--muted); font-size: 12px; }
    .metric strong { display: block; margin-top: 4px; font-size: 18px; }
    .output {
      background: #10201c;
      color: #e9fff9;
      border-radius: 7px;
      padding: 13px;
      white-space: pre-wrap;
      min-height: 92px;
    }
    .status { min-height: 20px; color: var(--muted); font-size: 13px; }
    .wide { grid-column: 1 / -1; }
    @media (max-width: 920px) {
      main { grid-template-columns: 1fr; }
      aside { border-right: 0; border-bottom: 1px solid var(--line); }
      .summary, .form-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Локальные отчеты</h1>
    <div class="toolbar">
      <button class="secondary" id="newReport">Новый отчет</button>
      <button class="secondary" id="shareWebApp">Поделиться web app</button>
      <button class="secondary" id="pullWebApp">Подтянуть web app</button>
      <button class="secondary" id="pullServer">Синхронизировать с сервером</button>
      <button id="saveReport">Сохранить</button>
    </div>
  </header>
  <main>
    <aside>
      <div class="toolbar">
        <input id="search" placeholder="Поиск по отчетам">
      </div>
      <div class="reports" id="reports"></div>
    </aside>
    <section class="stack">
      <div class="form-grid">
        <label>Дата создания
          <input type="date" id="reportDate">
        </label>
        <label>Остаток на эту дату
          <input type="number" step="0.01" id="openingBalance" placeholder="0.00">
        </label>
        <label class="wide">Произвольные данные / заметки
          <textarea id="notes" placeholder="+1500 оплата клиента&#10;-230 топливо&#10;+500, -120 продукты, -80 связь&#10;Можно добавлять любые комментарии и контекст."></textarea>
        </label>
      </div>
      <div class="toolbar">
        <button class="secondary" id="importSigned">Распределить заметки по приходу и расходу</button>
      </div>

      <div class="summary">
        <div class="metric"><span>Пришло</span><strong id="sumIncome">0.00</strong></div>
        <div class="metric"><span>Ушло</span><strong id="sumExpense">0.00</strong></div>
        <div class="metric"><span>Остаток</span><strong id="currentBalance">0.00</strong></div>
        <div class="metric"><span>Предстоящие расходы</span><strong id="sumUpcoming">0.00</strong></div>
        <div class="metric"><span>Будущий остаток</span><strong id="futureBalance">0.00</strong></div>
      </div>

      <div class="toolbar">
        <button class="secondary" data-add="income">+ Приход</button>
        <button class="secondary" data-add="expense">+ Расход</button>
        <button class="secondary" data-add="upcoming">+ Предстоящий расход</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Статья</th>
            <th>Описание</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="entries"></tbody>
      </table>

      <div>
        <h2>Выводы</h2>
        <div class="output" id="analysis"></div>
      </div>

      <div class="toolbar">
        <button id="exportExcel">Создать Excel</button>
        <button class="secondary" id="exportSummary">Сводный отчет</button>
        <button class="secondary" id="summarySubmitted">Сводка сданных</button>
        <button class="secondary" id="storageInfo">Пути хранения</button>
        <button class="secondary" id="exportArchive">Архив отчетов</button>
        <button class="secondary" id="openFolder">Папка с файлами</button>
        <button class="danger" id="deleteReport">Удалить отчет</button>
      </div>
      <div class="toolbar">
        <label>Сводка с
          <input type="date" id="summaryFrom">
        </label>
        <label>по
          <input type="date" id="summaryTo">
        </label>
      </div>
      <div>
        <h2>Вложения</h2>
        <div class="toolbar">
          <input type="file" id="attachmentInput">
          <button class="secondary" id="addAttachment">Добавить вложение</button>
        </div>
        <div class="reports" id="attachments"></div>
      </div>

      <div class="form-grid">
        <label>Email получателя
          <input id="mailTo" placeholder="name@example.com">
        </label>
        <label>Тема письма
          <input id="mailSubject" value="Финансовый отчет">
        </label>
        <label>SMTP сервер
          <input id="smtpHost" placeholder="smtp.gmail.com">
        </label>
        <label>SMTP порт
          <input id="smtpPort" type="number" value="587">
        </label>
        <label>Email отправителя
          <input id="mailFrom" placeholder="your@example.com">
        </label>
        <label>SMTP логин
          <input id="smtpUser" placeholder="обычно ваш email">
        </label>
        <label>SMTP пароль приложения
          <input id="smtpPassword" type="password" placeholder="не сохраняется">
        </label>
        <label class="wide">Текст письма
          <textarea id="mailBody">Здравствуйте. Во вложении финансовый отчет.</textarea>
        </label>
      </div>
      <div class="toolbar">
        <button id="sendEmail">Создать Excel и отправить</button>
      </div>
      <div class="status" id="status"></div>
    </section>
  </main>

  <script>
    let reports = [];
    let selectedId = null;
    const WEB_APP_URL = 'https://brkovic.ltd/captain-fin/';
    const WEB_APP_EXPORT_URL = `${WEB_APP_URL}api/?action=export-json`;

    const $ = (id) => document.getElementById(id);
    const money = (n) => Number(n || 0).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    function today() {
      return new Date().toISOString().slice(0, 10);
    }

    function blankReport() {
      selectedId = null;
      $('reportDate').value = today();
      $('openingBalance').value = '';
      $('notes').value = '';
      $('entries').innerHTML = '';
      addEntry('income');
      updateAll();
      renderList();
    }

    function addEntry(type = 'income', entry = {}) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <select class="type">
            <option value="income">Приход</option>
            <option value="expense">Расход</option>
            <option value="upcoming">Предстоящий расход</option>
          </select>
        </td>
        <td><input class="description" placeholder="Описание" value="${escapeAttr(entry.description || '')}"></td>
        <td><input class="amount" type="number" step="0.01" placeholder="0.00" value="${entry.amount ?? ''}"></td>
        <td><input class="entryDate" type="date" value="${entry.entry_date || ''}"></td>
        <td><button class="danger remove" title="Удалить">X</button></td>
      `;
      tr.querySelector('.type').value = entry.type || type;
      tr.querySelectorAll('input,select').forEach(el => el.addEventListener('input', updateAll));
      tr.querySelector('.remove').addEventListener('click', () => { tr.remove(); updateAll(); });
      $('entries').appendChild(tr);
      updateAll();
    }

    function escapeAttr(s) {
      return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    }

    function parseSignedItems(text) {
      const normalized = String(text || '')
        .replace(/\r/g, '\n')
        .replace(/;/g, '\n');
      const parts = normalized
        .split(/\n|,(?=\s*[+-]\s*\d)/g)
        .map(part => part.trim())
        .filter(Boolean);

      const items = [];
      const skipped = [];
      const re = /^([+-])\s*((?:\d{1,3}(?:[ .]\d{3})+|\d+)(?:[,.]\d+)?)\s*(.*)$/;
      for (const part of parts) {
        const match = part.match(re);
        if (!match) {
          skipped.push(part);
          continue;
        }
        const sign = match[1];
        const rawAmount = match[2].replace(/\s/g, '').replace(/(?<=\d)\.(?=\d{3}(?:\D|$))/g, '').replace(',', '.');
        const amount = Math.abs(Number(rawAmount));
        if (!Number.isFinite(amount) || amount <= 0) {
          skipped.push(part);
          continue;
        }
        items.push({
          type: sign === '+' ? 'income' : 'expense',
          amount,
          description: (match[3] || '').trim(),
          entry_date: $('reportDate').value || today()
        });
      }
      return { items, skipped };
    }

    function importSignedInput() {
      const { items, skipped } = parseSignedItems($('notes').value);
      if (!items.length) {
        setStatus('Не нашел суммы со знаком + или -. Пример: +1500 клиент, -230 топливо');
        return;
      }
      const onlyBlankStarter = [...$('entries').querySelectorAll('tr')].length === 1 && !collectReport().entries.length;
      if (onlyBlankStarter) $('entries').innerHTML = '';
      items.forEach(item => addEntry(item.type, item));
      updateAll();
      const skippedText = skipped.length ? ` Не распознано: ${skipped.join(' | ')}` : '';
      setStatus(`Добавлено строк: ${items.length}.${skippedText}`);
    }

    function collectReport() {
      const entries = [...$('entries').querySelectorAll('tr')].map(tr => ({
        type: tr.querySelector('.type').value,
        description: tr.querySelector('.description').value.trim(),
        amount: Number(tr.querySelector('.amount').value || 0),
        entry_date: tr.querySelector('.entryDate').value
      })).filter(e => e.description || e.amount || e.entry_date);

      return {
        id: selectedId,
        web_id: selectedId ? (reports.find(r => r.id === selectedId)?.web_id || '') : '',
        report_date: $('reportDate').value || today(),
        opening_balance: Number($('openingBalance').value || 0),
        notes: $('notes').value.trim(),
        submitted: selectedId ? Boolean(reports.find(r => r.id === selectedId)?.submitted) : false,
        entries
      };
    }

    function renderAttachments(items = []) {
      $('attachments').innerHTML = items.length ? items.map(item => `
        <div class="report-item">
          <strong>${escapeAttr(item.name)}</strong>
          <span>${Math.ceil(Number(item.size || 0) / 1024)} KB · ${escapeAttr(item.path || '')}</span>
        </div>
      `).join('') : '<div class="report-item"><span>Вложений пока нет.</span></div>';
    }

    function compute(report = collectReport()) {
      const income = report.entries.filter(e => e.type === 'income').reduce((s, e) => s + Number(e.amount || 0), 0);
      const expense = report.entries.filter(e => e.type === 'expense').reduce((s, e) => s + Number(e.amount || 0), 0);
      const upcoming = report.entries.filter(e => e.type === 'upcoming').reduce((s, e) => s + Number(e.amount || 0), 0);
      const current = Number(report.opening_balance || 0) + income - expense;
      return { income, expense, upcoming, current, future: current - upcoming };
    }

    function updateAll() {
      const r = collectReport();
      const c = compute(r);
      $('sumIncome').textContent = money(c.income);
      $('sumExpense').textContent = money(c.expense);
      $('currentBalance').textContent = money(c.current);
      $('sumUpcoming').textContent = money(c.upcoming);
      $('futureBalance').textContent = money(c.future);
      const trend = c.future >= 0 ? 'Будущий остаток остается положительным.' : 'Будущий остаток уходит в минус, стоит пересмотреть предстоящие расходы.';
      $('analysis').textContent =
        `Дата отчета: ${r.report_date}\n` +
        `Остаток на дату: ${money(r.opening_balance)}\n` +
        `Пришло: ${money(c.income)}\n` +
        `Ушло: ${money(c.expense)}\n` +
        `Текущий остаток: ${money(c.current)}\n` +
        `Предстоящие расходы: ${money(c.upcoming)}\n` +
        `Будущий остаток с учетом расходов: ${money(c.future)}\n\n` +
        trend;
    }

    async function api(path, options = {}) {
      const res = await fetch(path, {
        headers: { 'Content-Type': 'application/json' },
        ...options
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || `Ошибка ${res.status}`);
      return data;
    }

    async function loadReports() {
      reports = await api('/api/reports');
      renderList();
    }

    function renderList() {
      const q = $('search').value.toLowerCase().trim();
      const list = reports.filter(r => !q || JSON.stringify(r).toLowerCase().includes(q));
      $('reports').innerHTML = list.map(r => {
        const c = r.computed || {};
        const submitted = Boolean(r.submitted);
        return `<div class="report-item ${r.id === selectedId ? 'active' : ''} ${submitted ? 'submitted' : ''}" data-id="${r.id}">
          <div class="report-head">
            <strong>${r.report_date}</strong>
            <label class="submitted-toggle" title="Отчет сдан">
              <input type="checkbox" data-submitted-id="${r.id}" ${submitted ? 'checked' : ''}>
              Сдал
            </label>
          </div>
          <span>остаток ${money(c.current)} / будущий ${money(c.future)}</span>
          ${submitted ? '<em class="submitted-badge">Сдано</em>' : ''}
        </div>`;
      }).join('');
      [...document.querySelectorAll('.report-item')].forEach(el => {
        el.addEventListener('click', () => selectReport(Number(el.dataset.id)));
      });
      [...document.querySelectorAll('[data-submitted-id]')].forEach(input => {
        input.addEventListener('click', (e) => e.stopPropagation());
        input.addEventListener('change', () => toggleSubmitted(Number(input.dataset.submittedId), input.checked));
      });
    }

    async function selectReport(id) {
      const r = await api(`/api/reports/${id}`);
      selectedId = r.id;
      $('reportDate').value = r.report_date;
      $('openingBalance').value = r.opening_balance;
      $('notes').value = r.notes || '';
      renderAttachments(r.attachments || []);
      $('entries').innerHTML = '';
      r.entries.forEach(e => addEntry(e.type, e));
      if (!r.entries.length) addEntry('income');
      updateAll();
      renderList();
    }

    async function saveReport() {
      const saved = await api('/api/reports', { method: 'POST', body: JSON.stringify(collectReport()) });
      selectedId = saved.id;
      await loadReports();
      await selectReport(selectedId);
      setStatus('Отчет сохранен.');
    }

    async function toggleSubmitted(id, submitted) {
      try {
        const updated = await api(`/api/reports/${id}/submitted`, {
          method: 'POST',
          body: JSON.stringify({ submitted })
        });
        reports = reports.map(r => r.id === id ? updated : r);
        renderList();
        setStatus(submitted ? 'Отчет отмечен как сдан.' : 'Отметка “сдан” снята.');
      } catch (e) {
        setStatus(e.message);
        await loadReports();
      }
    }

    async function exportExcel() {
      if (!selectedId) await saveReport();
      const result = await api('/api/export', { method: 'POST', body: JSON.stringify({ id: selectedId }) });
      setStatus(`Excel создан: ${result.path}`);
    }

    async function exportSummary() {
      const result = await api('/api/export-summary', { method: 'POST', body: '{}' });
      setStatus(`Сводный Excel создан: ${result.path}`);
    }

    async function exportArchive() {
      const result = await api('/api/archive', { method: 'POST', body: '{}' });
      setStatus(`Архив создан: ${result.path}`);
    }

    async function sendEmail() {
      if (!selectedId) await saveReport();
      const payload = {
        id: selectedId,
        to: $('mailTo').value.trim(),
        subject: $('mailSubject').value.trim(),
        body: $('mailBody').value,
        smtp_host: $('smtpHost').value.trim(),
        smtp_port: Number($('smtpPort').value || 587),
        mail_from: $('mailFrom').value.trim(),
        smtp_user: $('smtpUser').value.trim(),
        smtp_password: $('smtpPassword').value
      };
      const result = await api('/api/send', { method: 'POST', body: JSON.stringify(payload) });
      setStatus(`Отправлено. Excel: ${result.path}`);
    }

    async function deleteReport() {
      if (!selectedId) return;
      if (!confirm('Переместить текущий отчет в архив удаленных?')) return;
      if (!confirm('Подтвердите еще раз. Запись исчезнет из списка, но останется в архиве локально.')) return;
      await api(`/api/reports/${selectedId}`, { method: 'DELETE' });
      selectedId = null;
      await loadReports();
      blankReport();
      setStatus('Отчет перемещен в архив удаленных.');
    }

    async function openFolder() {
      const result = await api('/api/open-exports', { method: 'POST', body: '{}' });
      setStatus(result.message);
    }

    async function shareWebApp() {
      if (navigator.share) {
        await navigator.share({ title: 'Captain Fin', url: WEB_APP_URL });
        return;
      }
      await navigator.clipboard.writeText(WEB_APP_URL);
      setStatus('Ссылка на web app скопирована.');
    }

    async function pullWebApp() {
      await pullServer();
    }

    async function pullServer() {
      const result = await api('/api/pull-web-server', { method: 'POST', body: '{}' });
      await loadReports();
      if (result.last_id) await selectReport(result.last_id);
      setStatus(`С сервером синхронизировано: ${result.imported}, пропущено: ${result.skipped}.`);
    }

    async function addAttachment() {
      if (!$('attachmentInput').files.length) return;
      if (!selectedId) await saveReport();
      const data = new FormData();
      data.append('attachment', $('attachmentInput').files[0]);
      const res = await fetch(`/api/reports/${selectedId}/attachments`, { method: 'POST', body: data });
      const payload = await res.json();
      if (!res.ok || payload.error) throw new Error(payload.error || `Ошибка ${res.status}`);
      $('attachmentInput').value = '';
      renderAttachments(payload.attachments || []);
      setStatus('Вложение добавлено.');
    }

    async function summarySubmitted() {
      const params = new URLSearchParams();
      if ($('summaryFrom').value) params.set('from', $('summaryFrom').value);
      if ($('summaryTo').value) params.set('to', $('summaryTo').value);
      const result = await api(`/api/summary-submitted?${params.toString()}`, { method: 'GET' });
      const t = result.totals;
      setStatus(`Сдано: ${t.count}. Приход ${money(t.income)}, расход ${money(t.expense)}, стало ${money(t.current)}, будет ${money(t.future)}.`);
    }

    async function storageInfo() {
      const info = await api('/api/storage-info');
      alert(`Локальные пути:\n\nБаза: ${info.database}\nВложения: ${info.attachments}\nУдаленные: ${info.deleted}\nExcel: ${info.exports}\n\nСервер:\n${info.web_reports}\n${info.web_attachments}\n\nGoogle Drive:\n${info.drive_url}`);
    }

    function setStatus(text) {
      $('status').textContent = text;
      setTimeout(() => { if ($('status').textContent === text) $('status').textContent = ''; }, 7000);
    }

    document.addEventListener('input', (e) => {
      if (['reportDate', 'openingBalance', 'notes'].includes(e.target.id)) updateAll();
    });
    document.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', () => addEntry(btn.dataset.add)));
    $('newReport').addEventListener('click', blankReport);
    $('saveReport').addEventListener('click', () => saveReport().catch(e => setStatus(e.message)));
    $('importSigned').addEventListener('click', importSignedInput);
    $('exportExcel').addEventListener('click', () => exportExcel().catch(e => setStatus(e.message)));
    $('exportSummary').addEventListener('click', () => exportSummary().catch(e => setStatus(e.message)));
    $('exportArchive').addEventListener('click', () => exportArchive().catch(e => setStatus(e.message)));
    $('sendEmail').addEventListener('click', () => sendEmail().catch(e => setStatus(e.message)));
    $('deleteReport').addEventListener('click', () => deleteReport().catch(e => setStatus(e.message)));
    $('openFolder').addEventListener('click', () => openFolder().catch(e => setStatus(e.message)));
    $('shareWebApp').addEventListener('click', () => shareWebApp().catch(e => setStatus(e.message)));
    $('pullWebApp').addEventListener('click', () => pullWebApp().catch(e => setStatus(e.message)));
    $('pullServer').addEventListener('click', () => pullServer().catch(e => setStatus(e.message)));
    $('addAttachment').addEventListener('click', () => addAttachment().catch(e => setStatus(e.message)));
    $('summarySubmitted').addEventListener('click', () => summarySubmitted().catch(e => setStatus(e.message)));
    $('storageInfo').addEventListener('click', () => storageInfo().catch(e => setStatus(e.message)));
    $('search').addEventListener('input', renderList);

    blankReport();
    loadReports().catch(e => setStatus(e.message));
  </script>
</body>
</html>
"""


def connect_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    EXPORT_DIR.mkdir(exist_ok=True)
    ATTACHMENTS_DIR.mkdir(exist_ok=True)
    DELETED_DIR.mkdir(exist_ok=True)
    with connect_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS reports (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                web_id TEXT NOT NULL DEFAULT '',
                report_date TEXT NOT NULL,
                opening_balance REAL NOT NULL DEFAULT 0,
                notes TEXT NOT NULL DEFAULT '',
                submitted INTEGER NOT NULL DEFAULT 0,
                deleted_at TEXT NOT NULL DEFAULT '',
                created_at TEXT NOT NULL
            )
            """
        )
        columns = {row["name"] for row in conn.execute("PRAGMA table_info(reports)").fetchall()}
        if "submitted" not in columns:
            conn.execute("ALTER TABLE reports ADD COLUMN submitted INTEGER NOT NULL DEFAULT 0")
        if "web_id" not in columns:
            conn.execute("ALTER TABLE reports ADD COLUMN web_id TEXT NOT NULL DEFAULT ''")
        if "deleted_at" not in columns:
            conn.execute("ALTER TABLE reports ADD COLUMN deleted_at TEXT NOT NULL DEFAULT ''")
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS entries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                report_id INTEGER NOT NULL,
                type TEXT NOT NULL,
                description TEXT NOT NULL DEFAULT '',
                amount REAL NOT NULL DEFAULT 0,
                entry_date TEXT NOT NULL DEFAULT '',
                FOREIGN KEY(report_id) REFERENCES reports(id) ON DELETE CASCADE
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS attachments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                report_id INTEGER NOT NULL,
                name TEXT NOT NULL,
                path TEXT NOT NULL,
                size INTEGER NOT NULL DEFAULT 0,
                created_at TEXT NOT NULL,
                FOREIGN KEY(report_id) REFERENCES reports(id) ON DELETE CASCADE
            )
            """
        )


def compute(entries, opening_balance):
    income = sum(float(e["amount"] or 0) for e in entries if e["type"] == "income")
    expense = sum(float(e["amount"] or 0) for e in entries if e["type"] == "expense")
    upcoming = sum(float(e["amount"] or 0) for e in entries if e["type"] == "upcoming")
    current = float(opening_balance or 0) + income - expense
    return {
        "income": income,
        "expense": expense,
        "upcoming": upcoming,
        "current": current,
        "future": current - upcoming,
    }


def get_report(report_id):
    with connect_db() as conn:
        report = conn.execute("SELECT * FROM reports WHERE id = ? AND deleted_at = ''", (report_id,)).fetchone()
        if not report:
            return None
        entries = conn.execute(
            "SELECT type, description, amount, entry_date FROM entries WHERE report_id = ? ORDER BY id",
            (report_id,),
        ).fetchall()
        attachments = conn.execute(
            "SELECT name, path, size, created_at FROM attachments WHERE report_id = ? ORDER BY id",
            (report_id,),
        ).fetchall()
    data = dict(report)
    data["entries"] = [dict(row) for row in entries]
    data["attachments"] = [dict(row) for row in attachments]
    data["computed"] = compute(data["entries"], data["opening_balance"])
    return data


def list_reports():
    with connect_db() as conn:
        rows = conn.execute("SELECT * FROM reports WHERE deleted_at = '' ORDER BY report_date DESC, id DESC").fetchall()
    return [get_report(row["id"]) for row in rows]


def save_report(payload):
    raw_id = payload.get("id")
    report_id = raw_id if isinstance(raw_id, int) or (isinstance(raw_id, str) and raw_id.isdigit()) else None
    web_id = payload.get("web_id") or (raw_id if isinstance(raw_id, str) and not raw_id.isdigit() else "")
    report_date = payload.get("report_date") or dt.date.today().isoformat()
    opening_balance = float(payload.get("opening_balance") or 0)
    notes = payload.get("notes") or ""
    submitted = 1 if payload.get("submitted") else 0
    entries = payload.get("entries") or []
    now = dt.datetime.now().isoformat(timespec="seconds")

    with connect_db() as conn:
        if not report_id and web_id:
            existing = conn.execute("SELECT id FROM reports WHERE web_id = ? LIMIT 1", (web_id,)).fetchone()
            report_id = existing["id"] if existing else None
        if report_id:
            conn.execute(
                "UPDATE reports SET web_id = COALESCE(NULLIF(?, ''), web_id), report_date = ?, opening_balance = ?, notes = ?, submitted = ?, deleted_at = '' WHERE id = ?",
                (web_id, report_date, opening_balance, notes, submitted, report_id),
            )
            conn.execute("DELETE FROM entries WHERE report_id = ?", (report_id,))
        else:
            cur = conn.execute(
                "INSERT INTO reports (web_id, report_date, opening_balance, notes, submitted, created_at) VALUES (?, ?, ?, ?, ?, ?)",
                (web_id, report_date, opening_balance, notes, submitted, now),
            )
            report_id = cur.lastrowid

        for entry in entries:
            entry_type = entry.get("type") if entry.get("type") in {"income", "expense", "upcoming"} else "expense"
            conn.execute(
                """
                INSERT INTO entries (report_id, type, description, amount, entry_date)
                VALUES (?, ?, ?, ?, ?)
                """,
                (
                    report_id,
                    entry_type,
                    entry.get("description") or "",
                    float(entry.get("amount") or 0),
                    entry.get("entry_date") or "",
                ),
            )
    return get_report(report_id)


def import_web_reports(payload):
    imported = 0
    skipped = 0
    last_id = None
    incoming = payload.get("reports") if isinstance(payload, dict) else None
    if not isinstance(incoming, list):
        raise ValueError("Некорректный пакет web app")

    with connect_db() as conn:
        for report in incoming:
            if not isinstance(report, dict):
                skipped += 1
                continue
            report_date = report.get("report_date") or dt.date.today().isoformat()
            notes = report.get("notes") or ""
            web_id = report.get("id") if isinstance(report.get("id"), str) else report.get("web_id", "")
            existing = conn.execute("SELECT id FROM reports WHERE web_id = ? LIMIT 1", (web_id,)).fetchone() if web_id else None
            if not existing:
                existing = conn.execute(
                    "SELECT id FROM reports WHERE report_date = ? AND notes = ? ORDER BY id DESC LIMIT 1",
                    (report_date, notes),
                ).fetchone()
            clean = dict(report)
            clean["web_id"] = web_id
            clean["id"] = existing["id"] if existing else None
            saved = save_report(clean)
            if saved:
                imported += 1
                last_id = saved["id"]
            else:
                skipped += 1

    return {"imported": imported, "skipped": skipped, "last_id": last_id}


def set_report_submitted(report_id, submitted):
    with connect_db() as conn:
        cur = conn.execute(
            "UPDATE reports SET submitted = ? WHERE id = ?",
            (1 if submitted else 0, report_id),
        )
        if cur.rowcount == 0:
            return None
    return get_report(report_id)


def delete_report(report_id):
    with connect_db() as conn:
        report = conn.execute("SELECT * FROM reports WHERE id = ?", (report_id,)).fetchone()
        if not report:
            return
        archive_path = DELETED_DIR / f"{dt.datetime.now().strftime('%Y%m%d-%H%M%S')}-{report_id}.json"
        data = get_report(report_id) or dict(report)
        archive_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        conn.execute(
            "UPDATE reports SET deleted_at = ? WHERE id = ?",
            (dt.datetime.now().isoformat(timespec="seconds"), report_id),
        )


def report_attachment_dir(report_id):
    path = ATTACHMENTS_DIR / str(report_id)
    path.mkdir(parents=True, exist_ok=True)
    return path


def add_attachment(report_id, filename, data):
    report = get_report(report_id)
    if not report:
        raise ValueError("Отчет не найден")
    safe = "".join(ch if ch.isalnum() or ch in "._- " else "_" for ch in Path(filename).name).strip() or "attachment"
    target = report_attachment_dir(report_id) / safe
    if target.exists():
        target = report_attachment_dir(report_id) / f"{target.stem}-{dt.datetime.now().strftime('%H%M%S')}{target.suffix}"
    target.write_bytes(data)
    with connect_db() as conn:
        conn.execute(
            "INSERT INTO attachments (report_id, name, path, size, created_at) VALUES (?, ?, ?, ?, ?)",
            (report_id, target.name, str(target), target.stat().st_size, dt.datetime.now().isoformat(timespec="seconds")),
        )
    return get_report(report_id)["attachments"]


def summary_submitted(date_from=None, date_to=None):
    reports = [r for r in list_reports() if r.get("submitted")]
    if date_from:
        reports = [r for r in reports if r["report_date"] >= date_from]
    if date_to:
        reports = [r for r in reports if r["report_date"] <= date_to]
    totals = {
        "count": len(reports),
        "opening": sum(float(r["opening_balance"] or 0) for r in reports),
        "income": sum(r["computed"]["income"] for r in reports),
        "expense": sum(r["computed"]["expense"] for r in reports),
        "upcoming": sum(r["computed"]["upcoming"] for r in reports),
        "current": sum(r["computed"]["current"] for r in reports),
        "future": sum(r["computed"]["future"] for r in reports),
    }
    return {"totals": totals, "reports": reports}


def ftp_password():
    lines = [line.strip().strip("*` ") for line in SECRET_FILE.read_text(encoding="utf-8", errors="ignore").splitlines()]
    for index, line in enumerate(lines):
        if line == "brkovic" and index + 1 < len(lines):
            return lines[index + 1].replace("\\!", "!")
    raise ValueError("FTP пароль brkovic не найден")


def ftp_list_names(ftp, root):
    try:
        return [Path(name).name for name in ftp.nlst(root) if Path(name).name not in {".", ".."}]
    except error_perm:
        return []


def ftp_download(ftp, remote):
    chunks = []
    ftp.retrbinary("RETR " + remote, chunks.append)
    return b"".join(chunks)


def pull_web_server():
    imported = skipped = 0
    last_id = None
    ftp = FTP("brkovic.ltd", timeout=45)
    ftp.login("brkovic", ftp_password())
    try:
        for year in ftp_list_names(ftp, f"{WEB_STORAGE_REMOTE}/reports"):
            if not year.isdigit():
                continue
            for name in ftp_list_names(ftp, f"{WEB_STORAGE_REMOTE}/reports/{year}"):
                if not name.endswith(".json"):
                    continue
                try:
                    raw = ftp_download(ftp, f"{WEB_STORAGE_REMOTE}/reports/{year}/{name}")
                    report = json.loads(raw.decode("utf-8"))
                    web_id = report.get("id")
                    if not web_id:
                        skipped += 1
                        continue
                    clean = dict(report)
                    clean["web_id"] = web_id
                    clean["id"] = web_id
                    saved = save_report(clean)
                    last_id = saved["id"]
                    imported += 1
                    remote_attachment_root = f"{WEB_STORAGE_REMOTE}/attachments/{year}/{web_id}"
                    for attachment in ftp_list_names(ftp, remote_attachment_root):
                        with connect_db() as conn:
                            exists = conn.execute(
                                "SELECT id FROM attachments WHERE report_id = ? AND name = ?",
                                (last_id, attachment),
                            ).fetchone()
                        if exists:
                            continue
                        data = ftp_download(ftp, f"{remote_attachment_root}/{attachment}")
                        add_attachment(last_id, attachment, data)
                except Exception:
                    skipped += 1
    finally:
        ftp.quit()
    return {"imported": imported, "skipped": skipped, "last_id": last_id}


def xlsx_col(index):
    name = ""
    while index:
        index, rem = divmod(index - 1, 26)
        name = chr(65 + rem) + name
    return name


def xml_escape(value):
    return html.escape("" if value is None else str(value), quote=True)


def cell_xml(row_index, col_index, value, style=0):
    ref = f"{xlsx_col(col_index)}{row_index}"
    style_attr = f' s="{style}"' if style else ""
    if isinstance(value, (int, float)):
        return f'<c r="{ref}"{style_attr}><v>{value}</v></c>'
    return f'<c r="{ref}" t="inlineStr"{style_attr}><is><t>{xml_escape(value)}</t></is></c>'


def sheet_xml(rows, cols_xml="", merge_xml="", freeze_at=None):
    body = []
    for r_idx, row in enumerate(rows, start=1):
        cells = []
        for c_idx, value in enumerate(row, start=1):
            if isinstance(value, dict):
                cells.append(cell_xml(r_idx, c_idx, value.get("v", ""), value.get("s", 0)))
            else:
                cells.append(cell_xml(r_idx, c_idx, value))
        body.append(f'<row r="{r_idx}">{"".join(cells)}</row>')
    sheet_views = '<sheetViews><sheetView workbookViewId="0"/></sheetViews>'
    if freeze_at:
        sheet_views = (
            '<sheetViews><sheetView workbookViewId="0">'
            f'<pane ySplit="{freeze_at - 1}" topLeftCell="A{freeze_at}" activePane="bottomLeft" state="frozen"/>'
            '<selection pane="bottomLeft"/>'
            '</sheetView></sheetViews>'
        )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
        '<sheetPr><outlinePr summaryRight="1"/></sheetPr>'
        + sheet_views
        + '<sheetFormatPr defaultRowHeight="18"/>'
        + cols_xml
        + '<sheetData>'
        + "".join(body)
        + "</sheetData>"
        + merge_xml
        + "</worksheet>"
    )


def styles_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="2">
    <numFmt numFmtId="164" formatCode="#,##0.00"/>
    <numFmt numFmtId="165" formatCode="yyyy-mm-dd"/>
  </numFmts>
  <fonts count="8">
    <font><sz val="11"/><color rgb="FF18201B"/><name val="Calibri"/></font>
    <font><b/><sz val="18"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FF18201B"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FF0B6B45"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FFB42318"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FF174EA6"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FF8A5A00"/><name val="Calibri"/></font>
    <font><sz val="10"/><color rgb="FF657065"/><name val="Calibri"/></font>
  </fonts>
  <fills count="11">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF12383E"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE7F5ED"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFCE8E6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF2CC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE8F0FE"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF1F5F3"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFFFFF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFDDF3E7"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEAF4F4"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFD9DED7"/></left><right style="thin"><color rgb="FFD9DED7"/></right><top style="thin"><color rgb="FFD9DED7"/></top><bottom style="thin"><color rgb="FFD9DED7"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="14">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="164" fontId="0" fillId="8" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="164" fontId="3" fillId="3" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="164" fontId="4" fillId="4" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="164" fontId="6" fillId="5" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="164" fontId="5" fillId="6" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="0" fontId="2" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment horizontal="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="8" borderId="1" xfId="0" applyBorder="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="7" fillId="10" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="0" fillId="8" borderId="1" xfId="0" applyBorder="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>"""


def workbook_files(sheets):
    content_overrides = "".join(
        f'<Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for idx, _ in enumerate(sheets, start=1)
    )
    sheet_nodes = "".join(
        f'<sheet name="{xml_escape(name)}" sheetId="{idx}" r:id="rId{idx}"/>'
        for idx, (name, _) in enumerate(sheets, start=1)
    )
    rel_nodes = "".join(
        f'<Relationship Id="rId{idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>'
        for idx, _ in enumerate(sheets, start=1)
    )
    rel_nodes += (
        f'<Relationship Id="rId{len(sheets) + 1}" '
        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
    )
    files = {
        "[Content_Types].xml": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
            '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
            '<Default Extension="xml" ContentType="application/xml"/>'
            '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
            '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
            + content_overrides
            + '</Types>'
        ),
        "_rels/.rels": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
            '</Relationships>'
        ),
        "xl/workbook.xml": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
            'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
            '<sheets>' + sheet_nodes + '</sheets></workbook>'
        ),
        "xl/_rels/workbook.xml.rels": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            + rel_nodes
            + '</Relationships>'
        ),
        "xl/styles.xml": styles_xml(),
    }
    for idx, (_, xml) in enumerate(sheets, start=1):
        files[f"xl/worksheets/sheet{idx}.xml"] = xml
    return files


def write_xlsx(path, sheets):
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as xlsx:
        for name, content in workbook_files(sheets).items():
            xlsx.writestr(name, content)


def signed_style(value, positive_style=4, negative_style=5, neutral_style=3):
    if value > 0:
        return positive_style
    if value < 0:
        return negative_style
    return neutral_style


def report_sheet(report):
    c = report["computed"]
    future_style = signed_style(c["future"], 4, 5)
    current_style = signed_style(c["current"], 7, 5, 7)
    notes = report.get("notes", "")
    rows = [
        [{"v": "Yacht Owner Financial Report", "s": 1}, "", "", "", "", "", "", {"v": "Заметки", "s": 10}],
        [{"v": "Дата создания", "s": 2}, {"v": report["report_date"], "s": 11}, "", "", "", "", "", {"v": notes, "s": 10}],
        [{"v": "Остаток на дату", "s": 2}, {"v": float(report["opening_balance"]), "s": 4}],
        [{"v": "Пришло", "s": 12}, {"v": c["income"], "s": 4}],
        [{"v": "Ушло", "s": 13}, {"v": -c["expense"], "s": 5}],
        [{"v": "Остаток", "s": 2}, {"v": c["current"], "s": current_style}],
        [{"v": "Предстоящие расходы", "s": 2}, {"v": -c["upcoming"], "s": 6}],
        [{"v": "Будущий остаток", "s": 2}, {"v": c["future"], "s": future_style}],
        [],
        [{"v": "Статья", "s": 8}, {"v": "Описание", "s": 8}, {"v": "Сумма", "s": 8}, {"v": "Дата", "s": 8}],
    ]
    names = {"income": "Приход", "expense": "Расход", "upcoming": "Предстоящий расход"}
    for entry in report["entries"]:
        amount = float(entry["amount"] or 0)
        if entry["type"] in {"expense", "upcoming"}:
            amount = -amount
        amount_style = {"income": 4, "expense": 5, "upcoming": 6}.get(entry["type"], 3)
        rows.append([
            {"v": names.get(entry["type"], entry["type"]), "s": 9},
            {"v": entry["description"], "s": 9},
            {"v": amount, "s": amount_style},
            {"v": entry["entry_date"], "s": 11},
        ])

    cols = (
        '<cols>'
        '<col min="1" max="1" width="24" customWidth="1"/>'
        '<col min="2" max="2" width="52" customWidth="1"/>'
        '<col min="3" max="3" width="16" customWidth="1"/>'
        '<col min="4" max="4" width="16" customWidth="1"/>'
        '<col min="5" max="7" width="4" customWidth="1"/>'
        '<col min="8" max="8" width="42" customWidth="1" hidden="1" outlineLevel="1" collapsed="1"/>'
        '</cols>'
    )
    merge = '<mergeCells count="1"><mergeCell ref="A1:G1"/></mergeCells>'
    return sheet_xml(rows, cols_xml=cols, merge_xml=merge, freeze_at=10)


def create_xlsx(report):
    report_date = report["report_date"]
    safe_date = report_date.replace("/", "-")
    path = EXPORT_DIR / f"report-{safe_date}-{report['id']}.xlsx"
    write_xlsx(path, [("Отчет", report_sheet(report))])
    return path


def create_summary_xlsx():
    reports = list_reports()
    path = EXPORT_DIR / f"summary-{dt.datetime.now().strftime('%Y%m%d-%H%M%S')}.xlsx"
    totals = {
        "opening": sum(float(r["opening_balance"] or 0) for r in reports),
        "income": sum(r["computed"]["income"] for r in reports),
        "expense": sum(r["computed"]["expense"] for r in reports),
        "upcoming": sum(r["computed"]["upcoming"] for r in reports),
    }
    totals["current"] = sum(r["computed"]["current"] for r in reports)
    totals["future"] = sum(r["computed"]["future"] for r in reports)
    rows = [
        [{"v": "Yacht Owner Summary Report", "s": 1}, "", "", "", "", "", "", {"v": "Заметки", "s": 10}],
        [{"v": "Отчетов в архиве", "s": 2}, {"v": len(reports), "s": 3}],
        [{"v": "Суммарно пришло", "s": 12}, {"v": totals["income"], "s": 4}],
        [{"v": "Суммарно ушло", "s": 13}, {"v": -totals["expense"], "s": 5}],
        [{"v": "Текущий остаток", "s": 2}, {"v": totals["current"], "s": signed_style(totals["current"], 7, 5, 7)}],
        [{"v": "Предстоящие расходы", "s": 2}, {"v": -totals["upcoming"], "s": 6}],
        [{"v": "Будущий остаток", "s": 2}, {"v": totals["future"], "s": signed_style(totals["future"], 4, 5)}],
        [],
        [{"v": "Дата", "s": 8}, {"v": "Остаток на дату", "s": 8}, {"v": "Пришло", "s": 8}, {"v": "Ушло", "s": 8}, {"v": "Остаток", "s": 8}, {"v": "Предстоящие", "s": 8}, {"v": "Будущий остаток", "s": 8}, {"v": "Заметки", "s": 10}],
    ]
    for report in reports:
        c = report["computed"]
        rows.append([
            {"v": report["report_date"], "s": 11},
            {"v": float(report["opening_balance"] or 0), "s": 3},
            {"v": c["income"], "s": 4},
            {"v": -c["expense"], "s": 5},
            {"v": c["current"], "s": signed_style(c["current"], 7, 5, 7)},
            {"v": -c["upcoming"], "s": 6},
            {"v": c["future"], "s": signed_style(c["future"], 4, 5)},
            {"v": report.get("notes", ""), "s": 10},
        ])
    cols = (
        '<cols>'
        '<col min="1" max="1" width="16" customWidth="1"/>'
        '<col min="2" max="7" width="17" customWidth="1"/>'
        '<col min="8" max="8" width="46" customWidth="1" hidden="1" outlineLevel="1" collapsed="1"/>'
        '</cols>'
    )
    merge = '<mergeCells count="1"><mergeCell ref="A1:G1"/></mergeCells>'
    write_xlsx(path, [("Сводка", sheet_xml(rows, cols_xml=cols, merge_xml=merge, freeze_at=9))])
    return path


def create_archive_zip():
    reports = list_reports()
    stamp = dt.datetime.now().strftime("%Y%m%d-%H%M%S")
    archive_path = EXPORT_DIR / f"reports-archive-{stamp}.zip"
    summary = create_summary_xlsx()
    report_paths = [create_xlsx(report) for report in reports]
    with zipfile.ZipFile(archive_path, "w", zipfile.ZIP_DEFLATED) as archive:
        archive.write(summary, f"summary/{summary.name}")
        for path in report_paths:
            archive.write(path, f"reports/{path.name}")
    return archive_path


def send_email(payload, attachment):
    required = ["to", "smtp_host", "smtp_port", "mail_from", "smtp_user", "smtp_password"]
    missing = [key for key in required if not payload.get(key)]
    if missing:
        raise ValueError("Не заполнены поля для отправки: " + ", ".join(missing))

    msg = EmailMessage()
    msg["From"] = payload["mail_from"]
    msg["To"] = payload["to"]
    msg["Subject"] = payload.get("subject") or "Финансовый отчет"
    msg.set_content(payload.get("body") or "Во вложении финансовый отчет.")
    msg.add_attachment(
        attachment.read_bytes(),
        maintype="application",
        subtype="vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        filename=attachment.name,
    )

    with smtplib.SMTP(payload["smtp_host"], int(payload["smtp_port"]), timeout=25) as smtp:
        smtp.starttls()
        smtp.login(payload["smtp_user"], payload["smtp_password"])
        smtp.send_message(msg)


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        return

    def read_json(self):
        length = int(self.headers.get("Content-Length") or 0)
        if not length:
            return {}
        return json.loads(self.rfile.read(length).decode("utf-8"))

    def read_multipart_file(self, field_name="attachment"):
        length = int(self.headers.get("Content-Length") or 0)
        content_type = self.headers.get("Content-Type", "")
        marker = "boundary="
        if marker not in content_type:
            raise ValueError("Некорректная загрузка файла")
        boundary = ("--" + content_type.split(marker, 1)[1].strip().strip('"')).encode()
        body = self.rfile.read(length)
        for part in body.split(boundary):
            if b'name="' + field_name.encode() + b'"' not in part:
                continue
            header, _, data = part.partition(b"\r\n\r\n")
            if not data:
                continue
            data = data.rsplit(b"\r\n", 1)[0]
            filename = "attachment"
            header_text = header.decode("utf-8", errors="ignore")
            match = __import__("re").search(r'filename="([^"]+)"', header_text)
            if match:
                filename = match.group(1) or filename
            return filename, data
        raise ValueError("Файл не найден в запросе")

    def respond(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def respond_html(self):
        body = HTML_PAGE.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_error(self, exc):
        self.respond({"error": str(exc)}, status=400)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        try:
            if path == "/":
                self.respond_html()
            elif path == "/api/reports":
                self.respond(list_reports())
            elif path.startswith("/api/reports/"):
                report_id = int(path.rsplit("/", 1)[-1])
                report = get_report(report_id)
                if not report:
                    self.respond({"error": "Отчет не найден"}, status=404)
                else:
                    self.respond(report)
            elif path == "/api/summary-submitted":
                qs = parse_qs(parsed.query)
                self.respond(summary_submitted((qs.get("from") or [""])[0], (qs.get("to") or [""])[0]))
            elif path == "/api/storage-info":
                self.respond({
                    "database": str(DB_PATH),
                    "attachments": str(ATTACHMENTS_DIR),
                    "deleted": str(DELETED_DIR),
                    "exports": str(EXPORT_DIR),
                    "web_reports": "/home/brkovic/public_html/captain-fin/storage/reports/YYYY/*.json",
                    "web_attachments": "/home/brkovic/public_html/captain-fin/storage/attachments/YYYY/report-id/*",
                    "drive_url": f"https://drive.google.com/drive/folders/{DRIVE_FOLDER_ID}",
                })
            else:
                self.respond({"error": "Не найдено"}, status=404)
        except Exception as exc:
            self.handle_error(exc)

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        try:
            payload = {} if self.headers.get("Content-Type", "").startswith("multipart/form-data") else self.read_json()
            if path == "/api/reports":
                self.respond(save_report(payload))
            elif path.startswith("/api/reports/") and path.endswith("/attachments"):
                report_id = int(path.split("/")[3])
                filename, data = self.read_multipart_file()
                self.respond({"attachments": add_attachment(report_id, filename, data)})
            elif path.startswith("/api/reports/") and path.endswith("/submitted"):
                report_id = int(path.split("/")[3])
                report = set_report_submitted(report_id, bool(payload.get("submitted")))
                if not report:
                    self.respond({"error": "Отчет не найден"}, status=404)
                else:
                    self.respond(report)
            elif path == "/api/export":
                report = get_report(int(payload["id"]))
                if not report:
                    raise ValueError("Отчет не найден")
                out = create_xlsx(report)
                self.respond({"path": str(out)})
            elif path == "/api/export-summary":
                out = create_summary_xlsx()
                self.respond({"path": str(out)})
            elif path == "/api/archive":
                out = create_archive_zip()
                self.respond({"path": str(out)})
            elif path == "/api/send":
                report = get_report(int(payload["id"]))
                if not report:
                    raise ValueError("Отчет не найден")
                out = create_xlsx(report)
                send_email(payload, out)
                self.respond({"path": str(out), "sent": True})
            elif path == "/api/open-exports":
                EXPORT_DIR.mkdir(exist_ok=True)
                subprocess.Popen(["xdg-open", str(EXPORT_DIR)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                self.respond({"message": f"Открыта папка: {EXPORT_DIR}"})
            elif path == "/api/import-web":
                self.respond(import_web_reports(payload))
            elif path == "/api/pull-web-server":
                self.respond(pull_web_server())
            else:
                self.respond({"error": "Не найдено"}, status=404)
        except Exception as exc:
            self.handle_error(exc)

    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path
        try:
            if path.startswith("/api/reports/"):
                delete_report(int(path.rsplit("/", 1)[-1]))
                self.respond({"deleted": True})
            else:
                self.respond({"error": "Не найдено"}, status=404)
        except Exception as exc:
            self.handle_error(exc)


def find_port(start):
    for port in range(start, start + 100):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            try:
                sock.bind(("127.0.0.1", port))
                return port
            except OSError:
                continue
    raise RuntimeError("Не удалось найти свободный локальный порт")


def open_browser(url):
    chrome = shutil.which("google-chrome") or shutil.which("chromium")
    if chrome:
        subprocess.Popen([chrome, f"--app={url}"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    else:
        webbrowser.open(url)


def main():
    parser = argparse.ArgumentParser(description="Локальный клиент финансовых отчетов")
    parser.add_argument("--port", type=int, default=8787)
    parser.add_argument("--no-browser", action="store_true")
    args = parser.parse_args()

    init_db()
    port = find_port(args.port)
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    url = f"http://127.0.0.1:{port}/"
    print(f"Локальные отчеты запущены: {url}")
    print(f"База данных: {DB_PATH}")
    print(f"Excel-файлы: {EXPORT_DIR}")
    if not args.no_browser:
        threading.Timer(0.4, open_browser, args=(url,)).start()
    server.serve_forever()


if __name__ == "__main__":
    main()
