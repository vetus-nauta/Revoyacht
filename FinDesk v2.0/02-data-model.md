# 02 — Clean Data Model

## Rule

Do not migrate old business logic into the new MVP core.

Old database and backend can be used as infrastructure donors only. New finance tables must be clean.

## Main entities

```text
users
workspaces
workspace_members
flows
entries
categories
category_rules
actors
attachments
monthly_closures
import_sources
import_rows
audit_log
```

## workspaces

A workspace is a separate financial space.

Fields:

```text
id
name
type: yacht | family | personal | business | trip | custom
currency
locale
created_by
created_at
updated_at
archived_at
```

## workspace_members

Defines access to a workspace.

Roles:

```text
owner
admin
assistant
viewer
```

Assistants can keep their own journals. Their records are pending until accepted by admin.

## flows

A flow is a funding source.

MVP flow types:

```text
cash
card
assistant_journal
```

Fields:

```text
id
workspace_id
name
type
has_live_balance
is_default
created_at
```

Cash usually has live balance. Card does not require live bank balance in MVP.

## entries

Main source-of-truth table.

Fields:

```text
id
workspace_id
flow_id
created_by
actor_id nullable
date
raw_text
sign: + | - | null
amount
direction: in | out | none
entry_type
category_id nullable
status
balance_after nullable
source_type: manual | import | assistant | correction
source_id nullable
source_row_id nullable
notes nullable
created_at
updated_at
archived_at
```

Entry types:

```text
cash_income
cash_expense
card_expense
card_income
opening_balance
correction
info
unrecognized
assistant_pending
```

Statuses:

```text
recognized
unrecognized
other_review
excluded
imported
assistant_pending
accepted
rejected
corrected
duplicate_suspect
```

## categories

Categories are fixed for MVP, editable only by admin/settings later.

Fields:

```text
id
workspace_id nullable
code
name
direction: income | expense | movement | mixed
parent_code nullable
sort_order
is_system
is_active
```

Direction defines how the category should be treated in reports.

Examples:

```text
commercial_income => income
cash_topup_from_card => movement
crew/fuel/provisions/etc. => expense
other => expense by default
```

Global categories may be copied into workspace categories.

## category_rules

Rules for auto-categorization.

Fields:

```text
id
workspace_id nullable
category_code
pattern
pattern_type: keyword | phrase | regex | supplier | role
language: ru | en | it | es | de | bcms | multi
weight
negative_weight
requires_any nullable
excludes_any nullable
created_by_user
is_active
```

Rules must be explainable. A category suggestion should be traceable to matched rules.

## actors

Actor is a person, role, supplier, or company involved in an entry.

Fields:

```text
id
workspace_id
name
actor_type: person | role | supplier | company | unknown
aliases json
notes
created_at
```

Actor is not category.

## attachments

Each entry can have multiple attachments.

Fields:

```text
id
entry_id
file_name
file_url
mime_type
size_bytes
image_mode: original | compressed | grayscale_scan
created_at
```

## monthly_closures

Locks and comments for months.

Fields:

```text
id
workspace_id
year
month
opening_balance
closing_balance
is_closed
comment
closed_by
closed_at
```

Numbers can be stored as snapshots, but reports must be reproducible from entries.

## import_sources

Tracks imported files or legacy sources.

Fields:

```text
id
workspace_id
source_type: google_drive | excel | legacy_db | manual_upload
file_name
file_url
file_id
status
include_decision
reason
created_at
```

Include decisions:

```text
included
excluded_by_title_marker
excluded_duplicate
included_partially
manual_review
```

## import_rows

Keeps row-level mapping from source to normalized entries.

Fields:

```text
id
import_source_id
sheet_name
row_number
raw_json
entry_id nullable
parse_status
parse_notes
```

## audit_log

Every meaningful edit should be logged.

Fields:

```text
id
workspace_id
entity_type
entity_id
action
before_json
after_json
performed_by
created_at
```
