# RevoYacht / Yacht Flex Deck — Builder V2 continuation brief

Date: 2026-05-07

This is the compact source-of-truth for continuing the current Builder V2 work after context pressure.

## 1. Product meaning

RevoYacht / Yacht Flex Deck is not a landing page and not a visual toy. It is a yacht-first operational digital twin and structure constructor.

Core hierarchy:

```text
Fleet
  -> Yacht
      -> ready-made motor yacht structure
      -> build from scratch / Builder V2
          -> hull configuration: monohull / catamaran / trimaran
          -> shared/common decks
          -> hull-specific decks
          -> area / zone
          -> equipment
          -> instances
          -> object refs / future service-cardholder hooks
```

The builder is the base. Service/cardholder belongs to the future main RevoYacht system and must not become a second service app inside YFD now.

## 2. Product truth

Ready-made motor yacht structure is not old and not demo. It is a real product mode and the interaction baseline.

Builder V2 is the current active track. It must reach the ready-made standard before sailing vessels are developed further.

Sailing builder comes later as a specialization of the same builder standard, not as a parallel architecture.

## 3. Current live version

Current live demo:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d4h-hull-marker-buttons
```

Current version string:

```text
20260508-v40d3d4h-hull-marker-buttons
```

Main files:

```text
private/yacht-flex-deck/index.html
private/yacht-flex-deck/assets/yfd-core.js
private/yacht-flex-deck/assets/yacht-flex.css

public_html/yacht-flex-demo/index.html
public_html/yacht-flex-demo/assets/yfd-core.js
public_html/yacht-flex-demo/assets/yacht-flex.css
```

FTP is available, but credentials must not be written into handoff files.

## 4. Work discipline

Always work narrowly:

1. Inspect current private files first.
2. Download private and public current files.
3. Patch locally.
4. Check JS brace/backtick counts.
5. Run grep/marker checks.
6. Use Playwright screenshots for mobile and desktop when layout is affected.
7. Upload backups before overwrite.
8. Upload patched private files.
9. Sync the same files to public demo.
10. Download back and compare private/public.
11. Give live URL with version query.

Do not make broad rewrites. Do not mix service, sailing, library and visual rules in one patch unless explicitly requested.

## 5. Current Builder V2 rules

### 5.1 Shared decks

For 2/3 hull motor yachts, shared/common deck is one deck/platform above all hulls.

Data model:

```text
state.builder.sharedDecks
```

Shared deck must not be stored as a deck inside one hull.

Visual rule:

```text
Shared deck card spans full shared section above hull rail.
It is not a small card over port/center/starboard hull.
```

Recent patch:

```text
D3D-4C — shared deck full width
version: 20260507-v40d3d4c-shared-deck-full-width
```

### 5.2 Hull-specific decks

Hull decks live inside:

```text
state.builder.hulls[].decks
```

They belong to a specific hull and hull mode:

```text
hullId
hullMode
```

Catamaran / trimaran hull columns are independent. They must not auto-sync deck content.

### 5.3 Open screen action row rule

For opened Builder objects, structural object controls belong in the top action row, right side, before Gallery/Camera.

Current rule:

```text
Back | object controls | Gallery | Camera
```

Object controls:

```text
Open / Locked
Edit
Delete
```

This applies to:

```text
Deck / Shared Deck
Area / Zone
Equipment
```

Hull marker is permanent, so hull screen does not get Edit/Delete in this pass.

Recent patch:

```text
D3D-4D — builder row controls
version: 20260507-v40d3d4d-builder-row-controls
```

What D3D-4D changed:

- removed duplicate top `+ Add item` from Builder open screens;
- moved Deck / Area / Equipment object controls into the top action row;
- kept Gallery and Camera at the right edge;
- left add actions in the working area below;
- added bottom add-row when a non-empty Deck/Area/Hull still needs adding;
- kept equipment `+ Add instance` in the instances section.

### 5.4 Add item rule

Do not duplicate `+ Add item` in the top action row and lower workspace.

Correct pattern:

```text
Top action row = navigation + object controls + media
Workspace/empty state = create child item
```

For empty Deck/Area/Hull:

```text
empty state contains + Add item
```

For non-empty Deck/Area/Hull:

```text
bottom add-row contains + Add item
```

For Equipment:

```text
instances section contains + Add instance
```

### 5.5 Small cards in multihull rails

Small deck cards in multihull rail must stay clean:

```text
title
item count
tap opens
```

Do not put Lock/Edit/Delete on small rail cards. Actions belong inside the opened object screen.

### 5.6 Photo/Gallery rule

Gallery and Camera are context photos for the currently open object.

They are not:

```text
global yacht gallery
service-card photos
```

Future service/cardholder photos stay in the main service system.

### 5.7 Builder library modal rule

Builder Area / Zone `From library` uses the ready-made motor yacht library modal standard:

```text
fullscreen modal
grouped library sections from Main Equipment Base
tap item to select
Add selected confirms
```

Builder library attach creates Builder equipment objects and supports both:

```text
admin_base_main bridge ids
legacy equipment_library ids
```

Do not return to direct-attach accordion library UI.

### 5.8 Builder root header/action row/deck badges

Builder V2 root header is product-led:

```text
REVOYACHT
Operational yacht structure builder for decks, zones and onboard equipment.
```

Builder V2 root action row:

```text
Back | yacht name card | Gallery | Camera
```

The yacht name card reads from the active yacht created in the yacht setup/fleet flow:

```text
getActiveYacht().name
```

Deck cards on Builder V2 root must not show raw `N items` everywhere. Use professional count labels:

```text
Empty
1 item
N items
```

This applies to both shared decks and hull-specific decks.

## 6. Current code landmarks

Important functions in `assets/yfd-core.js`:

```text
renderCustomBuilderScreenV2()
renderBuilderV2DeckCard(deck, extraClass='')
renderBuilderV2HullMarkerCard()
renderBuilderRootYachtNameCard()
formatBuilderDeckItemCount(count)

