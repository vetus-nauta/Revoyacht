# 11 — Build Phases

## Purpose

Agents must build FinDesk v2.0 in passes. Do not start with UX. Do not start with dashboards. Do not start by reviving old FinDesk logic.

## Pass 1 — Foundation

Goal: create the clean technical base.

Tasks:

- create clean project area or module;
- connect database;
- apply clean core schema;
- seed categories;
- create workspace model;
- create flows model;
- create entries model;
- create minimal API shell;
- create basic audit hooks;
- reuse only safe old infrastructure.

Forbidden:

- no visual redesign;
- no forecast;
- no charts;
- no full archive import;
- no assistant workflow;
- no old dashboard reuse.

Exit criteria:

- schema exists;
- seed categories load;
- workspace can be created;
- cash/card flows can be created;
- entries can be stored and fetched.

## Pass 2 — Logic

Goal: make the financial engine correct.

Tasks:

- implement parser;
- enforce plus/minus rule;
- implement cash balance recalculation;
- implement card expense flow;
- implement card-to-cash approved model;
- implement commercial income category;
- implement other-expenses fallback;
- generate monthly summary from entries;
- implement closed-month correction/recalculation choices.

Exit criteria:

- test fixtures pass;
- monthly summary matches expected values;
- invalid rows remain visible but do not count.

## Pass 3 — Integration

Goal: connect the clean core to the usable product environment.

Tasks:

- connect auth if safe;
- connect admin shell if safe;
- connect file attachment base;
- implement one legacy Excel import;
- create import review;
- check old infrastructure compatibility;
- preserve source traceability.

Exit criteria:

- one old Excel file imports into normalized entries;
- import report shows included/excluded/unrecognized rows;
- source file and row mapping exists.

## Pass 4 — UX

Goal: build the final usable screen behavior.

Tasks:

- implement notes-style financial feed;
- implement full workspace desktop/iPad 11+ layout;
- implement mobile financial-notes system for phone/iPad mini;
- implement horizontal mobile structured view;
- implement details panel/drawer;
- make input keyboard-safe;
- verify no body/page scroll.

Exit criteria:

- phone vertical works;
- phone horizontal works;
- iPad mini works as mobile;
- iPad 11+ works as full workspace;
- desktop uses full available space;
- input remains accessible.

## Director gate

The Director approves each pass before the next pass starts.

If a pass fails, agents report blockers instead of improvising.
