# Sprint 01 — Legacy Cleanup and Infrastructure Donor Extraction

## Goal

Clean old FinDesk and keep only safe foundational infrastructure for FinDesk v2.0.

This sprint must not build new finance logic. It prepares clean ground.

## Critical legacy rule

Read `../23-legacy-isolation-rule.md` before inspecting old FinDesk.

Old FinDesk is not product truth. Its documentation, finance logic, disciplines, tables, entities, reports, categories, dashboards, and calculations must not be used as the basis for v2.0.

The old project can only donate infrastructure carcass parts after classification and Director approval.

## Director rule

Sprint 01 Director does not write code.

Director coordinates:

- Data and Backend Core Agent;
- QA/Audit Agent;
- optional Security/Privacy Agent.

## Scope

- inspect old FinDesk location and project structure;
- identify environment/secrets/config needed by new project;
- identify reusable infrastructure;
- classify old parts as donor/safe/unsafe/unknown;
- isolate old business logic;
- create clean v2.0 project namespace/module if needed;
- confirm old tables/entities/calculations are not reused.

## Reusable from old FinDesk

Allowed if clean and documented:

- env/secrets handling;
- DB connection method;
- auth shell;
- backend server shell;
- admin shell base;
- deployment config;
- file upload base;
- user/session handling;
- generic helpers after review.

## Classification required

Every old FinDesk part considered for reuse must be classified as:

```text
INFRASTRUCTURE_DONOR
GENERIC_HELPER
UNSAFE_LEGACY_LOGIC
UNKNOWN_REQUIRES_DIRECTOR
```

## Forbidden

- old finance tables;
- old finance entities;
- old calculations;
- old dashboards;
- old report logic;
- old category logic;
- old UX screens as product direction;
- old documentation as product truth;
- old project discipline as v2.0 discipline;
- any database mixing.

## Required outputs

1. Infrastructure donor report.
2. Keep/rewrite/delete list.
3. Secrets/env inventory.
4. Old logic isolation report.
5. Clean namespace readiness report.
6. Explicit legacy documentation rejection note.
7. QA confirmation.

## Exit criteria

Sprint 01 is complete only if:

- safe reusable infrastructure is documented;
- unsafe old logic is documented;
- old documentation is explicitly rejected as v2.0 truth;
- no v2.0 finance core uses old tables/entities;
- clean project area is ready;
- Director files final sprint report.

## Handoff to Sprint 02

Handoff must include:

- exact reusable infrastructure list;
- exact files/modules not to touch;
- environment variables needed;
- database connection notes;
- deployment notes;
- rejected legacy logic list;
- rejected legacy documentation list;
- blockers.
