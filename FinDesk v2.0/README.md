# FinDesk v2.0 — Clean Core MVP

FinDesk v2.0 is a clean MVP package for a lightweight financial journal product.

This is not a continuation of the old FinDesk business logic. The old project may be used only as an infrastructure donor: database connection, backend shell, auth, admin shell, deployment setup, file upload, and user/role scaffolding if usable.

**Critical legacy rule:** old FinDesk documentation, logic, tables, entities, categories, reports, dashboards, disciplines, and calculations are not truth for FinDesk v2.0. Read `23-legacy-isolation-rule.md` before using anything from old FinDesk.

The financial core must be rebuilt around two base tables/logics:

1. **Operational table / live journal** — the user writes current financial notes in sequence.
2. **Summary table / grouped report** — the system generates monthly/yearly summaries, categories, charts, forecast, and control checks from the journal.

The source of truth is always the operational journal. The summary table is generated, not manually maintained.

## Product principle

One screen = one logic.

The main product is not a dashboard and not accounting software. It is a notes-style financial feed, close to the iOS Notes feeling: the user writes financial notes, sees the current month’s live feed, and the system converts records into structured data and reports.

The user must never feel that they are writing into an empty form. The current month’s feed must remain visible while entering new records.

## Core model

- Workspace = project or space, for example Yacht, Family, Personal, Business, Custom.
- Flow = funding source, for example Cash or Card.
- Entry = one operational financial record.
- Category = operational meaning of the entry, for example crew, fuel, marina, service.
- Actor = person or party involved, not a category.
- Reports = generated views from entries.
- Import source = Excel, Google Sheet, legacy database, Google Drive file, or manual input.

Cash/Card are funding flows, not categories.

Category answers: **what was the money for?**
Flow answers: **where did the money move from/to?**

## Cash/Card rule

Cash and Card are independent funding flows.

If money is withdrawn from card and put into cash, this is represented by two normal records:

```text
Card: -1000 снял с карты
Cash: +1000 снял с карты
```

This is not an error and not a hidden transfer. In the card flow it is card expense. In the cash flow it is cash income. The summary must show this as movement between funding flows while preserving both flow ledgers.

## Folder contents

```text
FinDesk v2.0/
├── README.md
├── 01-product-logic.md
├── 02-data-model.md
├── 03-parsing-and-rules-engine.md
├── 04-responsive-layout-contract.md
├── 05-import-and-legacy-data.md
├── 06-dictionaries-and-localization.md
├── 07-mvp-scope-and-acceptance.md
├── 08-codex-implementation-brief.md
├── 09-operational-and-summary-table-contract.md
├── 10-director-and-subagents.md
├── 11-build-phases.md
├── 12-agent-work-protocol.md
├── 13-state-machine.md
├── 14-calculation-contract.md
├── 15-test-fixtures.md
├── 16-api-contract.md
├── 17-screen-registry.md
├── 18-error-and-edge-cases.md
├── 19-legacy-import-acceptance.md
├── 20-definition-of-done.md
├── 21-sprint-plan.md
├── 22-sprint-handoff-protocol.md
├── 23-legacy-isolation-rule.md
├── 24-secrets-hosting-access-inventory.md
├── agents/
├── schemas/
├── sql/
└── sprints/
```

## Development rule

Build a clean core first. Do not extend the old finance logic. Do not copy old dashboards. Do not rebuild spreadsheets as UI.

First prove that the operational journal works:

1. Manual notes-style entry.
2. Strict `+/-` parsing.
3. Cash/Card flow logic.
4. Auto category suggestion.
5. Manual category reassignment.
6. Current cash balance.
7. Generated monthly summary.
8. Import of one legacy Excel file into normalized entries.

Only after that add assistants, full archive import, charts, forecast, and PDF/Excel export.
