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

Sailing builder comes as a specialization of the same builder standard, not as a parallel architecture. First engineering prototype is now `Jeanneau SO439 - 2023`: sailing yacht / monohull / Bermudan sloop.

## 3. Current version

Versioned demo URL after `public_html/yacht-flex-demo` is deployed:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5k-deep-layout-polish
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5l-so439-template
```

Public direct placeholder:

```text
https://brkovic.ltd/revoyacht/
```

Current version string:

```text
20260508-v40d3d5l-so439-template
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

## 3a. Stable checkpoint 08/05/26

Full local/Google Drive checkpoint was created before the SO439 work:

```text
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\stable-08-05-26-20260508-180952
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\stable-08-05-26-20260508-180952.zip
```

Manifest notes: no credentials stored.

For continuing from a Linux computer or a fresh chat, read first:

```text
docs/REVOYACHT_LINUX_HANDOFF_20260508.md
```

## 3b. Latest delta - SO439 sailing ready-made

- Added second Structure Template: `Jeanneau SO439 - 2023`.
- Template key: `jeanneau_sun_odyssey_439`.
- Category: sailing yacht / monohull / Bermudan sloop / fractional sloop.
- Ready-made creation card appears only for `Sailing + 1 hull + Bermuda Sloop`.
- Ready-made SO439 root has sailing rig sections first: `AFT SAILS`, `FORWARD SAILS`, `TOP`, `SPAR`, `RIGS`.
- SO439 hull/deck/system layers are separated below the sailing rig: `Template Identity`, `Hull Type Layer`, `Deck / Exterior`, `Hull / Underwater`, `Interior`, `Machinery`, `Electrical`, `Plumbing`, `Deck Equipment`, `Steering`, `Navigation & Electronics`, `Safety`.
- Motor ready-made layers such as `Hardtop`, `Flybridge`, `Sun Deck` are not shown inside SO439 ready-made.
- SO439 equipment defaults are registered into the local demo equipment store for the prototype.
- Structure Templates catalog now lists both the motor example and `Jeanneau SO439 - 2023`; the live mirror reflects the active ready-made tree.
- Public placeholder page exists at `public_html/revoyacht/index.html` and is deployed to `https://brkovic.ltd/revoyacht/`.

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

For opened Builder objects, structural object controls belong in the top action row, right side, before Gallery.

Current rule:

```text
Back | object controls | Gallery
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
- kept Gallery at the right edge;
- left add actions in the working area below;
- parked Camera / Quick Shot UI for future use without removing its script;
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

Gallery is the visible context photo entry for the currently open object.

Camera / Quick Shot is parked for future use:

```text
YFD_QUICK_SHOT_ENABLED=false
openQuickShot() remains in code
```

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
Back | yacht name card + M/Y or S/Y | Gallery
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
V40-D3D-4I Builder yacht prefix and parked camera
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

Changed Builder V2 root header from `Builder V2` to `REVOYACHT`, added product subtitle, and added a yacht-name card between Back and Gallery. Gallery is pressed to the right on root action row. Camera was later parked in D3D-4I.

### D3D-4G

Reworked Builder V2 root deck count badges for shared and hull-specific decks. Counts now render as `Empty`, `1 item`, or `N items` instead of raw always-plural `N items`.

### D3D-4H

Reworked Builder V2 root hull marker cards into clear clickable buttons. Removed the inner narrow `Hull` badge/card, kept one attached `HULL` tab above each card, and centered the professional hull labels `PORT`, `MAIN HULL`, and `STBD`.

### D3D-4I

Removed the context word `Yacht` from the Builder root yacht-name card and appended the vessel prefix instead: `M/Y` for motor yachts and `S/Y` for sailing yachts. Parked Camera / Quick Shot UI everywhere with `YFD_QUICK_SHOT_ENABLED=false`; the `openQuickShot()` implementation remains for future use.

Deployed to live demo on 2026-05-08 after HTTP verification. Server backup of the previous live files is stored in Google Drive:

```text
FOR CODEX/Интернет-проекты/01-RevoYacht/04-Backups-archives/server-before-v40d3d4i-20260508-081030
```

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

The current D3D-4I action rows are:

```text
Root: Back | yacht name + M/Y or S/Y | Gallery
Opened screens: Back | Open/Edit/Delete | Gallery
```

On mobile, the camera slot is no longer reserved:

```text
Back left
yacht name or Open/Edit/Delete middle-right
Gallery right
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

The D3D-4H Builder root introduced:

```text
Header: REVOYACHT
Action row at D3D-4H: Back, Yacht name, Gallery and Camera; superseded by D3D-4I camera parking.
Deck badge examples: Empty / 1 item / N items
Hull marker cards: attached HULL tab + centered PORT / MAIN HULL / STBD
```

The D3D-4I Builder action row now follows:

