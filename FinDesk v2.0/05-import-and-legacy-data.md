# 05 — Import and Legacy Data

## Purpose

FinDesk v2.0 must learn from existing financial files but must not inherit old broken logic.

Legacy sources are training and import sources, not the new core model.

## Source folders

Importer must support recursive traversal.

Expected structure example:

```text
Buhgalteriya
 ├─ current files
 ├─ ARHIV
 ├─ Oplata kartoy
 └─ Oplata moimi dengami
```

Folder names may be Cyrillic or Latin. Import must not depend on exact casing.

## Include/exclude by title

Automatically exclude files with title markers:

```text
не отправлял
не отправлено
не готово
не закончен
не закончено
не полный
неполный
черновик
draft
test
```

Excluded files are not deleted. They are recorded as:

```text
include_decision = excluded_by_title_marker
```

Admin may include them manually later.

## Final-version priority

If several files describe the same period, prefer final/clean versions.

Priority words:

```text
финальный
final
clean
чистый
```

Examples:

```text
13.01.23.xls
13.01.23 финальный.xls
```

Use final version.

If there is a normal file and a “not sent” file:

```text
03.05.24.xlsx
03.05.24-не отправлял.xlsx
```

Use normal file, exclude not-sent file.

## Date logic

Date inside row is stronger than date in filename.

Order:

1. row date;
2. previous row date if row date is empty;
3. date from file title;
4. file updated date as weak fallback.

This is important because old reports may contain operations from earlier months.

## Old table format

Old files may contain columns like:

```text
дата
Описание платежа
Приход КЕШ
Расход КЕШ
Исполнитель
Приход КАРТА
Расход КАРТА
Сводные данные
```

Importer must map these into entries.

## Mapping old cash columns

If `Приход КЕШ` has value:

```text
flow = cash
direction = in
entry_type = cash_income
amount = value
```

If `Расход КЕШ` has value:

```text
flow = cash
direction = out
entry_type = cash_expense
amount = value
```

## Mapping old card columns

If `Расход КАРТА` has value:

```text
flow = card
direction = out
entry_type = card_expense
amount = value
```

If `Приход КАРТА` has value, import as card income or opening/card correction depending on description.

## New lightweight format

Newer files may look closer to a chronological journal with description, expense, and balance.

Importer must detect:

- row number;
- description;
- income/expense amount;
- balance after;
- info lines;
- comments.

## Info rows

Rows containing phrases like these must not affect arithmetic:

```text
информационная строка
не считается
comment
info
```

They are imported as:

```text
entry_type = info
status = excluded
```

## Opening balance

Rows containing:

```text
остаток
переход
opening balance
balance brought forward
```

should be considered opening balance if placed at the beginning of a period or clearly described as transition.

Opening balance is not external income.

## Duplicate prevention

Importer must store:

- source file id;
- source file name;
- sheet name;
- row number;
- raw row JSON;
- normalized entry id.

Before importing, check if the same source row has already been imported.

If two files overlap by period, mark duplicates as `duplicate_suspect` for review.

## Monthly allocation

Entries are assigned to months by operation date, not file date.

If date is missing, importer may use inherited date, then file title date.

## Import output

Importer must produce a review report:

```text
files scanned
files included
files excluded
rows parsed
entries created
rows unrecognized
other expenses count
suspected duplicates
months covered
```

## First MVP import target

Do not import all years first.

First target:

1. import one old Excel file;
2. map cash/card correctly;
3. create normalized entries;
4. generate monthly summary;
5. show unrecognized/other rows;
6. compare totals against source summary.

Only then expand to full archive.
