# Sprint 01 — Legacy Cleanup and Infrastructure Donor Extraction

## Goal

Clean old FinDesk and keep only safe foundational infrastructure for FinDesk v2.0.

This sprint must not build new finance logic. It prepares clean ground.

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
- user/session handling.

## Forbidden

- old finance tables;
- old finance entities;
- old calculations;
- old dashboards;
- old report logic;
- old category logic;
- old UX screens as product direction;
- any database mixing.

## Required outputs

1. Infrastructure donor report.
2. Keep/rewrite/delete list.
3. Secrets/env inventory.
4. Old logic isolation report.
5. Clean namespace readiness report.
6. QA confirmation.

## Exit criteria

Sprint 01 is complete only if:

- safe reusable infrastructure is documented;
- unsafe old logic is documented;
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
- blockers.