renderBuilderHullScreen()
renderBuilderDeckScreen()
renderBuilderAreaScreen()
renderBuilderEquipmentScreen()
renderBuilderAreaLibraryModal(areaId)

renderBuilderScreenControls(type, id, locked)
renderBuilderLockControl(id, locked)
renderBuilderEditButton(type, id)

normalizeBuilderModel()
createBuilderDeck()
createBuilderEquipmentObjectFromLibrary()
findBuilderDeck()
findBuilderArea()
findBuilderEquipment()

openBuilderDeleteDeckModal()
openBuilderDeleteItemModal()
removeBuilderDeck()
removeBuilderItem()

renderReadyEquipmentLibraryModal()
getReadyLibraryGroups()
findReadyLibraryBridgeItem()
attachReadyLibraryEquipment()
selectBuilderAreaLibraryItem()
```

Important CSS markers in `assets/yacht-flex.css`:

```text
V40-D3D-4C Shared deck spans all hulls
V40-D3D-4D Builder object controls live in action row
V40-D3D-4E Builder library modal matches ready standard
V40-D3D-4F Builder root brand and yacht action card
V40-D3D-4G Builder deck item badges
V40-D3D-4H Builder hull marker buttons
```

## 7. Latest completed work

### D3D-4B

Moved Deck screen controls out of the header into a visible row.

### D3D-4C

Made shared deck full-width above all hulls.

### D3D-4D

Moved object controls into top action row and removed duplicate top Add item across the builder.

### D3D-4E

Moved Builder Area / Zone `From library` onto the ready-made fullscreen select-then-confirm library modal, and bridged Builder equipment creation to Main Equipment Base items.

### D3D-4F

Changed Builder V2 root header from `Builder V2` to `REVOYACHT`, added product subtitle, and added a yacht-name card between Back and Gallery/Camera. Gallery and Camera are pressed to the right on root action row.

### D3D-4G

Reworked Builder V2 root deck count badges for shared and hull-specific decks. Counts now render as `Empty`, `1 item`, or `N items` instead of raw always-plural `N items`.

### D3D-4H

Reworked Builder V2 root hull marker cards into clear clickable buttons. Removed the inner narrow `Hull` badge/card, kept one attached `HULL` tab above each card, and centered the professional hull labels `PORT`, `MAIN HULL`, and `STBD`.

Latest backup stamp:

```text
20260508-063454
```

Earlier relevant backup stamps:

```text
20260507-231840  backup before D3D-4G
20260507-231220  backup before D3D-4F
20260507-225321  backup before D3D-4E
20260507-224313  backup before D3D-4D
20260507-223048  correct backup before D3D-4C
20260507-220959  backup before D3D-4B
```

## 8. Verification already done

For D3D-4H:

```text
private/public synced
node --check OK via bundled Node
local/live upload hash compare OK
live HTML version OK
live JS/CSS markers OK
Playwright local mobile/desktop:
  Builder root header REVOYACHT OK
  yacht name card OK
  Gallery/Camera right OK
  deck badges show 1 item / Empty OK
  hull marker cards show PORT / MAIN HULL / STBD OK
  old inner Hull badge removed from hull marker cards OK