```text
Root action row: Back | Yacht name + M/Y or S/Y | Gallery
Opened screens: Back | Open/Edit/Delete | Gallery
Camera / Quick Shot UI is parked with YFD_QUICK_SHOT_ENABLED=false.
The openQuickShot() script and data-quick-shot handler remain in code for future use.
```

## 10. D3D-4J task/menu foundation

D3D-4J introduces the first task UI foundation across Builder cards:

```text
Version: 20260508-v40d3d4j-task-menus
Live URL: https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d4j-task-menus
```

Implemented rules:

1. Object cards use a hidden menu instead of always-visible edit/delete/gallery buttons.
2. Hidden menu actions are Edit, Delete, Gallery, Tasks, View tasks.
3. Lock action is removed from the visual UI for now.
4. Cards show numeric-only task status boards instead of child/object counters:
   - red = open / not completed;
   - yellow = in progress;
   - green = completed.
5. Task modal keeps the object title immutable because the task is opened from a concrete card/context.
6. Task modal includes assignee, description, status, deadline, View report, Cancel, Save.
7. Task UI is applied to decks, hulls, areas/zones, equipment, and equipment instances.
8. Multihull lower deck cards stay clean externally; their menu appears in the opened deck context card.
9. Multihull hull marker cards stay clean externally; their menu appears in the opened hull context card.
10. Camera / Quick Shot UI remains parked with `YFD_QUICK_SHOT_ENABLED=false`.

Data note:

```text
state.tasks stores per-object task records under keys like deck:<id>, hull:<id>, equipment:<id>, instance:<id>.
This is UI/local-state foundation only; dashboard, crew notifications, messenger integration, and reports are future work.
```

Verification on 2026-05-08:

```text
Node --check private/public yfd-core.js: OK
git diff --check: OK
private/public hashes for index, CSS, JS: OK
Local Playwright mobile catamaran flow: OK
Local Playwright desktop equipment/instance flow: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright mobile catamaran task flow: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d4j-20260508-092625
```

## 11. D3D-4K task button and navigation correction

D3D-4K corrects the first task/menu foundation after visual review:

```text
Version: 20260508-v40d3d4k-tasks-forward
Live URL after deploy: https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d4k-tasks-forward
```

Implemented rules:

1. Gallery is hidden everywhere in the Builder UI and removed from object menus.
2. Card task status is now a compact clickable `Tasks N` button.
3. `Tasks N` counts active tasks only: open plus in progress. Done tasks do not increase this compact number.
4. Clicking `Tasks N` opens the object task list; the list can open the new-task modal.
5. Object hidden menu keeps Edit, Delete, Tasks, View tasks.
6. Menu panel now has a top-layer click guard so empty Add deck/Add item areas do not receive clicks through the menu panel or panel gaps.
7. Builder root has a Forward button when the user has backed out of a deeper Builder screen.
8. Builder deck/area/equipment/hull screens use the same REVOYACHT header standard as the Builder root.
9. Builder context card shows the active yacht label first, including registration number when present; object context is shown in the subtitle, for example `Deck: main`.

Verification before deploy:

```text
Node --check private/public yfd-core.js: OK
git diff --check: OK
private/public hashes for index, CSS, JS: OK
Local Playwright mobile catamaran flow: OK
Local Playwright desktop equipment/instance flow: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright mobile catamaran flow: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d4k-20260508-101328
```

## 12. D3D-4L Builder library parity with ready-made mode

D3D-4L connects the customized motor-yacht Builder to the same equipment-library behavior that already works in the ready-made yacht flow:

```text
Version: 20260508-v40d3d4l-builder-library
Live URL after deploy: https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d4l-builder-library
```

Ready-made modal analysis:

1. The ready-made equipment library modal is rendered by `renderReadyEquipmentLibraryModal(moduleId)` and opened by `openReadyLibraryModal(moduleId)`.
2. It reads library groups through `getReadyLibraryGroups()`.
3. Primary source is the editable Admin Base / Main Equipment Base via `getAdminBaseMainEquipmentGroups()`.
4. Legacy `equipmentLibrary` is only a fallback after `normalizeEquipmentLibraryFromStore()`.
5. Attach flow uses `attachReadyLibraryEquipment(moduleId, libraryItemId)`, creates an item through `createReadyEquipmentItemFromLibrary(libraryItemId)`, saves it to `node.items`, then calls `saveState()` and rerenders the module.
6. Attached ready-made items keep library metadata: `library_ref`, `library_source`, `library_group_id`, `key`, and user meta.

Builder parity implemented:

