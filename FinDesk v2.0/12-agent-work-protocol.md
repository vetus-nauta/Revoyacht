# 12 — Agent Work Protocol

## Rule

Agents must not mix responsibilities.

Each agent works only inside its domain. If it finds an issue outside its domain, it reports it to the Director.

## Before any work

Every agent must:

1. Read `README.md`.
2. Read `23-legacy-isolation-rule.md`.
3. Read `10-director-and-subagents.md`.
4. Read its own `agents/*-READ-FIRST.md` file.
5. Read only the project files relevant to its scope.
6. Produce a short plan before touching implementation.

## Legacy documentation rule

Agents must not use old FinDesk documentation as product truth.

Old FinDesk is only an infrastructure donor. If an agent needs something from old FinDesk, it must classify it first:

```text
INFRASTRUCTURE_DONOR
GENERIC_HELPER
UNSAFE_LEGACY_LOGIC
UNKNOWN_REQUIRES_DIRECTOR
```

Only `INFRASTRUCTURE_DONOR` and approved `GENERIC_HELPER` items may be reused.

## Report format

Every agent report must use this format:

```text
Subagent:
Scope:
Files read:
What was checked:
Findings:
Changes made:
Decisions needed:
Risks:
Recommended next action:
Files touched:
```

## Code rule

Only implementation agents may write code.

Director does not write code.

QA does not fix code directly unless explicitly assigned a small test-only patch.

Localization agent does not edit financial formulas.

UX agent does not change backend schema.

Backend agent does not invent product logic.

## Change discipline

Every change must be:

- narrow;
- reversible;
- traceable to a spec;
- reported.

Forbidden:

- large rewrites without Director approval;
- old dashboard resurrection;
- old FinDesk documentation as truth;
- old finance tables/entities/calculations reused as v2.0 core;
- new dependencies without reason;
- visual redesign during foundation pass;
- hidden arithmetic changes;
- changing Cash/Card model.

## Conflict handling

If specs conflict:

1. Stop.
2. Record the conflict.
3. Suggest resolution.
4. Wait for Director decision.

If old FinDesk conflicts with FinDesk v2.0 docs, FinDesk v2.0 docs win.

## Acceptance behavior

Agents do not declare success by feeling.

Success requires passing criteria from:

- `07-mvp-scope-and-acceptance.md`;
- `15-test-fixtures.md`;
- `20-definition-of-done.md`.
