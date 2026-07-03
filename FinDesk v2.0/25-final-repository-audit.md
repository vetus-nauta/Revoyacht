# 25 — Final Repository Audit

## Audit status

Status: READY FOR SPRINT 01

The FinDesk v2.0 planning package is coherent and ready for work.

This audit reviewed the planning/specification package, not a running application build.

## What was checked

- README and project structure.
- Product logic.
- Data model.
- SQL schema.
- Parser/rules logic.
- Responsive layout contract.
- Legacy import rules.
- Dictionaries and localization rules.
- MVP acceptance criteria.
- Director/subagent model.
- Build phases.
- Agent protocol.
- State machine.
- Calculation contract.
- Test fixtures.
- API contract.
- Screen registry.
- Edge cases.
- Legacy import acceptance.
- Definition of Done.
- Sprint plan.
- Sprint handoff protocol.
- Legacy isolation rule.
- Secrets/hosting access inventory.
- Agent READ FIRST files.
- Sprint files.

## Corrections made during audit

### 1. README tree updated

The README file tree was outdated after later documents were added.

Fixed by updating the tree to include files 09–24 and folders:

```text
agents/
schemas/
sql/
sprints/
```

### 2. Category direction added

`commercial_income` was correctly added as an income category, but the category schema did not yet define category direction.

Fixed by adding category `direction` to:

- `02-data-model.md`;
- `sql/clean-core-schema.sql`.

Allowed values:

```text
income
expense
movement
mixed
```

### 3. Cash top-up category direction fixed

`cash_topup_from_card` is a movement category, not a normal expense.

Fixed in `schemas/categories.seed.json`:

```json
"direction": "movement"
```

### 4. PostgreSQL UUID dependency added

The SQL schema uses `gen_random_uuid()`.

Fixed by adding:

```sql
create extension if not exists pgcrypto;
```

## Confirmed core logic

The package consistently defines:

- operational journal as source of truth;
- summary report as generated output;
- Cash/Card as funding flows, not categories;
- card-to-cash as Card expense + Cash income;
- commercial income as separate income category;
- opening balance as not income;
- no-sign rows as visible but not counted;
- Other expenses as review queue;
- closed month edits as correction/recalculate/cancel only.

## Confirmed project discipline

The package consistently defines:

- old FinDesk as infrastructure donor only;
- old FinDesk docs and finance logic as not truth;
- each sprint has its own Director;
- each sprint must complete 100%;
- each sprint closes with handoff;
- new sprint starts from docs and previous report, not old chat noise;
- Director does not write code;
- agents work only inside scope.

## Confirmed device logic

The package consistently defines:

- phone and iPad mini use mobile financial-notes system;
- iPad 11+ and desktop use full workspace system;
- desktop must not be a stretched phone;
- mobile vertical scrolls note feed;
- mobile horizontal view shows structured/report-ready rows;
- no body/page scroll;
- scroll only inside feed/details/reports/attachments.

## Confirmed security/access logic

The package now requires Sprint 01 to inventory:

- hosting;
- server;
- FTP/SFTP/SSH;
- database connection;
- env variables;
- deployment method;
- domain/DNS/SSL.

It also forbids committing real secrets, passwords, tokens, private keys, or recovery codes.

## No unresolved blockers found

No blocking contradictions remain in the planning package.

## Minor non-blocking notes for Sprint 01

Sprint 01 should still verify:

1. actual old repo/project location;
2. actual available env files;
3. hosting provider and deployment route;
4. database engine/version;
5. whether `pgcrypto` is available in the target PostgreSQL environment;
6. whether global categories will use `workspace_id = null` or be copied per workspace.

These are implementation discovery items, not planning blockers.

## Final recommendation

Do not add more planning documents before Sprint 01.

The package is complete enough to start.

Next action:

Start Sprint 01 with a new Director using:

```text
FinDesk v2.0/README.md
FinDesk v2.0/21-sprint-plan.md
FinDesk v2.0/22-sprint-handoff-protocol.md
FinDesk v2.0/23-legacy-isolation-rule.md
FinDesk v2.0/24-secrets-hosting-access-inventory.md
FinDesk v2.0/sprints/SPRINT-01-legacy-cleanup.md
FinDesk v2.0/agents/00-DIRECTOR-READ-FIRST.md
```
