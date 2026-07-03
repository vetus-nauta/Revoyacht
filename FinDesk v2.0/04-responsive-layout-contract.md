# 04 — Responsive Layout Contract

## Core rule

One screen = one logic.

The page itself must not scroll. Scroll is allowed only inside controlled internal areas.

Allowed scroll containers:

```text
EventFeed
DetailPanelBody
ReportBody
AttachmentList
WorkspaceList
```

Forbidden:

```text
body scroll
page scroll
long landing layout
forms below the fold
hidden input after keyboard opens
```

## Device classes

FinDesk v2.0 must not be a desktop screen simply squeezed into a phone.

There are two main interaction systems:

1. **Mobile financial-notes system** — phone and iPad mini.
2. **Full workspace system** — desktop and iPad 11+.

### Mobile financial-notes system

Applies to:

```text
iPhone portrait
iPhone landscape
iPad mini portrait
iPad mini landscape
small Android phones/tablets with similar usable width
```

Main idea:

- user writes financial notes;
- vertical movement scrolls the current-month note feed;
- horizontal movement reveals the structured/report-ready view of those same notes;
- the mobile screen stays focused on writing and reviewing current records.

### Full workspace system

Applies to:

```text
desktop/laptop monitors
iPad 11+ portrait
iPad 11+ landscape
iPad Pro portrait
iPad Pro landscape
large Android tablets with similar usable width
```

Main idea:

- use the full available screen;
- do not shrink desktop into a mobile column;
- show more context at once;
- keep reading and writing comfortable;
- expose full panels where space allows.

## Main journal screen

The main screen is a current-month notes-style financial feed.

The user sees existing records while entering new ones. The user must not write into an empty form.

Desktop/full workspace structure:

```text
AppShell
 ├─ TopBar
 ├─ WorkspaceSummary
 ├─ MainArea
 │   ├─ LeftRail
 │   ├─ EventFeed
 │   └─ DetailPanel
 └─ InputBar
```

## TopBar

Always visible.

Contains:

- workspace name;
- current month;
- user/action menu;
- compact navigation.

## WorkspaceSummary

Compact, not dashboard-heavy.

Shows:

- cash now;
- card expense;
- commercial income;
- other expenses review amount/count;
- active month total or funded amount.

On mobile it collapses to one or two lines.

On desktop and iPad 11+ it may use more horizontal space, but must remain calm and readable.

## EventFeed

Primary surface.

Must show the current month records.

Example:

```text
03.07
+1000 снял с карты
Cash · Пополнение cash с карты · Остаток 16 262

03.07
-250 рыба
Cash · Продукты и гости · Остаток 16 012

03.07
-60 Netflix
Card · Мультимедиа и связь
```

## InputBar

Always accessible inside the screen.

Desktop / iPad 11+:

```text
[Cash v] +1000 снял с карты [attach] [enter]
```

Phone / iPad mini:

```text
+1000 снял с карты
```

The active flow must remain clear: Cash or Card.

## Detail panel

Desktop and iPad 11+ landscape: right panel.

iPad 11+ portrait: right panel or split panel if enough width; otherwise drawer.

Phone and iPad mini: bottom sheet or full drawer depending on orientation.

Details include:

- raw text;
- date;
- flow;
- category;
- actor;
- attachments;
- actions;
- history.

## Desktop layout

Desktop must use the full monitor space. Do not cap the app at a narrow mobile width.

```text
TopBar
Summary
LeftRail | EventFeed | DetailPanel
InputBar
```

LeftRail can collapse. DetailPanel may be hidden if no row selected.

Recommended behavior:

- wide EventFeed for reading notes;
- visible DetailPanel for selected entry;
- visible month/workspace navigation;
- summary strip with more values than mobile;
- no oversized empty gaps;
- no mobile-like narrow center column on a normal monitor.

## iPad 11+ and iPad Pro landscape

Treat as full workspace, close to desktop.

```text
TopBar
Summary
LeftRail compact | EventFeed | DetailPanel
InputBar
```

Use available width.

Do not collapse to phone layout unless actual usable width is too small because of split-screen or browser constraints.

## iPad 11+ and iPad Pro portrait

Treat as tablet full workspace, not phone.

Possible layout:

```text
TopBar
Summary compact
EventFeed | DetailPanel narrow/drawer
InputBar
```

LeftRail may be hidden behind menu, but report/category/detail access should remain closer than on phone.

## iPad mini portrait and landscape

Treat like mobile/phone system.

Reason: usable space and hand-held behavior are closer to phone than full tablet workspace.

Keep:

- current workspace;
- current month;
- cash now;
- active flow;
- feed;
- input.

Use horizontal swipe for structured/report-ready view.

## Phone portrait

Show only essentials:

- workspace;
- month;
- cash now;
- active flow;
- feed;
- input.

Hide:

- big reports;
- large summary;
- left navigation;
- detail panel;
- secondary actions.

## Phone landscape

Very compact mode. Keyboard height is the main risk.

Keep visible:

- workspace/month/cash compact row;
- feed;
- input.

Reports should not open fully in this mode. Provide a button or horizontal swipe access to structured view.

## Mobile horizontal-swipe model

This applies to phone and iPad mini.

Vertical movement:

```text
scroll current-month financial notes feed
```

Horizontal movement:

```text
switch between note view and structured/report-ready view
```

### Mobile view A — Note feed

The user writes and reads financial notes.

Example:

```text
03.07
-250 рыба
Cash · Продукты · Остаток 16 012
```

### Mobile view B — Structured rows

The same records are shown as report-ready structured rows.

Example:

```text
03.07 | Cash | -250 | provisions | рыба | 16 012
03.07 | Card | -60 | media_comms | Netflix | —
```

This view is not a separate page. It is the horizontal counterpart of the same current-month feed.

Do not make the user navigate away just to see how notes are being structured.

## Full workspace structured view

On desktop and iPad 11+, do not rely only on horizontal swipe.

Show structured information through panels or split sections:

- feed in the main column;
- selected entry detail in the right panel;
- report-ready fields visible in details;
- optional compact structured table/report panel if opened.

The large screen should feel richer, not like a stretched phone.

## Empty month state

Do not show a blank form.

Show:

```text
July 2026
Cash start: 15 262 €

No records yet for this month.
Write like a note:

+1000 top-up
-250 groceries
-60 Netflix
```

## Element hiding rules

Never hide:

- current workspace;
- current month;
- cash now;
- active flow;
- input;
- access to feed.

May hide:

- detailed summary;
- charts;
- reports;
- attachments until expanded;
- long comments;
- audit/history;
- secondary actions.

## Acceptance notes for layout

A valid implementation must pass these checks:

1. Desktop uses the full available monitor width and does not look like a centered mobile app.
2. iPad 11+ landscape behaves close to desktop.
3. iPad 11+ portrait remains a tablet workspace, not a phone clone.
4. iPad mini portrait and landscape use the mobile financial-notes system.
5. Phone vertical scrolling moves through notes.
6. Phone horizontal swiping reveals structured/report-ready rows.
7. Input remains reachable with keyboard open.
8. No body/page scroll is introduced.
