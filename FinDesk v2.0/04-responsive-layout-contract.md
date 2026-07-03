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

## Main journal screen

The main screen is a current-month notes-style financial feed.

The user sees existing records while entering new ones. The user must not write into an empty form.

Desktop structure:

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
- other expenses review amount/count;
- active month total or funded amount.

On small screens it collapses to one or two lines.

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

Desktop/tablet:

```text
[Cash v] +1000 снял с карты [attach] [enter]
```

Phone:

```text
+1000 снял с карты
```

The active flow must remain clear: Cash or Card.

## Detail panel

Desktop: right panel.

Tablet: side drawer.

Phone: bottom sheet or full drawer depending on orientation.

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

```text
TopBar
Summary
LeftRail | EventFeed | DetailPanel
InputBar
```

LeftRail can collapse. DetailPanel may be hidden if no row selected.

## Tablet landscape

LeftRail collapses to icons. DetailPanel becomes narrower or drawer.

## Tablet portrait

Single main column.

LeftRail goes into menu. DetailPanel opens as bottom sheet. Feed remains the main context.

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

Reports should not open fully in this mode. Provide a button to view reports in a better orientation.

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
