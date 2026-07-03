# 07 — MVP Scope and Acceptance

## MVP name

FinDesk v2.0 Clean Core MVP

## What MVP is

A fixed-screen notes-style financial journal with Cash/Card flows, strict line parsing, current-month feed, auto category suggestions, manual correction, and generated monthly summary.

## What MVP is not

- Not full accounting.
- Not a dashboard-first product.
- Not a spreadsheet clone.
- Not a yacht-only app.
- Not an AI black box.
- Not a continuation of old FinDesk business logic.

## MVP must include

### 1. Workspace shell

- Create/open workspace.
- Workspace type: yacht, family, personal, business, trip, custom.
- Default workspace can be created for testing.

### 2. Main journal screen

- Fixed-screen app layout.
- Current month feed visible.
- No page scroll.
- Scroll only inside feed/details.
- Input bar always accessible.
- Cash/Card active flow switch.

### 3. Entry input

- User writes one-line records.
- Records require `+` or `-`.
- Invalid records stay visible but do not count.
- Default date is today, editable.
- Records can be inserted between existing records.
- Cash balances recalculate after insertion.

### 4. Cash flow

- Cash opening balance.
- Cash income.
- Cash expenses.
- Cash balance after each counted cash record.

### 5. Card flow

- Card expenses by default.
- No card bank-balance reconciliation required.
- Card expense appears in reports as separate funding flow.

### 6. Cash/Card top-up

Support this pair:

```text
Card: -1000 снял с карты
Cash: +1000 снял с карты
```

Both records must remain visible and counted in their flows.

### 7. Categories

- Fixed MVP category list.
- Auto category suggestion using rules.
- Other expenses fallback.
- Manual category reassignment.
- Optional rule learning after confirmation.

### 8. Attachments

- Entry can have attachments.
- MVP can start with file upload placeholder if storage is not ready.
- Future: compressed grayscale scan mode.

### 9. Monthly summary

Generated from entries.

Must show:

- opening cash;
- cash income;
- cash expense;
- card expense;
- cash top-up from card;
- other expenses;
- cash ending balance;
- comments.

### 10. Import one legacy Excel file

First importer target:

- read one old-format file;
- map cash/card columns;
- create normalized entries;
- compare totals with source summary;
- mark unrecognized rows.

## Acceptance criteria

### Entry parsing

Given:

```text
-250 рыба
```

System creates a cash expense if Cash flow is active.

Given:

```text
250 рыба
```

System creates an unrecognized visible row that does not affect calculations.

### Cash balance

Given opening cash 1000 and records:

```text
+500 пополнение
-250 рыба
```

Cash now must be 1250.

### Card expense

Given Card flow and record:

```text
-60 Netflix
```

Card expense total must increase by 60.

### Card to Cash

Given:

```text
Card: -1000 снял с карты
Cash: +1000 снял с карты
```

Card expense must show 1000.
Cash income must show 1000.
Cash balance must increase by 1000.
The system must not treat this as an error.

### Category fallback

If the engine cannot classify safely, entry must be `other` and visible in Other expenses review queue.

### Layout

On desktop/tablet/phone, user must always have access to:

- workspace;
- month;
- active flow;
- feed;
- input;
- cash now.

### Closed month

Editing a closed month must ask whether to create correction, recalculate chain, or cancel.

## Out of MVP

- Full multi-year archive import.
- Forecast engine.
- Advanced charts.
- PDF export.
- Assistant acceptance workflow.
- Full file scanning/OCR.
- Bank integration.
- Multi-currency accounting.

These are future phases after the clean core works.
