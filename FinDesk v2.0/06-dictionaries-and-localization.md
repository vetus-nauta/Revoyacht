# 06 — Dictionaries and Localization

## Principle

FinDesk v2.0 must be flexible without becoming random.

The engine uses dictionaries, weighted rules, language variants, suppliers, actor detection, and manual corrections.

No black-box AI is required for MVP.

## Languages

Interface languages:

```text
RU — Russian
EN — English
IT — Italian
ES — Spanish
DE — German
BCMS / Local — Bosnian, Croatian, Montenegrin, Serbian
```

Use `BCMS / Local` as neutral product label.

## Dictionary levels

The rules engine uses several dictionaries:

1. Category keywords.
2. Category phrases.
3. Supplier names.
4. Actor/people markers.
5. Role words.
6. Stop words.
7. Internal flow movement phrases.
8. Workspace-specific learned rules.

## Stop words

Do not create category rules from generic words:

```text
купил
оплатил
сегодня
вчера
лодка
boat
cash
card
money
paid
bought
for
на
для
```

These words may help context but must not drive category alone.

## Actor recognition

A person name is not a category.

Examples:

```text
-500 Вова аванс
```

Actor: Вова.
Category: crew or accountable money depending on words around it.

```text
-87 Вова купил кабель
```

Actor: Вова.
Category: tech_parts.

Actor clues:

- known names and aliases;
- role words;
- `salary`, `зп`, `аванс`, `под отчет` around a name;
- supplier/company terms.

## Category set

MVP categories:

```text
crew
 dry_dock
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

## Category examples

### crew

```text
зп, зарплата, аванс, экипаж, crew, salary, captain, hostess, stewardess, помощник капитана, plata, stipendio, sueldo, Gehalt
```

### dry_dock

```text
сухой док, док, подъем, спуск, антифоулинг, antifouling, haul out, launch, cantiere, varo, alaggio, astillero, varadero, Werft
```

### berth

```text
стоянка, berth, зимовка, гараж, annual berth, mooring fee, vez, godišnji vez, posto barca, amarre, Liegeplatz
```

### marina_ports

```text
марина, marina, port, harbour, puerto, porto, luka, guest berth, вода, электричество, struja, acqua, water, electricity
```

### service_water

```text
водолаз, diver, underwater, сервис на воде, диагностика, repair on water, hull cleaning, ronilac, sub, tecnico
```

### tech_parts

```text
запчасти, кабель, фильтр, насос, инструмент, крепеж, anode, part, cable, filter, pump, tool, ricambi, pieza, Ersatzteil
```

### tender

```text
тендер, тузик, Williams, dinghy, tender, outboard, gommone, auxiliar, auxiliar boat
```

### fuel

```text
топливо, дизель, бензин, заправка, fuel, diesel, petrol, gasoline, gasolio, benzina, combustible, gorivo, benzin, nafta
```

### provisions

```text
продукты, рыба, мясо, стейки, напитки, ресторан, гости, groceries, food, fish, meat, drinks, restaurant, spesa, comida, hrana
```

### interior

```text
интерьер, текстиль, полотенца, посуда, обувь на лодку, матрас, chairs, linen, towels, piatti, platos, interior
```

### cleaning

```text
химия, химчистка, уборка, тряпки, мойка, cleaning, laundry, detergent, lavaggio, limpieza, hemija, pranje
```

### media_comms

```text
starlink, sim, internet, wifi, telekom, netflix, apple, ivi, subscription, navigation cards, abbonamento, suscripción, pretplata
```

### admin_legal

```text
юрист, адвокат, документы, страховка, регистрация, таможня, license, insurance, lawyer, customs, documenti, seguro, osiguranje
```

### cash_topup_from_card

```text
снял с карты, снятие с карты, банкомат, atm, cash withdrawal, card to cash, prelievo, retiro, Abhebung
```

### other

Fallback category. Must be highlighted and reviewed.

## Rule weighting

Each matched rule adds weight to a category.

Example:

```text
-42 заправка тузика
```

- `заправка` supports fuel.
- `тузик` supports tender.

Primary category can be fuel, with tender marker as metadata.

## Manual learning

When admin changes category, system can offer:

```text
Remember this rule?
```

But it must not create rules automatically from weak words.

Store learned rules as workspace-specific by default.

## Explainability

Every suggestion must be explainable:

```text
Suggested: fuel
Reason: matched `заправка`, `diesel`, `fuel`
Confidence: 0.87
```
