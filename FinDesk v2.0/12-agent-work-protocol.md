# 12 — Agent Work Protocol

## Rule

Agents must not mix responsibilities.

Each agent works only inside its domain. If it finds an issue outside its domain, it reports it to the Director.

## Before any work

Every agent must:

1. Read `README.md`.
2. Read `10-director-and-subagents.md`.
3. Read its own `agents/*-READ-FIRST.md` file.
4. Read only the project files relevant to its scope.
5. Produce a short plan before touching implementation.

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

## Acceptance behavior

Agents do not declare success by feeling.

Success requires passing criteria from:

- `07-mvp-scope-and-acceptance.md`;
- `15-test-fixtures.md`;
- `20-definition-of-done.md`.
