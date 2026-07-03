# 22 — Sprint Handoff Protocol

## Purpose

Each sprint must close cleanly and hand off only useful project state to the next sprint.

The goal is to avoid noisy long chats, repeated decisions, and context pollution.

## Sprint Director lifecycle

Each sprint has its own Director.

The Director of the current sprint:

- reads project docs;
- reads current sprint file;
- assigns subagents;
- collects reports;
- decides pass/fail;
- writes final report;
- recommends next Director focus.

The next sprint starts with a new Director.

## What carries forward

Only these items carry forward:

1. Project docs in `FinDesk v2.0/`.
2. Current sprint file in `sprints/`.
3. Previous sprint final report.
4. Open blockers.
5. Explicit decisions made.
6. Files changed.
7. Test results.

## What must not carry forward

Do not carry:

- chat noise;
- unresolved speculation;
- repeated background discussion;
- rejected ideas;
- old FinDesk business logic;
- partial assumptions not written in a report.

## Sprint final report template

```text
Sprint:
Director:
Date:
Goal:

Status:
- Completed / Failed / Blocked

Agents used:

Files changed:

What was completed:

Tests run:

Tests passed:

Tests failed:

Decisions made:

Blocked items:

Risks for next sprint:

What must NOT be changed next:

Recommended next Director focus:

Handoff summary for next sprint:
```

## Next Director start prompt

Every next sprint should start with:

```text
You are the Director for Sprint XX of FinDesk v2.0.
Read:
- FinDesk v2.0/README.md
- FinDesk v2.0/21-sprint-plan.md
- FinDesk v2.0/22-sprint-handoff-protocol.md
- FinDesk v2.0/sprints/SPRINT-XX-....md
- previous sprint final report

Do not write code.
Create the sprint execution plan and assign subagents.
```

## Fail rule

If a sprint is not 100% complete, it does not pass.

A failed sprint can produce a recovery sprint, but cannot pretend to be done.
