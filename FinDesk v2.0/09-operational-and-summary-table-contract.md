# 09 — Operational and Summary Table Contract

## Why this file exists

The whole FinDesk v2.0 logic must stay grounded in two table types:

1. Operational table — current sequence of real records.
2. Summary table — generated grouped report.

The UI may look like notes, but the logic must remain table-clean.

## Operational table

The operational table is the live journal.

Every visible record has a row. Even invalid rows remain visible, but invalid rows do not affect arithmetic.

Minimum columns:

```text
date
raw_text
sign
amount
flow
direction
entry_type
description
category
actor
status
balance_after
source
comment
attachments
```

## Operational row examples

### Cash expense

```text
date: 2026-07-03
raw_text: -250 рыба
flow: cash
direction: out
entry_type: cash_expense
category: provisions
balance_after: previous_cash_balance - 250
```

### Card expense

```text
date: 2026-07-03
raw_text: -60 Netflix
flow: card
direction: out
entry_type: card_expense
category: media_comms
balance_after: null
```

### Cash top-up from card

```text
Card row:
raw_text: -1000 снял с карты
flow: card
direction: out
category: cash_topup_from_card

Cash row:
raw_text: +1000 снял с карты
flow: cash
direction: in
category: cash_topup_from_card
```

Both rows are valid. This is the approved funding-flow model.

### Invalid row

```text
raw_text: 250 рыба
status: unrecognized
entry_type: unrecognized
amount: null
```

It remains in feed, red/underlined, not counted.

## Summary table

The summary table is generated from operational entries.

It can be displayed as monthly/yearly tables but must not be manually used as source of truth.

Monthly summary columns:

```text
month
source_files
opening_cash
discrepancy_with_previous
external_cash_income
cash_expense
card_expense
cash_topup_from_card_card_side
cash_topup_from_card_cash_side
other_expenses
ending_cash
comment
```

## Core formulas

### Cash ending balance

```text
ending_cash = opening_cash + counted_cash_income - counted_cash_expense + corrections
```

### Card expense

```text
card_expense = sum(card out entries)
```

### Total funded / paid by flow

```text
flow_total = cash_expense + card_expense
```

This is not the same as operational category total when there are flow movements.

### Category totals

Category totals are grouped by category from counted entries.

For cash/card top-up, show it as funding movement category so it does not hide the fact that card funded cash.

## Category-by-month matrix

Rows: categories.
Columns: months.
Values: sums from entries.

Example categories:

```text
crew
berth
marina_ports
service_water
tech_parts
tender
fuel
provisions
interior
cleaning
media_comms
admin_legal
cash_topup_from_card
other
```

## Source files

The summary must keep source traceability:

```text
month -> source files -> source rows -> normalized entries
```

## Comments

Comments may be manual but must not change numbers.

## Month lock

When a month is closed, summary values are stored as snapshot for audit, but reports remain reproducible from entries.

Editing a closed month requires correction or chain recalculation.
