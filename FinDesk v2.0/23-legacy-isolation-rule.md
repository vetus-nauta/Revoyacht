# 23 — Legacy Isolation Rule

## Critical rule

Old FinDesk is an infrastructure donor only.

Old FinDesk documentation, product logic, finance rules, categories, reports, dashboards, disciplines, database tables, entities, and calculations are not truth for FinDesk v2.0.

Agents must not use old FinDesk documentation as product authority.

## What can be reused

Only after inspection and explicit Sprint 01 report:

```text
secrets / env patterns
runtime config
backend shell
auth shell
DB connection method
admin shell base
deployment pipeline
file upload base
user/session plumbing
logging utilities
safe generic helpers
```

These are reusable as system carcass / infrastructure only.

## What cannot be reused as truth

Forbidden as v2.0 authority:

```text
old finance model
old database tables
old entity names
old category logic
old report logic
old dashboard logic
old UX decisions
old project disciplines
old documentation assumptions
old calculations
old cash/card interpretation
old import assumptions
```

If old code or docs disagree with `FinDesk v2.0/`, the v2.0 docs win.

## Required behavior for agents

Before using anything from old FinDesk, an agent must classify it as:

```text
INFRASTRUCTURE_DONOR
GENERIC_HELPER
UNSAFE_LEGACY_LOGIC
UNKNOWN_REQUIRES_DIRECTOR
```

Only `INFRASTRUCTURE_DONOR` and approved `GENERIC_HELPER` items may be reused.

## Sprint 01 responsibility

Sprint 01 must produce a donor inventory:

```text
Allowed donor parts:
Rejected legacy logic:
Unsafe files/folders:
Secrets/env required:
DB connection notes:
Deployment notes:
Director decision:
```

## Red line

No agent may copy, adapt, or treat old FinDesk finance behavior as the base for v2.0.

FinDesk v2.0 starts from the clean core docs in this folder.