1. Builder Deck, Hull, and Area / Zone add menus can now open the same library modal source.
2. Builder library buttons use target metadata: `data-builder-library-target-type` and `data-builder-library-target-id`.
3. New dispatcher `attachLibraryEquipmentToBuilderTarget(targetType, targetId, libraryItemId)` routes attachment to deck, hull, or area/zone.
4. New hull attachment flow `attachLibraryEquipmentToHull(hullId, libraryItemId)` saves library equipment into `state.builder.hulls[].equipment`.
5. `normalizeBuilderModel()` now preserves hull-level `children` and `equipment`, so hull-attached library equipment survives normalization/load.
6. Builder-created library equipment uses `createBuilderEquipmentObjectFromLibrary(libraryItemId)` and keeps `fromLibrary`, `library_item_id`, `library_ref`, `library_source`, `library_group_id`, `library_category`, and instances.

Verification before deploy:

```text
Node --check private/public yfd-core.js: OK
git diff --check: OK
private/public hashes for index, CSS, JS: OK
Local Playwright ready-made library modal flow: OK
Local Playwright Builder deck library flow: OK
Local Playwright Builder hull library flow: OK
Local Playwright Builder area/zone library flow: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright ready-made library modal flow: OK
Live Playwright Builder deck/hull/area library flow: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d4l-20260508-103454
```

## 13. D3D-4M Builder root mobile deck layout and task-menu cleanup

D3D-4M corrects the Builder root screen after visual review:

```text
Version: 20260508-v40d3d4m-mobile-decks
Live URL after deploy: https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d4m-mobile-decks
```

Implemented rules:

1. Root action row is now Back arrow | yacht name + M/Y or S/Y + registration | Forward arrow when forward history exists.
2. Back and Forward are arrow-only controls with accessible labels.
3. Registration is read from the yacht setup metadata and also supports legacy top-level `registration`.
4. For multihull Builder root, hull marker cards and lower hull-deck cards no longer show `Tasks N` directly; task creation/viewing lives inside the hidden object menu.
5. Shared/upper deck cards still show the compact `Tasks N` button.
6. `Tasks N` button styling is changed to a softer translucent orange professional pill.
7. Hidden object menu button is restyled as a proper pill control.
8. Right-side `>` chevrons were removed from Builder hull cards.
9. Shared deck add control is rendered first/top; newly created shared/upper decks are inserted at the top of the deck list.
10. Monohull Builder now has an `Upper decks` block above the main hull and `Lower decks` under the hull.
11. Monohull lower deck add control says `Add lower deck`; upper deck add control says `Add upper deck`.
12. Monohull lower deck grid is forced to full width.

Verification before deploy:

```text
Node --check private/public yfd-core.js: OK
git diff --check: OK
private/public hashes for index, CSS, JS: OK
Local Playwright catamaran mobile root: OK
Local Playwright monohull root: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright catamaran mobile root: OK
Live Playwright monohull root: OK
Live Playwright root Forward position: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d4m-20260508-110456
```

## 14. D3D-4N top bar, task pill, and choice modal polish

D3D-4N fixes the visual regressions found after D3D-4M:

```text
Version: 20260508-v40d3d4n-top-modal-polish
Live URL after deploy: https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d4n-top-modal-polish
```

Implemented rules:

1. Builder deep screens now use the same stable top order as root: Back arrow | context yacht/object card | Forward arrow when available.
2. Stronger CSS overrides prevent older `:has(.yfd-action-forward):has(.yfd-context-object-card)` rules from squeezing the context card.
3. On narrow mobile screens, context-card task/menu controls wrap cleanly so the yacht name and registration remain readable.
4. `Tasks 0` is now one clean orange pill; the number no longer has an inner outline or separate inner badge.
5. Hidden menu buttons no longer have inner borders and are aligned more cleanly on shared deck cards.
6. Hull/deck add-item choice modals now use the proper `yfd-action-modal` / `yfd-choice` structure.
7. The Area / Zone / Manual equipment / From library modal choices render as full styled cards instead of browser-default white buttons.

Verification before deploy:

```text
Node --check private/public yfd-core.js: OK
git diff --check: OK
private/public hashes for index, CSS, JS: OK
Local Playwright shared deck Tasks/menu visual state: OK
Local Playwright multihull lower deck task-hidden rule: OK
Local Playwright Builder deep top row with Forward: OK
Local Playwright hull add-item modal styling: OK
Local Playwright deck add-item modal styling: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright shared deck Tasks/menu visual state: OK
Live Playwright multihull lower deck task-hidden rule: OK
Live Playwright Builder deep top row with Forward: OK
Live Playwright hull add-item modal styling: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d4n-20260508-113622
```

Sailing builder base note for future algorithm work:

```text
Equipment base logic is correct for motor builder: current Builder uses the common motor yacht Main Equipment Base.
For future sailing Builder:
- lower hull/common hull equipment can share the sailing hull base;
- upper structure above the hull must branch by sailing rig type;
- supported rig-specific upper equipment branches are Bermudan sloop, ketch, and schooner;
- the Builder top/context card should show yacht name plus S/Y and the selected rig type where relevant;
- equipment library choices for sailing must filter/compose by selected rig type, not only by vessel type.
```

## 15. Next likely steps