Playwright live mobile/desktop:
  Builder root header REVOYACHT OK
  yacht name card OK
  Gallery/Camera right OK
  deck badges show 1 item / Empty OK
  hull marker cards show PORT / MAIN HULL / STBD OK
```

Local screenshots:

```text
row-controls-deck-mobile.png
row-controls-area-mobile.png
row-controls-equipment-mobile.png
row-controls-hull-mobile.png
row-controls-deck-desktop.png
builder-library-d3d4e-mobile.png
builder-library-d3d4e-desktop.png
builder-library-live-d3d4e-mobile.png
builder-library-live-d3d4e-desktop.png
builder-root-d3d4f-mobile.png
builder-root-d3d4f-desktop.png
builder-root-d3d4g-one-item-mobile.png
builder-root-d3d4g-one-item-desktop.png
builder-root-live-d3d4g-mobile.png
builder-root-live-d3d4g-desktop.png
builder-root-d3d4h-hull-buttons-v2-mobile.png
builder-root-d3d4h-hull-buttons-v2-desktop.png
builder-root-live-d3d4h-hull-buttons-mobile.png
builder-root-live-d3d4h-hull-buttons-desktop.png
shared-deck-live-d3d4c-mobile.png
shared-deck-live-d3d4c-desktop.png
```

## 9. Current UX observation

The D3D-4D action row is functionally correct:

```text
Back | Open/Edit/Delete | Gallery | Camera
```

On mobile, space is tight but Playwright metrics show no overflow:

```text
Back left
Open/Edit/Delete middle-right
Gallery/Camera right
top Add removed
bottom Add remains
```

User should visually confirm on iPhone before deeper changes.

The D3D-4E Builder Area library modal now follows the ready-made library standard:

```text
fullscreen library
category sections
selected item state
bottom Cancel / Add selected row
```

The D3D-4H Builder root now follows:

```text
Header: REVOYACHT
Action row: Back | Yacht name | Gallery | Camera
Deck badge examples: Empty / 1 item / N items
Hull marker cards: attached HULL tab + centered PORT / MAIN HULL / STBD
```

## 10. Next likely steps

Recommended next work after user visual approval:

1. User visually confirms D3D-4H Builder root hull marker buttons on iPhone.
2. Polish action row labels/icons if user says it feels cramped.
3. Continue Area/Zone and Equipment screen standardization.
4. Audit remaining Builder screens for the same standard before touching sailing screens.
5. Only after Builder V2 is stable, start sailing vessel builder.

Do not start service/cardholder implementation now.

## 11. Short continuation prompt

```text
Continue RevoYacht / Yacht Flex Deck Builder V2 from version 20260508-v40d3d4h-hull-marker-buttons.

Current focus: Builder V2 for motor monohull/catamaran/trimaran before sailing.

Rules:
- ready-made motor yacht is baseline, not old/demo;
- shared decks are common full-width platforms above all hulls and live in state.builder.sharedDecks;
- hull-specific decks live in state.builder.hulls[].decks;
- small rail deck cards stay clean;
- Builder V2 root header says REVOYACHT;
- Builder V2 root action row uses Back | Yacht name | Gallery | Camera;
- Builder V2 root deck badges use Empty / 1 item / N items;
- opened Deck/Area/Equipment screens use Back | Open/Edit/Delete | Gallery | Camera;
- top Add item is removed from action row;
- add child actions live in empty state / bottom add row;
- Builder Area / Zone From library uses fullscreen select-then-confirm library modal;
- service/cardholder remains future hook only.

Always inspect, backup, patch narrowly, verify, sync private/public, and give versioned demo URL.
```
