# 21 — Sprint Plan

## Purpose

FinDesk v2.0 must be delivered through complete, closed sprints.

Each sprint has:

- its own Director;
- its own agent group;
- a fixed goal;
- a strict 100% completion rule;
- a sprint report;
- a handoff to the next Director.

A new sprint should begin in a clean chat/context with only the sprint documents and previous sprint handoff, not with all old discussion noise.

## Sprint rule

A sprint is not complete until its exit criteria are met and the Director files a final report.

No sprint may partially complete and pass responsibility forward as “almost done.”

If a sprint fails, it produces a blocker report and does not move the project forward.

## Sprint list

```text
Sprint 01 — Legacy cleanup and infrastructure donor extraction
Sprint 02 — Clean core foundation
Sprint 03 — Financial logic engine
Sprint 04 — Summary, reports, and month control
Sprint 05 — Legacy import MVP
Sprint 06 — Main journal UX shell
Sprint 07 — Integration hardening and attachments
Sprint 08 — QA, acceptance, and MVP release candidate
```

## Sprint 01 — Legacy cleanup and infrastructure donor extraction

Goal: clean old FinDesk and keep only safe infrastructure for the new MVP.

This is the first sprint.

Scope:

- inspect old FinDesk code and environment;
- identify secrets/env/config needed by the new project;
- identify safe infrastructure donors: auth, backend shell, DB connection, admin shell, deployment, file upload base;
- isolate or archive old business logic;
- ensure old entities/tables/calculations are not mixed into v2.0;
- prepare clean project namespace/module for FinDesk v2.0.

Forbidden:

- no reuse of old finance business tables;
- no reuse of old finance entities;
- no reuse of old calculations;
- no migration of old database data into new core;
- no UX build;
- no parser build;
- no reports build.

Exit criteria:

- infrastructure donor report complete;
- secrets/env inventory complete;
- old business logic isolated;
- clean v2.0 project area ready;
- Director confirms no old finance logic was mixed into clean core.

Sprint agents:

- Director;
- Data and Backend Core Agent;
- QA/Audit Agent;
- optional Security/Privacy Agent.

## Sprint 02 — Clean core foundation

Goal: create the new clean technical foundation.

Scope:

- apply or prepare clean database schema;
- create workspaces;
- create workspace members;
- create flows;
- create entries;
- seed categories;
- create minimal API for workspaces/flows/entries;
- create audit log base.

Forbidden:

- no old finance data import;
- no frontend polish;
- no charts;
- no forecast;
- no assistant workflow.

Exit criteria:

- clean schema exists;
- seed categories load;
- workspace can be created;
- Cash/Card flows can be created;
- entries can be stored and fetched;
- QA confirms foundation with tests.

Sprint agents:

- new Director;
- Data and Backend Core Agent;
- Financial Logic Agent for review only;
- QA/Audit Agent.

## Sprint 03 — Financial logic engine

Goal: implement deterministic finance logic.

Scope:

- parser;
- strict plus/minus rule;
- invalid visible rows;
- cash balance recalculation;
- card expense logic;
- card-to-cash approved model;
- commercial income;
- other expenses fallback;
- category suggestion engine v1;
- fixture tests.

Exit criteria:

- fixtures pass;
- cash/card logic matches approved contract;
- commercial income separated;
- no-sign rows visible but not counted;
- Other expenses queue works at data level.

Sprint agents:

- new Director;
- Financial Logic Engine Agent;
- Localization Agent;
- Backend Core Agent;
- QA/Audit Agent.

## Sprint 04 — Summary, reports, and month control

Goal: generated reports from entries.

Scope:

- monthly summary;
- category-by-month matrix;
- yearly summary base;
- Other expenses report;
- month close;
- correction/recalculate/cancel behavior;
- report API.

Exit criteria:

- monthly summary generated from entries;
- no manual numeric report editing;
- closed month cannot silently change;
- QA confirms formula consistency.

Sprint agents:

- new Director;
- Financial Logic Engine Agent;
- Backend Core Agent;
- QA/Audit Agent.

## Sprint 05 — Legacy import MVP

Goal: import one old-format Excel/Sheet safely into normalized entries.

Scope:

- one-file import adapter;
- old cash/card column mapping;
- source row traceability;
- include/exclude markers;
- final-version priority;
- import review report;
- compare totals against source summary.

Exit criteria:

- one legacy file imports;
- rows map to normalized entries;
- source traceability exists;
- excluded rows/files are reported;
- duplicate suspects are marked, not deleted.

Sprint agents:

- new Director;
- Legacy Import Agent;
- Financial Logic Agent;
- Backend Core Agent;
- QA/Audit Agent.

## Sprint 06 — Main journal UX shell

Goal: build the main usable screen around the already-correct core.

Scope:

- notes-style current month feed;
- input bar;
- Cash/Card switch;
- visible invalid rows;
- Other expenses visual state;
- detail panel/drawer;
- mobile financial-notes behavior;
- mobile horizontal structured view;
- desktop/iPad 11+ full workspace behavior.

Exit criteria:

- no body/page scroll;
- current month feed visible during entry;
- input reachable with keyboard open;
- desktop uses full width;
- iPad mini behaves as mobile;
- iPad 11+ behaves as full workspace.

Sprint agents:

- new Director;
- iOS-Native UX Layout Agent;
- Frontend Performance Agent;
- QA/Audit Agent;
- Financial Logic Agent for rule review only.

## Sprint 07 — Integration hardening and attachments

Goal: connect the MVP pieces without expanding scope.

Scope:

- auth wiring if safe;
- member roles;
- attachment upload/metadata;
- admin shell minimum;
- audit log visible enough for QA;
- category reassignment;
- saved rules after approval;
- integration tests.

Exit criteria:

- workspace/member permissions work;
- attachments attach to entries;
- category reassignment works;
- audit log records meaningful changes;
- no old business logic leaks in.

Sprint agents:

- new Director;
- Backend Core Agent;
- Frontend Performance Agent;
- QA/Audit Agent;
- Security/Privacy Agent if real data is used.

## Sprint 08 — QA, acceptance, and MVP release candidate

Goal: prove MVP is complete.

Scope:

- all fixtures;
- arithmetic tests;
- parser tests;
- import tests;
- responsive tests;
- keyboard tests;
- iOS-native feel review;
- Definition of Done check;
- final Director report.

Exit criteria:

- all critical tests pass;
- no blocked Definition of Done item;
- Director files release candidate report;
- next phase list is separated from MVP.

Sprint agents:

- new Director;
- QA/Audit Agent;
- all previous agents as reviewers only;
- Security/Privacy Agent if real data is present.

## Handoff rule

Each sprint ends with:

```text
Sprint final report
Files changed
Tests passed
Tests failed
Known risks
Decisions made
Work explicitly not done
Recommendation for next Director
```

The next sprint starts only from:

- project docs;
- previous sprint final report;
- current sprint READ FIRST;
- current sprint task file.

Do not carry chat noise forward.
