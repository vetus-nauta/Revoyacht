# 13 — State Machine

## Purpose

All agents must use the same states for entries, months, imports, and assistant records.

## Entry states

```text
draft
recognized
unrecognized
other_review
info
imported
assistant_pending
accepted
rejected
corrected
archived
```

### recognized

Valid counted entry.

### unrecognized

Visible row that does not count. Usually missing `+` or `-`.

### other_review

Counted row with category `other`, requiring later review.

### info

Visible informational row that does not count.

### imported

Entry created from import source.

### assistant_pending

Assistant-created row not yet attached to main flow.

### corrected

Entry changed through correction flow.

## Month states

```text
open
live
review
closed
reopened
corrected
```

### open/live

Normal active month.

### review

Month is being checked before closure.

### closed

Month is locked. Editing requires correction or chain recalculation.

### reopened

Closed month temporarily reopened with Director/admin action.

### corrected

Month changed by explicit correction entry.

## Import states

```text
detected
excluded
included
parsed
review_needed
imported
failed
```

### detected

File found but not processed.

### excluded

File excluded by title marker or duplicate decision.

### included

File approved for parsing.

### parsed

Rows were read and normalized.

### review_needed

Some rows need manual review.

### imported

Accepted entries created.

### failed

Import failed with reason.

## Assistant record states

```text
draft
submitted
accepted
rejected
edited_by_admin
attached_to_report
```

Assistant records do not enter the main journal until accepted.

## State-change rules

- invalid entries cannot become counted unless edited and re-parsed;
- closed months cannot change silently;
- rejected assistant entries stay traceable;
- imported rows keep source mapping;
- archived entries remain in audit trail.