Recommended next work after user visual approval:

1. Visually confirm D3D-4N on mobile for multihull root cards, hull screens, lower deck screens, zone cards, equipment cards, and equipment instance rows.
2. Decide final wording/icons for task statuses before connecting real dashboard logic.
3. Build the real task dashboard and report flow only after the card/menu foundation is approved.
4. Continue Area/Zone and Equipment screen standardization.
5. Only after Builder V2 is stable, start sailing vessel builder.

Do not start service/cardholder implementation now.

## 15.1. D3D-4O menu/modal ready-made polish - 2026-05-08

Version:

```text
20260508-v40d3d4o-menu-modal-ready
```

Implemented locally:

1. Hidden object menus now toggle explicitly on click/touch, including hull cards that are also clickable navigation cards.
2. Menu actions close the open details menu before opening modals, so the menu layer does not sit above modal backdrops.
3. Builder delete confirmations now call the real submit/delete functions instead of stale `confirmDeleteBuilder...` names.
4. Builder delete modals use the ready-made pattern: `yfd-action-modal`, `yfd-action-head`, `yfd-service-hook`, Cancel + Delete item.
5. Builder edit modal now matches the ready-made "Edit name & subtitle" pattern; object identity remains key/id-based and visible card text is edited separately.
6. Builder Add item modal for deck, hull, and area/zone now matches the ready-made segmented modal: Equipment / Area-Zone, Item name, Create item, From equipment library.
7. `Tasks 0` pills are anchored consistently on cards where they are visible.
8. Hidden menu buttons are anchored consistently on shared/upper decks, hull cards, lower decks, area/zone cards, equipment cards, and sailing root item cards.
9. Root Builder top row was re-stabilized for Back | yacht name + M/Y/S/Y + registration | Forward, including the after-Back state.
10. Modal backdrops now sit above open card menus to avoid click-through/transparent-layer conflicts.

Verification before upload:

```text
Node --check private yfd-core.js: OK
Node --check public yfd-core.js: OK
private/public JS hash match: OK
private/public CSS hash match: OK
Local Playwright private desktop: root top row, hull menu, shared deck delete modal, Add item modal, Back+Forward top row: OK
Local Playwright private mobile touch: hull menu opens without navigation, Add item segmented modal: OK
Local Playwright public desktop: shared deck delete modal and Add item modal: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright desktop: root/menu/delete/add/back-forward: OK
Live Playwright mobile touch: hull menu opens without navigation: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d4o-20260508-121738
```

## 16. Version 20260508-v40d3d5a-sailing-rig-db-admin

Branch:

```text
codex/demo-db-sailing-rig
```

Implemented:

```text
- Admin Base sailing category expanded from old Spar/Rigging/Sails sketch to full rig-type structure.
- sailingRigGroups now has Bermudan Sloop, Ketch, and Schooner.
- Bermudan Sloop sections: AFT SAILS, FORWARD SAILS, TOP, SPAR, RIGS.
- Ketch and Schooner sections: MAST SAILS, STAY / RIGGING / SAILS, TOP, SPAR, RIGS.
- Sailing rig data is organized by rig type, not by monohull/catamaran/trimaran hull type.
- Admin Base / Sailing Specific now supports item edit, item delete through confirmation modal, and comma-separated bulk add.
- Existing old localStorage sailing demo groups migrate once into the new structure.
- Sailing Builder root screen now renders rig-specific buttons from the Admin Base structure.
- Ready-made/library bridge exposes active sailing rig groups as admin_base_sailing for sailing yachts.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright Admin Base Sailing Specific edit/delete/bulk add: OK
Local Playwright Ketch builder root buttons: OK
Local Playwright mobile Bermudan sloop root buttons: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright Admin Base Sailing Specific bulk add: OK
Live Playwright Schooner builder root buttons: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5a-20260508-125300
```

## 17. Version 20260508-v40d3d5b - Structure Templates live ready-made sync

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5b-structure-template-sync
```

Implemented:

```text
- Admin Base / Structure Templates now renders a live table from the actual ready-made tree.
- The table includes order/path, level, title, type, parent, linked key/id, and add controls for containers.
- Adding equipment from Structure Templates writes into the ready-made parent item list.
- Adding equipment also writes into equipmentStore and defaultEquipmentStore so new ready-made yachts keep the item after working-state reset.
- Adding Area / Zone creates a ready-made area item plus linked treeNodes container.
- readyTemplateAdds persists static ready-made root additions across reloads.
- Deleting user-created synced ready-made items removes the matching readyTemplateAdds record and template equipment default when no longer used.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright Structure Templates add equipment + area + reload + ready-made Main Deck sync: OK
Local Playwright mobile Structure Templates add equipment modal: OK
Live HTTPS index/JS/CSS version checks: OK
Live Playwright Structure Templates bulk add + reload: OK
Live Playwright Structure Templates equipment + area + ready-made Main Deck sync: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5b-20260508-143606
```

Design rule:

```text
Structure Templates and Ready-made are not separate databases. Structure Templates is the administrative table/editor view for the same ready-made structure. Any item added there must become available in ready-made immediately and after reload/new ready-made yacht creation.
```

## 18. Version 20260508-v40d3d5c - Bidirectional Structure Templates / Ready-made sync

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5c-bidirectional-template-sync
```

