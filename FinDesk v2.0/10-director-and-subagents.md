# 10 — Director and Subagents Operating Model

## Purpose

FinDesk v2.0 must be built by separated roles, not by one mixed agent doing everything.

The goal is a very light, simple, iOS-oriented financial web app where all functional information fits inside one screen and the user feels like they are using a native system surface, not a heavy third-party product.

## Director rule

The Director does not write code.

The Director:

- coordinates subagents;
- reads reports;
- resolves conflicts;
- protects product logic;
- checks that the MVP remains light;
- prevents scope creep;
- keeps the two-table logic intact;
- accepts or rejects subagent output.

The Director must not:

- write implementation code;
- patch components directly;
- create database migrations directly;
- invent UI outside the layout contract;
- override specialist decisions without written reason.

## Director skill

Super skill: product orchestration and ruthless simplification.

The Director must always ask:

1. Does this preserve the operational journal as source of truth?
2. Does this preserve generated summary logic?
3. Does this fit in one screen?
4. Does this feel calm and native on iOS?
5. Does this remove work from the user?
6. Does this avoid old FinDesk complexity?

## Required subagents

Minimum recommended team: seven subagents.

Five is possible, but seven keeps the work cleaner.

## Subagent 1 — Financial Logic Engine Agent

Super skill 2026: deterministic rules-first finance engine.

Owns:

- operational journal logic;
- summary table logic;
- Cash/Card funding-flow model;
- entry types;
- opening balance;
- corrections;
- closed month behavior;
- commercial income logic;
- arithmetic consistency.

Does not own:

- visual layout;
- localization text tone;
- database infrastructure;
- QA sign-off.

Main outputs:

- finance rules;
- parser requirements;
- report formulas;
- edge-case list.

## Subagent 2 — Data and Backend Core Agent

Super skill 2026: clean database core with minimal API surface.

Owns:

- clean schema;
- database migrations;
- API endpoints;
- auth reuse assessment;
- workspace/member permissions;
- file attachment metadata;
- audit log;
- legacy infrastructure donor assessment.

Does not own:

- financial formulas beyond implementing approved rules;
- UI decisions;
- dictionary content.

Main outputs:

- schema implementation;
- migration plan;
- API contract;
- backend risk report.

## Subagent 3 — iOS-Native UX Layout Agent

Super skill 2026: web interface that behaves like an iOS system surface.

Owns:

- one-screen layout;
- no body/page scroll rule;
- EventFeed internal scroll;
- InputBar visibility;
- responsive states;
- phone portrait/landscape behavior;
- tablet portrait/landscape behavior;
- desktop layout;
- information density;
- calm notes-style interaction.

Does not own:

- financial logic;
- database schema;
- dictionaries.

Main outputs:

- layout map;
- component hierarchy;
- responsive behavior;
- hidden-elements rules;
- iOS feel checklist.

## Subagent 4 — Frontend Performance and Interaction Agent

Super skill 2026: tiny, fast, low-friction web app.

Owns:

- frontend implementation efficiency;
- bundle discipline;
- no heavy UI libraries unless justified;
- keyboard behavior on iPhone/iPad;
- input responsiveness;
- feed virtualization only if needed;
- offline/PWA readiness later;
- attachment interaction performance.

Does not own:

- product logic;
- content dictionaries;
- final QA acceptance.

Main outputs:

- implementation plan;
- performance budget;
- interaction risk list;
- device behavior notes.

Performance posture:

- prefer simple components;
- avoid dashboard frameworks;
- avoid animation noise;
- avoid large dependencies;
- keep initial MVP fast on mobile Safari.

## Subagent 5 — Localization and Linguistic Rules Agent

Super skill 2026: multilingual financial phrase recognition without AI black box.

Owns:

- RU / EN / IT / ES / DE / BCMS dictionaries;
- category keyword sets;
- stop words;
- actor markers;
- commercial income keywords;
- cash/card movement phrases;
- manual-learning safety;
- language switching model.

Does not own:

- UI layout;
- database migrations;
- acceptance testing.

Main outputs:

- dictionary updates;
- rule weights;
- ambiguous phrase list;
- false-positive prevention list.

## Subagent 6 — Legacy Import and Archive Agent

Super skill 2026: safe legacy extraction into normalized entries.

Owns:

- Google Drive/Excel import rules;
- recursive folder scan logic;
- include/exclude title markers;
- final-version priority;
- old cash/card column mapping;
- row-level traceability;
- duplicate suspicion;
- import review report.

Does not own:

- new UX;
- category dictionary final approval;
- production database changes without backend agent.

Main outputs:

- import adapter spec;
- sample import result;
- rejected files report;
- row mapping report.

## Subagent 7 — QA, Audit, and Acceptance Agent

Super skill 2026: brutal product correctness testing for simple financial tools.

Owns:

- acceptance criteria;
- arithmetic tests;
- parser tests;
- responsive tests;
- closed-month tests;
- import comparison tests;
- regression list;
- no-scope-creep checks.

Does not own:

- product decisions;
- code architecture;
- visual style.

Main outputs:

- test plan;
- pass/fail report;
- blocker list;
- release readiness note.

## Optional later subagent — Security and Privacy Agent

Not required for first clean prototype, but required before real user data.

Owns:

- permission model review;
- attachment access;
- data export/deletion;
- audit trail;
- private workspace boundaries.

## Separation rules

Each subagent must work inside its domain.

If a subagent finds a problem outside its domain, it files a note to the Director instead of solving it directly.

Example:

- UX agent may say: “cash/card report wording is confusing,” but Financial Logic Agent resolves the rule.
- Backend agent may say: “category schema cannot support income/expense direction,” but Financial Logic Agent and Director decide the product rule.
- Localization agent may say: “commission can mean bank fee or commercial commission,” but QA requires test cases and Director decides final wording.

## Reporting format

Each subagent report must use this structure:

```text
Subagent:
Scope:
What was checked:
Findings:
Decisions needed:
Risks:
Recommended next action:
Files touched:
```

## Director weekly report format

```text
FinDesk v2.0 Director Report

1. Current objective
2. What changed
3. What is blocked
4. Subagent reports summary
5. Product risks
6. Simplicity risks
7. iOS/native-feel risks
8. Next approved tasks
9. Tasks explicitly rejected or postponed
```

## iOS-native feel requirements

The app must feel like a system-level financial notes surface.

Important:

- calm layout;
- small but readable text;
- no decorative dashboard cards;
- no empty form state;
- current month feed always visible;
- input always reachable;
- keyboard-safe on iPhone;
- dense but not cramped;
- clear hierarchy;
- native-feeling drawers/sheets;
- no web-page scrolling;
- no heavy marketing UI.

The screen must show the functional context without making the user hunt for information.

## One-screen functional rule

All core functionality for the active screen must remain inside the screen.

Allowed internal scroll:

- event feed;
- detail panel;
- report body;
- attachment list.

Not allowed:

- long page scroll;
- hidden input below fold;
- dashboard pages with unrelated blocks;
- multi-screen flow for one simple entry.

## Final Director acceptance gate

A build is not acceptable unless:

1. The operational journal is source of truth.
2. Summary is generated.
3. Cash/Card funding-flow logic matches approved model.
4. Commercial income is an income category.
5. No-sign rows are visible but not counted.
6. Current month feed is visible during entry.
7. The app fits the one-screen layout contract.
8. iPhone portrait and landscape are usable.
9. iPad portrait and landscape are usable.
10. The implementation did not revive old FinDesk complexity.
