# 03 — Parsing and Rules Engine

## Purpose

The engine converts a short human financial note into a structured entry.

It must be rules-first, explainable, and trainable by dictionaries and manual corrections.

It must not rely on black-box AI for MVP.

## Input examples

```text
-250 рыба
+1000 снял с карты
-60 Netflix
-42 заправка тузика
-500 Вова аванс
250 продукты
```

## Step 1 — Normalize text

Normalize before parsing:

- trim spaces;
- convert repeated spaces to one space;
- preserve original raw text;
- lowercase for matching;
- normalize comma decimal separator;
- keep Cyrillic and Latin text;
- keep multilingual words.

## Step 2 — Validate sign

A counted record must start with `+` or `-`.

If no sign:

```text
status = unrecognized
entry_type = unrecognized
direction = none
amount = null
```

The row remains visible but does not affect arithmetic.

## Step 3 — Extract amount

Supported:

```text
-250 рыба
-250.50 рыба
-250,50 рыба
+1000 снял с карты
```

The first numeric value after sign is the amount.

## Step 4 — Extract description

Description is the text after sign and amount.

Example:

```text
raw: -250 рыба
description: рыба
```

## Step 5 — Determine flow

The active UI tab sets the default flow.

Tabs:

```text
Cash
Card
Assistants
```

The same text can produce different flow results depending on active tab.

Example in Card tab:

```text
-1000 снял с карты
flow = card
direction = out
entry_type = card_expense
```

Example in Cash tab:

```text
+1000 снял с карты
flow = cash
direction = in
entry_type = cash_income
```

## Step 6 — Determine entry type

Cash:

```text
+ => cash_income
- => cash_expense
```

Card default:

```text
- => card_expense
+ => card_income only if explicitly allowed or used for correction
```

Special phrases:

```text
остаток, opening balance, balance brought forward => opening_balance
информационная строка, не считается, info => info
корректировка, correction => correction
```

## Step 7 — Category suggestion

Category is determined by rule weights.

Rules can be:

- keyword;
- phrase;
- regex;
- supplier;
- role;
- language-specific;
- workspace-specific.

The engine calculates scores by category and returns:

```text
suggested_category
confidence
matched_rules
explanation
```

If confidence is low:

```text
category = other
status = other_review
```

## Step 8 — Actor detection

Actor is detected separately from category.

Examples:

```text
-500 Вова аванс
actor = Вова
category = crew or accountable money based on surrounding words
```

```text
-87 Вова купил кабель
actor = Вова
category = tech_parts
```

Names alone must not force a category.

Actor clues:

- capitalized human-like tokens;
- known aliases;
- role words: captain, crew, hostess, stewardess, помощник;
- supplier/company names.

## Step 9 — Attachments

An entry may have attachments added during or after entry creation.

Attachment does not change arithmetic.

## Step 10 — Balance calculation

Cash-like flows with live balance must calculate `balance_after` sequentially.

If records are inserted between existing records, following balances must recalculate.

Card default flow does not need `balance_after` unless card balance mode is enabled.

## Training without AI

Manual category changes may create rules, but only after user confirmation.

Bad rule prevention:

- never create a rule from generic words like bought, paid, today, boat, cash, card;
- prefer meaningful nouns and supplier names;
- require minimum word length;
- store rule source and creator;
- allow disable/delete rule.

## Other expenses behavior

If the engine cannot classify safely:

```text
category = other
status = other_review
```

UI must show this in strong orange service text and provide a category reassignment button.

## Required parser output

```json
{
  "raw_text": "-250 рыба",
  "sign": "-",
  "amount": 250,
  "description": "рыба",
  "flow": "cash",
  "direction": "out",
  "entry_type": "cash_expense",
  "category_code": "provisions",
  "status": "recognized",
  "actor": null,
  "confidence": 0.91,
  "matched_rules": ["рыба -> provisions"]
}
```