Implemented:

```text
- Structure Templates now exposes Delete for user-created synced rows.
- Template-side Delete uses the same confirmation modal/policy as Ready-made user-created item delete.
- Deleting from Structure Templates removes the ready-made item, readyTemplateAdds record, and unused template equipment default.
- Deleting from Ready-made now refreshes Admin Base / Structure Templates correctly when that engineering screen is active.
- syncReadyTemplateEquipmentDefaults now scans the full ready-made/template tree, including nested treeNodes, so nested template equipment survives reload and new ready-made yacht creation.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright bidirectional sync:
- add equipment + area in Structure Templates
- delete equipment in Structure Templates
- verify it is absent from Ready-made Main Deck
- delete area in Ready-made Main Deck
- verify it is absent from Structure Templates
- final readyTemplateAdds records for those test items = 0
Local Playwright nested sync:
- add Area / Zone in Structure Templates
- add Equipment inside that new zone
- reload
- create new ready-made yacht
- verify area appears on Main Deck and nested equipment appears inside the area
Live HTTPS index/JS/CSS version checks: OK
Live Playwright bidirectional sync: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5c-20260508-145008
```

Engineering rule:

```text
Structure Templates and Ready-made must work both ways in developer/admin mode:
- add in Structure Templates -> appears in Ready-made;
- delete in Structure Templates -> disappears from Ready-made;
- delete user-created synced item in Ready-made -> disappears from Structure Templates;
- nested template equipment must persist through reload and new ready-made yacht creation.

This remains an engineering/admin mode only. End users should work through simplified yacht interfaces, not this template table.
```

## 19. Version 20260508-v40d3d5d - Sailing rig visual layout

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5d-sailing-rig-layout
```

Implemented:

```text
- Sailing Builder root now renders rig sections as a visual rig diagram, not a flat button list.
- Bermudan sloop layout:
  AFT SAILS on the left, FORWARD SAILS on the right, TOP / SPAR / RIGS stacked in the center.
- Ketch and Schooner layout:
  MAST SAILS on the left, STAY / RIGGING / SAILS on the right, TOP / SPAR / RIGS stacked in the center.
- TOP is always the top center card because it represents the mast top / masthead section.
- Upper decks remain directly below the rig diagram, then hull, then lower decks.
- All rig diagram cards remain clickable and open their corresponding sailing builder root.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright desktop/mobile:
- Bermudan sloop: AFT/Forward side layout + TOP above SPAR/RIGS: OK
- Ketch: Mast sails / Stay-Rigging-Sails side layout + TOP above SPAR/RIGS: OK
- Schooner: Mast sails / Stay-Rigging-Sails side layout + TOP above SPAR/RIGS: OK
Local screenshots inspected:
- tmp\sailing-bermudan-mobile.png
- tmp\sailing-ketch-desktop.png
Live HTTPS index/JS/CSS version checks: OK
Live Playwright desktop/mobile for all three rig types: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5d-20260508-154438
```

Sailing rig layout rule:

```text
Sailing rig roots on the Builder root page must show the physical rig logic:
- TOP = mast top / masthead and must be the top center card.
- SPAR and RIGS stay below TOP in the central mast/rig column.
- Bermudan sloop sail groups: AFT SAILS left, FORWARD SAILS right.
- Ketch / Schooner sail groups: MAST SAILS left, STAY / RIGGING / SAILS right.
- Deck construction begins below the rig diagram: Upper decks, hull, lower decks.
```

## 20. Version 20260508-v40d3d5e - Mobile hull title fit

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5e-mobile-hull-title-fit
```

Implemented:

```text
- Fixed mobile multihull hull marker titles so PORT and STBD do not split into vertical letters.
- Added mobile CSS guard against per-letter wrapping on .yfd-builder-v2-hull-card-title.
- Kept hull title readable with normal word wrapping only; menu button remains on the right.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright mobile sailing catamaran: PORT and STBD are one line: OK
Local screenshot inspected: tmp\mobile-hull-title-fit.png
Live HTTPS index/JS/CSS version checks: OK
Live Playwright mobile sailing catamaran: PORT and STBD are one line: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5e-20260508-155910
```

## 21. Version 20260508-v40d3d5f - Mobile menu and hull fit

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5f-mobile-menu-hull-fit
```

Implemented:

```text
- Mobile multihull hull marker titles are shifted left inside the hull card and stay one-line horizontal.
- Hull marker cards stay contained inside their hull section after the left-alignment change.
- Open object menus now close on outside pointer/touch before the next control handles the same tap.
- The transparent object-menu pseudo-backdrop is disabled so Add deck / Add shared deck slots are not blocked by an open menu.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright mobile sailing catamaran for Bermudan sloop, Ketch, Schooner: hull titles left/contained, outside tap closes menu, Add deck opens after menu: OK
Local screenshot inspected: tmp\v40d3d5f-fixed-bermudan-mobile.png
Live HTTPS index/JS/CSS version checks: OK
Live Playwright mobile sailing catamaran for Bermudan sloop, Ketch, Schooner: same checks OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5f-20260508-162437
```

UI rule:

```text
For mobile multihull sailing templates, PORT/STBD hull marker titles must stay left-aligned, one-line, and inside their card. Object menus must not block add-card controls; outside pointer/touch closes open menus first.
```

## 22. Version 20260508-v40d3d5g - Menu tap guard

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5g-menu-tap-guard
```

Implemented:

```text
- Open object menus are no longer transparent to outside tap/click.
- First outside tap/click closes the menu and is consumed.
- Second tap/click on the same underlying card/add slot performs the action.
- Clicks/taps inside the menu still work, including Tasks.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright mobile for Bermudan sloop, Ketch, Schooner: first outside Add deck tap does not open modal, second tap opens modal, Tasks inside menu opens task modal: OK
Local Playwright desktop for Bermudan sloop, Ketch, Schooner: first outside hull click closes menu without navigation, second click opens hull: OK
Live HTTPS index/JS version checks: OK
Live Playwright mobile for Bermudan sloop, Ketch, Schooner: first outside Add deck tap closes only, second tap opens modal: OK
Live Playwright desktop for Bermudan sloop, Ketch, Schooner: first outside hull click closes only, second click navigates: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5g-20260508-163401
```

UI rule:

```text
Object menus must behave like real modalized popovers: when a menu is open, the first outside tap/click closes it and must not activate the underlying card/add slot. Menu-internal actions must remain clickable.
```

## 23. Version 20260508-v40d3d5h - Object menu layer guard

Live URL after deploy:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5h-menu-layer-guard
```

Implemented:

```text
- Fixed object menu stacking over lower Add deck / add-zone slots.
- Open hull/card menus and their parent sections now rise above add-slot hover frames.
- The Add deck dashed frame no longer appears in front of the menu.
- Menu buttons, including View tasks at the bottom, remain the top hit target.
```

Verification:

```text
Node --check private/public yfd-core.js: OK
private/public index/CSS/JS hash match: OK
git diff --check: OK
Local Playwright mobile for Bermudan sloop, Ketch, Schooner: elementFromPoint on Edit/Delete/Tasks/View tasks returns the menu buttons, View tasks opens task list: OK
Local Playwright desktop hover for Bermudan sloop, Ketch, Schooner: hovering over the overlapped menu/add-slot area keeps View tasks as the top element, click opens task list: OK
Live HTTPS index/CSS version checks: OK
Live Playwright mobile and desktop for Bermudan sloop, Ketch, Schooner: same layer/hit-test checks OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5h-20260508-165046
```

UI rule:

```text
When an object menu is open, the menu panel must be above all add-slot hover/creation frames in the same hull/deck/shared section. The add-slot may remain visible behind it but must not be the top hit target.
```

## Latest version: 20260508-v40d3d5i-library-routing

Live URL:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5i-library-routing
```

Implemented:

```text
- Split Builder equipment library routing by source and target.
- Deck, hull, and area/zone library modals now use only Main Equipment Base.
- Sailing rig root library modals now use only Sailing Rig Base, filtered by active rig type and exact root section.
- Bermudan sloop roots route independently: AFT SAILS, FORWARD SAILS, TOP, SPAR, RIGS.
- Ketch and Schooner roots route independently: MAST SAILS, STAY / RIGGING / SAILS, TOP, SPAR, RIGS.
- Sailing root Add item modal now uses the same ready-made segmented modal pattern as lower Builder cards: Equipment / Area-Zone, Item name, Create item, From equipment library.
- Library attachments from sailing roots create sailing equipment items with source metadata and an initial instance.
```

Verification:

```text
Node syntax check private/public yfd-core.js: OK
private/public index/JS hash match: OK
Local Playwright routing: Main Equipment Base excludes sailing rig groups; Sailing Rig Base TOP/AFT roots show only their own group; selected TOP item attaches to sailing root: OK
Local Playwright rig checks: Ketch and Schooner TOP plus STAY / RIGGING / SAILS route to their own groups: OK
Live HTTPS script version check: OK
Live Playwright routing and rig checks: OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5i-20260508-171517
```

UI/data rule:

```text
For sailing yachts, the upper sailing rig diagram sections must use Sailing Rig Base only, filtered by selected rig type and exact section. Lower hull/deck/area Builder structures must use Main Equipment Base only, the same source as motor yachts.
```

## Latest version: 20260508-v40d3d5j-equipment-library-toggle

Live URL:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5j-equipment-library-toggle
```

Implemented:

```text
- In Builder Add item modals, From equipment library is visible/enabled only when the Equipment segment is selected.
- When Area / Zone is selected, the equipment library button is hidden and disabled.
- The handler also ignores library-open attempts from Area / Zone mode, so no hidden click path can open the equipment library.
```

Verification:

```text
Node syntax check private/public yfd-core.js: OK
private/public index/JS hash match: OK
Local Playwright: hull child modal and sailing root modal show library in Equipment mode, hide/disable it in Area / Zone mode, and Area / Zone mode cannot open the library: OK
Live Playwright desktop and mobile: same toggle/guard behavior OK
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5j-20260508-172853
```

UI rule:

```text
Add item modals may expose equipment library selection only for Equipment. Area / Zone creation is manual structure creation and must not show or open equipment library selection.
```

## Latest version: 20260508-v40d3d5k-deep-layout-polish

Live URL:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5k-deep-layout-polish
```

Implemented:

```text
- Deep Builder screens now share the same top layout as Builder V2 root:
  REVOYACHT header, then Back arrow | yacht/object context card | Forward arrow when available.
- Sailing rig root, sailing area, and sailing equipment screens were moved from the old custom sailing header/action row to the Builder V2 header/action standard.
- Top-row Add item / Add instance / Gallery / Quick Shot controls were removed from deep Builder and sailing Builder screens.
- Each deep screen now has one creation entry point per state: empty-state button when empty, bottom add row when populated, inline Add instance for equipment instances.
- Duplicate bottom information cards were removed from Builder hull/deck/area screens.
- Upper/shared deck object menu button dimensions and placement were fixed on mobile and desktop.
- Open object menus now stay above Add deck/Add item hover/creation frames; add slots are not click targets while a menu is open.
- Mobile Back arrow sizing and visibility were fixed so the context yacht/object card no longer overlaps it.
```

Verification:

```text
node --check private/yacht-flex-deck/assets/yfd-core.js: OK
node --check public_html/yacht-flex-demo/assets/yfd-core.js: OK
Local Playwright mobile: motor deck/area/equipment deep screens, sailing root/equipment screens, menu layer/hit-test: OK
Local Playwright desktop: motor deck/equipment deep screens: OK
Live HTTPS Playwright mobile on brkovic.ltd: asset version, motor deck/equipment, sailing root, menu layer/hit-test: OK
Screenshots:
tmp/layout-audit-v40d3d5k/motor-deck-empty-mobile.png
tmp/layout-audit-v40d3d5k/motor-equipment-mobile.png
tmp/layout-audit-v40d3d5k/sailing-equipment-mobile.png
tmp/layout-audit-v40d3d5k-live/live-sailing-root-mobile.png
Server backup before upload:
C:\Users\Vetus Nauta\Мой диск\FOR CODEX\Интернет-проекты\01-RevoYacht\04-Backups-archives\server-before-v40d3d5k-20260508-175605
```

UI rule:

```text
After entering any Builder deck/hull/area/equipment/sailing-root/sailing-item screen, the header and the row under it must remain predictable: REVOYACHT card first, then Back arrow, context yacht/object card, and Forward arrow if history exists. Do not reintroduce top-row Add item/Add instance/gallery/camera controls on these screens.
```

## 24. Short continuation prompt

```text
Continue RevoYacht / Yacht Flex Deck Builder V2 from version 20260508-v40d3d5k-deep-layout-polish.

Current focus: Builder V2 for motor monohull/catamaran/trimaran before sailing.

Rules:
- ready-made motor yacht is baseline, not old/demo;
- shared decks are common full-width platforms above all hulls and live in state.builder.sharedDecks;
- hull-specific decks live in state.builder.hulls[].decks;
- small rail deck cards stay clean;
- Builder V2 root header says REVOYACHT;
- Builder V2 root action row uses Back arrow | yacht name + M/Y or S/Y + registration | Forward arrow when available;
- Builder deep screens use Back arrow | context yacht/object card | Forward arrow when available;
- Builder top rows must not squeeze yacht name/registration on mobile; context controls may wrap inside the card;
- Builder V2 cards use compact clickable Tasks N buttons instead of child/object counters;
- Tasks N counts open plus in-progress tasks only;
- card actions live inside hidden menus: Edit, Delete, Tasks, View tasks;
- Gallery is hidden in Builder engineering flows;
- Builder root can show Forward after Back, using a forward navigation stack;
- Builder deck/area/equipment/hull screens use the REVOYACHT header and yacht-name context card with registration when present;
- lock is removed from visible UI for now;
- task modal includes immutable object title, assignee, description, status, deadline, View report, Cancel, Save;
- applies to decks, hulls, areas/zones, equipment, and equipment instances;
- multihull lower deck cards and multihull hull marker cards do not show Tasks N directly; tasks/view tasks are inside their hidden object menus;
- mobile multihull hull marker titles must stay readable horizontally; PORT/STBD must never split into vertical letters;
- mobile multihull hull marker titles are left-aligned, stay inside the card, and keep the menu on the right;
- object menus close on outside pointer/touch and must not block Add deck / Add shared deck controls;
- object menus are not transparent to outside tap/click: the first outside activation closes only, the second activation performs the underlying action;
- menu-internal actions must remain clickable while the outside guard is active;
- object menu panels must stay above add-slot hover/creation frames; Add deck/Add shared deck frames must never become the top hit target over menu buttons;
- shared/upper deck cards may show compact orange Tasks N directly;
- Tasks N is a single orange pill with no inner badge outline;
- hidden menu buttons are polished pills without visible inner border artifacts;
- hull/deck/area add-item modals must use the ready-made segmented modal pattern: Equipment / Area-Zone, Item name, Create item, From equipment library;
- Builder edit modal must follow the ready-made "Edit name & subtitle" visual pattern; display text changes must stay separate from object identity keys/ids;
- Builder delete modal must follow the ready-made delete confirmation pattern and must not delete future service/cardholder history;
- monohull root has Upper decks above MAIN HULL and Lower decks under MAIN HULL;
- shared/upper Add deck control is rendered at the top and new shared/upper decks are inserted at the top of the list;
- top Add item is removed from action row;
- add child actions live in empty state / bottom add row;
- deep Builder screens must have exactly one creation entry point per state; no duplicate lower information cards that look like add zones/equipment;
- sailing rig root and sailing rig item screens use the same Builder V2 REVOYACHT header/action-row standard;
- upper/shared deck object menu buttons must stay fixed-size and inside the card on mobile and desktop;
- when an object menu is open, Add deck/Add item hover frames must not become the top hit target;
- ready-made equipment library modal uses getReadyLibraryGroups(), primarily Admin Base / Main Equipment Base via getAdminBaseMainEquipmentGroups();
- Builder Deck, Hull, and Area / Zone From library use the same Main Equipment Base source and the same select-then-confirm library modal pattern;
- Builder library attachments keep library metadata and save into the correct target: deck.equipment, hull.equipment, or area.equipment;
- Builder Deck, Hull, and Area / Zone From library must never show Sailing Rig Base groups;
- Sailing rig root From library must show only Sailing Rig Base groups for the selected yacht rig and exact root section;
- Sailing rig root library attachments save as sailing root equipment with metadata and an initial instance;
- Add item modals show From equipment library only while Equipment is selected; Area / Zone hides/disables library selection and cannot open it;
- camera / Quick Shot UI is parked via YFD_QUICK_SHOT_ENABLED=false, but openQuickShot() remains for future use;
- sailing Builder equipment base branches upper equipment by rig type: Bermudan sloop, ketch, schooner;
- Sailing Builder root renders a rig diagram above upper decks;
- Bermudan sloop rig diagram: AFT SAILS left, FORWARD SAILS right, TOP/SPAR/RIGS in the center;
- Ketch and Schooner rig diagram: MAST SAILS left, STAY / RIGGING / SAILS right, TOP/SPAR/RIGS in the center;
- TOP must remain the top center card because it represents mast top / masthead equipment;
- Admin Base has sharedGroups, motorYachtGroups, and sailingRigGroups;
- sailingRigGroups sections are rig-type driven: Bermudan Sloop = AFT SAILS / FORWARD SAILS / TOP / SPAR / RIGS; Ketch and Schooner = MAST SAILS / STAY-RIGGING-SAILS / TOP / SPAR / RIGS;
- Admin Base / Sailing Specific can edit/delete equipment items and bulk-add comma-separated equipment names;
- Admin Base / Structure Templates is a live table generated from the same ready-made tree opened by ready-made motor yacht mode;
- Structure Templates rows show order/path, level, title, type, parent, linked key/id, and container add controls;
- adding equipment in Structure Templates writes into the ready-made tree and equipmentStore/defaultEquipmentStore;
- adding Area / Zone in Structure Templates creates a linked treeNodes container and a ready-made area card;
- readyTemplateAdds persists static-root additions so reloads and new ready-made yachts keep the synced changes;
- Structure Templates has developer/admin Delete for user-created synced rows;
- deleting from Structure Templates removes the synced ready-made item;
- deleting a user-created synced item from Ready-made removes it from Structure Templates;
- nested Structure Templates equipment must survive reload and new ready-made yacht creation;
- Ready-made and Structure Templates must stay synchronized through shared ids/keys, not duplicated display-only text;
- service/cardholder remains future hook only.

Always inspect, backup, patch narrowly, verify, sync private/public, and give versioned demo URL.
```
