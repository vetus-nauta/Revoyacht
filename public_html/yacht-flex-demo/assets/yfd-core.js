/* YACHT FLEX DECK — CLEAN CORE v2 */

const baseLayers = [
  {id:'hardtop', title:'Hardtop', note:'Top technical layer', order:10, items:[
    {title:'Mast', type:'Structure', note:'Mounts and upper equipment base'},
    {title:'Dome', key:'dome', type:'Equipment', note:'Physical domes / radomes / equipment covers'},
    {title:'Radar', key:'radar', type:'Equipment', note:'Radar equipment installed on hardtop'},
    {title:'Antenna', key:'antenna', type:'Equipment', note:'User-defined antennas and communication equipment'},
    {title:'Awning System', type:'Control', note:'Hardtop awning movement and control logic'},
    {title:'Navigation Light', key:'navigation-light', type:'Equipment', note:'Navigation lights and user-defined extra lights'}
  ]},

  {id:'flybridge', title:'Flybridge', note:'Open upper deck', order:50, items:[
    {title:'Upper Helm', type:'Control', note:'Upper steering and navigation station', target:'flybridge-upper-helm'},
    {title:'Upper Navigation Equipment', key:'flybridge-nav-equipment', type:'Equipment', note:'Flybridge navigation and control displays'},
    {title:'Lounge Area', type:'Area', note:'Guest seating and open deck comfort zone', target:'flybridge-lounge'},
    {title:'Wet Bar', key:'flybridge-wet-bar', type:'Equipment', note:'Flybridge bar, sink, fridge and service equipment'},
    {title:'Sun Awning', key:'flybridge-sun-awning', type:'Equipment', note:'Flybridge bimini / sun shade equipment'},
    {title:'Deck Surface', type:'Surface', note:'Teak or deck covering condition', target:'flybridge-deck-surface'}
  ]},

  {id:'main-deck', title:'Main Deck', note:'Main living level', order:60, items:[
    {title:'Foredeck', type:'Zone', note:'Forward deck with anchor system, lounge and seating', target:'foredeck'},
    {title:'Side Decks', type:'Zone', note:'Port and starboard exterior side walkways', target:'main-side-decks'},
    {title:'Salon', type:'Zone', note:'Main interior living space', target:'salon'},
    {title:'Cockpit', type:'Zone', note:'Aft outdoor working and lounge area', target:'cockpit'}
  ]},

  {id:'lower-deck', title:'Lower Deck', note:'Accommodation, aft service area and engine room', order:70, items:[
    {title:'Aft Section', type:'Zone', note:'Aft service, boarding and leisure equipment', target:'aft-section'},
    {title:'Swim Platform', type:'Access', note:'Hydraulic platform and water access', target:'swim-platform'},
    {title:'Crew Cabin', type:'Area', note:'Crew space, head, laundry and ER access', target:'crew-cabin'},
    {title:'Engine Room', type:'Technical', note:'Propulsion, power, water and hydraulic systems', target:'engine-room'},
    {title:'Guest Cabins', type:'Area', note:'Four guest accommodation cabins', target:'guest-cabins'}
  ]},

  {id:'bilge-deck', title:'Bilge / Technical Deck', note:'Bilge zones, tanks and low technical spaces', order:80, items:[
    {title:'Forward Bilge', type:'Zone', note:'Forward bilge pump and flood pump zone', target:'bilge-forward'},
    {title:'Mid Bilge', type:'Zone', note:'Mid bilge pump and flood pump zone', target:'bilge-mid'},
    {title:'Aft Bilge', type:'Zone', note:'Aft bilge pump and flood pump zone', target:'bilge-aft'},
    {title:'Fresh Water Tank', type:'Equipment', note:'Fresh water storage tank'},
    {title:'Grey Water Tank', type:'Equipment', note:'Grey water holding tank'},
    {title:'Black Water Tank', type:'Equipment', note:'Black water holding tank'},
    {title:'Sanitation / Plumbing', type:'System', note:'Toilets, plumbing and sanitation connections'}
  ]},

  {id:'underwater', title:'Underwater', note:'Systems below the waterline', order:90, items:[
    {title:'Forward Section', type:'Zone', note:'Bow thruster and forward underwater area', target:'underwater-forward'},
    {title:'Mid Section', type:'Zone', note:'Stabilizers and central underwater area', target:'underwater-mid'},
    {title:'Aft Underwater Section', type:'Zone', note:'Stern thruster, shafts, propellers and rudders', target:'underwater-aft'},
    {title:'Hull Protection', type:'Surface', note:'Antifouling and zinc anodes'}
  ]},

  {id:'tender', title:'Tender', note:'Separate support craft module', order:100, items:[
    {title:'Tender Overview', type:'Overview', note:'General tender condition and readiness'},
    {title:'Engine', type:'System', note:'Tender propulsion unit'},
    {title:'Battery', type:'Power', note:'Tender battery and electrical readiness'},
    {title:'Fuel', type:'Supply', note:'Fuel level and refuel notes'},
    {title:'Davit / Platform Link', type:'Access', note:'Connection to yacht lifting or platform system'}
  ]}
];

const optionalLayers = [
  {id:'sun-deck', title:'Sun Deck', note:'Open relaxation deck', order:20, items:[
    {title:'Sun Lounge', type:'Area', note:'Relax area', target:'sun-lounge'},
    {title:'Bar / BBQ', key:'bar-bbq', type:'Equipment', note:'Outdoor bar, BBQ and service equipment'},
    {title:'Jacuzzi', key:'jacuzzi', type:'Equipment', note:'Jacuzzi equipment and serviceable parts'},
    {title:'Sun Awning', key:'sun-awning', type:'Equipment', note:'Sun deck shade / awning equipment'},
    {title:'Deck Surface', type:'Surface', note:'Deck covering', target:'sun-deck-surface'}
  ]},
  {id:'bridge-deck', title:'Bridge Deck', note:'Navigation and command deck', order:30, items:[
    {title:'Main Helm', type:'Control', note:'Primary navigation station', target:'bridge-main-helm'},
    {title:'Navigation Equipment', key:'nav-equipment', type:'Equipment', note:'Navigation devices and bridge electronics'},
    {title:'Captain Area', type:'Area', note:'Captain working zone', target:'bridge-captain-area'},
    {title:'Seating Area', type:'Area', note:'Crew or guest seating', target:'bridge-seating-area'},
    {title:'Deck Surface', type:'Surface', note:'Deck covering', target:'bridge-deck-surface'}
  ]},
  {id:'upper-deck', title:'Upper Deck', note:'Additional living deck', order:40, items:[
    {title:'Owner Lounge', type:'Area', note:'Private lounge', target:'upper-owner-lounge'},
    {title:'Exterior Lounge', type:'Area', note:'Outdoor seating', target:'upper-exterior-lounge'},
    {title:'Access Stairs', type:'Access', note:'Deck connection'},
    {title:'Deck Surface', type:'Surface', note:'Deck covering', target:'upper-deck-surface'}
  ]}
];


const treeNodes = [

  {id:'aft-section', title:'Aft Section', note:'Aft service, boarding and leisure area', items:[
    {title:'Passerelle', key:'passerelle', type:'Equipment', note:'Aft boarding passerelle'},
    {title:'Central Locker / Water Toys Garage', key:'aft-water-toys-garage', type:'Equipment', note:'Central aft locker for water toys and gear'},
    {title:'Grill', key:'aft-grill', type:'Equipment', note:'Aft grill / BBQ equipment'},
    {title:'Aft Shower', key:'aft-shower', type:'Equipment', note:'Aft deck shower'},
    {title:'Deck Surface', type:'Surface', note:'Aft section deck covering', target:'aft-section-surface'}
  ]},

  {id:'aft-section-surface', title:'Deck Surface', note:'Aft section surface and covering', items:[
    {title:'Deck Covering', type:'Surface', note:'Surface type and condition'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Aft section drainage points'},
    {title:'Access Panels', type:'Access', note:'Aft access panels'}
  ]},



  {id:'main-side-decks', title:'Side Decks', note:'Port and starboard exterior side walkways', items:[
    {title:'Port Side Deck', type:'Zone', note:'Port exterior side walkway', target:'port-side-deck'},
    {title:'Starboard Side Deck', type:'Zone', note:'Starboard exterior side walkway', target:'starboard-side-deck'}
  ]},

  {id:'port-side-deck', title:'Port Side Deck', note:'Port side deck equipment and surfaces', items:[
    {title:'Side Deck Surface / Covering', type:'Surface', note:'Port side deck covering / non-skid / teak'},
    {title:'Aft Mooring Winch Port', key:'aft-mooring-winch-port', type:'Equipment', note:'Port aft mooring winch'},
    {title:'Handrails / Bulwarks', type:'Equipment', note:'Port side rails, bulwarks and safety supports'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Port side drainage and scuppers'}
  ]},

  {id:'starboard-side-deck', title:'Starboard Side Deck', note:'Starboard side deck equipment and surfaces', items:[
    {title:'Side Deck Surface / Covering', type:'Surface', note:'Starboard side deck covering / non-skid / teak'},
    {title:'Aft Mooring Winch Starboard', key:'aft-mooring-winch-starboard', type:'Equipment', note:'Starboard aft mooring winch'},
    {title:'Handrails / Bulwarks', type:'Equipment', note:'Starboard side rails, bulwarks and safety supports'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Starboard side drainage and scuppers'}
  ]},



  {id:'foredeck-sun-lounge', title:'Sun Lounge', note:'Sunbathing layout', items:[
    {title:'Sun Pads', type:'Furniture', note:'Sunbathing cushions'},
    {title:'Backrests', type:'Furniture', note:'Adjustable backrests'}
  ]},

  {id:'foredeck-seating', title:'Seating / Sofa', note:'Forward seating area', items:[
    {title:'Seating', type:'Furniture', note:'Forward seating'},
    {title:'Cushions', type:'Furniture', note:'Seating cushions'}
  ]},

  {id:'foredeck-hatches', title:'Hatches', note:'Foredeck access hatches', items:[
    {title:'Anchor Locker Hatch', type:'Access', note:'Anchor locker'},
    {title:'Service Hatch', type:'Access', note:'Service access'},
    {title:'Extra Hatch #1', type:'Access', note:'User-defined hatch'}
  ]},

  {id:'foredeck-deck-surface', title:'Deck Surface', note:'Foredeck covering', items:[
    {title:'Deck Covering', type:'Surface', note:'Surface type and condition'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Drainage system'},
    {title:'Access Panels', type:'Access', note:'Access panels'}
  ]},



  {id:'salon-dining', title:'Dining Area', note:'Dining table and seating area', items:[
    {title:'Dining Table', type:'Furniture', note:'Dining table'},
    {title:'Dining Seating', type:'Furniture', note:'Dining chairs or sofa seating'}
  ]},

  {id:'salon-galley', title:'Galley Area', note:'Kitchen and galley equipment', items:[
    {title:'Fridge', key:'galley-fridge', type:'Equipment', note:'Galley fridge'},
    {title:'Wine Fridge', key:'galley-wine-fridge', type:'Equipment', note:'Wine fridge'},
    {title:'Oven', key:'galley-oven', type:'Equipment', note:'Galley oven'},
    {title:'Cooktop / Hob', key:'galley-cooktop', type:'Equipment', note:'Cooking hob / cooktop'},
    {title:'Extractor / Hood', key:'galley-extractor', type:'Equipment', note:'Extractor hood'}
  ]},

  {id:'salon-lower-helm', title:'Lower Helm', note:'Interior helm station layout', items:[
    {title:'Steering Wheel / Joystick', type:'Equipment', note:'Lower helm steering control'},
    {title:'Throttle / Engine Controls', type:'Equipment', note:'Lower helm engine controls'},
    {title:'Control Panels', type:'Equipment', note:'Lower helm switches and control panels'}
  ]},

  {id:'salon-technical', title:'Technical Area', note:'Hidden technical panels and access', items:[
    {title:'Electrical Access Panel', type:'Access', note:'Electrical or service panel access'},
    {title:'Service Hatch', type:'Access', note:'Hidden service hatch'},
    {title:'Control / Monitoring Panel', type:'Equipment', note:'Monitoring or control panel'}
  ]},

  {id:'salon-floor-covering', title:'Floor Covering', note:'Salon floor covering and surface', items:[
    {title:'Floor Surface', type:'Surface', note:'Carpet, wood, stone, synthetic or other surface'},
    {title:'Access Panels', type:'Access', note:'Floor hatches or access panels'}
  ]},



  {id:'cockpit-lounge', title:'Lounge Area', note:'Cockpit seating and table zone', items:[
    {title:'Seating', type:'Furniture', note:'Cockpit seating'},
    {title:'Table', type:'Furniture', note:'Cockpit table'}
  ]},

  {id:'cockpit-deck-surface', title:'Deck Surface', note:'Cockpit deck covering', items:[
    {title:'Deck Covering', type:'Surface', note:'Deck surface type and condition'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Drainage system'},
    {title:'Hatches / Access Panels', type:'Access', note:'Access panels'}
  ]},



  {id:'flybridge-upper-helm', title:'Upper Helm', note:'Flybridge helm station layout', items:[
    {title:'Steering Wheel / Joystick', type:'Equipment', note:'Upper helm steering control'},
    {title:'Throttle / Engine Controls', type:'Equipment', note:'Upper helm engine controls'},
    {title:'Control Panels', type:'Equipment', note:'Flybridge switches and control panels'}
  ]},

  {id:'flybridge-lounge', title:'Lounge Area', note:'Flybridge seating and comfort zone', items:[
    {title:'Sofa / Seating', type:'Furniture', note:'Flybridge seating'},
    {title:'Table', type:'Furniture', note:'Flybridge table'},
    {title:'Loose Cushions', type:'Furniture', note:'Cushions and soft furniture'}
  ]},

  {id:'flybridge-deck-surface', title:'Deck Surface', note:'Flybridge deck covering and surface details', items:[
    {title:'Deck Covering', type:'Surface', note:'Deck covering type and condition'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Drainage points and scuppers'},
    {title:'Hatches / Access Panels', type:'Access', note:'Access panels and hatches'}
  ]},



  {id:'upper-owner-lounge', title:'Owner Lounge', note:'Owner lounge layout', items:[
    {title:'Seating / Sofa', type:'Furniture', note:'Seating arrangement'},
    {title:'Table', type:'Furniture', note:'Table or surfaces'}
  ]},

  {id:'upper-exterior-lounge', title:'Exterior Lounge', note:'Outdoor seating layout', items:[
    {title:'Outdoor Seating', type:'Furniture', note:'Exterior seating'},
    {title:'Table', type:'Furniture', note:'Outdoor table'}
  ]},

  {id:'upper-deck-surface', title:'Deck Surface', note:'Upper deck covering', items:[
    {title:'Deck Covering', type:'Surface', note:'Deck surface condition'}
  ]},



  {id:'bridge-main-helm', title:'Main Helm', note:'Primary helm station layout', items:[
    {title:'Steering Wheel / Joystick', type:'Equipment', note:'Primary steering control'},
    {title:'Throttle / Engine Controls', type:'Equipment', note:'Engine throttle controls'},
    {title:'Control Panels', type:'Equipment', note:'Switches and control panels'}
  ]},

  {id:'bridge-captain-area', title:'Captain Area', note:'Captain workspace', items:[
    {title:'Captain Seat', type:'Furniture', note:'Captain seat'},
    {title:'Chart / Work Surface', type:'Furniture', note:'Working surface or chart table'}
  ]},

  {id:'bridge-seating-area', title:'Seating Area', note:'Bridge seating', items:[
    {title:'Crew Seating', type:'Furniture', note:'Crew seating area'}
  ]},

  {id:'bridge-deck-surface', title:'Deck Surface', note:'Bridge deck covering', items:[
    {title:'Deck Covering', type:'Surface', note:'Deck surface condition'}
  ]},



  
  {id:'sun-lounge', title:'Sun Lounge', note:'Sun deck lounge and loose furniture', items:[
    {title:'Sun Pads', type:'Furniture', note:'Sun pads and cushions'},
    {title:'Sofa / Seating', type:'Furniture', note:'Sun deck seating'},
    {title:'Table / Loose Furniture', type:'Furniture', note:'Movable furniture and table'}
  ]},

  {id:'sun-deck-surface', title:'Deck Surface', note:'Sun deck covering and surface details', items:[
    {title:'Teak / Deck Covering', type:'Surface', note:'Deck covering condition'},
    {title:'Drainage / Scuppers', type:'Equipment', note:'Drainage points and scuppers'},
    {title:'Hatches / Access Panels', type:'Access', note:'Access panels and hatches'}
  ]},

  {id:'underwater-forward', title:'Forward Underwater Section', note:'Bow thruster and forward underwater equipment', items:[
    {title:'Bow Thruster', type:'Maneuvering', note:'Forward thruster system'}
  ]},

  {id:'underwater-mid', title:'Mid Underwater Section', note:'Central underwater equipment', items:[
  ]},

  {id:'swim-platform', title:'Swim Platform', note:'Platform and water access systems', items:[
    {title:'Hydraulic Platform', type:'Equipment', note:'Lifting platform'},
    {title:'Ladder', type:'Access', note:'Water access ladder'}
  ]},

  {id:'crew-cabin', title:'Crew Cabin', note:'Crew accommodation and service space', items:[
    {title:'Beds', type:'Furniture', note:'Crew beds'},
    {title:'Head', type:'Sanitation', note:'Crew toilet and shower'},
    {title:'Laundry', type:'Equipment', note:'Washing machine or dryer'}
  ]},

  {id:'guest-cabins', title:'Guest Cabins', note:'Guest accommodation spaces', items:[
    {title:'Cabin 1', type:'Area', note:'Guest cabin'},
    {title:'Cabin 2', type:'Area', note:'Guest cabin'},
    {title:'Cabin 3', type:'Area', note:'Guest cabin'},
    {title:'Cabin 4', type:'Area', note:'Guest cabin'}
  ]},


  {id:'underwater-aft', title:'Aft Underwater Section', note:'External propulsion and maneuvering hardware', items:[
    {title:'Shaft Port', type:'Equipment', note:'Port propeller shaft'},
    {title:'Shaft Starboard', type:'Equipment', note:'Starboard propeller shaft'},
    {title:'Propeller Port', type:'Equipment', note:'Port propeller'},
    {title:'Propeller Starboard', type:'Equipment', note:'Starboard propeller'},
    {title:'Rudder Port', type:'Equipment', note:'Port rudder'},
    {title:'Rudder Starboard', type:'Equipment', note:'Starboard rudder'},
    {title:'Stern Thruster', type:'Maneuvering', note:'Stern thruster system'}
  ]},


  {id:'bilge-forward', title:'Forward Bilge', note:'Forward bilge equipment', items:[
    {title:'Bilge Pump Forward', type:'Pump', note:'Forward bilge pump'},
    {title:'Flood Pump Forward', type:'Pump', note:'Forward high-water / flood pump'}
  ]},

  {id:'bilge-mid', title:'Mid Bilge', note:'Mid bilge equipment', items:[
    {title:'Bilge Pump Mid', type:'Pump', note:'Mid bilge pump'},
    {title:'Flood Pump Mid', type:'Pump', note:'Mid high-water / flood pump'}
  ]},

  {id:'bilge-aft', title:'Aft Bilge', note:'Aft bilge equipment', items:[
    {title:'Bilge Pump Aft', type:'Pump', note:'Aft bilge pump'},
    {title:'Flood Pump Aft', type:'Pump', note:'Aft high-water / flood pump'}
  ]},

  {id:'er-ventilation', title:'Engine Room Ventilation', note:'Air supply and exhaust for machinery space', items:[
    {title:'Intake Fans', type:'Equipment', note:'Engine room air intake fans'},
    {title:'Exhaust Fans', type:'Equipment', note:'Engine room exhaust fans'},
    {title:'Air Ducts', type:'Equipment', note:'Ventilation ducts and air paths'},
    {title:'Dampers', type:'Equipment', note:'Fire or shut-off dampers'}
  ]},

  {id:'electrical-system', title:'Electrical / Shore Power', note:'Power system', items:[
    {title:'Isolation Transformer', type:'Equipment', note:'Shore isolation transformer'},
    {title:'Inverter / Charger', type:'Equipment', note:'Power inverter and charger'},
    {title:'AC Panel', type:'Equipment', note:'Main AC panel'},
    {title:'DC Panel', type:'Equipment', note:'Main DC panel'},
    {title:'Battery Bank', type:'Equipment', note:'House batteries'}
  ]},

  {id:'fire-system', title:'Safety / Fire', note:'Fire and safety', items:[
    {title:'Fire Suppression System', type:'Equipment', note:'Engine room fire system'},
    {title:'Fire Alarm', type:'Equipment', note:'Fire detection system'},
  ]},


  {id:'engine-room', title:'Engine Room', note:'Main machinery space', items:[
    {title:'Propulsion System', type:'System', note:'Main engines and gearboxes', target:'propulsion'},
    {title:'Generator', key:'generator', type:'Generator', note:'Power generation equipment'},
    {title:'Water System', type:'System', note:'Fresh water and boiler', target:'water-system'},
    {title:'Chiller', key:'chiller', type:'Equipment', note:'Engine room chiller equipment'},
    {title:'Engine Room Ventilation', type:'System', note:'Engine room air intake and exhaust ventilation', target:'er-ventilation'},
    {title:'Electrical / Shore Power', type:'System', note:'Main electrical infrastructure', target:'electrical-system'},
    {title:'Hydraulic System', type:'System', note:'Hydraulic pressure source, pump, tank, filters and oil', target:'hydraulics'},
    {title:'Stabilizer Drive / Actuator', key:'stabilizer-actuator', type:'Equipment', note:'Stabilizer actuator, seals, hydraulics and control unit'},
    {title:'Safety / Fire', type:'Safety', note:'Fire suppression and safety systems', target:'fire-system'}
  ]},

  {id:'propulsion', title:'Propulsion System', note:'Engine room propulsion equipment', items:[
    {title:'Main Engine', key:'main-engine', type:'Engine', note:'Main propulsion engines'},
    {title:'Gearbox', key:'gearbox', type:'Equipment', note:'Main propulsion gearboxes'}
  ]},


  {id:'water-system', title:'Water System', note:'Water management', items:[
    {title:'Fresh Water Pump', type:'Pump', note:'Main water pump'},
    {title:'Watermaker', type:'Equipment', note:'Watermaker unit'},
    {title:'Hot Water Boiler', type:'Equipment', note:'Hot water system'},
  ]},

  {id:'hydraulics', title:'Hydraulic System', note:'Hydraulic equipment', items:[
    {title:'Hydraulic Pump', type:'Pump', note:'Main hydraulic pump'},
  ]},

  {id:'foredeck', title:'Foredeck', note:'Forward deck with anchor system, lounge and seating', items:[
    {title:'Anchor / Windlass Equipment', key:'foredeck-anchor', type:'Equipment', note:'Windlass, chain and anchor system'},
    {title:'Sun Lounge', type:'Area', note:'Sunbathing area', target:'foredeck-sun-lounge'},
    {title:'Seating / Sofa', type:'Area', note:'Forward seating area', target:'foredeck-seating'},
    {title:'Table', key:'foredeck-table', type:'Equipment', note:'Foredeck table'},
    {title:'Refrigerator / Cool Box', key:'foredeck-fridge', type:'Equipment', note:'Cool box or refrigerator'},
    {title:'Hatches', type:'Access', note:'Foredeck access hatches', target:'foredeck-hatches'},
    {title:'Deck Surface', type:'Surface', note:'Foredeck teak or deck covering', target:'foredeck-deck-surface'}
  ]},

  {id:'salon', title:'Salon', note:'Main interior living space', items:[
    {title:'Lounge Area', type:'Area', note:'Seating and media zone', target:'salon-lounge'},
    {title:'Dining Area', type:'Area', note:'Dining table and seating', target:'salon-dining'},
    {title:'Galley Area', type:'Area', note:'Kitchen and appliances', target:'salon-galley'},
    {title:'Lower Helm', type:'Control', note:'Interior helm station', target:'salon-lower-helm'},
    {title:'Lower Navigation Equipment', key:'salon-nav-equipment', type:'Equipment', note:'Lower helm navigation and control devices'},
    {title:'Technical Area', type:'Technical', note:'Hidden systems and panels', target:'salon-technical'},
    {title:'Floor Covering', type:'Surface', note:'Salon floor covering / surface', target:'salon-floor-covering'}
  ]},

  {id:'salon-lounge', title:'Lounge Area', note:'Salon lounge equipment', items:[
    {title:'Sofa', type:'Furniture', note:'Main sofa module'},
    {title:'Armchairs', type:'Furniture', note:'Salon armchairs'},
    {title:'Coffee Table', type:'Furniture', note:'Salon coffee table'},
    {title:'TV', type:'Equipment', note:'Television unit'},
    {title:'Speakers', type:'Equipment', note:'Audio speakers'},
    {title:'Media Block', type:'Equipment', note:'Media control block'}
  ]},

  {id:'cockpit', title:'Cockpit', note:'Aft outdoor deck zone', items:[
    {title:'Lounge Area', type:'Area', note:'Cockpit seating and table zone', target:'cockpit-lounge'},
    {title:'Flybridge Stairs', type:'Access', note:'Access to flybridge'},
    {title:'Ice Maker', key:'cockpit-ice-maker', type:'Equipment', note:'Cockpit ice maker'},
    {title:'Refrigerator', key:'cockpit-refrigerator', type:'Equipment', note:'Cockpit refrigerator'},
    {title:'Deck Surface', type:'Surface', note:'Cockpit teak or deck covering', target:'cockpit-deck-surface'}
  ]}
];

const equipmentStore = {
  "generator": [
    {id:"gen1", name:"Generator #1"},
    {id:"gen2", name:"Generator #2"}
  ],
  "chiller": [
    {id:"chiller1", name:"Chiller #1"},
    {id:"chiller2", name:"Chiller #2"}
  ],
  "main-engine": [
    {id:"main_engine_port", name:"Main Engine Port"},
    {id:"main_engine_starboard", name:"Main Engine Starboard"}
  ],
  "gearbox": [
    {id:"gearbox_port", name:"Gearbox Port"},
    {id:"gearbox_starboard", name:"Gearbox Starboard"}
  ],
  "stabilizer-fins": [
    {id:"stab_fin_port", name:"Stabilizer Fin Port"},
    {id:"stab_fin_starboard", name:"Stabilizer Fin Starboard"}
  ],
  "stabilizer-actuator": [
    {id:"stab_actuator_port", name:"Stabilizer Actuator Port"},
    {id:"stab_actuator_starboard", name:"Stabilizer Actuator Starboard"}
  ],
  "passerelle": [
    {id:"passerelle_main", name:"Passerelle"}
  ],
  "aft-water-toys-garage": [
    {id:"aft_water_toys_garage_1", name:"Central Locker / Water Toys Garage"}
  ],
  "aft-grill": [
    {id:"aft_grill_1", name:"Grill"}
  ],
  "aft-shower": [
    {id:"aft_shower_1", name:"Aft Shower"}
  ],
  "aft-mooring-winch-port": [
    {id:"aft_mooring_winch_port_1", name:"Aft Mooring Winch Port"}
  ],
  "aft-mooring-winch-starboard": [
    {id:"aft_mooring_winch_starboard_1", name:"Aft Mooring Winch Starboard"}
  ],
  "dome": [
    {id:"dome_1", name:"Dome #1"},
    {id:"dome_2", name:"Dome #2"}
  ],
  "radar": [
    {id:"radar_1", name:"Radar #1"}
  ],
  "antenna": [
    {id:"antenna_1", name:"Antenna #1"},
    {id:"antenna_2", name:"Antenna #2"}
  ],
  "navigation-light": [
    {id:"nav_light_masthead", name:"Masthead Light"},
    {id:"nav_light_stern", name:"Stern Light"},
    {id:"nav_light_port", name:"Port Light"},
    {id:"nav_light_starboard", name:"Starboard Light"},
    {id:"nav_light_anchor", name:"Anchor Light"},
    {id:"nav_light_extra_1", name:"Extra Light #1"},
    {id:"nav_light_extra_2", name:"Extra Light #2"}
  ],
  "bar-bbq": [
    {id:"bar_bbq_1", name:"Bar / BBQ Module"}
  ],
  "jacuzzi": [
    {id:"jacuzzi_1", name:"Jacuzzi #1"}
  ],
  "sun-awning": [
    {id:"sun_awning_1", name:"Sun Awning #1"}
  ],
  "nav-equipment": [
    {id:"nav_radar", name:"Radar"},
    {id:"nav_plotter", name:"GPS / Plotter"},
    {id:"nav_ais", name:"AIS"},
    {id:"nav_autopilot", name:"Autopilot"},
    {id:"nav_extra_1", name:"Extra Device #1"},
    {id:"nav_extra_2", name:"Extra Device #2"}
  ],
  "flybridge-nav-equipment": [
    {id:"fly_nav_plotter", name:"Flybridge Plotter"},
    {id:"fly_nav_autopilot", name:"Flybridge Autopilot Control"},
    {id:"fly_nav_vhf", name:"Flybridge VHF / Remote"},
    {id:"fly_nav_extra_1", name:"Extra Device #1"}
  ],
  "flybridge-wet-bar": [
    {id:"flybridge_wet_bar_1", name:"Wet Bar Module"}
  ],
  "flybridge-sun-awning": [
    {id:"flybridge_sun_awning_1", name:"Sun Awning #1"}
  ],
  "cockpit-ice-maker": [
    {id:"cockpit_ice_1", name:"Ice Maker"}
  ],
  "cockpit-refrigerator": [
    {id:"cockpit_fridge_1", name:"Refrigerator"}
  ],
  "salon-nav-equipment": [
    {id:"lower_nav_plotter", name:"Lower Helm Plotter"},
    {id:"lower_nav_autopilot", name:"Lower Helm Autopilot Control"},
    {id:"lower_nav_vhf", name:"Lower Helm VHF / Radio"},
    {id:"lower_nav_extra_1", name:"Extra Device #1"}
  ],
  "galley-fridge": [
    {id:"galley_fridge_1", name:"Fridge"}
  ],
  "galley-wine-fridge": [
    {id:"galley_wine_fridge_1", name:"Wine Fridge"}
  ],
  "galley-oven": [
    {id:"galley_oven_1", name:"Oven"}
  ],
  "galley-cooktop": [
    {id:"galley_cooktop_1", name:"Cooktop / Hob"}
  ],
  "galley-extractor": [
    {id:"galley_extractor_1", name:"Extractor / Hood"}
  ],
  "foredeck-anchor": [
    {id:"anchor_system_1", name:"Anchor / Windlass System"}
  ],
  "foredeck-table": [
    {id:"foredeck_table_1", name:"Foredeck Table"}
  ],
  "foredeck-fridge": [
    {id:"foredeck_fridge_1", name:"Cool Box / Refrigerator"}
  ],
};


function getSailingOperationalRoots(rig='bermudan_sloop'){
  const rigId = rig || 'bermudan_sloop';
  let groups = [];

  try{
    groups = getAdminBaseSailingRigGroups(rigId);
  } catch(e){
    const fallback = typeof getDefaultSailingRigGroups === 'function'
      ? getDefaultSailingRigGroups()
      : {};
    groups = fallback[rigId] || fallback.bermudan_sloop || [];
  }

  return (groups || []).map((group, index) => ({
    id:group.id,
    title:group.title,
    note:group.note || getSailingRigSectionNote(group),
    order:index + 1,
    is_sailing_root:true,
    rig_type:group.rig_type || rigId,
    section_key:group.section_key || group.id,
    database_meaning:group.database_meaning || group.type || 'sailing_rig_section',
    items:(group.items || []).map(item => ({
      title:item.title,
      key:item.key || item.id,
      type:item.type || group.type || item.category || group.title || 'Equipment',
      note:item.note || item.category || group.title || 'Sailing rig equipment',
      category:item.category || group.title,
      library_ref:'adminbase:' + group.id + ':' + item.id,
      library_source:'admin_base_sailing'
    }))
  }));
}

function getSailingRigSectionNote(group){
  const title = String(group && group.title || '').toUpperCase();
  if(title.indexOf('TOP') >= 0) return 'Mast-top equipment and masthead fittings.';
  if(title.indexOf('SPAR') >= 0) return 'Rigid rig elements: masts, booms, poles, foils and fittings.';
  if(title.indexOf('RIG') >= 0) return 'Standing and running rigging systems.';
  if(title.indexOf('SAIL') >= 0) return 'Sail inventory and sail-related structure.';
  return 'Sailing rig structure section.';
}

const SO439_READY_METHOD = 'ready_sailing_so439';
const SO439_TEMPLATE_KEY = 'jeanneau_sun_odyssey_439';
const SO439_TEMPLATE_TITLE = 'Jeanneau SO439 - 2023';

function so439Slug(text){
  return String(text || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'item';
}

function so439Note(confidence, text){
  const parts = ['Source: SO439 handoff'];
  if(confidence) parts.push('confidence: ' + confidence);
  if(text) parts.push(text);
  return parts.join(' | ');
}

function so439Eq(title, category, confidence, extra){
  const id = 'so439_' + so439Slug((category || 'equipment') + '_' + title);
  return Object.assign({
    id,
    title,
    key:id,
    type:'Equipment',
    category:category || 'Equipment',
    note:so439Note(confidence)
  }, extra || {});
}

function so439Area(title, target, category, confidence, extra){
  return Object.assign({
    id:'so439_link_' + so439Slug(target || title),
    title,
    type:'Area',
    category:category || 'Area / Zone',
    note:so439Note(confidence),
    target
  }, extra || {});
}

function so439Layer(id, title, note, order, items, extra){
  return Object.assign({
    id,
    title,
    note,
    order,
    template_key:SO439_TEMPLATE_KEY,
    template_title:SO439_TEMPLATE_TITLE,
    edit_policy:'locked_system_template',
    items
  }, extra || {});
}

function so439Node(id, title, note, items){
  return {
    id,
    title,
    note,
    template_key:SO439_TEMPLATE_KEY,
    template_title:SO439_TEMPLATE_TITLE,
    edit_policy:'locked_system_template',
    items
  };
}

const so439SailingRigRoots = [
  so439Layer('sailing_bermudan_aft_sails', 'AFT SAILS', 'Bermudan sloop mainsail group for the SO439 prototype.', 1, [
    so439Eq('Mainsail group', 'AFT SAILS', 'model template'),
    so439Eq('Furling mainsail', 'AFT SAILS', 'SO439 option'),
    so439Eq('Classic / full batten mainsail option', 'AFT SAILS', 'optional'),
    so439Eq('Reefing system', 'AFT SAILS', 'model template'),
    so439Eq('Trysail / storm mainsail', 'AFT SAILS', 'safety option')
  ], {
    is_sailing_root:true,
    rig_type:'bermudan_sloop',
    section_key:'aft_sails',
    database_meaning:'sail_group'
  }),
  so439Layer('sailing_bermudan_forward_sails', 'FORWARD SAILS', 'Bermudan sloop headsail and forward sail group for the SO439 prototype.', 2, [
    so439Eq('Headsail group', 'FORWARD SAILS', 'model template'),
    so439Eq('Furling genoa', 'FORWARD SAILS', 'model template'),
    so439Eq('Jib option', 'FORWARD SAILS', 'optional'),
    so439Eq('Code 0 option', 'FORWARD SAILS', 'optional'),
    so439Eq('Gennaker / asymmetric option', 'FORWARD SAILS', 'optional'),
    so439Eq('Storm jib', 'FORWARD SAILS', 'safety option')
  ], {
    is_sailing_root:true,
    rig_type:'bermudan_sloop',
    section_key:'forward_sails',
    database_meaning:'sail_group'
  }),
  so439Layer('sailing_bermudan_top', 'TOP', 'Main mast top equipment and masthead fittings for the SO439 prototype.', 3, [
    so439Eq('Main mast top', 'TOP', 'model template'),
    so439Eq('Masthead navigation light', 'TOP', 'model template'),
    so439Eq('Anchor light / tricolour', 'TOP', 'model template'),
    so439Eq('Masthead wind sensor', 'TOP', 'model template'),
    so439Eq('VHF antenna', 'TOP', 'model template'),
    so439Eq('Windex / wind vane', 'TOP', 'model template'),
    so439Eq('Masthead sheaves', 'TOP', 'model template'),
    so439Eq('Stay / shroud attachment points', 'TOP', 'model template')
  ], {
    is_sailing_root:true,
    rig_type:'bermudan_sloop',
    section_key:'top',
    database_meaning:'mast_top',
    instance_policy:'main_mast_only'
  }),
  so439Layer('sailing_bermudan_spar', 'SPAR', 'Main mast, boom, spars, foils and spar fittings for the SO439 prototype.', 4, [
    so439Eq('Main mast', 'SPAR', 'model template'),
    so439Eq('Boom', 'SPAR', 'model template'),
    so439Eq('Spreaders', 'SPAR', 'model template'),
    so439Eq('Gooseneck fitting', 'SPAR', 'model template'),
    so439Eq('Mast track / sail track', 'SPAR', 'model template'),
    so439Eq('Furler foil / headstay foil', 'SPAR', 'model template'),
    so439Eq('Bowsprit / prodder', 'SPAR', 'optional'),
    so439Eq('Spinnaker / whisker pole', 'SPAR', 'optional')
  ], {
    is_sailing_root:true,
    rig_type:'bermudan_sloop',
    section_key:'spar',
    database_meaning:'spar'
  }),
  so439Layer('sailing_bermudan_rigs', 'RIGS', 'Standing and running rigging. The UI label stays RIGS; database meaning is rigging.', 5, [
    so439Eq('Standing rigging', 'RIGS', 'model template'),
    so439Eq('Forestay', 'RIGS', 'model template'),
    so439Eq('Backstay', 'RIGS', 'model template'),
    so439Eq('Cap shrouds', 'RIGS', 'model template'),
    so439Eq('Lower shrouds', 'RIGS', 'model template'),
    so439Eq('Chainplates', 'RIGS', 'model template'),
    so439Eq('Turnbuckles / bottle screws', 'RIGS', 'model template'),
    so439Eq('Running rigging', 'RIGS', 'model template'),
    so439Eq('Main halyard', 'RIGS', 'model template'),
    so439Eq('Genoa halyard', 'RIGS', 'model template'),
    so439Eq('Main sheet', 'RIGS', 'model template'),
    so439Eq('Genoa sheets', 'RIGS', 'model template'),
    so439Eq('Reefing lines', 'RIGS', 'model template'),
    so439Eq('Furling line', 'RIGS', 'model template'),
    so439Eq('Outhaul', 'RIGS', 'model template'),
    so439Eq('Vang / kicker control line', 'RIGS', 'model template')
  ], {
    is_sailing_root:true,
    rig_type:'bermudan_sloop',
    section_key:'rigs',
    database_meaning:'rigging'
  })
];

const so439ReadyTreeNodes = [
  so439Node('so439_cockpit', 'Cockpit', 'Aft cockpit work and guest zone.', [
    so439Eq('Twin helm stations', 'Cockpit', 'high'),
    so439Eq('Cockpit table', 'Cockpit', 'high'),
    so439Eq('Cockpit lockers', 'Cockpit', 'high'),
    so439Eq('Cockpit shower', 'Cockpit', 'high'),
    so439Eq('Primary winch positions', 'Cockpit', 'high'),
    so439Eq('Sail handling from cockpit', 'Cockpit', 'high')
  ]),
  so439Node('so439_transom_swim_platform', 'Transom / Swim platform', 'Aft access and boarding platform.', [
    so439Eq('Swim platform', 'Transom', 'high'),
    so439Eq('Boarding ladder', 'Transom', 'high')
  ]),
  so439Node('so439_coachroof', 'Coachroof', 'Coachroof and companionway sailing controls.', [
    so439Eq('Companionway', 'Coachroof', 'high'),
    so439Eq('Sprayhood / dodger', 'Coachroof', 'high'),
    so439Eq('Rope clutches / deck organizers', 'Coachroof', 'high'),
    so439Eq('Traveller / mainsheet area', 'Coachroof', 'medium')
  ]),
  so439Node('so439_side_decks', 'Port / Starboard side decks', 'Exterior side decks and movement lanes.', [
    so439Eq('Port side deck', 'Side decks', 'high'),
    so439Eq('Starboard side deck', 'Side decks', 'high')
  ]),
  so439Node('so439_foredeck', 'Foredeck', 'Forward exterior deck and anchoring approach.', [
    so439Eq('Anchor locker', 'Foredeck', 'high'),
    so439Eq('Bow fitting / stemhead', 'Foredeck', 'high'),
    so439Eq('Furler / headstay base area', 'Foredeck', 'high')
  ]),
  so439Node('so439_hull_exterior', 'Topsides / hull exterior', 'Visible hull surfaces and hull openings.', [
    so439Eq('Topsides', 'Hull exterior', 'high'),
    so439Eq('Hull windows / portlights', 'Hull exterior', 'high')
  ]),
  so439Node('so439_keel', 'Keel', 'SO439 keel options.', [
    so439Eq('Fin keel with bulb', 'Keel', 'high'),
    so439Eq('Standard draught 2.20 m', 'Keel', 'spec'),
    so439Eq('Shoal draught 1.60 m option', 'Keel', 'optional')
  ]),
  so439Node('so439_rudder', 'Rudder', 'Steering surface under the hull.', [
    so439Eq('Spade rudder', 'Rudder', 'high')
  ]),
  so439Node('so439_propulsion_underwater', 'Saildrive / propeller area', 'Underwater propulsion interface.', [
    so439Eq('Saildrive leg', 'Underwater propulsion', 'high'),
    so439Eq('Propeller', 'Underwater propulsion', 'high')
  ]),
  so439Node('so439_through_hulls', 'Seacocks / through-hulls', 'Hull penetrations and service valves.', [
    so439Eq('Seacocks', 'Through-hulls', 'high'),
    so439Eq('Through-hulls', 'Through-hulls', 'high')
  ]),
  so439Node('so439_bow_area_underwater', 'Bow thruster tunnel / area', 'Bow thruster underwater structure.', [
    so439Eq('Bow thruster tunnel / area', 'Underwater bow', 'optional')
  ]),
  so439Node('so439_saloon', 'Saloon', 'Main interior living saloon.', [
    so439Eq('Saloon table', 'Saloon', 'high')
  ]),
  so439Node('so439_galley', 'Galley', 'Galley equipment and service points.', [
    so439Eq('Stove / oven', 'Galley', 'high'),
    so439Eq('Refrigerator', 'Galley', 'high'),
    so439Eq('Sink / faucet', 'Galley', 'high')
  ]),
  so439Node('so439_nav_station', 'Nav station', 'Interior navigation and electrical desk.', [
    so439Eq('Navigation table', 'Nav station', 'high'),
    so439Eq('Instrument panel location', 'Nav station', 'medium')
  ]),
  so439Node('so439_cabins', 'Cabin layout', 'Interior cabin variants; supports 2, 3 and 4 cabin layouts.', [
    so439Eq('Forward cabin', 'Cabins', 'high'),
    so439Eq('Port aft cabin', 'Cabins', 'high'),
    so439Eq('Starboard aft cabin', 'Cabins', 'high'),
    so439Eq('2-cabin layout option', 'Cabins', 'optional'),
    so439Eq('3-cabin layout option', 'Cabins', 'optional'),
    so439Eq('4-cabin layout option', 'Cabins', 'optional')
  ]),
  so439Node('so439_heads', 'Heads / showers', 'Head and shower compartments.', [
    so439Eq('Forward head / shower', 'Heads', 'high'),
    so439Eq('Aft head / shower', 'Heads', 'high')
  ]),
  so439Node('so439_storage', 'Interior lockers', 'Interior storage and lockers.', [
    so439Eq('Interior lockers', 'Storage', 'high')
  ]),
  so439Node('so439_engine_compartment', 'Engine compartment', 'Machinery access compartment.', [
    so439Eq('Engine compartment', 'Machinery', 'high')
  ]),
  so439Node('so439_engine_options', 'Engine options', 'SO439 engine variants.', [
    so439Eq('Yanmar 3YM30 29 hp option', 'Engine', 'spec option'),
    so439Eq('Yanmar 3JH5-CE 40 hp option', 'Engine', 'spec option'),
    so439Eq('Yanmar 4JH5-CE 54 hp option', 'Engine', 'spec option'),
    so439Eq('Main engine placeholder', 'Engine', 'template')
  ]),
  so439Node('so439_saildrive', 'Saildrive', 'Transmission and saildrive interface.', [
    so439Eq('Saildrive', 'Machinery', 'high')
  ]),
  so439Node('so439_fuel_system', 'Fuel system', 'Fuel storage and filtration.', [
    so439Eq('Fuel tank 200 L', 'Fuel system', 'spec'),
    so439Eq('Fuel / water separator', 'Fuel system', 'high')
  ]),
  so439Node('so439_raw_water_cooling', 'Raw water cooling', 'Raw water inlet and cooling path.', [
    so439Eq('Raw water intake', 'Cooling', 'high'),
    so439Eq('Seawater strainer', 'Cooling', 'high'),
    so439Eq('Heat exchanger', 'Cooling', 'high')
  ]),
  so439Node('so439_exhaust_system', 'Exhaust system', 'Engine exhaust and muffler path.', [
    so439Eq('Muffler / exhaust hose', 'Exhaust', 'high')
  ]),
  so439Node('so439_dc_system', 'DC system', 'Primary DC electrical system.', [
    so439Eq('Service battery bank', 'Electrical', 'high'),
    so439Eq('Engine start battery', 'Electrical', 'high'),
    so439Eq('DC panel', 'Electrical', 'high')
  ]),
  so439Node('so439_ac_shore_power', 'AC / shore power', 'Shore power and AC distribution.', [
    so439Eq('Shore power inlet', 'Electrical', 'high'),
    so439Eq('AC panel', 'Electrical', 'high')
  ]),
  so439Node('so439_charging', 'Charging', 'Charging and generation equipment.', [
    so439Eq('Alternator', 'Electrical', 'high'),
    so439Eq('Battery charger', 'Electrical', 'high'),
    so439Eq('Solar panels', 'Electrical', 'optional'),
    so439Eq('Solar charge controller', 'Electrical', 'optional')
  ]),
  so439Node('so439_inverter', 'Inverter', 'Optional inverter system.', [
    so439Eq('Inverter', 'Electrical', 'optional')
  ]),
  so439Node('so439_fresh_water', 'Fresh water', 'Fresh water system.', [
    so439Eq('Fresh water tank 330 L', 'Plumbing', 'spec'),
    so439Eq('Pressure pump', 'Plumbing', 'high'),
    so439Eq('Accumulator tank', 'Plumbing', 'medium'),
    so439Eq('Water heater / boiler', 'Plumbing', 'high')
  ]),
  so439Node('so439_black_water', 'Holding tanks', 'Black water holding tanks.', [
    so439Eq('Holding tanks', 'Plumbing', 'high')
  ]),
  so439Node('so439_plumbing_heads', 'Marine toilets', 'Toilet and head plumbing.', [
    so439Eq('Marine toilets', 'Plumbing', 'high')
  ]),
  so439Node('so439_bilge', 'Bilge', 'Bilge pumping and alarms.', [
    so439Eq('Manual bilge pump', 'Bilge', 'high'),
    so439Eq('Electric bilge pump', 'Bilge', 'high'),
    so439Eq('Bilge float switch / alarm', 'Bilge', 'high')
  ]),
  so439Node('so439_plumbing_seacocks', 'Through-hulls / seacocks', 'Plumbing seacocks and hull valves.', [
    so439Eq('Through-hulls / seacocks', 'Plumbing', 'high')
  ]),
  so439Node('so439_anchoring', 'Anchoring', 'Anchor and windlass equipment.', [
    so439Eq('Anchor', 'Deck equipment', 'high'),
    so439Eq('Chain / rode', 'Deck equipment', 'high'),
    so439Eq('Windlass', 'Deck equipment', 'high')
  ]),
  so439Node('so439_winches', 'Winches', 'Primary and secondary winches.', [
    so439Eq('Primary winches', 'Deck equipment', 'high'),
    so439Eq('Secondary / coachroof winches', 'Deck equipment', 'high'),
    so439Eq('Electric winch', 'Deck equipment', 'optional')
  ]),
  so439Node('so439_sail_handling', 'Sail handling hardware', 'Deck hardware for sail handling.', [
    so439Eq('Rope clutches', 'Deck equipment', 'high'),
    so439Eq('Deck organizers', 'Deck equipment', 'high'),
    so439Eq('Tracks / cars', 'Deck equipment', 'high')
  ]),
  so439Node('so439_canvas', 'Canvas', 'Weather protection canvas.', [
    so439Eq('Sprayhood / dodger', 'Canvas', 'high'),
    so439Eq('Bimini', 'Canvas', 'optional')
  ]),
  so439Node('so439_exterior_equipment', 'Exterior comfort equipment', 'Cockpit and boarding equipment.', [
    so439Eq('Cockpit cushions', 'Deck equipment', 'optional'),
    so439Eq('Swim ladder', 'Deck equipment', 'high')
  ]),
  so439Node('so439_helm', 'Twin helm', 'Twin wheel helm stations.', [
    so439Eq('Twin steering wheels', 'Steering', 'high')
  ]),
  so439Node('so439_steering_system', 'Steering linkage', 'Steering transmission hardware.', [
    so439Eq('Quadrant / cables / linkage', 'Steering', 'high')
  ]),
  so439Node('so439_steering_rudder', 'Rudder blade', 'Rudder blade and steering surface.', [
    so439Eq('Rudder blade', 'Steering', 'high')
  ]),
  so439Node('so439_autopilot', 'Autopilot', 'Autopilot drive and control.', [
    so439Eq('Autopilot drive / control', 'Steering', 'optional')
  ]),
  so439Node('so439_emergency_steering', 'Emergency steering', 'Emergency tiller equipment.', [
    so439Eq('Emergency tiller', 'Steering', 'high')
  ]),
  so439Node('so439_navigation_helm', 'Helm electronics', 'Helm and cockpit navigation electronics.', [
    so439Eq('Chartplotter', 'Navigation', 'high'),
    so439Eq('Wind display', 'Navigation', 'high'),
    so439Eq('Speed / depth display', 'Navigation', 'high')
  ]),
  so439Node('so439_navigation_station_electronics', 'Nav station electronics', 'Communication and nav station equipment.', [
    so439Eq('VHF radio', 'Navigation', 'high'),
    so439Eq('AIS', 'Navigation', 'optional')
  ]),
  so439Node('so439_sensors', 'Sensors', 'Transducers and magnetic navigation.', [
    so439Eq('Navigation wind sensor', 'Navigation', 'high'),
    so439Eq('Depth / speed transducer', 'Navigation', 'high'),
    so439Eq('Compass', 'Navigation', 'high')
  ]),
  so439Node('so439_lifesaving', 'Lifesaving', 'Personal and vessel lifesaving gear.', [
    so439Eq('Liferaft', 'Safety', 'required'),
    so439Eq('Lifejackets', 'Safety', 'required'),
    so439Eq('Harnesses / tethers', 'Safety', 'required')
  ]),
  so439Node('so439_mob', 'MOB', 'Man-overboard equipment.', [
    so439Eq('Horseshoe buoy', 'Safety', 'required')
  ]),
  so439Node('so439_emergency_safety', 'Emergency signaling', 'Emergency communications and signaling.', [
    so439Eq('EPIRB', 'Safety', 'required/offshore')
  ]),
  so439Node('so439_fire', 'Fire safety', 'Fire suppression and fire response.', [
    so439Eq('Fire extinguishers', 'Safety', 'required'),
    so439Eq('Fire blanket', 'Safety', 'required')
  ]),
  so439Node('so439_bilge_flooding', 'Emergency bilge', 'Emergency flood and bilge equipment.', [
    so439Eq('Emergency bilge equipment', 'Safety', 'required')
  ])
];

const so439ReadyRootLayers = [
  so439Layer('so439_identity', 'Template Identity', 'Locked template metadata for Jeanneau SO439 - 2023.', 30, [
    so439Eq('Jeanneau SO439 - 2023', 'Template identity', 'user named'),
    so439Eq('Jeanneau Sun Odyssey 439 source template', 'Template identity', 'handoff'),
    so439Eq('Owner additions are stored in custom layer', 'Template identity', 'policy')
  ]),
  so439Layer('so439_hull_type_layer', 'Hull Type Layer', 'Physical hull/deck layout: sailing yacht, monohull, Bermudan fractional sloop.', 40, [
    so439Eq('Sailing yacht', 'Hull type', 'template'),
    so439Eq('Monohull', 'Hull type', 'template'),
    so439Eq('Bermudan sloop', 'Rig summary', 'template'),
    so439Eq('Fractional sloop', 'Rig summary', 'handoff')
  ]),
  so439Layer('so439_deck_exterior', 'Deck / Exterior', 'SO439 deck and exterior structure.', 50, [
    so439Area('Cockpit', 'so439_cockpit', 'Deck / Exterior', 'high'),
    so439Area('Transom / Swim platform', 'so439_transom_swim_platform', 'Deck / Exterior', 'high'),
    so439Area('Coachroof', 'so439_coachroof', 'Deck / Exterior', 'high'),
    so439Area('Port / Starboard side decks', 'so439_side_decks', 'Deck / Exterior', 'high'),
    so439Area('Foredeck', 'so439_foredeck', 'Deck / Exterior', 'high')
  ]),
  so439Layer('so439_hull_underwater', 'Hull / Underwater', 'Hull shell, keel, rudder, underwater propulsion and hull penetrations.', 60, [
    so439Area('Topsides / hull exterior', 'so439_hull_exterior', 'Hull / Underwater', 'high'),
    so439Area('Keel', 'so439_keel', 'Hull / Underwater', 'high'),
    so439Area('Rudder', 'so439_rudder', 'Hull / Underwater', 'high'),
    so439Area('Saildrive / propeller area', 'so439_propulsion_underwater', 'Hull / Underwater', 'high'),
    so439Area('Seacocks / through-hulls', 'so439_through_hulls', 'Hull / Underwater', 'high'),
    so439Area('Bow thruster tunnel / area', 'so439_bow_area_underwater', 'Hull / Underwater', 'optional')
  ]),
  so439Layer('so439_interior', 'Interior', 'SO439 accommodation and interior service areas.', 70, [
    so439Area('Saloon', 'so439_saloon', 'Interior', 'high'),
    so439Area('Galley', 'so439_galley', 'Interior', 'high'),
    so439Area('Nav station', 'so439_nav_station', 'Interior', 'high'),
    so439Area('Cabin layout', 'so439_cabins', 'Interior', 'high'),
    so439Area('Heads / showers', 'so439_heads', 'Interior', 'high'),
    so439Area('Interior lockers', 'so439_storage', 'Interior', 'high')
  ]),
  so439Layer('so439_machinery', 'Machinery', 'Engine, fuel, cooling and exhaust systems.', 80, [
    so439Area('Engine compartment', 'so439_engine_compartment', 'Machinery', 'high'),
    so439Area('Engine options', 'so439_engine_options', 'Machinery', 'spec options'),
    so439Area('Saildrive', 'so439_saildrive', 'Machinery', 'high'),
    so439Area('Fuel system', 'so439_fuel_system', 'Machinery', 'high'),
    so439Area('Raw water cooling', 'so439_raw_water_cooling', 'Machinery', 'high'),
    so439Area('Exhaust system', 'so439_exhaust_system', 'Machinery', 'high')
  ]),
  so439Layer('so439_electrical', 'Electrical', 'SO439 electrical distribution, charging and inverter options.', 90, [
    so439Area('DC system', 'so439_dc_system', 'Electrical', 'high'),
    so439Area('AC / shore power', 'so439_ac_shore_power', 'Electrical', 'high'),
    so439Area('Charging', 'so439_charging', 'Electrical', 'high'),
    so439Area('Inverter', 'so439_inverter', 'Electrical', 'optional')
  ]),
  so439Layer('so439_plumbing', 'Plumbing', 'Fresh water, holding tank, heads, bilge and seacock systems.', 100, [
    so439Area('Fresh water', 'so439_fresh_water', 'Plumbing', 'high'),
    so439Area('Holding tanks', 'so439_black_water', 'Plumbing', 'high'),
    so439Area('Marine toilets', 'so439_plumbing_heads', 'Plumbing', 'high'),
    so439Area('Bilge', 'so439_bilge', 'Plumbing', 'high'),
    so439Area('Through-hulls / seacocks', 'so439_plumbing_seacocks', 'Plumbing', 'high')
  ]),
  so439Layer('so439_deck_equipment', 'Deck Equipment', 'Deck hardware, anchoring, winches, sail-handling and canvas.', 110, [
    so439Area('Anchoring', 'so439_anchoring', 'Deck Equipment', 'high'),
    so439Area('Winches', 'so439_winches', 'Deck Equipment', 'high'),
    so439Area('Sail handling hardware', 'so439_sail_handling', 'Deck Equipment', 'high'),
    so439Area('Canvas', 'so439_canvas', 'Deck Equipment', 'optional'),
    so439Area('Exterior comfort equipment', 'so439_exterior_equipment', 'Deck Equipment', 'optional')
  ]),
  so439Layer('so439_steering', 'Steering', 'Steering wheels, linkage, rudder blade, autopilot and emergency tiller.', 120, [
    so439Area('Twin helm', 'so439_helm', 'Steering', 'high'),
    so439Area('Steering linkage', 'so439_steering_system', 'Steering', 'high'),
    so439Area('Rudder blade', 'so439_steering_rudder', 'Steering', 'high'),
    so439Area('Autopilot', 'so439_autopilot', 'Steering', 'optional'),
    so439Area('Emergency steering', 'so439_emergency_steering', 'Steering', 'high')
  ]),
  so439Layer('so439_navigation_electronics', 'Navigation & Electronics', 'Helm electronics, nav station electronics and sensors.', 130, [
    so439Area('Helm electronics', 'so439_navigation_helm', 'Navigation & Electronics', 'high'),
    so439Area('Nav station electronics', 'so439_navigation_station_electronics', 'Navigation & Electronics', 'high'),
    so439Area('Sensors', 'so439_sensors', 'Navigation & Electronics', 'high')
  ]),
  so439Layer('so439_safety', 'Safety', 'Safety inventory and emergency equipment.', 140, [
    so439Area('Lifesaving', 'so439_lifesaving', 'Safety', 'required'),
    so439Area('MOB', 'so439_mob', 'Safety', 'required'),
    so439Area('Emergency signaling', 'so439_emergency_safety', 'Safety', 'required'),
    so439Area('Fire safety', 'so439_fire', 'Safety', 'required'),
    so439Area('Emergency bilge', 'so439_bilge_flooding', 'Safety', 'required')
  ])
];

function getSo439SailingReadyRoots(){
  return so439SailingRigRoots;
}

function getSo439ReadyRootLayers(){
  return so439ReadyRootLayers;
}

function getSo439ReadyTreeNodes(){
  return so439ReadyTreeNodes;
}

function isReadySailingSO439Yacht(yacht){
  const y = yacht || (typeof getActiveYacht === 'function' ? getActiveYacht() : null);
  if(!y) return false;
  return y.startMethod === SO439_READY_METHOD
    || !!(y.meta && y.meta.template === SO439_TEMPLATE_KEY);
}

function isReadyYacht(yacht){
  const y = yacht || (typeof getActiveYacht === 'function' ? getActiveYacht() : null);
  if(!y) return false;
  return y.startMethod === 'ready_motor'
    || isReadySailingSO439Yacht(y)
    || !!(y.meta && y.meta.template === 'ready_motor_yacht_structure');
}

function getActiveReadyTreeNodes(){
  return isReadySailingSO439Yacht()
    ? getSo439ReadyTreeNodes().concat(treeNodes || [])
    : treeNodes;
}

function collectSo439EquipmentItems(){
  const items = [];
  getSo439SailingReadyRoots()
    .concat(getSo439ReadyRootLayers())
    .concat(getSo439ReadyTreeNodes())
    .forEach(container => {
      (container.items || []).forEach(item => {
        if(item && item.key && itemKind(item) === 'equipment'){
          items.push(item);
        }
      });
    });
  return items;
}

function ensureSo439EquipmentDefaults(){
  if(typeof equipmentStore === 'undefined' || typeof defaultEquipmentStore === 'undefined') return;

  collectSo439EquipmentItems().forEach(item => {
    const template = [{
      id:item.key + '_instance_1',
      name:item.title,
      service_ref:item.key + '_instance_1',
      source_template:SO439_TEMPLATE_KEY
    }];

    if(!equipmentStore[item.key]){
      equipmentStore[item.key] = JSON.parse(JSON.stringify(template));
    }
    if(!defaultEquipmentStore[item.key]){
      defaultEquipmentStore[item.key] = JSON.parse(JSON.stringify(template));
    }
  });
}

function getSo439StructureTemplateGroups(){
  return getSo439SailingReadyRoots()
    .concat(getSo439ReadyRootLayers())
    .map(layer => ({
      id:'template_' + layer.id,
      title:layer.title,
      source_layer:layer.id,
      type:layer.is_sailing_root ? 'Sailing rig section' : 'Structure layer',
      items:(layer.items || []).map(item => ({
        id:item.id || so439Slug(layer.id + '_' + item.title),
        title:item.title,
        type:item.type || 'Equipment',
        target:item.target || '',
        key:item.key || '',
        category:item.category || layer.title,
        note:item.note || ''
      }))
    }));
}

function getSo439StructureTemplateRecord(){
  const groups = getSo439StructureTemplateGroups();
  const itemCount = groups.reduce((sum, group) => sum + (group.items || []).length, 0);
  return {
    id:SO439_TEMPLATE_KEY,
    title:SO439_TEMPLATE_TITLE,
    template_key:SO439_TEMPLATE_KEY,
    category:'sailing_yacht',
    hull_type:'monohull',
    rig_type:'bermudan_sloop',
    rig_subtype:'fractional_sloop',
    manufacturer:'Jeanneau',
    model:'Sun Odyssey 439',
    year:'2023',
    policy:'locked_system_template_owner_custom_layer',
    note:'Ready-made sailing monohull prototype from the SO439 handoff. Sailing rig sections stay separate from hull/deck systems.',
    stats:{
      groups:groups.length,
      items:itemCount
    },
    groups
  };
}


const equipmentLibrary = {
  categories:[
    {id:'navigation', title:'Navigation'},
    {id:'electrical', title:'Electrical'},
    {id:'propulsion', title:'Propulsion'},
    {id:'deck_equipment', title:'Deck Equipment'},
    {id:'plumbing', title:'Plumbing'},
    {id:'comfort', title:'Comfort'},
    {id:'sailing', title:'Sailing'},
    {id:'safety', title:'Safety'},
    {id:'technical', title:'Technical'},
    {id:'storage', title:'Storage'},
    {id:'general', title:'General'}
  ],
  items:[],
  templates:[]
};

function inferLibraryCategory(key){
  const k = String(key || '').toLowerCase();

  if(k.includes('radar') || k.includes('nav') || k.includes('vhf') || k.includes('ais')) return 'navigation';
  if(k.includes('light') || k.includes('electrical')) return 'electrical';
  if(k.includes('engine') || k.includes('thruster') || k.includes('propeller')) return 'propulsion';
  if(k.includes('anchor') || k.includes('windlass') || k.includes('winch')) return 'deck_equipment';
  if(k.includes('pump') || k.includes('water') || k.includes('toilet')) return 'plumbing';
  if(k.includes('fridge') || k.includes('oven') || k.includes('cooktop') || k.includes('bbq') || k.includes('grill')) return 'comfort';
  if(k.includes('sail') || k.includes('mast') || k.includes('rig')) return 'sailing';
  if(k.includes('fire') || k.includes('bilge') || k.includes('alarm')) return 'safety';
  if(k.includes('garage') || k.includes('storage')) return 'storage';

  return 'general';
}

function normalizeEquipmentLibraryFromStore(){
  equipmentLibrary.items = [];
  equipmentLibrary.templates = [];

  Object.keys(equipmentStore).forEach(key => {

    const templates = Array.isArray(equipmentStore[key])
      ? equipmentStore[key]
      : [];

    const item = {
      id:key,
      key:key,
      title:key
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase()),
      category:inferLibraryCategory(key),
      source:'legacy_store',
      template_ids:templates.map(t => t.id)
    };

    equipmentLibrary.items.push(item);

    templates.forEach(tpl => {
      equipmentLibrary.templates.push({
        id:tpl.id,
        library_item:key,
        title:tpl.name || tpl.id,
        source:'legacy_store'
      });
    });
  });
}

function findLibraryItem(id){
  return equipmentLibrary.items.find(i => i.id === id) || null;
}

function findLibraryCategory(id){
  return equipmentLibrary.categories.find(c => c.id === id) || null;
}

function getLibraryTemplates(id){
  return equipmentLibrary.templates.filter(t => t.library_item === id);
}


function getLibraryItemsByCategory(categoryId){
  return equipmentLibrary.items.filter(item => item.category === categoryId);
}

function createBuilderEquipmentObjectFromLibrary(libraryItemId){
  const bridgeItem = findReadyLibraryBridgeItem(libraryItemId);
  if(!bridgeItem) return null;

  const templates = bridgeItem.source === 'legacy_library'
    ? getLibraryTemplates(bridgeItem.raw_id)
    : [];
  const now = Date.now();

  return {
    id:'equipment_' + now + '_' + Math.random().toString(36).slice(2,7),
    type:'equipment',
    title:bridgeItem.title,
    note:'Attached from equipment library',
    key:bridgeItem.key || slugifyCustomKey(bridgeItem.title || bridgeItem.raw_id || 'equipment'),
    locked:false,
    fromLibrary:true,
    library_item_id:bridgeItem.raw_id,
    library_ref:bridgeItem.id,
    library_source:bridgeItem.source,
    library_group_id:bridgeItem.group_id,
    library_category:bridgeItem.category,
    instances:(templates.length
      ? templates.map((tpl, index) => ({
          id:'instance_' + now + '_' + index,
          title:tpl.title || (bridgeItem.title + ' #' + (index + 1)),
          note:'Generated from library template'
        }))
      : [{
          id:'instance_' + now,
          title:bridgeItem.title + ' #1',
          note:'Generated from library item'
        }]
    )
  };
}

function attachLibraryEquipmentToDeck(deckId, libraryItemId){
  const deck = findBuilderDeck(deckId);
  const equipment = createBuilderEquipmentObjectFromLibrary(libraryItemId);

  if(!deck || !equipment) return false;
  if(isBuilderLocked(deckId)) return false;

  if(!Array.isArray(deck.equipment)) deck.equipment = [];
  deck.equipment.push(equipment);

  saveState();
  renderBuilderDeckScreen(deckId, false);
  return true;
}

function attachLibraryEquipmentToArea(areaId, libraryItemId){
  const found = findBuilderArea(areaId);
  const equipment = createBuilderEquipmentObjectFromLibrary(libraryItemId);

  if(!found || !found.area || !equipment) return false;
  if(isBuilderLocked(areaId)) return false;

  if(!Array.isArray(found.area.equipment)) found.area.equipment = [];
  found.area.equipment.push(equipment);

  saveState();
  renderBuilderAreaScreen(areaId, false);
  return true;
}

function attachLibraryEquipmentToHull(hullId, libraryItemId){
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);
  const hullIndex = (state.builder.hulls || []).findIndex(h => h.id === hullId);
  const hull = hullIndex >= 0 ? state.builder.hulls[hullIndex] : null;
  const equipment = createBuilderEquipmentObjectFromLibrary(libraryItemId);

  if(!hull || !equipment) return false;
  if(isBuilderLocked(hullId)) return false;

  state.builder.hulls[hullIndex] = {
    ...hull,
    equipment:[
      ...(Array.isArray(hull.equipment) ? hull.equipment : []),
      equipment
    ]
  };

  saveState();
  renderBuilderHullScreen(hullId, false);
  return true;
}

function isSailingLibraryItemAllowedForRoot(rootId, libraryItemId){
  const groups = getReadyLibraryGroups({scope:'sailing_rig', rootId});
  return groups.some(group => (group.items || []).some(item => item && item.id === libraryItemId));
}

function createSailingRootEquipmentFromLibrary(rootId, libraryItemId){
  if(!isSailingLibraryItemAllowedForRoot(rootId, libraryItemId)) return null;

  const bridgeItem = findReadyLibraryBridgeItem(libraryItemId);
  if(!bridgeItem || bridgeItem.source !== 'admin_base_sailing') return null;

  const now = Date.now();

  return {
    id:'sailing_item_' + now + '_' + Math.random().toString(36).slice(2,7),
    type:'equipment',
    title:bridgeItem.title,
    note:bridgeItem.category || getSailingBuilderRootTitle(rootId),
    key:bridgeItem.key || slugifyCustomKey(bridgeItem.title || bridgeItem.raw_id || 'sailing-equipment'),
    locked:false,
    fromLibrary:true,
    library_item_id:bridgeItem.raw_id,
    library_ref:bridgeItem.id,
    library_source:bridgeItem.source,
    library_group_id:bridgeItem.group_id,
    library_category:bridgeItem.category,
    children:[],
    instances:[{
      id:'instance_' + now,
      title:bridgeItem.title + ' #1',
      service_link:null,
      notes:[]
    }],
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
}

function attachSailingRootLibraryEquipment(rootId, libraryItemId){
  const root = getSailingBuilderRoot(rootId || getDefaultSailingBuilderRootId());
  const equipment = createSailingRootEquipmentFromLibrary(rootId, libraryItemId);

  if(!root || !equipment) return false;

  if(!Array.isArray(root.items)) root.items = [];
  root.items.push(equipment);

  saveState();
  openSailingBuilderRoot(rootId, false);
  return true;
}

function attachLibraryEquipmentToBuilderTarget(targetType, targetId, libraryItemId){
  if(targetType === 'sailing_root') return attachSailingRootLibraryEquipment(targetId, libraryItemId);
  if(targetType === 'deck') return attachLibraryEquipmentToDeck(targetId, libraryItemId);
  if(targetType === 'hull') return attachLibraryEquipmentToHull(targetId, libraryItemId);
  return attachLibraryEquipmentToArea(targetId, libraryItemId);
}


normalizeEquipmentLibraryFromStore();


const defaultEquipmentStore = JSON.parse(JSON.stringify(equipmentStore));
ensureSo439EquipmentDefaults();

function resetEquipmentStoreToDefault(){
  Object.keys(equipmentStore).forEach(key => delete equipmentStore[key]);
  Object.assign(equipmentStore, JSON.parse(JSON.stringify(defaultEquipmentStore)));
  ensureSo439EquipmentDefaults();
  syncReadyTemplateEquipmentDefaults();
}

const STORAGE_KEY = 'yfd_state_v1';
const YFD_QUICK_SHOT_ENABLED = false;

const state = {
  stickers: {},
  tasks: {},
  overrides: {},
  readyLocks: {},
  readyTemplateAdds: [],
  enabled: {
    hardtop: true,
    flybridge: true,
    tender: true,
    'sun-deck': true,
    'bridge-deck': true,
    'upper-deck': true
  },
  custom: [],
  yachts: [],
  activeYachtId: null,
  builderHullCount: 1,
  builder: {
    modelName: 'Custom Yacht',
    sharedDecks: [],
    hulls: [
      {id:'hull_1', title:'Hull 1', decks:[]}
    ]
  }
};

function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      enabled: state.enabled,
      custom: state.custom,
      stickers: state.stickers,
      tasks: state.tasks,
      overrides: state.overrides,
      readyLocks: state.readyLocks,
      readyTemplateAdds: state.readyTemplateAdds,
      yachts: state.yachts,
      activeYachtId: state.activeYachtId,
      builderHullCount: state.builderHullCount,
      builder: state.builder,
      treeNodes,
      equipmentStore,
      equipmentLibrary
    }));
  }catch(e){
    console.warn('YFD state save failed', e);
  }
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;

    const saved = JSON.parse(raw);

    if(saved.enabled) Object.assign(state.enabled, saved.enabled);
    if(Array.isArray(saved.custom)) state.custom = saved.custom;
    if(saved.stickers) state.stickers = saved.stickers;
    if(saved.tasks) state.tasks = saved.tasks;
    if(saved.overrides) state.overrides = saved.overrides;
    if(saved.readyLocks) state.readyLocks = saved.readyLocks;
    if(Array.isArray(saved.readyTemplateAdds)) state.readyTemplateAdds = saved.readyTemplateAdds;
    if(Array.isArray(saved.yachts)) state.yachts = saved.yachts;
    if(saved.activeYachtId) state.activeYachtId = saved.activeYachtId;
    if(saved.builderHullCount) state.builderHullCount = saved.builderHullCount;
    if(saved.builder && typeof saved.builder === 'object'){
      state.builder = normalizeBuilderModel(saved.builder, state.builderHullCount);
    }

    if(Array.isArray(saved.treeNodes)){
      treeNodes.length = 0;
      saved.treeNodes.forEach(node => treeNodes.push(node));
    }

    if(saved.equipmentStore){
      Object.keys(saved.equipmentStore).forEach(key => {
        equipmentStore[key] = saved.equipmentStore[key];
      });
    }

    applyReadyTemplateAdds();
    ensureSo439EquipmentDefaults();
    syncReadyTemplateEquipmentDefaults();

    normalizeEquipmentLibraryFromStore();
  }catch(e){
    console.warn('YFD state load failed', e);
  }
}


function shouldEnableSharedDeck(){
  const yacht = getActiveYacht();

  if(!yacht) return false;
  if(yacht.vesselType !== 'sailing') return false;

  return Number(yacht.hullCount || 1) > 1;
}

function shouldShowHardTop(){
  const yacht = getActiveYacht();

  if(!yacht) return true;

  return state.enabled.hardtop !== false;
}


function isSailingYacht(){
  const yacht = getActiveYacht();
  return !!(yacht && yacht.vesselType === 'sailing');
}

function shouldShowMotorOnlyLayer(layerId){
  if(!isSailingYacht()) return true;

  const hiddenForSailing = [
    'flybridge',
    'sun-deck'
  ];

  return !hiddenForSailing.includes(layerId);
}

function shouldShowTender(){
  const yacht = getActiveYacht();

  if(!yacht) return true;

  return state.enabled.tender !== false;
}


function removeLegacyOwnerDeckCustom01(){
  let changed = false;

  if(Array.isArray(state.custom)){
    const before = state.custom.length;
    state.custom = state.custom.filter(deck => !(deck && deck.id === 'custom_01'));
    if(state.custom.length !== before) changed = true;
  }

  ['enabled','readyLocks','stickers','overrides'].forEach(key => {
    if(state[key] && Object.prototype.hasOwnProperty.call(state[key], 'custom_01')){
      delete state[key].custom_01;
      changed = true;
    }
  });

  if(changed){
    saveState();
  }
}

function getAllLayers(){
  removeLegacyOwnerDeckCustom01();
  const yacht = getActiveYacht();

  if(isReadySailingSO439Yacht(yacht)){
    return [
      ...getSo439SailingReadyRoots(),
      ...getSo439ReadyRootLayers(),
      ...state.custom
    ];
  }

  const sailingRoots = (
    yacht &&
    yacht.vesselType === 'sailing'
  )
    ? getSailingOperationalRoots(yacht.rig || 'bermudan_sloop')
    : [];

  const filteredBaseLayers = baseLayers.filter(layer => {
    if(!shouldShowMotorOnlyLayer(layer.id)){
      return false;
    }

    if(layer.id === 'bridge-deck'){
      return shouldEnableSharedDeck();
    }

    if(layer.id === 'hardtop'){
      return shouldShowHardTop();
    }

    if(layer.id === 'tender'){
      return shouldShowTender();
    }

    return true;
  });

  const beforeHardTop = [];
  const afterHardTop = [];

  filteredBaseLayers.forEach(layer => {
    if(layer.id === 'hardtop'){
      afterHardTop.push(layer);
      return;
    }

    beforeHardTop.push(layer);
  });

  return [
    ...sailingRoots,
    ...state.custom,
    ...afterHardTop,
    ...beforeHardTop,
    ...optionalLayers
  ];
}


function getConfigurableLayers(){
  removeLegacyOwnerDeckCustom01();
  const yacht = getActiveYacht();

  if(isReadySailingSO439Yacht(yacht)){
    return [
      ...getSo439SailingReadyRoots(),
      ...getSo439ReadyRootLayers(),
      ...state.custom
    ];
  }

  const sailingRoots = yacht && yacht.vesselType === 'sailing'
    ? getSailingOperationalRoots(yacht.rig || 'bermudan_sloop')
    : [];

  const configurableBaseLayers = baseLayers.filter(layer => {
    if(!shouldShowMotorOnlyLayer(layer.id)){
      return false;
    }

    if(layer.id === 'bridge-deck'){
      return shouldEnableSharedDeck();
    }

    return true;
  });

  const beforeHardTop = [];
  const afterHardTop = [];

  configurableBaseLayers.forEach(layer => {
    if(layer.id === 'hardtop'){
      afterHardTop.push(layer);
      return;
    }

    beforeHardTop.push(layer);
  });

  return [
    ...sailingRoots,
    ...state.custom,
    ...afterHardTop,
    ...beforeHardTop,
    ...optionalLayers
  ];
}

function isVisible(layer){
  if(layer.id in state.enabled) return state.enabled[layer.id];
  if(layer.is_visible === false) return false;
  return true;
}

function getVisibleLayers(){
  return getAllLayers()
    .filter(isVisible)
    .sort((a,b)=>(a.order ?? 999) - (b.order ?? 999));
}

function getLayer(id){
  return [...getAllLayers(), ...getActiveReadyTreeNodes()].find(layer => layer.id === id);
}

let navStack = [];
let yfdForwardStack = [];

const modalState = {
  addItemModuleId: null,
  addInstanceTitle: null,
  stickerRef: null
};


function itemKind(item){
  if(item.kind) return item.kind;

  // Architecture rule:
  // any item with target opens a real tree node.
  // It must not be treated as equipment placeholder.
  if(item.target) return 'target';

  const equipmentTypes = [
    'Equipment','Engine','Generator','Pump','Power','Supply',
    'Safety','Control','System','Service','Motion','Maneuvering',
    'Propulsion','Protection'
  ];

  const futureTypes = [
    'Area','Zone','Access','Surface','Technical','Flexible','Furniture'
  ];

  if(equipmentTypes.includes(item.type)){
    item.isEquipment = true;
    return 'equipment';
}
  if(futureTypes.includes(item.type)) return 'future';

  return 'future';
}

function getCurrentObjectRef(){
  const current = navStack[navStack.length - 1];

  if(current && current.screen === 'module') return current.id;
  if(current && current.screen === 'equipment') return resolveEquipmentKey(current.title);

  return 'overview';
}

function openQuickShot(){
  const ref = getCurrentObjectRef();

  let input = document.getElementById('yfdQuickShotInput');
  if(!input){
    input = document.createElement('input');
    input.id = 'yfdQuickShotInput';
    input.type = 'file';
    input.accept = 'image/*';
    input.setAttribute('capture', 'environment');
    input.hidden = true;

    input.addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if(!file) return;

      console.log('Quick Shot captured:', {
        object_ref: ref,
        name: file.name,
        type: file.type,
        size: file.size,
        captured_at: new Date().toISOString()
      });

      alert(
        'Photo target: ' + ref +
        '\n\nThis photo belongs to the current open section/equipment.' +
        '\nFuture: upload, compress, edit, delete, show in section gallery.' +
        '\nService/cardholder record photos will be handled in the main service system.'
      );
      input.value = '';
    });

    document.body.appendChild(input);
  }

  input.click();
}


function renderLogo(){
  return `<img class="yfd-logo-img" src="./assets/revoyacht-logo.svg" alt="RevoYacht">`;
}

function renderMenuButton(){
  return `<button class="yfd-menu-button" data-open-menu type="button" aria-label="Open menu">☰</button>`;
}

function renderSideMenu(){
  const items = [
    ['⚓', 'Yacht'],
    ['▦', 'Overview'],
    ['⬡', 'Equipment'],
    ['🔧', 'Service'],
    ['€', 'Finance'],
    ['👥', 'Crew'],
    ['☑', 'Tasks'],
    ['💬', 'Messages'],
    ['📅', 'Schedule'],
    ['📄', 'Documents'],
    ['📖', 'Logbook'],
    ['⚙', 'Settings'],
    ['📝', 'Notebook'],
    ['🔔', 'Notifications'],
    ['🛡', 'Admin panel']
  ];

  return `
    <div class="yfd-menu-backdrop" data-close-menu>
      <aside class="yfd-side-menu" role="dialog" aria-label="RevoYacht menu">
        <div class="yfd-menu-head">
          <div class="yfd-menu-brand">
            ${renderLogo()}
            <strong>RevoYacht</strong>
          </div>
          <button class="yfd-menu-close" data-close-menu type="button">×</button>
        </div>

        <div class="yfd-yacht-select">
          <span>Claudia Z</span>
          <b>⌄</b>
        </div>

        <nav class="yfd-menu-list">
          ${items.map((i, idx) => `
            <button class="yfd-menu-item ${idx === 2 ? 'is-active' : ''}" type="button">
              <span>${i[0]}</span>
              <strong>${i[1]}</strong>
            </button>
          `).join('')}
        </nav>

        <div class="yfd-menu-foot">
          <span>🇬🇧 EN</span>
          <span>☾</span>
        </div>
      </aside>
    </div>
  `;
}

function openSideMenu(){
  closeSideMenu();
  document.body.insertAdjacentHTML('beforeend', renderSideMenu());
}

function closeSideMenu(){
  document.querySelectorAll('.yfd-menu-backdrop').forEach(x => x.remove());
}

function renderQuickShotButton(){
  if(!YFD_QUICK_SHOT_ENABLED) return '';

  return `
    <button class="yfd-quick-shot" data-quick-shot type="button" aria-label="Quick Shot">
      <span>📷</span>
    </button>
  `;
}

function renderGalleryButton(){
  return '';
}

function openGalleryStub(){
  closeActionModal();

  const ref = getCurrentObjectRef();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Photo gallery</span>
            <strong>Section photos</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-service-hook">
          <p><strong>Photos attached to this open section.</strong></p>
          <p>This gallery is not global. It follows the current YFD object: deck, module, area or equipment screen.</p>
          <code>object_ref: ${ref}</code>
          <p>Future actions: upload / quick shot / edit / delete / notes.</p>
          <p>Service-card photos for exact maintenance records stay in the main service/cardholder system.</p>
        </div>

        <button class="yfd-primary-action" type="button" data-close-action>
          OK
        </button>
      </section>
    </div>
  `);
}

let yfdLastBackAt = 0;


function renderForwardButton(){
  if(!Array.isArray(yfdForwardStack) || !yfdForwardStack.length) return '';
  return `<button class="yfd-action-forward yfd-nav-arrow yfd-nav-arrow-forward" data-forward type="button" aria-label="Forward"><span aria-hidden="true">&rsaquo;</span></button>`;
}

function yfdClearForwardStack(){
  yfdForwardStack = [];
}

function yfdRenderScreenState(screenState, push=true){
  if(!screenState || !screenState.screen) return;

  if(screenState.screen === 'custom_builder') renderCustomBuilderScreenV2(push);
  else if(screenState.screen === 'builder_hull') renderBuilderHullScreen(screenState.hullId, push);
  else if(screenState.screen === 'builder_deck') renderBuilderDeckScreen(screenState.deckId, push);
  else if(screenState.screen === 'builder_area') renderBuilderAreaScreen(screenState.areaId, push);
  else if(screenState.screen === 'builder_equipment') renderBuilderEquipmentScreen(screenState.equipmentId, push);
  else if(screenState.screen === 'sailing_builder_root') openSailingBuilderRoot(screenState.rootId, push);
  else if(screenState.screen === 'sailing_root_item') openSailingRootItemScreen(screenState.itemId, push);
  else if(screenState.screen === 'ready_yacht') renderReadyMadeYachtScreen(push);
  else if(screenState.screen === 'module') renderModule(screenState.id, push);
  else if(screenState.screen === 'equipment') renderEquipment(screenState.title, push);
  else if(screenState.screen === 'admin_base_tool') renderAdminBaseToolScreen(push);
  else renderOverview();
}

function goForward(){
  const next = yfdForwardStack.pop();
  if(!next) return;
  yfdRenderScreenState(next, true);
}

function findReadyModuleParent(moduleId){
  const layers = [...getAllLayers(), ...getActiveReadyTreeNodes()];

  for(const layer of layers){
    for(const item of (layer.items || [])){
      if(item && item.target === moduleId){
        return layer.id;
      }
    }
  }

  return null;
}

function forceBack(){
  const now = Date.now();
  if(now - yfdLastBackAt < 450) return;
  yfdLastBackAt = now;

  const current = navStack.pop();
  if(current && current.screen) yfdForwardStack.push({...current});

  if(current && current.screen === 'builder_area'){
    const found = findBuilderArea(current.areaId);

    if(found && found.parentArea && found.parentArea.id){
      renderBuilderAreaScreen(found.parentArea.id, false);
      return;
    }

    if(found && found.deck && found.deck.id){
      renderBuilderDeckScreen(found.deck.id, false);
      return;
    }

    if(found && found.hull && found.hull.id){
      renderBuilderHullScreen(found.hull.id, false);
      return;
    }

    renderCustomBuilderScreenV2(false);
    return;
  }

  if(current && current.screen === 'builder_equipment'){
    const found = findBuilderEquipment(current.equipmentId);

    if(found && found.parentArea && found.parentArea.id){
      renderBuilderAreaScreen(found.parentArea.id, false);
      return;
    }

    if(found && found.deck && found.deck.id){
      renderBuilderDeckScreen(found.deck.id, false);
      return;
    }

    if(found && found.hull && found.hull.id){
      renderBuilderHullScreen(found.hull.id, false);
      return;
    }

    const prev = navStack[navStack.length - 1];
    if(prev && prev.screen === 'builder_area'){
      renderBuilderAreaScreen(prev.areaId, false);
      return;
    }
    if(prev && prev.screen === 'builder_deck'){
      renderBuilderDeckScreen(prev.deckId, false);
      return;
    }

    renderCustomBuilderScreenV2(false);
    return;
  }

  if(current && current.screen === 'builder_hull'){
    renderCustomBuilderScreenV2(false);
    return;
  }

  if(current && current.screen === 'builder_deck'){
    renderCustomBuilderScreenV2(false);
    return;
  }

  if(current && current.screen === 'sailing_root_item'){
    const found = findSailingRootItem(current.itemId);
    if(found && found.rootId){
      openSailingBuilderRoot(found.rootId, false);
      return;
    }
    renderCustomBuilderScreenV2(false);
    return;
  }

  if(current && current.screen === 'sailing_builder_root'){
    renderCustomBuilderScreenV2(false);
    return;
  }

  if(current && current.screen === 'ready_yacht'){
    renderFleetScreen();
    return;
  }

  if(current && current.screen === 'custom_builder'){
    renderOverview();
    return;
  }

  if(current && current.screen === 'equipment'){
    const prev = navStack[navStack.length - 1];
    if(prev && prev.screen === 'module'){
      renderModule(prev.id, false);
      return;
    }
    if(prev && prev.screen === 'ready_yacht'){
      renderReadyMadeYachtScreen(false);
      return;
    }
    renderFleetScreen();
    return;
  }

  if(current && current.screen === 'module'){
    const prev = navStack[navStack.length - 1];

    if(prev && prev.screen === 'module' && getLayer(prev.id)){
      renderModule(prev.id, false);
      return;
    }

    const parentId = findReadyModuleParent(current.id);
    if(parentId && getLayer(parentId)){
      navStack.push({screen:'module', id:parentId});
      renderModule(parentId, false);
      return;
    }

    if(prev && prev.screen === 'ready_yacht'){
      renderReadyMadeYachtScreen(false);
      return;
    }

    renderReadyMadeYachtScreen(false);
    return;
  }

  renderOverview();
}

function goBack(){
  navStack.pop();
  const prev = navStack[navStack.length - 1];

  if(!prev){
    renderOverview();
    return;
  }

  if(prev.screen === 'module'){
    renderModule(prev.id, false);
    return;
  }

  if(prev.screen === 'equipment'){
    renderEquipment(prev.title, false);
    return;
  }

  renderOverview();
}



function makeReadyUserMeta(source, extra){
  return Object.assign({
    created_by:'user',
    created_at:new Date().toISOString(),
    source:source || 'ready_custom'
  }, extra || {});
}

function isReadyUserCreated(obj){
  return !!(obj && obj.created_by === 'user');
}

function generateCustomDeckId(){
  let i = 1;
  while(state.custom.find(d => d.id === `custom_${i}`)){
    i++;
  }
  return `custom_${i}`;
}

function addCustomDeck(name){
  const finalName = (name || '').trim();
  if(!finalName) return;

  const id = generateCustomDeckId();

  const deck = {
    id,
    title: finalName,
    note: 'Custom deck',
    order: 45,
    is_custom: true,
    ...makeReadyUserMeta('ready_custom_deck'),
    items: []
  };

  state.custom.push(deck);
  state.enabled[id] = true;

  renderReadyMadeYachtScreen(false);
}

function openAddDeckModal(){
  closeActionModal();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Hull configuration</span>
            <strong>Add custom deck</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>
        <label class="yfd-field">
          <span>Deck name</span>
          <input id="yfdDeckName" type="text" placeholder="Beach Club, Toy Deck, Diving Deck">
        </label>
        <button class="yfd-primary-action" data-create-deck type="button">Create deck</button>
      </section>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('yfdDeckName');
    if(input) input.focus();
  }, 50);
}

function toggleLayer(id){
  if(!(id in state.enabled)) return;
  state.enabled[id] = !state.enabled[id];
  saveState();
  renderReadyMadeYachtScreen(false);
}


function renderLayerControls(){
  return `
    <section class="yfd-config-bar">
      <div class="yfd-home-controls">
        <button class="yfd-menu-tile" data-open-menu type="button" aria-label="Open menu">
          <span>☰</span>
        </button>

        <button class="yfd-config-button yfd-hull-cta" data-open-config type="button">
          <span>Deck tools</span>
          <strong>Create / remove decks</strong>
        </button>
      </div>
    </section>
  `;
}







function stripBuilderBelowDecks(builder){
  if(!builder || typeof builder !== 'object') return builder;

  const cleanDeck = deck => ({
    id: deck.id,
    title: deck.title || 'Custom deck',
    note: deck.note || 'Custom builder deck',
    zones: [],
    sections: [],
    modules: [],
    equipment: []
  });

  if(Array.isArray(builder.sharedDecks)){
    builder.sharedDecks = builder.sharedDecks.map(cleanDeck);
  }

  if(Array.isArray(builder.hulls)){
    builder.hulls = builder.hulls.map(hull => ({
      ...hull,
      decks: Array.isArray(hull.decks) ? hull.decks.map(cleanDeck) : []
    }));
  }

  return builder;
}


function inferBuilderDeckHullMode(deck, hullId, visibleCount){
  const mode = Number(deck && deck.hullMode);
  if(mode >= 1 && mode <= 3) return mode;

  // Legacy fallback for older test data before hullMode existed.
  // Hull 1 legacy data is treated as monohull unless explicitly recreated.
  if(hullId === 'hull_1') return 1;
  if(hullId === 'hull_2') return 2;
  if(hullId === 'hull_3') return 3;

  return Math.max(1, Math.min(3, Number(visibleCount) || 1));
}

function normalizeBuilderModel(builder, hullCount){
  const safe = builder && typeof builder === 'object' ? builder : {};
  const visibleCount = Math.max(1, Math.min(3, Number(hullCount) || 1));
  const sourceHulls = Array.isArray(safe.hulls) ? safe.hulls : [];

  const hulls = [1,2,3].map(n => {
    const id = 'hull_' + n;
    const existing = sourceHulls.find(h => h && h.id === id);

    let title = 'Hull ' + n;
    if(n === 1) title = visibleCount === 1 ? 'Hull 1' : 'Port hull';
    if(n === 2) title = visibleCount === 3 ? 'Center hull' : 'Starboard hull';
    if(n === 3) title = 'Starboard hull';

    const decks = existing && Array.isArray(existing.decks)
      ? existing.decks.map(deck => ({
          ...deck,
          scope: 'hull',
          hullId: deck.hullId || id,
          hullMode: inferBuilderDeckHullMode(deck, id, visibleCount),
          locked: !!deck.locked,
          note: deck.note || ('Hull deck / ' + id)
        }))
      : [];

    return {
      id,
      title,
      decks,
      children: existing && Array.isArray(existing.children) ? existing.children : [],
      equipment: existing && Array.isArray(existing.equipment) ? existing.equipment : []
    };
  });

  return {
    modelName: safe.modelName || 'Custom Yacht',
    sharedDecks: Array.isArray(safe.sharedDecks)
      ? safe.sharedDecks.map(deck => ({
          ...deck,
          scope: 'shared',
          hullId: null,
          hullMode: inferBuilderDeckHullMode(deck, null, visibleCount),
          locked: !!deck.locked,
          note: deck.note || 'Shared builder deck'
        }))
      : [],
    hulls
  };
}


let builderModalState = {
  type: null,
  scope: null,
  hullId: null,
  deckId: null,
  childType: null,
  deleteTarget: null
};

function closeBuilderModal(){
  const modal = document.querySelector('.yfd-builder-modal-backdrop');
  if(modal) modal.remove();
  builderModalState = {type:null, scope:null, hullId:null, deckId:null, childType:null, deleteTarget:null};
}

function renderBuilderAddDeckModal(scope, hullId){
  const scopeLabel = scope === 'hull' ? 'Hull deck' : 'Shared deck';
  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Custom Yacht Builder</span>
            <strong>Add ${scopeLabel}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Deck name</span>
          <input id="yfdBuilderDeckName" type="text" placeholder="Main deck, Flybridge, Beach club">
        </label>

        <div class="yfd-builder-modal-note">
          This creates a structural deck in the yacht model. Service cards will be connected later in the main RevoYacht system.
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-builder-create-deck type="button">Create deck</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderAddDeckModal(scope, hullId){
  closeBuilderModal();
  builderModalState = {type:'deck', scope:scope || 'shared', hullId:hullId || ''};
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddDeckModal(builderModalState.scope, builderModalState.hullId));
  setTimeout(() => {
    const input = document.getElementById('yfdBuilderDeckName');
    if(input) input.focus();
  }, 50);
}

function submitBuilderAddDeckModal(){
  if(builderModalState.type !== 'deck') return;
  const input = document.getElementById('yfdBuilderDeckName');
  const title = input ? input.value : '';
  createBuilderDeck(title, builderModalState.scope, builderModalState.hullId);
  closeBuilderModal();
}

function renderBuilderAddChildModal(childType){
  const isEquipment = childType === 'equipment';
  const label = isEquipment ? 'Equipment' : 'Area / Zone';
  const placeholder = isEquipment
    ? 'Radar, Oven, Ice maker, Main engine'
    : 'Cockpit, Galley Area, Engine Room, Aft Section';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Custom Yacht Builder</span>
            <strong>Add ${label}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Item name</span>
          <input id="yfdBuilderChildName" type="text" placeholder="${placeholder}">
        </label>

        <div class="yfd-builder-modal-note">
          ${isEquipment
            ? 'Equipment will get its own instance list. Service cards, documents and maintenance history will be connected later in the main RevoYacht system.'
            : 'Area / Zone is a structural container. You can later open it and add deeper areas or equipment inside.'}
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-builder-create-child type="button">Create item</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderAddChildModal(deckId, childType){
  closeBuilderModal();
  builderModalState = {type:'child', scope:null, hullId:null, deckId:deckId || '', childType:childType || ''};
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddChildModal(builderModalState.childType));
  setTimeout(() => {
    const input = document.getElementById('yfdBuilderChildName');
    if(input) input.focus();
  }, 50);
}

function renderBuilderAddItemChoiceModal(opts){
  const o = opts || {};
  const context = yfdEscapeAttr(o.context || 'Custom module');
  const inputId = yfdEscapeAttr(o.inputId || 'yfdBuilderChildName');
  const parentType = yfdEscapeAttr(o.parentType || 'deck');
  const parentId = yfdEscapeAttr(o.parentId || '');
  const createAttr = o.createAttr || 'data-builder-create-child';
  const equipmentPlaceholder = yfdEscapeAttr(o.equipmentPlaceholder || 'Pump, Bar, Diving Station');
  const areaPlaceholder = yfdEscapeAttr(o.areaPlaceholder || 'Area / Zone');
  const note = yfdEscapeAttr(o.note || 'Library items use the same Main Equipment Base as ready-made yacht mode.');

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-builder-kind-modal yfd-action-modal yfd-builder-create-item-modal" role="dialog" aria-modal="true">
        <div class="yfd-action-head">
          <div>
            <span>${context}</span>
            <strong>Add item</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">&times;</button>
        </div>

        <div class="yfd-choice-grid yfd-add-item-segments" role="group" aria-label="Add item type">
          <button class="yfd-choice is-selected" data-builder-kind-select="equipment" data-builder-kind-target-input="${inputId}" data-builder-kind-placeholder="${equipmentPlaceholder}" type="button">
            <strong>Equipment</strong>
          </button>
          <button class="yfd-choice" data-builder-kind-select="area" data-builder-kind-target-input="${inputId}" data-builder-kind-placeholder="${areaPlaceholder}" type="button">
            <strong>Area / Zone</strong>
          </button>
        </div>

        <label class="yfd-field">
          <span>Item name</span>
          <input id="${inputId}" type="text" placeholder="${equipmentPlaceholder}">
        </label>

        <button class="yfd-primary-action" ${createAttr} type="button">Create item</button>
        <button class="yfd-secondary-action yfd-ready-library-open-btn" data-builder-equipment-library-action data-builder-library-open="${parentType}" data-builder-library-id="${parentId}" type="button">From equipment library</button>

        <div class="yfd-builder-modal-note">${note}</div>
      </section>
    </div>
  `;
}

function submitBuilderAddChildModal(){
  if(builderModalState.type !== 'child') return;
  const input = document.getElementById('yfdBuilderChildName');
  const title = input ? input.value : '';
  createBuilderDeckChild(builderModalState.deckId, builderModalState.childType, title);
  closeBuilderModal();
}


function createBuilderDeck(title, scope, hullId){
  const cleanTitle = (title || '').trim();
  if(!cleanTitle) return;

  const safeScope = scope === 'hull' ? 'hull' : 'shared';
  const safeHullId = safeScope === 'hull' ? (hullId || 'hull_1') : null;

  const deck = {
    id: 'deck_' + Date.now(),
    title: cleanTitle,
    note: safeScope === 'hull' ? ('Hull deck / ' + safeHullId) : 'Shared builder deck',
    scope: safeScope,
    hullId: safeHullId,
    hullMode: state.builderHullCount,
    locked:false,
    zones: [],
    modules: [],
    equipment: []
  };

  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);

  if(safeScope === 'hull'){
    const hull = state.builder.hulls.find(h => h.id === safeHullId);
    if(hull) hull.decks.push(deck);
  } else {
    state.builder.sharedDecks.unshift(deck);
  }

  saveState();
  renderCustomBuilderScreenV2(false);
}

function getBuilderDeckChildren(deck, type){
  if(!deck || !type) return [];
  if(type === 'zone') return Array.isArray(deck.zones) ? deck.zones : [];
  if(type === 'section') return Array.isArray(deck.sections) ? deck.sections : [];
  if(type === 'equipment') return Array.isArray(deck.equipment) ? deck.equipment : [];
  return [];
}


function findBuilderArea(areaId){
  function scanAreas(areas, deck, parentArea=null, hull=null){
    for(const area of (areas || [])){
      if(area.id === areaId){
        return {area, deck, parentArea, hull};
      }

      const deep = scanAreas(area.children || [], deck, area, hull);
      if(deep.area) return deep;
    }

    return {area:null, deck:null, parentArea:null, hull:null};
  }

  for(const deck of state.builder.sharedDecks || []){
    const found = scanAreas(deck.zones || [], deck, null, null);
    if(found.area) return found;
  }

  for(const hull of state.builder.hulls || []){
    const hullFound = scanAreas(hull.children || [], null, null, hull);
    if(hullFound.area) return hullFound;

    for(const deck of (hull.decks || [])){
      const found = scanAreas(deck.zones || [], deck, null, hull);
      if(found.area) return found;
    }
  }

  return {area:null, deck:null, parentArea:null, hull:null};
}

function findBuilderDeck(deckId){
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);

  const shared = state.builder.sharedDecks.find(d => d.id === deckId);
  if(shared) return shared;

  for(const hull of state.builder.hulls){
    const found = (hull.decks || []).find(d => d.id === deckId);
    if(found) return found;
  }

  return null;
}

function createBuilderDeckChild(deckId, type, title){
  const deck = findBuilderDeck(deckId);
  const cleanTitle = (title || '').trim();
  if(!deck || !cleanTitle) return;

  const now = Date.now();

  if(type === 'area'){
    if(!Array.isArray(deck.zones)) deck.zones = [];
    deck.zones.push({
      id:'area_' + now,
      type:'area',
      title:cleanTitle,
      note:'Area / zone',
      locked:false,
      children:[],
      equipment:[]
    });
  }

  if(type === 'equipment'){
    if(!Array.isArray(deck.equipment)) deck.equipment = [];
    deck.equipment.push({
      id:'equipment_' + now,
      type:'equipment',
      title:cleanTitle,
      note:'Equipment object / future service link',
      locked:false,
      object_ref:'builder_equipment_' + now,
      service_link:null,
      instances:[
        {
          id:'instance_' + now,
          title:cleanTitle + ' #1',
          service_link:null,
          notes:[]
        }
      ]
    });
  }

  saveState();
  renderBuilderDeckScreen(deckId, false);
}

function renderBuilderChildList(deck, type){
  const items = getBuilderDeckChildren(deck, type);
  if(!items.length) return '';

  const label = type === 'zone' ? 'Zones' : type === 'section' ? 'Sections' : 'Equipment';

  return `
    <div class="yfd-builder-child-group">
      <span>${label}</span>
      ${items.map(item => `
        <div class="yfd-builder-child-card yfd-builder-child-${type}" data-builder-child="${item.id}">
          <strong>${item.title}</strong>
          <em>${type}</em>
        </div>
      `).join('')}
    </div>
  `;
}

function getBuilderDeckChildCount(deck){
  return getBuilderDeckChildren(deck, 'zone').length
    + getBuilderDeckChildren(deck, 'section').length
    + getBuilderDeckChildren(deck, 'equipment').length;
}


function isBuilderInheritedLocked(id){
  const yacht = getActiveYacht && getActiveYacht();
  if(yacht && yacht.locked) return true;

  const found = findBuilderLockTarget(id);
  if(!found || !found.target) return false;

  if(found.parentArea && found.parentArea.locked) return true;
  if(found.deck && found.deck.locked && found.target !== found.deck) return true;

  return false;
}

function renderBuilderLockControl(id, locked){
  const inherited = isBuilderInheritedLocked(id);
  const effectiveLocked = !!locked || inherited;

  return `
    <button class="yfd-lock-control yfd-builder-lock-control ${effectiveLocked ? 'is-locked' : 'is-open'} ${inherited ? 'is-inherited-lock' : ''}" data-builder-lock="${id}" type="button" title="${inherited ? 'Parent branch is locked' : 'Lock structure'}">
      <span class="yfd-lock-label">${inherited ? 'Parent lock' : (effectiveLocked ? 'Locked' : 'Open')}</span>
      <span class="yfd-lock-switch-visual"><i></i></span>
    </button>
  `;
}

function findBuilderLockTarget(id){
  const deck = findBuilderDeck(id);
  if(deck) return {type:'deck', target:deck};

  const areaFound = findBuilderArea(id);
  if(areaFound && areaFound.area) return {type:'area', target:areaFound.area, parentArea:areaFound.parentArea, deck:areaFound.deck};

  const equipmentFound = findBuilderEquipment(id);
  if(equipmentFound && equipmentFound.equipment) return {type:'equipment', target:equipmentFound.equipment, parentArea:equipmentFound.parentArea, deck:equipmentFound.deck};

  return {type:null, target:null};
}

function isBuilderLocked(id){
  const yacht = getActiveYacht && getActiveYacht();
  if(yacht && yacht.locked) return true;

  const found = findBuilderLockTarget(id);
  if(!found || !found.target) return false;

  if(found.target.locked) return true;
  if(found.parentArea && found.parentArea.locked) return true;
  if(found.deck && found.deck.locked) return true;

  return false;
}

function renderBuilderLockedNoticeModal(title='Locked structure'){
  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Locked</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>
        <div class="yfd-builder-modal-note">
          This structure is locked. Unlock it first if you want to add, delete or change items inside this branch.
        </div>
        <button class="yfd-primary-action" data-close-builder-modal type="button">OK</button>
      </section>
    </div>
  `;
}

function openBuilderLockedNotice(title){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderBuilderLockedNoticeModal(title));
}

function renderUnlockBuilderModal(id){
  const found = findBuilderLockTarget(id);
  const title = found && found.target ? (found.target.title || 'this structure') : 'this structure';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Unlock structure</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-builder-modal-note">
          You are about to unlock this structure. Changes may affect the current setup. Continue?
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-confirm-unlock-builder="${id}" type="button">Unlock and edit</button>
        </div>
      </section>
    </div>
  `;
}

function setBuilderLocked(id, locked){
  const found = findBuilderLockTarget(id);
  if(!found || !found.target) return false;
  found.target.locked = !!locked;
  saveState();

  const current = navStack[navStack.length - 1];

  if(current && current.screen === 'builder_deck'){
    renderBuilderDeckScreen(current.deckId, false);
    return true;
  }

  if(current && current.screen === 'builder_area'){
    renderBuilderAreaScreen(current.areaId, false);
    return true;
  }

  if(current && current.screen === 'builder_equipment'){
    renderBuilderEquipmentScreen(current.equipmentId, false);
    return true;
  }

  renderCustomBuilderScreenV2(false);
  return true;
}

function openUnlockBuilderModal(id){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderUnlockBuilderModal(id));
}

function getBuilderStickerRef(kind, id){
  return 'builder:' + kind + ':' + id;
}

function renderBuilderNoteButton(kind, id){
  return renderStickerButton(getBuilderStickerRef(kind, id));
}

function findBuilderInstance(instanceId){
  const allDecks = [
    ...state.builder.sharedDecks,
    ...state.builder.hulls.flatMap(h => h.decks || [])
  ];

  function scanAreas(areas){
    for(const area of (areas || [])){
      for(const eq of (area.equipment || [])){
        const inst = (eq.instances || []).find(i => i.id === instanceId);
        if(inst) return {instance:inst, equipment:eq};
      }
      const deep = scanAreas(area.children || []);
      if(deep.instance) return deep;
    }
    return {instance:null, equipment:null};
  }

  for(const deck of allDecks){
    for(const eq of (deck.equipment || [])){
      const inst = (eq.instances || []).find(i => i.id === instanceId);
      if(inst) return {instance:inst, equipment:eq};
    }
    const deep = scanAreas(deck.zones || []);
    if(deep.instance) return deep;
  }

  return {instance:null, equipment:null};
}

function findBuilderEditTarget(type, id){
  if(type === 'deck'){
    const deck = findBuilderDeck(id);
    return deck ? {type, target:deck} : null;
  }

  if(type === 'area'){
    const found = findBuilderArea(id);
    return found && found.area ? {type, target:found.area, found} : null;
  }

  if(type === 'equipment'){
    const found = findBuilderEquipment(id);
    return found && found.equipment ? {type, target:found.equipment, found} : null;
  }

  if(type === 'instance'){
    const found = findBuilderInstance(id);
    return found && found.instance ? {type, target:found.instance, found} : null;
  }

  return null;
}

function refreshAfterBuilderEdit(){
  const current = navStack[navStack.length - 1];

  if(current && current.screen === 'builder_equipment') renderBuilderEquipmentScreen(current.equipmentId, false);
  else if(current && current.screen === 'builder_area') renderBuilderAreaScreen(current.areaId, false);
  else if(current && current.screen === 'builder_deck') renderBuilderDeckScreen(current.deckId, false);
  else if(current && current.screen === 'builder_hull') renderBuilderHullScreen(current.hullId, false);
  else if(current && current.screen === 'sailing_builder_root') openSailingBuilderRoot(current.rootId, false);
  else if(current && current.screen === 'sailing_root_item') openSailingRootItemScreen(current.itemId, false);
  else if(current && current.screen === 'module') renderModule(current.id, false);
  else if(current && current.screen === 'equipment') renderEquipment(current.title, false);
  else renderCustomBuilderScreenV2(false);
}

function renderBuilderDeleteInstanceModal(instanceId){
  const found = findBuilderInstance(instanceId);
  const title = found && found.instance ? (found.instance.title || 'this instance') : 'this instance';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-action-modal yfd-ready-delete-modal yfd-builder-delete-modal" role="dialog" aria-modal="true">
        <div class="yfd-action-head">
          <div>
            <span>Delete instance</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">&times;</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only this user-created instance from this yacht structure.</p>
          <p>Future service/cardholder history must not be deleted automatically.</p>
        </div>

        <div class="yfd-builder-modal-actions yfd-ready-delete-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-builder-instance="${instanceId}" type="button">Delete item</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderDeleteInstanceModal(instanceId){
  const found = findBuilderInstance(instanceId);
  if(!found || !found.instance || !found.equipment) return;

  if(isBuilderLocked(found.equipment.id)){
    openBuilderLockedNotice('Parent equipment is locked');
    return;
  }

  if((found.equipment.instances || []).length <= 1){
    openBuilderLockedNotice('Keep at least one instance');
    return;
  }

  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderBuilderDeleteInstanceModal(instanceId));
}

function deleteBuilderInstance(instanceId){
  const found = findBuilderInstance(instanceId);
  if(!found || !found.instance || !found.equipment) return;

  if(isBuilderLocked(found.equipment.id)){
    closeBuilderModal();
    openBuilderLockedNotice('Parent equipment is locked');
    return;
  }

  if((found.equipment.instances || []).length <= 1){
    closeBuilderModal();
    openBuilderLockedNotice('Keep at least one instance');
    return;
  }

  found.equipment.instances = (found.equipment.instances || []).filter(i => i.id !== instanceId);
  closeBuilderModal();
  saveState();
  renderBuilderEquipmentScreen(found.equipment.id, false);
}

function renderBuilderEditModal(type, id){
  const found = findBuilderEditTarget(type, id);
  if(!found || !found.target) return '';

  const title = String(found.target.title || '').replace(/"/g, '&quot;');
  const note = String(found.target.note || '').replace(/"/g, '&quot;');

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-action-modal yfd-builder-card-text-modal" role="dialog" aria-modal="true">
        <div class="yfd-action-head">
          <div>
            <span>Builder card</span>
            <strong>Edit name & subtitle</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">&times;</button>
        </div>

        <label class="yfd-field">
          <span>Name</span>
          <input id="yfdBuilderEditTitle" type="text" value="${title}">
        </label>

        ${type !== 'instance' ? `
          <label class="yfd-field">
            <span>Subtitle</span>
            <input id="yfdBuilderEditNote" type="text" value="${note}" placeholder="Equipment, Area / Zone, Deck">
          </label>
        ` : ''}

        <div class="yfd-builder-modal-note">
          Object identity stays connected by key/id; this changes only the visible card text.
        </div>

        <button class="yfd-primary-action" data-save-builder-edit="${id}" data-builder-edit-type="${type}" type="button">Save</button>
        <button class="yfd-secondary-action" data-clear-builder-edit="${id}" data-builder-edit-type="${type}" type="button">Clear custom text</button>
      </section>
    </div>
  `;
}

function openBuilderEditModal(type, id){
  if(type !== 'instance' && isBuilderLocked(id)){
    openBuilderLockedNotice('Item or parent branch is locked');
    return;
  }

  if(type === 'instance'){
    const found = findBuilderInstance(id);
    if(found && found.equipment && isBuilderLocked(found.equipment.id)){
      openBuilderLockedNotice('Parent equipment is locked');
      return;
    }
  }

  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderBuilderEditModal(type, id));
  setTimeout(() => {
    const input = document.getElementById('yfdBuilderEditTitle');
    if(input) input.focus();
  }, 50);
}

function saveBuilderEdit(type, id){
  const found = findBuilderEditTarget(type, id);
  if(!found || !found.target) return;

  const titleInput = document.getElementById('yfdBuilderEditTitle');
  const noteInput = document.getElementById('yfdBuilderEditNote');
  const title = titleInput ? titleInput.value.trim() : '';
  const note = noteInput ? noteInput.value.trim() : '';

  if(title) found.target.title = title;
  if(type !== 'instance') found.target.note = note;

  closeBuilderModal();
  saveState();
  refreshAfterBuilderEdit(type, id);
}

function getBuilderDefaultTextForTarget(type, target){
  if(!target) return {title:'', note:''};

  if(target.fromLibrary && target.library_ref && typeof findReadyLibraryBridgeItem === 'function'){
    const bridge = findReadyLibraryBridgeItem(target.library_ref);
    if(bridge){
      return {
        title:bridge.title || target.title || '',
        note:type === 'equipment' ? 'Attached from equipment library' : (target.note || '')
      };
    }
  }

  const fallbackTitle =
    target.baseTitle ||
    target.base_title ||
    target.defaultTitle ||
    target.default_title ||
    target.key ||
    target.title ||
    '';

  return {
    title:fallbackTitle,
    note:type === 'instance' ? (target.note || '') : ''
  };
}

function clearBuilderEdit(type, id){
  const found = findBuilderEditTarget(type, id);
  if(!found || !found.target) return;

  const defaults = getBuilderDefaultTextForTarget(type, found.target);
  if(defaults.title) found.target.title = defaults.title;
  if(type !== 'instance') found.target.note = defaults.note || '';

  closeBuilderModal();
  saveState();
  refreshAfterBuilderEdit(type, id);
}

function renderBuilderEditButton(type, id){
  return `<button class="yfd-builder-delete-btn yfd-builder-edit-btn yfd-builder-icon-btn" data-builder-edit="${id}" data-builder-edit-type="${type}" type="button" title="Edit" aria-label="Edit">✎</button>`;
}

function renderBuilderScreenControls(type, id, locked){
  const safeType = type === 'equipment' ? 'equipment' : type === 'deck' ? 'deck' : 'area';
  const found = findBuilderEditTarget(safeType, id);
  const title = found && found.target ? (found.target.title || safeType) : safeType;
  const objectLabel = safeType === 'deck'
    ? `Deck: ${title}`
    : safeType === 'equipment'
      ? `Equipment: ${title}`
      : `Area / Zone: ${title}`;

  return `
    <div class="yfd-builder-screen-controls yfd-builder-${safeType}-screen-controls" aria-label="${safeType} controls">
      ${renderYfdContextObjectCard({
        kind:safeType,
        id,
        title,
        displayTitle:getYfdActiveVesselLabel(),
        displaySubtitle:objectLabel,
        editType:safeType,
        deleteType:safeType
      })}
    </div>
  `;
}

function renderBuilderCompactLockButton(id, locked){
  return `<button class="yfd-builder-mini-action ${locked ? 'is-locked' : 'is-open'}" data-builder-lock="${id}" type="button" title="${locked ? 'Locked' : 'Unlocked'}" aria-label="${locked ? 'Locked' : 'Unlocked'}">${locked ? '🔒' : '🔓'}</button>`;
}

function renderBuilderCompactNoteButton(kind, id){
  const ref = getBuilderStickerRef(kind, id);
  const hasNote = !!(state.stickers && state.stickers[ref]);
  return `<button class="yfd-builder-mini-action ${hasNote ? 'has-note' : ''}" data-sticker-ref="${ref}" type="button" title="Note" aria-label="Note">＋</button>`;
}


function getBuilderHullLabel(hullId){
  const hullCount = state.builderHullCount || 1;
  const n = Number(String(hullId || '').replace('hull_','')) || 1;

  if(hullCount === 1) return 'Hull 1';
  if(hullCount === 2) return n === 1 ? 'Port hull' : 'Starboard hull';
  return n === 1 ? 'Port hull' : n === 2 ? 'Center hull' : 'Starboard hull';
}

function renderBuilderHullServiceCard(hullId, label){
  return `
    <article class="yfd-hull-service-card" data-open-builder-hull="${hullId}" role="button" tabindex="0">
      <div>
        <span>Hull object</span>
        <strong>${label}</strong>
      </div>
      <small>Hull condition, inspections and future repair history</small>
    </article>
  `;
}

function createBuilderHullChild(hullId, type, title){
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);
  const hull = (state.builder.hulls || []).find(h => h.id === hullId);
  const clean = (title || '').trim();
  if(!hull || !clean) return;

  const now = Date.now();

  if(type === 'area'){
    if(!Array.isArray(hull.children)) hull.children = [];
    hull.children.push({
      id:'area_' + now,
      type:'area',
      title:clean,
      note:'Hull area / zone',
      locked:false,
      children:[],
      equipment:[]
    });
  }

  if(type === 'equipment'){
    if(!Array.isArray(hull.equipment)) hull.equipment = [];
    hull.equipment.push({
      id:'equipment_' + now,
      type:'equipment',
      title:clean,
      note:'Hull equipment object',
      locked:false,
      instances:[
        {
          id:'instance_' + now,
          title:clean + ' #1'
        }
      ]
    });
  }

  saveState();
  renderBuilderHullScreen(hullId, false);
}


function renderBuilderAddHullChildMenu(hullId){
  return renderBuilderAddItemChoiceModal({
    context:'Hull object',
    inputId:'yfdBuilderHullChildName',
    parentType:'hull',
    parentId:hullId,
    createAttr:'data-builder-create-hull-child',
    equipmentPlaceholder:'Pump, valve, transducer, hull sensor',
    areaPlaceholder:'Forward hull section, bilge area, repair zone',
    note:'Library items use the same Main Equipment Base as ready-made yacht mode.'
  });
}

function openBuilderAddHullChildMenu(hullId){
  closeBuilderModal();
  builderModalState = {
    type:'hull_child',
    scope:null,
    hullId:hullId || '',
    deckId:null,
    childType:'equipment',
    deleteTarget:null
  };
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddHullChildMenu(builderModalState.hullId));
}

function renderBuilderAddHullChildModal(hullId, childType){
  const isEquipment = childType === 'equipment';
  const label = isEquipment ? 'Equipment' : 'Area / Zone';
  const placeholder = isEquipment ? 'Skin fitting, valve, transducer, hull sensor' : 'Forward hull section, bilge area, repair zone';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Hull object</span>
            <strong>Add ${label}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Item name</span>
          <input id="yfdBuilderHullChildName" type="text" placeholder="${placeholder}">
        </label>

        <div class="yfd-builder-modal-note">
          ${isEquipment
            ? 'Equipment will get its own instances and future service records.'
            : 'Area / Zone is a structural container inside this hull.'}
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-builder-create-hull-child type="button">Create item</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderAddHullChildModal(hullId, childType){
  closeBuilderModal();
  builderModalState = {
    type:'hull_child',
    scope:null,
    hullId:hullId || '',
    deckId:null,
    childType:childType || '',
    deleteTarget:null
  };
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddHullChildModal(builderModalState.hullId, builderModalState.childType));
  setTimeout(() => {
    const input = document.getElementById('yfdBuilderHullChildName');
    if(input) input.focus();
  }, 50);
}

function submitBuilderAddHullChildModal(){
  if(builderModalState.type !== 'hull_child') return;
  const input = document.getElementById('yfdBuilderHullChildName');
  const title = input ? input.value : '';
  createBuilderHullChild(builderModalState.hullId, builderModalState.childType, title);
  closeBuilderModal();
}

function renderBuilderHullScreen(hullId, push=true){
  yfdSaveActiveScreen({screen:'builder_hull', hullId});

  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');
  const label = getBuilderHullLabel(hullId);
  const hull = (state.builder.hulls || []).find(h => h.id === hullId);
  const items = hull
    ? [
        ...((hull.children || [])),
        ...((hull.equipment || []))
      ]
    : [];

  if(!module) return;
  if(push) navStack.push({screen:'builder_hull', hullId});

  if(overview){
    overview.hidden = true;
    overview.classList.remove('yfd-ready-overview');
  }
  if(hero) hero.hidden = true;
  module.hidden = false;

  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderYfdContextObjectCard({
        kind:'hull',
        id:hullId,
        title:label,
        displayTitle:getYfdActiveVesselLabel(),
        displaySubtitle:`Hull: ${label}`,
        canEdit:false,
        canDelete:false
      })}
      ${renderForwardButton()}
    </div>

    <div class="yfd-list yfd-builder-page-list">
      ${items.length ? items.map(renderBuilderDeckItemCard).join('') : `
        <section class="yfd-builder-empty-state">
          <div>
            <strong>Empty hull object</strong>
            <span>Add an area/zone or hull-specific equipment to start building this hull.</span>
          </div>
          <button data-builder-add-hull-child-menu data-builder-parent-hull="${hullId}" type="button">+ Add item</button>
        </section>
      `}

      ${items.length ? `
        <section class="yfd-builder-page-add-row">
          <button data-builder-add-hull-child-menu data-builder-parent-hull="${hullId}" type="button">+ Add item</button>
        </section>
      ` : ''}

    </div>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function renderBuilderDeckCard(deck){
  const title = deck && deck.title ? deck.title : 'Untitled deck';
  const id = deck && deck.id ? deck.id : '';
  return `
    <article class="yfd-builder-deck-card yfd-builder-deck-open-card yfd-builder-node-card" role="group" tabindex="0">
      <div class="yfd-builder-node-head yfd-builder-open-zone" data-open-builder-deck="${id}" role="button" tabindex="0" aria-label="Open deck">
        <strong>${yfdEscapeAttr(title)}</strong>
      </div>

      ${renderYfdObjectActionMenu({kind:'deck', id, title, editType:'deck', deleteType:'deck'})}
      ${renderYfdTaskBoard('deck', id, title)}
    </article>
  `;
}


function removeBuilderDeck(deckId){
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);

  state.builder.sharedDecks = state.builder.sharedDecks.filter(deck => deck.id !== deckId);

  state.builder.hulls = state.builder.hulls.map(hull => ({
    ...hull,
    decks: (hull.decks || []).filter(deck => deck.id !== deckId)
  }));

  saveState();
  renderCustomBuilderScreenV2(false);
}

function findBuilderDeckTitle(deckId){
  const deck = findBuilderDeck(deckId);
  return deck ? deck.title : 'this deck';
}

function renderBuilderDeleteDeckModal(deckId){
  const title = findBuilderDeckTitle(deckId);

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-action-modal yfd-ready-delete-modal yfd-builder-delete-modal" role="dialog" aria-modal="true">
        <div class="yfd-action-head">
          <div>
            <span>Delete deck</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">&times;</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only the user-created deck from this yacht structure.</p>
          <p>Future service/cardholder history must not be deleted automatically.</p>
        </div>

        <div class="yfd-builder-modal-actions yfd-ready-delete-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-builder-deck type="button">Delete item</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderDeleteDeckModal(deckId){
  closeBuilderModal();
  builderModalState = {
    type:'delete_deck',
    scope:null,
    hullId:null,
    deckId:deckId || '',
    childType:null,
    deleteTarget:deckId || ''
  };
  document.body.insertAdjacentHTML('beforeend', renderBuilderDeleteDeckModal(builderModalState.deckId));
}

function submitBuilderDeleteDeck(){
  if(builderModalState.type !== 'delete_deck' || !builderModalState.deckId) return;
  const deckId = builderModalState.deckId;
  if(isBuilderLocked(deckId)){
    closeBuilderModal();
    openBuilderLockedNotice('Deck is locked');
    return;
  }
  closeBuilderModal();
  removeBuilderDeck(deckId);
}


function findBuilderItemTitle(itemId){
  const areaFound = findBuilderArea(itemId);
  if(areaFound && areaFound.area) return areaFound.area.title || 'this area';

  const equipmentFound = findBuilderEquipment(itemId);
  if(equipmentFound && equipmentFound.equipment) return equipmentFound.equipment.title || 'this equipment';

  return 'this item';
}

function removeBuilderItem(itemId, itemType){
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);

  function removeFromArea(area){
    let removed = false;

    const beforeChildren = (area.children || []).length;
    area.children = (area.children || []).filter(child => child.id !== itemId);
    if(area.children.length !== beforeChildren) removed = true;

    const beforeEquipment = (area.equipment || []).length;
    area.equipment = (area.equipment || []).filter(eq => eq.id !== itemId);
    if(area.equipment.length !== beforeEquipment) removed = true;

    for(const child of (area.children || [])){
      if(removeFromArea(child)) removed = true;
    }

    return removed;
  }

  const decks = [
    ...state.builder.sharedDecks,
    ...state.builder.hulls.flatMap(h => h.decks || [])
  ];

  for(const deck of decks){
    const beforeZones = (deck.zones || []).length;
    deck.zones = (deck.zones || []).filter(area => area.id !== itemId);
    if(deck.zones.length !== beforeZones){
      saveState();
      return true;
    }

    const beforeEquipment = (deck.equipment || []).length;
    deck.equipment = (deck.equipment || []).filter(eq => eq.id !== itemId);
    if(deck.equipment.length !== beforeEquipment){
      saveState();
      return true;
    }

    for(const area of (deck.zones || [])){
      if(removeFromArea(area)){
        saveState();
        return true;
      }
    }
  }

  return false;
}

function renderBuilderDeleteItemModal(itemId, itemType){
  const title = findBuilderItemTitle(itemId);
  const label = itemType === 'equipment' ? 'equipment' : 'area / zone';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-action-modal yfd-ready-delete-modal yfd-builder-delete-modal" role="dialog" aria-modal="true">
        <div class="yfd-action-head">
          <div>
            <span>Delete ${label}</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">&times;</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only the user-created item from this yacht structure.</p>
          <p>Future service/cardholder history must not be deleted automatically.</p>
        </div>

        <div class="yfd-builder-modal-actions yfd-ready-delete-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-builder-item type="button">Delete item</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderDeleteItemModal(itemId, itemType){
  closeBuilderModal();
  builderModalState = {
    type:'delete_item',
    scope:null,
    hullId:null,
    deckId:null,
    childType:null,
    deleteTarget:itemId || '',
    deleteTargetType:itemType || 'area'
  };
  document.body.insertAdjacentHTML('beforeend', renderBuilderDeleteItemModal(builderModalState.deleteTarget, builderModalState.deleteTargetType));
}


function getBuilderReturnContextForItem(itemId, itemType){
  if(itemType === 'equipment'){
    const found = findBuilderEquipment(itemId);
    if(found && found.parentArea && found.parentArea.id) return {screen:'builder_area', areaId:found.parentArea.id};
    if(found && found.deck && found.deck.id) return {screen:'builder_deck', deckId:found.deck.id};
  }

  const areaFound = findBuilderArea(itemId);
  if(areaFound && areaFound.parentArea && areaFound.parentArea.id) return {screen:'builder_area', areaId:areaFound.parentArea.id};
  if(areaFound && areaFound.deck && areaFound.deck.id) return {screen:'builder_deck', deckId:areaFound.deck.id};

  return {screen:'custom_builder'};
}

function renderBuilderReturnContext(ctx){
  if(ctx && ctx.screen === 'builder_area' && ctx.areaId && findBuilderArea(ctx.areaId).area){
    renderBuilderAreaScreen(ctx.areaId, false);
    return;
  }

  if(ctx && ctx.screen === 'builder_deck' && ctx.deckId && findBuilderDeck(ctx.deckId)){
    renderBuilderDeckScreen(ctx.deckId, false);
    return;
  }

  renderCustomBuilderScreenV2(false);
}

function submitBuilderDeleteItem(){
  if(builderModalState.type !== 'delete_item' || !builderModalState.deleteTarget) return;

  const target = builderModalState.deleteTarget;
  const targetType = builderModalState.deleteTargetType || 'area';
  const returnContext = getBuilderReturnContextForItem(target, targetType);

  if(isBuilderLocked(target)){
    closeBuilderModal();
    openBuilderLockedNotice('Item is locked');
    return;
  }

  closeBuilderModal();
  removeBuilderItem(target, targetType);
  renderBuilderReturnContext(returnContext);
}

function renderBuilderDeckItemCard(item){
  const type = item.type || 'area';
  const title = item.title || 'Untitled item';
  const isEquipment = type === 'equipment';
  const badge = isEquipment ? 'Equipment' : 'Area / Zone';
  const id = item.id || '';
  const openAttr = isEquipment
    ? `data-open-builder-equipment="${id}"`
    : `data-open-builder-area="${id}"`;

  return `
    <article class="yfd-builder-v2-item-card yfd-builder-v2-item-${isEquipment ? 'equipment' : 'area'}" ${openAttr} role="button" tabindex="0" aria-label="Open item">
      <strong>${yfdEscapeAttr(title)}</strong>
      <span>${badge}</span>
      ${renderYfdObjectActionMenu({
        kind:isEquipment ? 'equipment' : 'area',
        id,
        title,
        editType:isEquipment ? 'equipment' : 'area',
        deleteType:isEquipment ? 'equipment' : 'area'
      })}
      ${renderYfdTaskBoard(isEquipment ? 'equipment' : 'area', id, title)}
    </article>
  `;
}



function createBuilderAreaChild(areaId, type, title){
  const found = findBuilderArea(areaId);
  if(!found.area) return;

  const clean = (title || '').trim();
  if(!clean) return;

  const now = Date.now();

  if(type === 'area'){
    if(!Array.isArray(found.area.children)) found.area.children = [];
    found.area.children.push({
      id:'area_' + now,
      type:'area',
      title:clean,
      note:'Area / zone',
      locked:false,
      children:[],
      equipment:[]
    });
  }

  if(type === 'equipment'){
    if(!Array.isArray(found.area.equipment)) found.area.equipment = [];
    found.area.equipment.push({
      id:'equipment_' + now,
      type:'equipment',
      title:clean,
      note:'Equipment object',
      locked:false,
      instances:[
        {
          id:'instance_' + now,
          title:clean + ' #1'
        }
      ]
    });
  }

  saveState();
  renderBuilderAreaScreen(areaId, false);
}



/* === V40-D3D-4E Builder library uses ready modal standard 20260507 === */
function getBuilderLibraryTargetLabel(targetType){
  if(targetType === 'deck') return 'Deck';
  if(targetType === 'hull') return 'Hull';
  if(targetType === 'sailing_root') return 'Sailing rig section';
  return 'Area / Zone';
}

function renderBuilderAreaLibraryModal(areaId, targetType='area'){
  const safeTargetType = targetType === 'deck' ? 'deck' : targetType === 'hull' ? 'hull' : targetType === 'sailing_root' ? 'sailing_root' : 'area';
  const groups = getBuilderLibraryGroupsForTarget(safeTargetType, areaId);
  const emptyText = safeTargetType === 'sailing_root'
    ? 'No sailing rig equipment is configured for this section.'
    : 'No Main Equipment Base items are configured yet.';

  return `
    <div class="yfd-builder-modal-backdrop yfd-builder-library-backdrop" data-builder-modal-backdrop>
      <section class="yfd-ready-library-modal yfd-builder-library-modal" role="dialog" aria-modal="true">
        <div class="yfd-ready-library-head">
          <div>
            <span>Builder library</span>
            <strong>Add equipment to ${getBuilderLibraryTargetLabel(safeTargetType)}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-ready-library-scroll">
          ${groups.length ? groups.map(group => {
            const groupTitle = yfdEscapeAttr(group.title || 'Equipment');
            return `
              <section class="yfd-ready-library-section">
                <h3>${groupTitle}</h3>
                <div class="yfd-ready-library-grid">
                  ${(group.items || []).map(item => {
                    const itemId = yfdEscapeAttr(item.id || '');
                    const itemTitle = yfdEscapeAttr(item.title || 'Equipment');
                    const itemCategory = yfdEscapeAttr(item.category || group.title || 'Equipment');
                    return `
                    <button class="yfd-ready-library-item yfd-builder-library-item" data-builder-library-select="${itemId}" data-builder-library-area="${yfdEscapeAttr(areaId)}" data-builder-library-target-type="${safeTargetType}" data-builder-library-target-id="${yfdEscapeAttr(areaId)}" type="button">
                      <strong>${itemTitle}</strong>
                      <span>${itemCategory}</span>
                    </button>
                    `;
                  }).join('')}
                </div>
              </section>
            `;
          }).join('') : `<p class="yfd-builder-modal-note">${emptyText}</p>`}
        </div>

        <div class="yfd-ready-library-actions yfd-builder-library-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action is-disabled" data-builder-library-add-selected data-builder-library-area="${yfdEscapeAttr(areaId)}" data-builder-library-target-type="${safeTargetType}" data-builder-library-target-id="${yfdEscapeAttr(areaId)}" type="button" disabled>Add selected</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderEquipmentLibraryModal(targetType, targetId){
  const safeTargetType = targetType === 'deck' ? 'deck' : targetType === 'hull' ? 'hull' : targetType === 'sailing_root' ? 'sailing_root' : 'area';
  if(!targetId) return;

  if(safeTargetType !== 'sailing_root' && isBuilderLocked(targetId)){
    openBuilderLockedNotice(getBuilderLibraryTargetLabel(safeTargetType) + ' is locked');
    return;
  }
  if(safeTargetType === 'sailing_root' && !getSailingBuilderRoot(targetId)) return;

  closeBuilderModal();
  builderModalState = {
    type:'equipment_library',
    scope:null,
    hullId:safeTargetType === 'hull' ? targetId : null,
    deckId:safeTargetType === 'deck' ? targetId : null,
    childType:null,
    deleteTarget:null,
    areaId:safeTargetType === 'area' ? targetId : null,
    rootId:safeTargetType === 'sailing_root' ? targetId : null,
    libraryTargetType:safeTargetType,
    libraryTargetId:targetId || ''
  };
  document.body.insertAdjacentHTML('beforeend', renderBuilderAreaLibraryModal(targetId, safeTargetType));
}

function openBuilderAreaLibraryModal(areaId){
  openBuilderEquipmentLibraryModal('area', areaId);
}

function openBuilderDeckLibraryModal(deckId){
  openBuilderEquipmentLibraryModal('deck', deckId);
}

function openBuilderHullLibraryModal(hullId){
  openBuilderEquipmentLibraryModal('hull', hullId);
}

function selectBuilderAreaLibraryItem(btn){
  if(!btn) return;

  const modal = btn.closest('.yfd-builder-library-modal');
  if(!modal) return;

  modal.querySelectorAll('.yfd-builder-library-item.is-selected').forEach(x => x.classList.remove('is-selected'));
  btn.classList.add('is-selected');

  const addBtn = modal.querySelector('[data-builder-library-add-selected]');
  if(addBtn){
    addBtn.disabled = false;
    addBtn.classList.remove('is-disabled');
    addBtn.dataset.builderLibrarySelected = btn.dataset.builderLibrarySelect || '';
    addBtn.dataset.builderLibraryArea = btn.dataset.builderLibraryArea || builderModalState.areaId || '';
    addBtn.dataset.builderLibraryTargetType = btn.dataset.builderLibraryTargetType || builderModalState.libraryTargetType || 'area';
    addBtn.dataset.builderLibraryTargetId = btn.dataset.builderLibraryTargetId || builderModalState.libraryTargetId || builderModalState.areaId || '';
  }
}


function renderBuilderAddAreaChildMenu(areaId){
  return renderBuilderAddItemChoiceModal({
    context:'Area / Zone',
    inputId:'yfdBuilderAreaChildName',
    parentType:'area',
    parentId:areaId,
    createAttr:'data-builder-create-area-child',
    equipmentPlaceholder:'Pump, Bar, Diving Station',
    areaPlaceholder:'Cockpit, aft section, technical space',
    note:'Library items use the current equipment base. Area / Zone creates another structural container.'
  });
}

function openBuilderAddAreaChildMenu(areaId){
  if(isBuilderLocked(areaId)){
    openBuilderLockedNotice('Area / Zone is locked');
    return;
  }
  closeBuilderModal();
  builderModalState = {type:'area_child', scope:null, hullId:null, deckId:null, childType:'equipment', deleteTarget:null, areaId:areaId || ''};
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddAreaChildMenu(builderModalState.areaId));
}

function renderBuilderAddAreaChildModal(areaId, childType){
  const isEquipment = childType === 'equipment';
  const label = isEquipment ? 'Equipment' : 'Area / Zone';
  const placeholder = isEquipment ? 'Radar, Pump, Grill, Winch' : 'Cockpit, Aft section, Technical space';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Area / Zone</span>
            <strong>Add ${label}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Item name</span>
          <input id="yfdBuilderAreaChildName" type="text" placeholder="${placeholder}">
        </label>

        <div class="yfd-builder-modal-note">
          ${isEquipment
            ? 'Equipment will get its own instance list. Service cards will be connected later.'
            : 'Area / Zone is a structural container. You can open it and continue deeper.'}
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-builder-create-area-child type="button">Create item</button>
        </div>
      </section>
    </div>
  `;
}

function openBuilderAddAreaChildModal(areaId, childType){
  closeBuilderModal();
  builderModalState = {type:'area_child', scope:null, hullId:null, deckId:null, childType:childType || '', deleteTarget:null, areaId:areaId || ''};
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddAreaChildModal(builderModalState.areaId, builderModalState.childType));
  setTimeout(() => {
    const input = document.getElementById('yfdBuilderAreaChildName');
    if(input) input.focus();
  }, 50);
}

function submitBuilderAddAreaChildModal(){
  if(builderModalState.type !== 'area_child') return;
  const input = document.getElementById('yfdBuilderAreaChildName');
  const title = input ? input.value : '';
  createBuilderAreaChild(builderModalState.areaId, builderModalState.childType, title);
  closeBuilderModal();
}

function renderBuilderAreaScreen(areaId, push=true){
  yfdSaveActiveScreen({screen:'builder_area', areaId});
  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  const found = findBuilderArea(areaId);
  if(!module || !found.area) return;

  const area = found.area;

  if(push) navStack.push({screen:'builder_area', areaId});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderBuilderScreenControls('area', area.id, !!area.locked)}
      ${renderForwardButton()}
    </div>

    <div class="yfd-list yfd-builder-page-list">
      ${
        (area.children && area.children.length) || (area.equipment && area.equipment.length)
        ? [
            ...(area.children || []),
            ...(area.equipment || [])
          ].map(renderBuilderDeckItemCard).join('')
        : `
          <section class="yfd-builder-empty-state">
            <div>
              <strong>Empty area</strong>
              <span>Add area or equipment to continue building the structure.</span>
            </div>
            <button data-builder-add-area-child-menu data-builder-parent-area="${area.id}" type="button">+ Add item</button>
          </section>
        `
      }

      ${((area.children && area.children.length) || (area.equipment && area.equipment.length)) ? `
        <section class="yfd-builder-page-add-row">
          <button data-builder-add-area-child-menu data-builder-parent-area="${area.id}" type="button">+ Add item</button>
        </section>
      ` : ''}

    </div>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function renderBuilderDeckScreen(deckId, push=true){
  yfdSaveActiveScreen({screen:'builder_deck', deckId});
  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');
  const deck = findBuilderDeck(deckId);

  if(!module || !deck) return;

  if(push) navStack.push({screen:'builder_deck', deckId});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  const items = [
    ...(Array.isArray(deck.zones) ? deck.zones : []),
    ...(Array.isArray(deck.equipment) ? deck.equipment : [])
  ];

  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderBuilderScreenControls('deck', deck.id, !!deck.locked)}
      ${renderForwardButton()}
    </div>

    <div class="yfd-list yfd-builder-page-list">
      ${items.length ? items.map(renderBuilderDeckItemCard).join('') : `
        <section class="yfd-builder-empty-state">
          <div>
            <strong>Empty deck</strong>
            <span>Add an area/zone or equipment to start building this deck.</span>
          </div>
          <button data-builder-add-child-menu data-builder-parent-deck="${deck.id}" type="button">+ Add item</button>
        </section>
      `}

      ${items.length ? `
        <section class="yfd-builder-page-add-row">
          <button data-builder-add-child-menu data-builder-parent-deck="${deck.id}" type="button">+ Add item</button>
        </section>
      ` : ''}

    </div>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function renderBuilderAddChildMenu(deckId){
  return renderBuilderAddItemChoiceModal({
    context:'Custom module',
    inputId:'yfdBuilderChildName',
    parentType:'deck',
    parentId:deckId,
    createAttr:'data-builder-create-child',
    equipmentPlaceholder:'Pump, Bar, Diving Station',
    areaPlaceholder:'Cockpit, Galley Area, Engine Room',
    note:'Library items use the same Main Equipment Base as ready-made yacht mode.'
  });
}


function findBuilderEquipment(equipmentId){
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);

  function scanAreas(areas, deck, parentArea=null){
    for(const area of (areas || [])){
      const inArea = (area.equipment || []).find(item => item.id === equipmentId);
      if(inArea) return {equipment:inArea, deck, parentArea:area};

      const deep = scanAreas(area.children || [], deck, area);
      if(deep.equipment) return deep;
    }

    return {equipment:null, deck:null, parentArea:null};
  }

  for(const hull of state.builder.hulls || []){
    const hullDirect = (hull.equipment || []).find(item => item.id === equipmentId);
    if(hullDirect) return {equipment:hullDirect, deck:null, parentArea:null};

    const hullDeep = scanAreas(hull.children || [], null, null);
    if(hullDeep.equipment) return hullDeep;
  }

  const allDecks = [
    ...state.builder.sharedDecks,
    ...state.builder.hulls.flatMap(h => h.decks || [])
  ];

  for(const deck of allDecks){
    const direct = (deck.equipment || []).find(item => item.id === equipmentId);
    if(direct) return {equipment:direct, deck, parentArea:null};

    const deep = scanAreas(deck.zones || [], deck, null);
    if(deep.equipment) return deep;
  }

  return {equipment:null, deck:null, parentArea:null};
}

function addBuilderEquipmentInstance(equipmentId){
  const found = findBuilderEquipment(equipmentId);
  const equipment = found.equipment;
  if(!equipment) return;

  if(!Array.isArray(equipment.instances)) equipment.instances = [];
  const n = equipment.instances.length + 1;
  const now = Date.now();

  equipment.instances.push({
    id:'instance_' + now,
    title:equipment.title + ' #' + n,
    service_link:null,
    notes:[]
  });

  saveState();
  renderBuilderEquipmentScreen(equipmentId, false);
}

function renderBuilderEquipmentScreen(equipmentId, push=true){
  yfdSaveActiveScreen({screen:'builder_equipment', equipmentId});
  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');
  const found = findBuilderEquipment(equipmentId);
  const equipment = found.equipment;

  if(!module || !equipment) return;

  if(push) navStack.push({screen:'builder_equipment', equipmentId});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  if(!Array.isArray(equipment.instances) || !equipment.instances.length){
    equipment.instances = [{
      id:'instance_' + Date.now(),
      title:(equipment.title || 'Equipment') + ' #1',
      service_link:null,
      notes:[]
    }];
    saveState();
  }

  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderBuilderScreenControls('equipment', equipment.id, !!equipment.locked)}
      ${renderForwardButton()}
    </div>

    <section class="yfd-instances-card">
      <div class="yfd-instances-head">
        <span>Instances</span>
        <strong>${equipment.instances.length}</strong>
      </div>

      ${equipment.instances.map(instance => `
        <div class="yfd-instance-row">
          <strong>${yfdEscapeAttr(instance.title)}</strong>
          ${renderYfdTaskBoard('instance', instance.id, instance.title || 'Instance')}
          <div>
            <button class="yfd-service-link" type="button">Open service</button>
            ${renderYfdObjectActionMenu({
              kind:'instance',
              id:instance.id,
              title:instance.title || 'Instance',
              editType:'instance',
              deleteType:'instance'
            })}
          </div>
        </div>
      `).join('')}

      <button class="yfd-add-instance-inline" data-builder-add-instance="${equipment.id}" type="button">+ Add instance</button>
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function openBuilderAddChildMenu(deckId){
  if(isBuilderLocked(deckId)){
    openBuilderLockedNotice('Deck is locked');
    return;
  }
  closeBuilderModal();
  builderModalState = {type:'child', scope:null, hullId:null, deckId:deckId || '', childType:'equipment'};
  document.body.insertAdjacentHTML('beforeend', renderBuilderAddChildMenu(builderModalState.deckId));
}

function setBuilderHullCount(count){
  const yacht = getActiveYacht && getActiveYacht();

  if(yacht && yacht.hullCount){
    state.builderHullCount = Math.max(1, Math.min(3, Number(yacht.hullCount) || 1));
    state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);
    saveState();
    renderCustomBuilderScreenV2(false);
    return;
  }

  state.builderHullCount = Math.max(1, Math.min(3, Number(count) || 1));
  state.builder = normalizeBuilderModel(state.builder, state.builderHullCount);
  saveState();
  renderCustomBuilderScreenV2(false);
}

function getHullConfigLabel(count){
  const n = Number(count || 1);
  if(n === 2) return 'Catamaran';
  if(n === 3) return 'Trimaran';
  return 'Monohull';
}


function getSailingBuilderPrefix(){
  const yacht = getActiveYacht();
  const name = yacht && yacht.name ? yacht.name : 'Sailing Yacht';
  return 'S/Y ' + name;
}

function getActiveSailingRigId(){
  const yacht = getActiveYacht && getActiveYacht();
  return yacht && yacht.rig ? yacht.rig : 'bermudan_sloop';
}

function getSailingRigTitle(rigId){
  const titles = {
    bermudan_sloop:'Bermudan sloop',
    ketch:'Ketch',
    schooner:'Schooner'
  };
  return titles[rigId || 'bermudan_sloop'] || 'Sailing rig';
}

function getSailingBuilderRootConfigs(){
  return getSailingOperationalRoots(getActiveSailingRigId()).map(root => ({
    id:root.id,
    title:root.title,
    note:root.note || getSailingRigSectionNote(root)
  }));
}

function getDefaultSailingBuilderRootId(){
  const first = getSailingBuilderRootConfigs()[0];
  return first ? first.id : 'sailing_bermudan_aft_sails';
}

function renderSailingBuilderYachtCard(){
  const rigTitle = getSailingRigTitle(getActiveSailingRigId());
  return `
    <section class="yfd-sailing-builder-yacht-card">
      <span>Custom sailing structure / ${rigTitle}</span>
      <strong>${getSailingBuilderPrefix()}</strong>
    </section>
  `;
}

function getSailingBuilderRigSlot(root){
  const title = String(root && root.title || '').toUpperCase();
  const id = String(root && root.id || '').toLowerCase();

  if(title.indexOf('AFT SAIL') >= 0 || id.indexOf('aft_sail') >= 0) return 'left';
  if(title.indexOf('MAST SAIL') >= 0 || id.indexOf('mast_sail') >= 0) return 'left';
  if(title.indexOf('FORWARD SAIL') >= 0 || id.indexOf('forward_sail') >= 0) return 'right';
  if(title.indexOf('STAY') >= 0 || id.indexOf('stay') >= 0) return 'right';
  if(title.indexOf('TOP') >= 0 || id.indexOf('_top') >= 0) return 'top';
  if(title.indexOf('SPAR') >= 0 || id.indexOf('_spar') >= 0) return 'spar';
  if(title.indexOf('RIGS') >= 0 || title.indexOf('RIGGING') >= 0 || id.indexOf('_rig') >= 0) return 'rigs';

  return 'extra';
}

function renderSailingRigDiagramButton(root, slot){
  if(!root) return '';

  return `
    <button class="yfd-sailing-builder-root-btn yfd-sailing-rig-card yfd-sailing-rig-card-${slot}" data-sailing-builder-root="${yfdEscapeAttr(root.id)}" data-sailing-rig-slot="${slot}" type="button">
      <span>${yfdEscapeAttr(root.title)}</span>
    </button>
  `;
}

function renderSailingBuilderRootButtons(){
  const roots = getSailingBuilderRootConfigs();
  const slots = roots.reduce((acc, root) => {
    const slot = getSailingBuilderRigSlot(root);
    if(!acc[slot]) acc[slot] = [];
    acc[slot].push(root);
    return acc;
  }, {});
  const rigId = getActiveSailingRigId();
  const sideLabel = rigId === 'bermudan_sloop' ? 'Bermudan sloop rig' : 'Multi-mast sailing rig';
  const extraRoots = slots.extra || [];

  return `
    <section class="yfd-sailing-rig-diagram yfd-sailing-rig-diagram-${yfdEscapeAttr(rigId)}" aria-label="${sideLabel}">
      <div class="yfd-sailing-rig-side yfd-sailing-rig-side-left">
        ${(slots.left || []).map(root => renderSailingRigDiagramButton(root, 'side')).join('')}
      </div>

      <div class="yfd-sailing-rig-center">
        ${(slots.top || []).map(root => renderSailingRigDiagramButton(root, 'top')).join('')}
        ${(slots.spar || []).map(root => renderSailingRigDiagramButton(root, 'spar')).join('')}
        ${(slots.rigs || []).map(root => renderSailingRigDiagramButton(root, 'rigs')).join('')}
      </div>

      <div class="yfd-sailing-rig-side yfd-sailing-rig-side-right">
        ${(slots.right || []).map(root => renderSailingRigDiagramButton(root, 'side')).join('')}
      </div>
    </section>

    ${extraRoots.length ? `
      <section class="yfd-sailing-rig-extra">
        ${extraRoots.map(root => renderSailingRigDiagramButton(root, 'extra')).join('')}
      </section>
    ` : ''}
  `;
}

function getSailingBuilderRootTitle(rootId){
  const root = getSailingBuilderRootConfigs().find(item => item.id === rootId);
  if(root) return root.title;

  const legacyMap = {
    sailing_top:'TOP',
    spar:'SPAR',
    rigging:'RIGS',
    sails:'SAILS'
  };
  return legacyMap[rootId] || 'Sailing section';
}

function getSailingBuilderRootNote(rootId){
  const root = getSailingBuilderRootConfigs().find(item => item.id === rootId);
  if(root && root.note) return root.note;
  return 'Custom sailing builder section.';
}

function getLegacySailingBuilderRootId(rootId){
  const id = String(rootId || '');
  if(id.indexOf('_top') >= 0) return 'sailing_top';
  if(id.indexOf('_spar') >= 0) return 'spar';
  if(id.indexOf('_rig') >= 0) return 'rigging';
  if(id.indexOf('_sail') >= 0) return 'sails';
  return '';
}

function resolveSailingBuilderRootId(rootId){
  const configs = getSailingBuilderRootConfigs();
  const requested = String(rootId || '');
  if(configs.some(config => config.id === requested)) return requested;

  const migrated = configs.find(config => getLegacySailingBuilderRootId(config.id) === requested);
  if(migrated) return migrated.id;

  return configs[0] ? configs[0].id : getDefaultSailingBuilderRootId();
}

function ensureSailingBuilderRoots(){
  if(!state.builder || typeof state.builder !== 'object'){
    state.builder = normalizeBuilderModel({}, state.builderHullCount || 1);
  }

  if(!state.builder.sailingRoots || typeof state.builder.sailingRoots !== 'object'){
    state.builder.sailingRoots = {};
  }

  getSailingBuilderRootConfigs().forEach(config => {
    const id = config.id;
    const legacyId = getLegacySailingBuilderRootId(id);
    if(!state.builder.sailingRoots[id] && legacyId && state.builder.sailingRoots[legacyId]){
      state.builder.sailingRoots[id] = state.builder.sailingRoots[legacyId];
      state.builder.sailingRoots[id].id = id;
    }

    if(!state.builder.sailingRoots[id] || typeof state.builder.sailingRoots[id] !== 'object'){
      state.builder.sailingRoots[id] = {
        id,
        title:config.title,
        locked:false,
        items:[]
      };
    }

    state.builder.sailingRoots[id].title = config.title;
    state.builder.sailingRoots[id].note = config.note || state.builder.sailingRoots[id].note || '';

    if(typeof state.builder.sailingRoots[id].locked !== 'boolean'){
      state.builder.sailingRoots[id].locked = false;
    }

    if(!Array.isArray(state.builder.sailingRoots[id].items)){
      state.builder.sailingRoots[id].items = [];
    }
  });

  return state.builder.sailingRoots;
}

function getSailingBuilderRoot(rootId){
  const roots = ensureSailingBuilderRoots();
  const id = resolveSailingBuilderRootId(rootId);
  return roots[id] || null;
}

function findSailingRootItem(itemId){
  const roots = ensureSailingBuilderRoots();

  for(const rootId of Object.keys(roots)){
    const root = roots[rootId];
    const item = (root.items || []).find(x => x && x.id === itemId);
    if(item) return {rootId, root, item};
  }

  return {rootId:null, root:null, item:null};
}

function yfdEscapeAttr(value){
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getYfdActiveVesselLabel(){
  const yacht = getActiveYacht && getActiveYacht();
  const name = (yacht && yacht.name) || (state.builder && state.builder.modelName) || 'Custom Yacht';
  const vesselType = (yacht && (yacht.vesselType || yacht.type)) || '';
  const prefix = vesselType === 'sailing' ? 'S/Y' : 'M/Y';
  const registration = yacht && yacht.meta && yacht.meta.registration
    ? String(yacht.meta.registration).trim()
    : yacht && yacht.registration
      ? String(yacht.registration).trim()
      : '';
  return registration ? `${name} ${prefix} ${registration}` : `${name} ${prefix}`;
}

function getYfdBuilderHeaderCard(){
  return `
    <div class="yfd-module-card yfd-header-card">
      ${renderLogo()}
      <div>
        <h2 class="yfd-module-title">REVOYACHT</h2>
        <p>Operational yacht structure builder for decks, zones and onboard equipment.</p>
      </div>
    </div>
  `;
}

function getYfdTaskKey(kind, id){
  return `${kind || 'object'}:${id || 'unknown'}`;
}

function getYfdObjectTasks(kind, id){
  if(!state.tasks || typeof state.tasks !== 'object') state.tasks = {};
  const key = getYfdTaskKey(kind, id);
  if(!Array.isArray(state.tasks[key])) state.tasks[key] = [];
  return state.tasks[key];
}

function getYfdTaskCounts(kind, id){
  const counts = {todo:0, progress:0, done:0};
  getYfdObjectTasks(kind, id).forEach(task => {
    if(task && task.status === 'done'){
      counts.done += 1;
    } else if(task && task.status === 'progress'){
      counts.progress += 1;
    } else {
      counts.todo += 1;
    }
  });
  return counts;
}

function renderYfdTaskBoard(kind, id, title='Object'){
  const counts = getYfdTaskCounts(kind, id);
  const active = counts.todo + counts.progress;
  return `
    <button class="yfd-task-button" data-yfd-open-task-list data-yfd-kind="${yfdEscapeAttr(kind)}" data-yfd-id="${yfdEscapeAttr(id)}" data-yfd-title="${yfdEscapeAttr(title || 'Object')}" type="button" aria-label="Tasks: ${active} active, ${counts.done} done">
      <span>Tasks</span> <b>${active}</b>
    </button>
  `;
}

function renderYfdObjectActionMenu(opts){
  const o = opts || {};
  const kind = yfdEscapeAttr(o.kind || 'object');
  const id = yfdEscapeAttr(o.id || '');
  const title = yfdEscapeAttr(o.title || 'Object');
  const editType = yfdEscapeAttr(o.editType || o.kind || 'object');
  const deleteType = yfdEscapeAttr(o.deleteType || o.kind || 'object');
  const editDisabled = o.canEdit === false ? ' disabled aria-disabled="true"' : '';
  const deleteDisabled = o.canDelete === false ? ' disabled aria-disabled="true"' : '';

  return `
    <details class="yfd-object-menu" data-yfd-object-menu>
      <summary aria-label="Object menu"><span aria-hidden="true">...</span></summary>
      <div class="yfd-object-menu-panel" role="menu">
        <button type="button" role="menuitem" data-yfd-card-action="edit" data-yfd-kind="${kind}" data-yfd-id="${id}" data-yfd-title="${title}" data-yfd-edit-type="${editType}"${editDisabled}>Edit</button>
        <button type="button" role="menuitem" data-yfd-card-action="delete" data-yfd-kind="${kind}" data-yfd-id="${id}" data-yfd-title="${title}" data-yfd-delete-type="${deleteType}"${deleteDisabled}>Delete</button>
        <button type="button" role="menuitem" data-yfd-card-action="tasks" data-yfd-kind="${kind}" data-yfd-id="${id}" data-yfd-title="${title}">Tasks</button>
        <button type="button" role="menuitem" data-yfd-card-action="view-tasks" data-yfd-kind="${kind}" data-yfd-id="${id}" data-yfd-title="${title}">View tasks</button>
      </div>
    </details>
  `;
}

function renderYfdContextObjectCard(opts){
  const o = opts || {};
  const kind = o.kind || 'object';
  const id = o.id || '';
  const title = o.title || 'Object';
  const subtitle = o.subtitle || getYfdActiveVesselLabel();
  const displayTitle = o.displayTitle || title;
  const displaySubtitle = o.displaySubtitle || subtitle;

  return `
    <div class="yfd-context-object-card">
      <div class="yfd-context-object-copy">
        <strong>${yfdEscapeAttr(displayTitle)}</strong>
        <span>${yfdEscapeAttr(displaySubtitle)}</span>
      </div>
      ${renderYfdTaskBoard(kind, id, title)}
      ${renderYfdObjectActionMenu(o)}
    </div>
  `;
}

function openYfdObjectGalleryStub(kind, id, title){
  closeBuilderModal();
  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Object gallery</span>
            <strong>${yfdEscapeAttr(title || 'Object')}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>
        <div class="yfd-service-hook">
          <p>This gallery belongs to the selected object.</p>
          <code>${yfdEscapeAttr(kind)}:${yfdEscapeAttr(id)}</code>
          <p>Future: upload, edit, delete and report photos for this exact object.</p>
        </div>
      </section>
    </div>
  `);
}

function renderYfdTaskModal(kind, id, title){
  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-task-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Task</span>
            <strong>${yfdEscapeAttr(title || 'Object')}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-task-object-lock">
          <span>Object</span>
          <strong>${yfdEscapeAttr(title || 'Object')}</strong>
        </div>

        <label class="yfd-field">
          <span>Crew member</span>
          <input id="yfdTaskCrew" type="text" placeholder="Engineer, steward, deckhand">
        </label>

        <label class="yfd-field">
          <span>Task</span>
          <textarea id="yfdTaskText" rows="4" placeholder="Describe the exact work to be completed"></textarea>
        </label>

        <div class="yfd-task-form-grid">
          <label class="yfd-field">
            <span>Status</span>
            <select id="yfdTaskStatus">
              <option value="todo">Open</option>
              <option value="progress">In progress</option>
              <option value="done">Done</option>
            </select>
          </label>

          <label class="yfd-field">
            <span>Due date</span>
            <input id="yfdTaskDue" type="datetime-local">
          </label>
        </div>

        <button class="yfd-secondary-action yfd-task-report-button" data-yfd-task-report data-yfd-kind="${yfdEscapeAttr(kind)}" data-yfd-id="${yfdEscapeAttr(id)}" data-yfd-title="${yfdEscapeAttr(title || 'Object')}" type="button">View report</button>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-yfd-task-save data-yfd-kind="${yfdEscapeAttr(kind)}" data-yfd-id="${yfdEscapeAttr(id)}" type="button">Save task</button>
        </div>
      </section>
    </div>
  `;
}

function openYfdTaskModal(kind, id, title){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderYfdTaskModal(kind, id, title));
  setTimeout(() => {
    const input = document.getElementById('yfdTaskCrew');
    if(input) input.focus();
  }, 50);
}

function renderYfdTaskListModal(kind, id, title){
  const tasks = getYfdObjectTasks(kind, id);
  const rows = tasks.length
    ? tasks.map(task => `
        <div class="yfd-task-list-row is-${yfdEscapeAttr(task.status || 'todo')}">
          <div>
            <strong>${yfdEscapeAttr(task.text || 'Task')}</strong>
            <span>${yfdEscapeAttr(task.crew || 'Unassigned')} · ${yfdEscapeAttr(task.due || 'No due date')}</span>
          </div>
          <button data-yfd-task-report data-yfd-kind="${yfdEscapeAttr(kind)}" data-yfd-id="${yfdEscapeAttr(id)}" data-yfd-title="${yfdEscapeAttr(title || 'Object')}" type="button">Report</button>
        </div>
      `).join('')
    : `<div class="yfd-builder-modal-note">No tasks for this object yet.</div>`;

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-task-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Task list</span>
            <strong>${yfdEscapeAttr(title || 'Object')}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>
        <div class="yfd-task-list">${rows}</div>
        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Close</button>
          <button class="yfd-primary-action" data-yfd-open-task-from-list data-yfd-kind="${yfdEscapeAttr(kind)}" data-yfd-id="${yfdEscapeAttr(id)}" data-yfd-title="${yfdEscapeAttr(title || 'Object')}" type="button">New task</button>
        </div>
      </section>
    </div>
  `;
}

function openYfdTaskListModal(kind, id, title){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderYfdTaskListModal(kind, id, title));
}

function openYfdTaskReportModal(kind, id, title){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-task-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Task report</span>
            <strong>${yfdEscapeAttr(title || 'Object')}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>
        <div class="yfd-builder-modal-note">
          Report workflow is reserved for the task dashboard and messenger integration.
        </div>
        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Close</button>
          <button class="yfd-primary-action" data-yfd-open-task-from-list data-yfd-kind="${yfdEscapeAttr(kind)}" data-yfd-id="${yfdEscapeAttr(id)}" data-yfd-title="${yfdEscapeAttr(title || 'Object')}" type="button">New task</button>
        </div>
      </section>
    </div>
  `);
}

function saveYfdTask(kind, id){
  const crew = (document.getElementById('yfdTaskCrew')?.value || '').trim();
  const text = (document.getElementById('yfdTaskText')?.value || '').trim();
  const status = document.getElementById('yfdTaskStatus')?.value || 'todo';
  const due = document.getElementById('yfdTaskDue')?.value || '';
  if(!text) return false;

  getYfdObjectTasks(kind, id).push({
    id:'task_' + Date.now(),
    crew,
    text,
    status,
    due,
    createdAt:new Date().toISOString()
  });

  saveState();
  closeBuilderModal();
  refreshAfterBuilderEdit();
  return true;
}

function handleYfdObjectMenuEvent(e){
  const menu = e.target && e.target.closest ? e.target.closest('[data-yfd-object-menu]') : null;
  if(!menu) return;

  const action = e.target.closest('[data-yfd-card-action]');
  if(!action){
    const summary = e.target.closest('summary');
    if(summary){
      e.preventDefault();
      const shouldOpen = !menu.open;
      document.querySelectorAll('[data-yfd-object-menu][open]').forEach(openMenu => {
        if(openMenu !== menu) openMenu.removeAttribute('open');
      });
      if(shouldOpen) menu.setAttribute('open', '');
      else menu.removeAttribute('open');
    } else if(menu.open){
      menu.removeAttribute('open');
    }
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    return;
  }

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  const kind = action.dataset.yfdKind || 'object';
  const id = action.dataset.yfdId || '';
  const title = action.dataset.yfdTitle || 'Object';
  const op = action.dataset.yfdCardAction || '';
  document.querySelectorAll('[data-yfd-object-menu][open]').forEach(openMenu => {
    openMenu.removeAttribute('open');
  });

  if(op === 'edit'){
    if(kind === 'sailing_item') openSailingRootEditModal(id);
    else openBuilderEditModal(action.dataset.yfdEditType || kind, id);
    return;
  }

  if(op === 'delete'){
    if(kind === 'deck') openBuilderDeleteDeckModal(id);
    else if(kind === 'instance') openBuilderDeleteInstanceModal(id);
    else if(kind === 'sailing_item') openSailingRootDeleteModal(id);
    else openBuilderDeleteItemModal(id, action.dataset.yfdDeleteType || kind);
    return;
  }

  if(op === 'tasks'){
    openYfdTaskModal(kind, id, title);
    return;
  }

  if(op === 'view-tasks'){
    openYfdTaskListModal(kind, id, title);
  }
}

function closeYfdObjectMenus(exceptMenu){
  document.querySelectorAll('[data-yfd-object-menu][open]').forEach(openMenu => {
    if(exceptMenu && openMenu === exceptMenu) return;
    openMenu.removeAttribute('open');
  });
}

let yfdObjectMenuOutsideBlockUntil = 0;

function hasOpenYfdObjectMenus(){
  return !!document.querySelector('[data-yfd-object-menu][open]');
}

function blockYfdObjectMenuOutsideEvent(e){
  if(e && e.preventDefault) e.preventDefault();
  if(e && e.stopPropagation) e.stopPropagation();
  if(e && e.stopImmediatePropagation) e.stopImmediatePropagation();
}

function markYfdObjectMenuOutsideBlock(){
  yfdObjectMenuOutsideBlockUntil = Date.now() + 520;
}

function handleYfdObjectMenuPointerGuard(e){
  const menu = e.target && e.target.closest ? e.target.closest('[data-yfd-object-menu]') : null;
  if(menu){
    e.stopPropagation();
    return;
  }

  if(!hasOpenYfdObjectMenus()) return;

  closeYfdObjectMenus();
  markYfdObjectMenuOutsideBlock();
  blockYfdObjectMenuOutsideEvent(e);
}

function handleYfdObjectMenuOutsideActivationGuard(e){
  const menu = e.target && e.target.closest ? e.target.closest('[data-yfd-object-menu]') : null;
  if(menu) return;

  const shouldBlock = hasOpenYfdObjectMenus() || Date.now() < yfdObjectMenuOutsideBlockUntil;
  if(!shouldBlock) return;

  closeYfdObjectMenus();
  markYfdObjectMenuOutsideBlock();
  blockYfdObjectMenuOutsideEvent(e);
}

function handleYfdTaskModalEvent(e){
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-yfd-task-save]') : null;
  const reportBtn = e.target && e.target.closest ? e.target.closest('[data-yfd-task-report]') : null;
  const newTaskBtn = e.target && e.target.closest ? e.target.closest('[data-yfd-open-task-from-list]') : null;
  if(!saveBtn && !reportBtn && !newTaskBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  const btn = saveBtn || reportBtn || newTaskBtn;
  const kind = btn.dataset.yfdKind || 'object';
  const id = btn.dataset.yfdId || '';
  const title = btn.dataset.yfdTitle || 'Object';

  if(saveBtn){
    saveYfdTask(kind, id);
    return;
  }

  if(reportBtn){
    openYfdTaskReportModal(kind, id, title);
    return;
  }

  openYfdTaskModal(kind, id, title);
}

function handleYfdTaskButtonEvent(e){
  const taskBtn = e.target && e.target.closest ? e.target.closest('[data-yfd-open-task-list]') : null;
  if(!taskBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  openYfdTaskListModal(
    taskBtn.dataset.yfdKind || 'object',
    taskBtn.dataset.yfdId || '',
    taskBtn.dataset.yfdTitle || 'Object'
  );
}

document.addEventListener('click', handleYfdObjectMenuEvent, true);
document.addEventListener('touchend', handleYfdObjectMenuEvent, true);
document.addEventListener('pointerdown', handleYfdObjectMenuPointerGuard, true);
document.addEventListener('touchstart', handleYfdObjectMenuPointerGuard, true);
document.addEventListener('click', handleYfdObjectMenuOutsideActivationGuard, true);
document.addEventListener('touchend', handleYfdObjectMenuOutsideActivationGuard, true);
document.addEventListener('click', handleYfdTaskButtonEvent, true);
document.addEventListener('click', handleYfdTaskModalEvent, true);

function renderSailingRootItemCard(item){
  const type = item.type || 'area';
  const title = item.title || 'Untitled item';
  const note = item.note || (type === 'equipment' ? 'Equipment with instances and future service records' : 'Area / Zone');
  const badge = type === 'equipment' ? 'Ready' : 'Open';
  const id = item.id || '';

  return `
    <article class="yfd-item-card yfd-builder-tree-item yfd-builder-node-card yfd-sailing-root-item-card" role="group" tabindex="0">
      <div class="yfd-system-meta">
        <em>${type === 'equipment' ? 'Equipment' : 'Area'}</em>
        <b>${badge}</b>
      </div>

      <div class="yfd-builder-node-head yfd-builder-open-zone" data-open-sailing-root-item="${id}" role="button" tabindex="0" aria-label="Open item">
        <strong>${yfdEscapeAttr(title)}</strong>
        <small>${yfdEscapeAttr(note)}</small>
      </div>

      ${renderYfdObjectActionMenu({kind:'sailing_item', id, title, editType:'sailing_item', deleteType:'sailing_item'})}
      ${renderYfdTaskBoard('sailing_item', id, title)}
    </article>
  `;
}

function renderSailingRootAddMenu(rootId){
  const title = getSailingBuilderRootTitle(rootId);

  return renderBuilderAddItemChoiceModal({
    context:title,
    inputId:'yfdSailingRootItemTitle',
    parentType:'sailing_root',
    parentId:rootId,
    createAttr:'data-sailing-root-create-item',
    equipmentPlaceholder:'Masthead light, mainsail, halyard, spreader',
    areaPlaceholder:'Mast section, sail locker, rigging zone',
    note:'Library items are filtered from Sailing Rig Base for the selected yacht rig and this exact section.'
  });

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-builder-kind-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>${title}</span>
            <strong>Add item</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-builder-kind-grid yfd-builder-kind-grid-two">
          <button type="button" data-sailing-root-add-type="area" data-sailing-root-id="${rootId}">
            <strong>Area / Zone</strong>
            <span>Container for sailing structure.</span>
          </button>
          <button type="button" data-sailing-root-add-type="equipment" data-sailing-root-id="${rootId}">
            <strong>Equipment</strong>
            <span>Object with instances and future service records.</span>
          </button>
        </div>
      </section>
    </div>
  `;
}

function openSailingRootAddMenu(rootId){
  closeBuilderModal();
  builderModalState = {type:'sailing_root_create_item', rootId:rootId || getDefaultSailingBuilderRootId(), childType:'equipment', targetId:null};
  document.body.insertAdjacentHTML('beforeend', renderSailingRootAddMenu(builderModalState.rootId));
  setTimeout(() => {
    const input = document.getElementById('yfdSailingRootItemTitle');
    if(input) input.focus();
  }, 30);
}

function renderSailingRootCreateItemModal(rootId, itemType){
  const title = getSailingBuilderRootTitle(rootId);
  const label = itemType === 'equipment' ? 'Equipment name' : 'Area / Zone name';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>${title}</span>
            <strong>Create ${itemType === 'equipment' ? 'equipment' : 'area / zone'}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>${label}</span>
          <input id="yfdSailingRootItemTitle" type="text" placeholder="${label}">
        </label>

        <label class="yfd-field">
          <span>Note</span>
          <input id="yfdSailingRootItemNote" type="text" placeholder="Optional note">
        </label>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-sailing-root-create-item type="button">Create item</button>
        </div>
      </section>
    </div>
  `;
}

function openSailingRootCreateItemModal(rootId, itemType){
  closeBuilderModal();
  builderModalState = {type:'sailing_root_create_item', rootId:rootId || getDefaultSailingBuilderRootId(), childType:itemType || 'area', targetId:null};
  document.body.insertAdjacentHTML('beforeend', renderSailingRootCreateItemModal(builderModalState.rootId, builderModalState.childType));
  setTimeout(() => {
    const input = document.getElementById('yfdSailingRootItemTitle');
    if(input) input.focus();
  }, 30);
}

function createSailingRootItem(rootId, itemType, title, note){
  const root = getSailingBuilderRoot(rootId || getDefaultSailingBuilderRootId());
  const cleanTitle = (title || '').trim();
  if(!cleanTitle) return false;

  const now = Date.now();
  const isEquipment = itemType === 'equipment';

  root.items.push({
    id:'sailing_item_' + now,
    type:isEquipment ? 'equipment' : 'area',
    title:cleanTitle,
    note:(note || '').trim(),
    locked:false,
    children:[],
    instances:isEquipment ? [{
      id:'instance_' + now,
      title:cleanTitle + ' #1',
      service_link:null,
      notes:[]
    }] : [],
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  });

  saveState();
  return true;
}

function submitSailingRootCreateItem(){
  if(builderModalState.type !== 'sailing_root_create_item') return;

  const title = document.getElementById('yfdSailingRootItemTitle')?.value || '';
  const note = document.getElementById('yfdSailingRootItemNote')?.value || '';
  const rootId = builderModalState.rootId || getDefaultSailingBuilderRootId();

  if(createSailingRootItem(rootId, builderModalState.childType, title, note)){
    closeBuilderModal();
    openSailingBuilderRoot(rootId, false);
  }
}

function renderSailingRootEditModal(itemId){
  const found = findSailingRootItem(itemId);
  const item = found.item;
  if(!item) return '';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Edit</span>
            <strong>${item.title || 'Item'}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Title</span>
          <input id="yfdSailingRootEditTitle" type="text" value="${yfdEscapeAttr(item.title)}">
        </label>

        <label class="yfd-field">
          <span>Note</span>
          <input id="yfdSailingRootEditNote" type="text" value="${yfdEscapeAttr(item.note)}">
        </label>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-sailing-root-save-edit="${itemId}" type="button">Save edit</button>
        </div>
      </section>
    </div>
  `;
}

function openSailingRootEditModal(itemId){
  const found = findSailingRootItem(itemId);
  if(!found.item) return;

  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderSailingRootEditModal(itemId));
}

function saveSailingRootEdit(itemId){
  const found = findSailingRootItem(itemId);
  if(!found.item) return false;

  const title = (document.getElementById('yfdSailingRootEditTitle')?.value || '').trim();
  const note = (document.getElementById('yfdSailingRootEditNote')?.value || '').trim();
  if(!title) return false;

  found.item.title = title;
  found.item.note = note;
  found.item.updatedAt = new Date().toISOString();

  saveState();
  closeBuilderModal();
  openSailingBuilderRoot(found.rootId, false);
  return true;
}

function renderSailingRootDeleteModal(itemId){
  const found = findSailingRootItem(itemId);
  const item = found.item;
  if(!item) return '';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-builder-delete-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Delete</span>
            <strong>${item.title || 'Item'}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-builder-modal-note yfd-builder-delete-note">
          This removes the item from this sailing builder root. Future service/cardholder history must not be deleted automatically.
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-danger-action" data-sailing-root-confirm-delete="${itemId}" type="button">Delete item</button>
        </div>
      </section>
    </div>
  `;
}

function openSailingRootDeleteModal(itemId){
  const found = findSailingRootItem(itemId);
  if(!found.item) return;

  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderSailingRootDeleteModal(itemId));
}

function deleteSailingRootItem(itemId){
  const found = findSailingRootItem(itemId);
  if(!found.root || !found.item) return false;

  const rootId = found.rootId;
  found.root.items = (found.root.items || []).filter(item => item.id !== itemId);

  saveState();
  closeBuilderModal();
  openSailingBuilderRoot(rootId, false);
  return true;
}

function addSailingEquipmentInstance(itemId){
  const found = findSailingRootItem(itemId);
  const item = found.item;

  if(!item || item.type !== 'equipment') return;

  if(!Array.isArray(item.instances)) item.instances = [];
  const n = item.instances.length + 1;
  const now = Date.now();

  item.instances.push({
    id:'instance_' + now,
    title:(item.title || 'Equipment') + ' #' + n,
    service_link:null,
    notes:[]
  });

  item.updatedAt = new Date().toISOString();
  saveState();
  openSailingRootItemScreen(itemId, false);
}

function renderSailingEquipmentScreen(found, push=true){
  const item = found.item;
  if(!item || item.type !== 'equipment') return;

  if(!Array.isArray(item.instances) || !item.instances.length){
    item.instances = [{
      id:'instance_' + Date.now(),
      title:(item.title || 'Equipment') + ' #1',
      service_link:null,
      notes:[]
    }];
    saveState();
  }

  yfdSaveActiveScreen({screen:'sailing_root_item', itemId:item.id});
  if(push) navStack.push({screen:'sailing_root_item', itemId:item.id});

  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  if(!module) return;

  module.hidden = false;
  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderYfdContextObjectCard({
        kind:'sailing_item',
        id:item.id,
        title:item.title || 'Equipment',
        displayTitle:getYfdActiveVesselLabel(),
        displaySubtitle:`Sailing equipment: ${item.title || 'Equipment'}`,
        editType:'sailing_item',
        deleteType:'sailing_item'
      })}
      ${renderForwardButton()}
    </div>

    <section class="yfd-instances-card">
      <div class="yfd-instances-head">
        <span>Instances</span>
        <strong>${item.instances.length}</strong>
      </div>

      ${item.instances.map(instance => `
        <div class="yfd-instance-row">
          <strong>${yfdEscapeAttr(instance.title)}</strong>
          ${renderYfdTaskBoard('instance', instance.id, instance.title || 'Instance')}
          <div>
            <button class="yfd-service-link" type="button">Open service</button>
            ${renderYfdObjectActionMenu({
              kind:'instance',
              id:instance.id,
              title:instance.title || 'Instance',
              editType:'instance',
              deleteType:'instance',
              canEdit:false,
              canDelete:false
            })}
          </div>
        </div>
      `).join('')}

      <button class="yfd-add-instance-inline" data-sailing-add-instance="${item.id}" type="button">+ Add instance</button>
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function openSailingRootAreaScreen(found, push=true){
  const item = found.item;
  if(!item) return;

  yfdSaveActiveScreen({screen:'sailing_root_item', itemId:item.id});
  if(push) navStack.push({screen:'sailing_root_item', itemId:item.id});

  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  if(!module) return;

  module.hidden = false;
  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderYfdContextObjectCard({
        kind:'sailing_item',
        id:item.id,
        title:item.title || 'Area / Zone',
        displayTitle:getYfdActiveVesselLabel(),
        displaySubtitle:`Sailing area: ${item.title || 'Area / Zone'}`,
        editType:'sailing_item',
        deleteType:'sailing_item'
      })}
      ${renderForwardButton()}
    </div>

    <section class="yfd-builder-empty-state yfd-sailing-root-empty">
      <div>
        <strong>${item.title}</strong>
        <span>Area / Zone is now created. Deeper nesting will be added in the next safe step.</span>
      </div>
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function openSailingRootItemScreen(itemId, push=true){
  const found = findSailingRootItem(itemId);
  if(!found.item) return;

  if(found.item.type === 'equipment'){
    renderSailingEquipmentScreen(found, push);
    return;
  }

  openSailingRootAreaScreen(found, push);
}

function openSailingBuilderRoot(rootId, push=true){
  const root = getSailingBuilderRoot(rootId || getDefaultSailingBuilderRootId());
  if(!root) return;
  const title = getSailingBuilderRootTitle(root.id);
  const items = root.items || [];

  yfdSaveActiveScreen({screen:'sailing_builder_root', rootId:root.id});
  if(push) navStack.push({screen:'sailing_builder_root', rootId:root.id});

  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  if(!module) return;

  module.hidden = false;
  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-builder-action-row">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderYfdContextObjectCard({
        kind:'sailing_root',
        id:root.id,
        title,
        displayTitle:getYfdActiveVesselLabel(),
        displaySubtitle:`Sailing section: ${title}`,
        canEdit:false,
        canDelete:false
      })}
      ${renderForwardButton()}
    </div>

    <div class="yfd-list yfd-builder-page-list yfd-sailing-root-list">
      ${items.length ? items.map(renderSailingRootItemCard).join('') : `
        <section class="yfd-builder-empty-state yfd-sailing-root-empty">
          <div>
            <strong>Empty ${title}</strong>
            <span>Add an Area / Zone or Equipment to start building this sailing section.</span>
          </div>
          <button data-sailing-root-add-menu="${root.id}" type="button">+ Add item</button>
        </section>
      `}
      ${items.length ? `
        <section class="yfd-builder-page-add-row">
          <button data-sailing-root-add-menu="${root.id}" type="button">+ Add item</button>
        </section>
      ` : ''}
    </div>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}


/* === V40-D3D-1 Builder V2 foundation root screen 20260507 === */

function getBuilderV2HullMarkerName(hullId, hullCount){
  const count = Math.max(1, Number(hullCount || state.builderHullCount) || 1);
  const n = parseInt(String(hullId || '').replace('hull_', ''), 10) || 1;

  if(count === 1) return 'MAIN HULL';
  if(count === 2) return n === 1 ? 'PORT' : 'STBD';
  if(count === 3){
    if(n === 1) return 'PORT';
    if(n === 2) return 'MAIN HULL';
    return 'STBD';
  }

  return String(getBuilderHullLabel(hullId) || 'Hull').toUpperCase();
}

function renderBuilderV2HullMarkerCard(hullId, label){
  const marker = getBuilderV2HullMarkerName(hullId, state.builderHullCount || 1);
  const isMultihull = (state.builderHullCount || 1) > 1;

  return `
    <article class="yfd-builder-v2-hull-card ${isMultihull ? 'yfd-card-task-menu-only' : ''}" data-open-builder-hull="${hullId}" role="button" tabindex="0" aria-label="Open ${yfdEscapeAttr(label)}">
      <strong class="yfd-builder-v2-hull-card-title">${marker}</strong>
      ${isMultihull ? '' : renderYfdTaskBoard('hull', hullId, label)}
      ${renderYfdObjectActionMenu({
        kind:'hull',
        id:hullId,
        title:label,
        canEdit:false,
        canDelete:false
      })}
    </article>
  `;
}

function formatBuilderDeckItemCount(count){
  const n = Math.max(0, Number(count) || 0);
  if(n === 0) return 'Empty';
  return n === 1 ? '1 item' : n + ' items';
}

function renderBuilderV2DeckCard(deck, extraClass=''){
  const title = deck && deck.title ? deck.title : 'Untitled deck';
  const deckId = deck && deck.id ? deck.id : '';
  const cardClass = extraClass ? `yfd-builder-v2-deck-card ${extraClass}` : 'yfd-builder-v2-deck-card';
  const isSharedDeck = String(extraClass || '').includes('shared');
  const isLowerMultihullDeck = (state.builderHullCount || 1) > 1 && !isSharedDeck;

  return `
    <article class="${cardClass} ${isLowerMultihullDeck ? 'yfd-card-task-menu-only' : ''}" data-open-builder-deck="${deckId}" role="button" tabindex="0" aria-label="Open deck">
      <strong>${yfdEscapeAttr(title)}</strong>
      ${isLowerMultihullDeck ? '' : renderYfdTaskBoard('deck', deckId, title)}
      ${renderYfdObjectActionMenu({kind:'deck', id:deckId, title, editType:'deck', deleteType:'deck'})}
    </article>
  `;
}

function renderBuilderRootYachtNameCard(){
  const displayName = getYfdActiveVesselLabel();

  return `
    <div class="yfd-builder-yacht-name-card" aria-label="Current yacht">
      <strong>${yfdEscapeAttr(displayName)}</strong>
    </div>
  `;
}

function renderCustomBuilderScreenV2(push=true){
  yfdSaveActiveScreen({screen:'custom_builder'});
  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(!module) return;

  const hullCount = state.builderHullCount || 1;
  state.builder = normalizeBuilderModel(state.builder, hullCount);

  if(push) navStack.push({screen:'custom_builder'});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  const sharedDecks = (state.builder.sharedDecks || [])
    .filter(deck => (deck.hullMode || hullCount) === hullCount);
  const upperDeckTitle = hullCount > 1 ? 'Shared decks' : 'Upper decks';
  const upperDeckNote = hullCount > 1 ? 'Common decks above the hulls' : 'Decks above the main hull';
  const upperDeckButton = hullCount > 1 ? 'Add shared deck' : 'Add upper deck';
  const lowerDeckButton = hullCount > 1 ? 'Add deck' : 'Add lower deck';

  const hullBlocks = Array.from({length:hullCount}).map((_, i) => {
    const n = i + 1;
    const hullId = 'hull_' + n;
    const label = getBuilderHullLabel(hullId);
    const hull = (state.builder.hulls || []).find(h => h.id === hullId);
    const decks = ((hull && hull.decks) || [])
      .filter(deck => (deck.hullId || hullId) === hullId && (deck.hullMode || hullCount) === hullCount);

    return `
      <section class="yfd-builder-v2-hull-section">
        <span class="yfd-builder-v2-hull-kicker">Hull</span>
        ${renderBuilderV2HullMarkerCard(hullId, label)}

        <div class="yfd-builder-v2-subhead">
          <strong>Lower decks</strong>
          <span>Create decks belonging to this hull</span>
        </div>

        <div class="yfd-builder-v2-card-grid">
          ${decks.length ? decks.map(renderBuilderV2DeckCard).join('') : ''}
          <button class="yfd-builder-slot yfd-builder-working-slot yfd-builder-v2-add-deck" data-builder-add-deck="hull" data-builder-hull="${hullId}" type="button">
            <b>+</b>
            <span>${lowerDeckButton}</span>
          </button>
        </div>
      </section>
    `;
  }).join('');

  module.innerHTML = `
    <div class="yfd-module-head">
      ${getYfdBuilderHeaderCard()}
    </div>

    <div class="yfd-module-action-row yfd-custom-builder-actions">
      <button class="yfd-action-back yfd-nav-arrow yfd-nav-arrow-back" data-back type="button" aria-label="Back"><span aria-hidden="true">&lsaquo;</span></button>
      ${renderBuilderRootYachtNameCard()}
      ${renderForwardButton()}
    </div>

    ${isSailingYacht() ? renderSailingBuilderRootButtons() : ''}

    <section class="yfd-builder-shared yfd-builder-v2-shared yfd-builder-v2-upper">
        <div class="yfd-builder-label">
          <strong>${upperDeckTitle}</strong>
          <span>${upperDeckNote}</span>
        </div>

        <div class="yfd-builder-v2-card-grid yfd-builder-v2-shared-grid">
          <button class="yfd-builder-slot yfd-builder-shared-add" data-builder-add-deck="shared" type="button">
            <b>+</b>
            <span>${upperDeckButton}</span>
          </button>
          ${sharedDecks.map(deck => renderBuilderV2DeckCard(deck, 'yfd-builder-v2-shared-deck-card')).join('')}
        </div>
      </section>

    ${hullCount === 3 ? `
      <div class="yfd-builder-v2-swipe-hint" aria-hidden="true">
        <span>Swipe</span>
        <b>→</b>
      </div>
    ` : ''}

    <section class="yfd-builder-v2-hulls yfd-builder-v2-hulls-${hullCount}">
      ${hullBlocks}
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}


function renderCustomBuilderScreen(push=true){
  yfdSaveActiveScreen({screen:'custom_builder'});
  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(!module) return;

  const hullCount = state.builderHullCount || 1;
  state.builder = normalizeBuilderModel(state.builder, hullCount);

  if(push) navStack.push({screen:'custom_builder'});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  const hulls = Array.from({length:hullCount}).map((_, i) => {
    const n = i + 1;
    const label = hullCount === 1
      ? 'Hull 1'
      : hullCount === 2
        ? (n === 1 ? 'Port hull' : 'Starboard hull')
        : (n === 1 ? 'Port hull' : n === 2 ? 'Center hull' : 'Starboard hull');

    return `
      <section class="yfd-builder-hull">
        <div class="yfd-builder-hull-head">
          <strong>${label}</strong>
          <span>hull_${n}</span>
        </div>

        ${renderBuilderHullServiceCard('hull_' + n, label)}

        ${(state.builder.hulls.find(h => h.id === 'hull_' + n)?.decks || []).filter(deck => (deck.hullId || ('hull_' + n)) === ('hull_' + n) && (deck.hullMode || hullCount) === hullCount).map(renderBuilderDeckCard).join('')}

        <button class="yfd-builder-slot yfd-builder-working-slot" data-builder-add-deck="hull" data-builder-hull="${'hull_' + n}" type="button">
          <b>+</b>
          <span>Create deck in this hull</span>
        </button>
      </section>
    `;
  }).join('');

  /* Trimaran mobile uses native two-position scroll-snap: Port+Center, then Center+Starboard. No auto-scroll. */

  module.innerHTML = `
    <div class="yfd-module-head">
      <div class="yfd-module-card yfd-header-card">
        ${renderLogo()}
        <div>
          <h2 class="yfd-module-title">Custom Yacht Builder</h2>
          <p>Shared decks above / hull-specific decks below</p>
        </div>
      </div>
    </div>

    ${isSailingYacht() ? renderSailingBuilderYachtCard() : `
      <section class="yfd-builder-count yfd-builder-count-readonly">
        <span>Hull configuration</span>
        <div>
          <strong class="yfd-builder-count-value">${getHullConfigLabel(hullCount)}</strong>
        </div>
      </section>
    `}

    <div class="yfd-module-action-row yfd-custom-builder-actions ${isSailingYacht() ? 'yfd-sailing-builder-actions' : ''}">
      <button class="yfd-action-back" data-back type="button">← Back</button>
      ${isSailingYacht()
        ? ''
        : '<button class="yfd-add-item yfd-action-add" type="button">+ Add shared deck</button>'}
      ${renderGalleryButton()}
      ${renderQuickShotButton()}
    </div>

    ${isSailingYacht() ? renderSailingBuilderRootButtons() : ''}

    ${hullCount > 1 && !isSailingYacht() ? `
      <section class="yfd-builder-shared">
        <div class="yfd-builder-label">
          <strong>Shared / common decks</strong>
          <span>full width between hulls</span>
        </div>

        <button class="yfd-builder-slot yfd-builder-shared-add" data-builder-add-deck="shared" type="button">
          <b>+</b>
          <span>Create shared deck</span>
        </button>

        ${state.builder.sharedDecks.filter(deck => (deck.hullMode || hullCount) === hullCount).map(renderBuilderDeckCard).join('')}
      </section>
    ` : ''}

    ${hullCount === 3 ? `
      <div class="yfd-trimaran-swipe-hint" aria-hidden="true">
        <span>Swipe hulls</span>
        <b>→</b>
      </div>
    ` : ''}

    <section class="yfd-builder-hulls yfd-builder-hulls-${hullCount}">
      ${hulls}
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}


function canDeleteReadyCustomDeck(layer){
  if(!layer || !layer.id) return false;
  if(!layer.is_custom) return false;
  if(layer.id === 'custom_01') return false;
  return /^custom_\d+$/.test(layer.id);
}

function findCustomDeckById(deckId){
  return state.custom.find(deck => deck && deck.id === deckId) || null;
}

function collectReadyCustomDeckTargetIds(deck){
  const ids = [];
  if(!deck || !Array.isArray(deck.items)) return ids;
  deck.items.forEach(item => {
    if(item && item.target) ids.push(item.target);
  });
  return ids;
}

function renderReadyCustomDeckDeleteModal(deckId){
  const deck = findCustomDeckById(deckId);
  const title = deck ? deck.title : 'this custom deck';

  return `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-ready-delete-modal">
        <div class="yfd-action-head">
          <div>
            <span>Delete custom deck</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only a user-created custom deck from the ready-made working copy.</p>
          <p>Base yacht template decks cannot be deleted here. They can only be switched ON/OFF.</p>
        </div>

        <div class="yfd-builder-modal-actions yfd-ready-delete-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-ready-custom-deck="${deckId}" type="button">Delete custom deck</button>
        </div>
      </section>
    </div>
  `;
}

function openReadyCustomDeckDeleteModal(deckId){
  const deck = findCustomDeckById(deckId);
  if(!canDeleteReadyCustomDeck(deck)) return;
  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', renderReadyCustomDeckDeleteModal(deckId));
}

function deleteReadyCustomDeck(deckId){
  const deck = findCustomDeckById(deckId);
  if(!canDeleteReadyCustomDeck(deck)) return;

  const targetIds = collectReadyCustomDeckTargetIds(deck);

  state.custom = state.custom.filter(d => d.id !== deckId);

  if(state.enabled && deckId in state.enabled) delete state.enabled[deckId];
  if(state.readyLocks && deckId in state.readyLocks) delete state.readyLocks[deckId];
  if(state.stickers && deckId in state.stickers) delete state.stickers[deckId];
  if(state.overrides && deckId in state.overrides) delete state.overrides[deckId];

  targetIds.forEach(id => {
    const idx = treeNodes.findIndex(node => node && node.id === id);
    if(idx >= 0) treeNodes.splice(idx, 1);

    if(state.readyLocks && id in state.readyLocks) delete state.readyLocks[id];
    if(state.stickers && id in state.stickers) delete state.stickers[id];
    if(state.overrides && id in state.overrides) delete state.overrides[id];
  });

  closeActionModal();
  closeConfigModal();
  saveState();
  renderReadyMadeYachtScreen(false);
  openConfigModal();
}


function renderConfigModal(){
  const lockedLayers = ['main-deck','lower-deck','bilge-deck','underwater'];

  const configurableLayers = getConfigurableLayers()
    .filter(layer => !lockedLayers.includes(layer.id))
    .sort((a,b)=>(a.order ?? 999) - (b.order ?? 999));

  const rows = configurableLayers.map(layer => {
    if(!(layer.id in state.enabled)){
      state.enabled[layer.id] = true;
    }

    const checked = state.enabled[layer.id] ? 'is-on' : '';
    const label = state.enabled[layer.id] ? 'ON' : 'OFF';

    const deleteBtn = canDeleteReadyCustomDeck(layer)
      ? `<button class="yfd-config-delete-custom-deck" data-delete-ready-custom-deck="${layer.id}" type="button" aria-label="Delete custom deck">Delete</button>`
      : '';

    return `
      <div class="yfd-switch-row yfd-config-switch-row ${checked}">
        <button class="yfd-config-switch-main" data-toggle-layer="${layer.id}" type="button">
          <span>
            <strong>${layer.title}</strong>
            <em>${layer.note || 'Configurable deck'}</em>
          </span>
          <span class="yfd-ios-switch ${checked}" aria-label="${layer.title} ${label}">
            <i></i>
          </span>
        </button>
        ${deleteBtn}
      </div>
    `;
  }).join('');

  const addButton = `
  <button class="yfd-add-deck" data-add-deck type="button">
    + Add custom deck
  </button>
`;

return `
    <div class="yfd-modal-backdrop" data-config-backdrop>
      <section class="yfd-config-modal" role="dialog" aria-modal="true">
        <div class="yfd-config-modal-head">
          <div>
            <span>RevoYacht Flex Deck</span>
            <strong>Hull configuration</strong>
          </div>
          <button class="yfd-modal-close" data-close-config type="button">×</button>
        </div>
        <div class="yfd-builder-entry yfd-builder-entry-note">
          <span>Structure setup</span>
          <strong>Use Fleet → Build from scratch to create a custom yacht model</strong>
        </div>

        ${addButton}

        <div class="yfd-switch-list">
          ${rows}
        </div>
      </section>
    </div>
  `;
}

function openConfigModal(){
  const existing = document.querySelector('.yfd-modal-backdrop');
  if(existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', renderConfigModal());
}

function closeConfigModal(){
  const modal = document.querySelector('.yfd-modal-backdrop');
  if(modal) modal.remove();
}


/*
  DEV NOTE — Active screen restore / reload memory

  Purpose:
  Keeps the current working screen after page refresh.
  This is used by builder and main tree screens so the user does not get thrown
  back to the home/overview screen while working.

  Storage key:
  yfd_active_screen_v2

  Main functions:
  - yfdSaveActiveScreen(...)
  - yfdClearActiveScreen()
  - yfdLoadActiveScreen()
  - yfdRestoreActiveScreen()

  Init point:
  DOMContentLoaded -> loadState() -> yfdRestoreActiveScreen() -> fallback renderOverview()

  To disable temporarily:
  1) In DOMContentLoaded, replace:
       if(!yfdRestoreActiveScreen()){ renderOverview(); }
     with:
       renderOverview();

  2) Or clear browser localStorage key:
       yfd_active_screen_v2

  Important:
  Do not remove this casually. It is intended to become the common navigation
  restore layer for the full RevoYacht / YFD project.
*/
const YFD_ACTIVE_SCREEN_KEY = 'yfd_active_screen_v2';

function yfdSaveActiveScreen(screen){
  try{
    if(!screen || !screen.screen){
      localStorage.removeItem(YFD_ACTIVE_SCREEN_KEY);
      return;
    }
    localStorage.setItem(YFD_ACTIVE_SCREEN_KEY, JSON.stringify(screen));
  } catch(e){}
}

function yfdClearActiveScreen(){
  try{ localStorage.removeItem(YFD_ACTIVE_SCREEN_KEY); } catch(e){}
}

function yfdLoadActiveScreen(){
  try{
    const raw = localStorage.getItem(YFD_ACTIVE_SCREEN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e){
    return null;
  }
}

function findReadyEquipmentParent(title){
  const layers = [...getAllLayers(), ...getActiveReadyTreeNodes()];

  for(const layer of layers){
    const items = Array.isArray(layer.items) ? layer.items : [];
    for(const item of items){
      if(item && item.title === title && itemKind(item) === 'equipment'){
        return layer.id;
      }
    }
  }

  return null;
}

function yfdRestoreActiveScreen(){
  const saved = yfdLoadActiveScreen();
  if(!saved || !saved.screen) return false;

  if(saved.screen === 'admin_base_tool'){
    navStack = [{screen:'admin_base_tool'}];
    renderAdminBaseToolScreen(false);
    return true;
  }

  if(saved.screen === 'ready_yacht'){
    navStack = [{screen:'ready_yacht'}];
    renderReadyMadeYachtScreen(false);
    return true;
  }

  if(saved.screen === 'custom_builder'){
    navStack = [{screen:'custom_builder'}];
    renderCustomBuilderScreenV2(false);
    return true;
  }

  if(saved.screen === 'builder_hull' && saved.hullId){
    navStack = [{screen:'custom_builder'}];
    renderCustomBuilderScreenV2(false);
    renderBuilderHullScreen(saved.hullId, true);
    return true;
  }

  if(saved.screen === 'builder_deck' && saved.deckId && findBuilderDeck(saved.deckId)){
    navStack = [{screen:'custom_builder'}];
    renderCustomBuilderScreenV2(false);
    renderBuilderDeckScreen(saved.deckId, true);
    return true;
  }

  if(saved.screen === 'builder_area' && saved.areaId){
    const found = findBuilderArea(saved.areaId);

    if(found && found.area){
      navStack = [{screen:'custom_builder'}];

      if(found.hull && found.hull.id){
        navStack.push({screen:'builder_hull', hullId:found.hull.id});
      }

      if(found.deck && found.deck.id){
        navStack.push({screen:'builder_deck', deckId:found.deck.id});
      }

      if(found.parentArea && found.parentArea.id){
        navStack.push({screen:'builder_area', areaId:found.parentArea.id});
      }

      renderBuilderAreaScreen(saved.areaId, true);
      return true;
    }
  }

  if(saved.screen === 'builder_equipment' && saved.equipmentId){
    const found = findBuilderEquipment(saved.equipmentId);
    if(found && found.equipment){
      navStack = [{screen:'custom_builder'}];
      if(found.deck && found.deck.id){
        navStack.push({screen:'builder_deck', deckId:found.deck.id});
      }
      if(found.parentArea && found.parentArea.id){
        navStack.push({screen:'builder_area', areaId:found.parentArea.id});
      }
      renderBuilderEquipmentScreen(saved.equipmentId, true);
      return true;
    }
  }

  if(saved.screen === 'module' && saved.id){
    navStack = [{screen:'ready_yacht'}];
    renderModule(saved.id, true);
    return true;
  }

  if(saved.screen === 'equipment' && saved.title){
    const parentId = findReadyEquipmentParent(saved.title);
    navStack = [{screen:'ready_yacht'}];
    if(parentId){
      navStack.push({screen:'module', id:parentId});
    }
    renderEquipment(saved.title, true);
    return true;
  }

  yfdClearActiveScreen();
  return false;
}



function createReadyMotorYacht(){
  createYachtFromQuickSetup({
    name:'Motor Yacht',
    vesselType:'motor',
    hullCount:1,
    rig:null,
    meta:{
      template:'ready_motor_yacht_structure'
    }
  });
}


function resetWorkingStateForNewYacht(hullCount){
  state.stickers = {};
  state.overrides = {};
  state.readyLocks = {};
  resetEquipmentStoreToDefault();
  state.builderHullCount = Math.max(1, Math.min(3, Number(hullCount) || 1));
  state.builder = normalizeBuilderModel({
    modelName:'Custom Yacht',
    sharedDecks:[],
    hulls:[
      {id:'hull_1', title:'Hull 1', decks:[]},
      {id:'hull_2', title:'Hull 2', decks:[]},
      {id:'hull_3', title:'Hull 3', decks:[]}
    ]
  }, state.builderHullCount);

  yfdClearActiveScreen();
  navStack = [];
  yfdClearForwardStack();
}

function createYachtFromQuickSetup(data){
  const now = Date.now();
  const isSo439 = data && (
    data.startMethod === SO439_READY_METHOD ||
    (data.meta && data.meta.template === SO439_TEMPLATE_KEY)
  );
  const yacht = {
    id:'yacht_' + now,
    name:(data && data.name ? data.name.trim() : '') || (isSo439 ? SO439_TEMPLATE_TITLE : 'My yacht'),
    vesselType:isSo439 ? 'sailing' : ((data && data.vesselType) || 'motor'),
    hullCount:isSo439 ? 1 : Math.max(1, Math.min(3, Number(data && data.hullCount) || 1)),
    rig:isSo439 ? 'bermudan_sloop' : ((data && data.rig) || null),
    startMethod:(data && data.startMethod) || ((data && data.meta && data.meta.startMethod) || 'scratch'),
    meta:(data && data.meta) || {},
    status:'draft',
    locked:false,
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };

  resetWorkingStateForNewYacht(yacht.hullCount);
  if(isSo439) ensureSo439EquipmentDefaults();

  state.yachts.push(yacht);
  state.activeYachtId = yacht.id;
  saveState();

  openActiveYacht();
}

function getActiveYacht(){
  return state.yachts.find(y => y.id === state.activeYachtId) || state.yachts[0] || null;
}

function setActiveYacht(id){
  const yacht = state.yachts.find(y => y.id === id);
  if(!yacht) return;
  state.activeYachtId = yacht.id;
  state.builderHullCount = yacht.hullCount || state.builderHullCount || 1;
  saveState();
  renderFleetScreen();
}


/*
  DEV NOTE — Yacht delete policy

  Current MVP:
  Delete removes yacht from local state after confirm.

  Required full product behavior:
  Yacht deletion must NOT permanently delete immediately.
  Move yacht to archive/trash for 60 days, allow restore, and only then purge.
  Equipment/service/cardholder history must have its own retention policy.
*/

function renderUnlockYachtModal(yachtId){
  const title = findYachtTitle(yachtId);
  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-builder-delete-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Unlock yacht</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-builder-modal-note">
          You are about to unlock this yacht structure. Changes may affect the current setup. Continue?
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-confirm-unlock-yacht="${yachtId}" type="button">Unlock and edit</button>
        </div>
      </section>
    </div>
  `;
}

function setYachtLocked(yachtId, locked){
  const yacht = state.yachts.find(y => y.id === yachtId);
  if(!yacht) return;
  yacht.locked = !!locked;
  yacht.updatedAt = new Date().toISOString();
  saveState();
  renderFleetScreen();
}

function openUnlockYachtModal(yachtId){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderUnlockYachtModal(yachtId));
}

function findYachtTitle(yachtId){
  const yacht = state.yachts.find(y => y.id === yachtId);
  return yacht ? yacht.name : 'this yacht';
}

function renderDeleteYachtModal(yachtId){
  const title = findYachtTitle(yachtId);

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-builder-delete-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Delete yacht</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-builder-modal-note yfd-builder-delete-note">
          MVP delete removes this yacht from local state. Developer reminder: in production this must move the yacht to archive/trash for 60 days with restore option.
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-yacht="${yachtId}" type="button">Delete yacht</button>
        </div>
      </section>
    </div>
  `;
}

function openDeleteYachtModal(yachtId){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderDeleteYachtModal(yachtId));
}

function deleteYacht(yachtId){
  closeBuilderModal();
  state.yachts = state.yachts.filter(y => y.id !== yachtId);
  if(state.activeYachtId === yachtId){
    state.activeYachtId = state.yachts[0] ? state.yachts[0].id : null;
  }
  yfdClearActiveScreen();
  saveState();
  renderFleetScreen();
}


/* === V40-D3C-1A Admin Base Tool readonly foundation 20260507 === */

const ADMIN_BASE_STORAGE_KEY = 'yfd_admin_base_draft_v1';
const ADMIN_BASE_VERSION = '20260508-v40d3d5a-sailing-rig-db-admin';
let adminBaseActiveSection = 'main';

function adminBaseItems(names, category){
  return String(names || '')
    .split(',')
    .map(x => x.trim())
    .filter(Boolean)
    .map(name => ({
      id:slugifyCustomKey((category || 'item') + '_' + name),
      title:name,
      category:category || 'Equipment'
    }));
}

function adminBaseGroupedItems(groups, fallbackCategory){
  const items = [];

  (groups || []).forEach(group => {
    const category = group.category || group.title || fallbackCategory || 'Equipment';

    String(group.items || '')
      .split(',')
      .map(x => x.trim())
      .filter(Boolean)
      .forEach(name => {
        items.push({
          id:slugifyCustomKey(category + '_' + name),
          title:name,
          category
        });
      });
  });

  return items;
}

function sailingRigGroup(rigType, id, title, type, note, itemGroups, extra){
  return Object.assign({
    id,
    title,
    type,
    note,
    rig_type:rigType,
    section_key:id,
    items:adminBaseGroupedItems(itemGroups, title)
  }, extra || {});
}

function getDefaultSailingRigGroups(){
  return {
    bermudan_sloop:[
      sailingRigGroup('bermudan_sloop', 'sailing_bermudan_aft_sails', 'AFT SAILS', 'sail_group', 'Bermudan sloop mainsail group.', [
        {title:'Mainsail group', items:'Mainsail, Fully battened mainsail, Partially battened mainsail, Loose-footed mainsail, In-mast furling mainsail, In-boom furling mainsail, Trysail, Storm mainsail'}
      ]),
      sailingRigGroup('bermudan_sloop', 'sailing_bermudan_forward_sails', 'FORWARD SAILS', 'sail_group', 'Bermudan sloop headsail and forward sail group.', [
        {title:'Headsail / forward sail group', items:'Jib, Working jib, Genoa, Light genoa, Heavy genoa, Yankee, Solent jib, Staysail, Storm jib, Code 0, Gennaker, Asymmetric spinnaker, Symmetric spinnaker, Drifter'}
      ]),
      sailingRigGroup('bermudan_sloop', 'sailing_bermudan_top', 'TOP', 'mast_top', 'Main mast top equipment and masthead fittings.', [
        {title:'Main Mast Top', items:'Masthead navigation light, Anchor light, Tricolour light, Wind sensor, Windex / wind vane, VHF antenna, AIS antenna, GPS antenna, Cellular / LTE antenna, Wi-Fi antenna, TV antenna, Lightning rod / dissipater, Masthead sheaves, Halyard exit sheaves, Spinnaker crane, Masthead crane / fitting, Topping lift attachment, Backstay attachment, Forestay attachment, Shroud attachment points, Flag halyard block, Masthead camera, Cable gland / masthead cable exit'}
      ], {instance_policy:'main_mast_only'}),
      sailingRigGroup('bermudan_sloop', 'sailing_bermudan_spar', 'SPAR', 'spar', 'Main mast, boom, poles and foils.', [
        {title:'Main mast / boom / foils', items:'Main mast, Boom, Spreaders, Bowsprit, Sprit / prodder, Spinnaker pole, Whisker pole, Boom vang / kicker strut, Gooseneck fitting, Mast track, Sail track, Furler foil, Headstay foil, Mast base / mast step fitting'}
      ]),
      sailingRigGroup('bermudan_sloop', 'sailing_bermudan_rigs', 'RIGS', 'rigging', 'Standing and running rigging.', [
        {title:'Standing Rigging', items:'Forestay, Backstay, Split backstay, Adjustable backstay, Inner forestay, Baby stay, Cap shrouds, Upper shrouds, Lower shrouds, Intermediate shrouds, Diagonal stays, Checkstays, Running backstays, Chainplates, Turnbuckles / bottle screws, Toggles, Tangs, Clevis pins, Cotter pins / split pins, Swage terminals, Mechanical terminals, Rod rigging, Wire rigging, Dyneema standing rigging'},
        {title:'Running Rigging', items:'Main halyard, Genoa halyard, Jib halyard, Spinnaker halyard, Code 0 halyard, Staysail halyard, Topping lift, Main sheet, Genoa sheets, Jib sheets, Spinnaker sheets, Spinnaker guys, Code 0 sheets, Staysail sheets, Main outhaul, Cunningham, Reefing lines, Reef 1 line, Reef 2 line, Reef 3 line, Boom vang control line, Traveller control lines, Backstay control line, Furling line, Headsail furling line, Code 0 furling line, Tack line, Downhaul, Preventer line, Barber haulers, Lazy jacks, Lazy bag lines'}
      ], {database_meaning:'rigging'})
    ],
    ketch:[
      sailingRigGroup('ketch', 'sailing_ketch_mast_sails', 'MAST SAILS', 'sail_group', 'Main mast and mizzen sail inventory.', [
        {title:'Main Mast Sails', items:'Main mainsail, Fully battened main mainsail, In-mast furling main mainsail, In-boom furling main mainsail, Trysail, Storm mainsail'},
        {title:'Mizzen Sails', items:'Mizzen sail, Fully battened mizzen, In-mast furling mizzen, Mizzen storm sail, Mizzen riding sail'}
      ]),
      sailingRigGroup('ketch', 'sailing_ketch_stay_rigging_sails', 'STAY / RIGGING / SAILS', 'sail_group', 'Headsails, staysails and stay-set sails.', [
        {title:'Headsails', items:'Jib, Working jib, Genoa, Yankee, Solent jib, Storm jib, Code 0, Gennaker, Asymmetric spinnaker, Symmetric spinnaker'},
        {title:'Staysails', items:'Staysail, Inner staysail, Mizzen staysail, Fisherman staysail'},
        {title:'Stay-set Sails', items:'Sail set between main and mizzen, Sail set from mizzen mast, Sail set on inner forestay'}
      ]),
      sailingRigGroup('ketch', 'sailing_ketch_top', 'TOP', 'mast_top', 'Main mast and mizzen mast top equipment.', [
        {title:'Main Mast Top', items:'Masthead navigation light, Anchor light, Tricolour light, Wind sensor, Windex / wind vane, VHF antenna, AIS antenna, GPS antenna, Masthead sheaves, Halyard exit sheaves, Main backstay attachment, Main forestay attachment, Main shroud attachment points'},
        {title:'Mizzen Mast Top', items:'Mizzen masthead light, Mizzen anchor light / all-round light, Wind indicator, Antenna mount, Mizzen masthead sheaves, Mizzen halyard sheaves, Mizzen backstay attachment, Mizzen forestay attachment, Mizzen shroud attachment points'}
      ], {instance_policy:'per_mast'}),
      sailingRigGroup('ketch', 'sailing_ketch_spar', 'SPAR', 'spar', 'Main, mizzen and shared forward spars.', [
        {title:'Main Mast Spars', items:'Main mast, Main boom, Main spreaders, Main mast track, Main sail track, Main gooseneck fitting, Main boom vang / kicker strut'},
        {title:'Mizzen Mast Spars', items:'Mizzen mast, Mizzen boom, Mizzen spreaders, Mizzen mast track, Mizzen sail track, Mizzen gooseneck fitting, Mizzen boom vang / kicker strut'},
        {title:'Shared / Forward Spars', items:'Bowsprit, Sprit / prodder, Spinnaker pole, Whisker pole, Furler foil, Headstay foil, Staysail stay foil'}
      ]),
      sailingRigGroup('ketch', 'sailing_ketch_rigs', 'RIGS', 'rigging', 'Standing and running rigging for main and mizzen masts.', [
        {title:'Standing Rigging', items:'Main forestay, Main backstay, Main cap shrouds, Main upper shrouds, Main lower shrouds, Main intermediate shrouds, Main diagonal stays, Main running backstays, Main checkstays, Main chainplates, Main turnbuckles / bottle screws, Mizzen forestay, Mizzen backstay, Mizzen cap shrouds, Mizzen upper shrouds, Mizzen lower shrouds, Mizzen intermediate shrouds, Mizzen diagonal stays, Mizzen running backstays, Mizzen checkstays, Mizzen chainplates, Mizzen turnbuckles / bottle screws, Triatic stay, Mizzen stay, Main-to-mizzen stay, Inner forestay, Baby stay, Staysail stay, Toggles, Tangs, Clevis pins, Cotter pins / split pins, Swage terminals, Mechanical terminals, Rod rigging, Wire rigging, Dyneema standing rigging'},
        {title:'Running Rigging', items:'Main halyard, Main sheet, Main outhaul, Main reefing lines, Main topping lift, Main boom vang control line, Main traveller control lines, Main Cunningham, Main preventer line, Mizzen halyard, Mizzen sheet, Mizzen outhaul, Mizzen reefing lines, Mizzen topping lift, Mizzen boom vang control line, Mizzen traveller control lines, Mizzen Cunningham, Mizzen preventer line, Genoa halyard, Jib halyard, Staysail halyard, Spinnaker halyard, Code 0 halyard, Mizzen staysail halyard, Genoa sheets, Jib sheets, Staysail sheets, Mizzen staysail sheets, Spinnaker sheets, Spinnaker guys, Code 0 sheets, Headsail furling line, Staysail furling line, Code 0 furling line, Tack line, Downhaul, Barber haulers'}
      ], {database_meaning:'rigging'})
    ],
    schooner:[
      sailingRigGroup('schooner', 'sailing_schooner_mast_sails', 'MAST SAILS', 'sail_group', 'Foremast and main mast sail inventory.', [
        {title:'Foremast Sails', items:'Foresail, Fore gaff sail, Fore topsail, Fore storm sail, Fore trysail'},
        {title:'Main Mast Sails', items:'Mainsail, Main gaff sail, Main topsail, Main storm sail, Main trysail'}
      ]),
      sailingRigGroup('schooner', 'sailing_schooner_stay_rigging_sails', 'STAY / RIGGING / SAILS', 'sail_group', 'Headsails, staysails and stay-set sails.', [
        {title:'Headsails', items:'Jib, Flying jib, Jib topsail, Genoa, Yankee, Storm jib, Code 0, Gennaker, Asymmetric spinnaker'},
        {title:'Staysails', items:'Fore staysail, Main staysail, Inner staysail, Fisherman staysail, Balloon staysail'},
        {title:'Stay-set Sails', items:'Sail set between foremast and main mast, Sail set forward of foremast, Sail set on inner stay'}
      ]),
      sailingRigGroup('schooner', 'sailing_schooner_top', 'TOP', 'mast_top', 'Foremast and main mast top equipment.', [
        {title:'Foremast Top', items:'Masthead navigation light, Anchor light, Wind indicator, VHF antenna, AIS antenna, GPS antenna, Foremast sheaves, Fore halyard sheaves, Fore stay attachment, Fore shroud attachment points, Flag halyard block'},
        {title:'Main Mast Top', items:'Masthead navigation light, Anchor light, Tricolour light, Wind sensor, Windex / wind vane, VHF antenna, AIS antenna, GPS antenna, Main masthead sheaves, Main halyard sheaves, Main stay attachment, Main backstay attachment, Main shroud attachment points, Flag halyard block'}
      ], {instance_policy:'per_mast'}),
      sailingRigGroup('schooner', 'sailing_schooner_spar', 'SPAR', 'spar', 'Foremast, main mast and shared forward spars.', [
        {title:'Foremast Spars', items:'Foremast, Fore boom, Fore gaff, Fore yard, Fore spreaders, Fore mast track, Fore sail track, Fore gooseneck fitting'},
        {title:'Main Mast Spars', items:'Main mast, Main boom, Main gaff, Main yard, Main spreaders, Main mast track, Main sail track, Main gooseneck fitting'},
        {title:'Shared / Forward Spars', items:'Bowsprit, Jibboom, Flying jibboom, Spinnaker pole, Whisker pole, Furler foil, Headstay foil, Staysail stay foil'}
      ]),
      sailingRigGroup('schooner', 'sailing_schooner_rigs', 'RIGS', 'rigging', 'Standing and running rigging for foremast and main mast.', [
        {title:'Standing Rigging', items:'Fore forestay, Fore backstay, Fore cap shrouds, Fore upper shrouds, Fore lower shrouds, Fore intermediate shrouds, Fore diagonal stays, Fore running backstays, Fore chainplates, Fore turnbuckles / bottle screws, Main forestay, Main backstay, Main cap shrouds, Main upper shrouds, Main lower shrouds, Main intermediate shrouds, Main diagonal stays, Main running backstays, Main chainplates, Main turnbuckles / bottle screws, Triatic stay, Main stay, Fore-to-main stay, Headstay, Inner forestay, Jib stay, Flying jib stay, Staysail stay, Bobstay, Bowsprit shrouds, Dolphin striker stay, Toggles, Tangs, Clevis pins, Cotter pins / split pins, Swage terminals, Mechanical terminals, Rod rigging, Wire rigging, Dyneema standing rigging'},
        {title:'Running Rigging', items:'Fore halyard, Fore throat halyard, Fore peak halyard, Fore sheet, Fore topsail halyard, Fore topsail sheet, Fore outhaul, Fore reefing lines, Fore topping lift, Fore preventer line, Main halyard, Main throat halyard, Main peak halyard, Main sheet, Main topsail halyard, Main topsail sheet, Main outhaul, Main reefing lines, Main topping lift, Main preventer line, Jib halyard, Flying jib halyard, Staysail halyard, Genoa halyard, Spinnaker halyard, Code 0 halyard, Jib sheets, Flying jib sheets, Staysail sheets, Genoa sheets, Spinnaker sheets, Spinnaker guys, Code 0 sheets, Headsail furling line, Staysail furling line, Code 0 furling line, Tack line, Downhaul, Barber haulers'}
      ], {database_meaning:'rigging'})
    ]
  };
}

function getDefaultAdminBaseDraft(){
  return {
    version:ADMIN_BASE_VERSION,
    sharedGroups:[
      {
        id:'shared_navigation',
        title:'Navigation / Communication',
        items:adminBaseItems('Radar, AIS, VHF / Radio, GPS / Plotter, Autopilot, Compass, Navigation lights, Antennas', 'Navigation')
      },
      {
        id:'shared_electrical',
        title:'Electrical / Power',
        items:adminBaseItems('AC Panel, DC Panel, Battery Bank, Inverter / Charger, Isolation Transformer, Shore Power, Battery Charger, Cables / Busbars', 'Electrical')
      },
      {
        id:'shared_plumbing',
        title:'Water / Plumbing',
        items:adminBaseItems('Fresh Water Tank, Grey Water Tank, Black Water Tank, Fresh Water Pump, Hot Water Boiler, Watermaker, Shower Drain, Toilet System', 'Plumbing')
      },
      {
        id:'shared_galley',
        title:'Galley / Comfort',
        items:adminBaseItems('Fridge, Wine Fridge, Oven, Cooktop / Hob, Extractor / Hood, Ice Maker, Refrigerator, BBQ / Grill', 'Comfort')
      },
      {
        id:'shared_safety',
        title:'Safety / Fire / Bilge',
        items:adminBaseItems('Fire Suppression System, Fire Alarm, Fire Extinguisher, Bilge Pump, High Water Alarm, Emergency Light, First Aid Kit', 'Safety')
      },
      {
        id:'shared_surface_access',
        title:'Surface / Access / General',
        items:adminBaseItems('Deck Surface, Floor Covering, Access Panels, Hatches, Doors, Curtains / Blinds, Hardware / Fittings', 'General')
      }
    ],
    motorYachtGroups:[
      {
        id:'motor_hardtop',
        title:'Hardtop',
        items:adminBaseItems('Mast, Dome, Radar, Antenna, Awning System, Navigation Light', 'Motor yacht')
      },
      {
        id:'motor_flybridge',
        title:'Flybridge',
        items:adminBaseItems('Upper Helm, Upper Navigation Equipment, Lounge Area, Wet Bar, Sun Awning, Deck Surface', 'Motor yacht')
      },
      {
        id:'motor_foredeck',
        title:'Foredeck',
        items:adminBaseItems('Anchor / Windlass Equipment, Chain, Anchor, Foredeck Table, Foredeck Refrigerator / Cool Box, Foredeck Deck Surface', 'Deck equipment')
      },
      {
        id:'motor_engine_room',
        title:'Engine Room',
        items:adminBaseItems('Main Engine, Gearbox, Generator, Chiller, Watermaker, Stabilizer Drive / Actuator, Ventilation, Fire Suppression System', 'Technical')
      },
      {
        id:'motor_underwater',
        title:'Underwater',
        items:adminBaseItems('Shaft Port, Shaft Starboard, Propeller Port, Propeller Starboard, Rudder Port, Rudder Starboard, Bow Thruster, Stern Thruster, Stabilizer Fin', 'Underwater')
      },
      {
        id:'motor_cockpit_aft',
        title:'Cockpit / Aft Section',
        items:adminBaseItems('Passerelle, Central Locker / Water Toys Garage, Grill, Aft Shower, Ice Maker, Refrigerator, Deck Surface', 'Deck equipment')
      }
    ],
    sailingRigGroups:getDefaultSailingRigGroups()
  };
}


function getDefaultAdminBaseStructureTemplates(){
  return [
    {
      id:'fixed_monohull_motor_yacht_example',
      title:'Fixed monohull motor yacht example',
      note:'Readonly example of how base equipment can be arranged into a typical motor yacht structure.',
      groups:[
        {id:'tpl_hardtop', title:'Hardtop', items:adminBaseItems('Mast, Dome, Radar, Antenna, Awning System, Navigation Light', 'Template / Hardtop')},
        {id:'tpl_flybridge', title:'Flybridge', items:adminBaseItems('Upper Helm, Upper Navigation Equipment, Wet Bar, Sun Awning, Deck Surface', 'Template / Flybridge')},
        {id:'tpl_main_deck', title:'Main Deck', items:adminBaseItems('Lower Helm, Navigation Equipment, Galley, Salon Media, Cockpit Refrigerator, Ice Maker, Passerelle', 'Template / Main Deck')},
        {id:'tpl_engine_room', title:'Engine Room', items:adminBaseItems('Main Engine Port, Main Engine Starboard, Gearbox Port, Gearbox Starboard, Generator #1, Generator #2, Chiller, Watermaker', 'Template / Engine Room')},
        {id:'tpl_underwater', title:'Underwater / Hull', items:adminBaseItems('Keel / Киль, Shaft Port, Shaft Starboard, Propeller Port, Propeller Starboard, Rudder Port, Rudder Starboard, Bow Thruster, Stern Thruster', 'Template / Underwater')}
      ]
    },
    getSo439StructureTemplateRecord()
  ];
}

function sanitizeAdminBaseDraft(draft){
  const fallback = getDefaultAdminBaseDraft();
  const safe = draft && typeof draft === 'object' ? draft : {};
  return {
    version:safe.version || fallback.version,
    sharedGroups:Array.isArray(safe.sharedGroups) ? safe.sharedGroups : fallback.sharedGroups,
    motorYachtGroups:Array.isArray(safe.motorYachtGroups) ? safe.motorYachtGroups : fallback.motorYachtGroups,
    structureTemplates:Array.isArray(safe.structureTemplates) ? safe.structureTemplates : getDefaultAdminBaseStructureTemplates(),
    sailingRigGroups:{
      bermudan_sloop:Array.isArray(safe.sailingRigGroups && safe.sailingRigGroups.bermudan_sloop) ? safe.sailingRigGroups.bermudan_sloop : fallback.sailingRigGroups.bermudan_sloop,
      ketch:Array.isArray(safe.sailingRigGroups && safe.sailingRigGroups.ketch) ? safe.sailingRigGroups.ketch : fallback.sailingRigGroups.ketch,
      schooner:Array.isArray(safe.sailingRigGroups && safe.sailingRigGroups.schooner) ? safe.sailingRigGroups.schooner : fallback.sailingRigGroups.schooner
    }
  };
}

let adminBaseDraft = sanitizeAdminBaseDraft(null);

function loadAdminBaseDraft(){
  try{
    const raw = localStorage.getItem(ADMIN_BASE_STORAGE_KEY);
    adminBaseDraft = sanitizeAdminBaseDraft(raw ? JSON.parse(raw) : null);
  } catch(e){
    adminBaseDraft = sanitizeAdminBaseDraft(null);
  }
  ensureAdminBaseDraftUpgrades();
  saveAdminBaseDraft();
}

function saveAdminBaseDraft(){
  try{
    localStorage.setItem(ADMIN_BASE_STORAGE_KEY, JSON.stringify(adminBaseDraft));
  } catch(e){}
}

function cloneAdminBaseValue(value){
  return JSON.parse(JSON.stringify(value || null));
}

function adminBaseItemTitleKey(item){
  return String(item && item.title || '').trim().toLowerCase();
}

function appendAdminBaseItemsUnique(group, items){
  if(!group || !Array.isArray(items)) return;
  if(!Array.isArray(group.items)) group.items = [];

  const seen = new Set(group.items.map(adminBaseItemTitleKey).filter(Boolean));

  items.forEach(item => {
    const key = adminBaseItemTitleKey(item);
    if(!key || seen.has(key)) return;
    group.items.push(cloneAdminBaseValue(item));
    seen.add(key);
  });
}

function getLegacySailingGroupTarget(rigId, groupId){
  const maps = {
    bermudan_sloop:{
      sailing_bermudan_rigging:'sailing_bermudan_rigs',
      sailing_bermudan_sails:'sailing_bermudan_forward_sails'
    },
    ketch:{
      sailing_ketch_rigging:'sailing_ketch_rigs',
      sailing_ketch_sails:'sailing_ketch_mast_sails'
    },
    schooner:{
      sailing_schooner_rigging:'sailing_schooner_rigs',
      sailing_schooner_sails:'sailing_schooner_mast_sails'
    }
  };

  return maps[rigId] && maps[rigId][groupId] ? maps[rigId][groupId] : null;
}

function mergeAdminBaseGroupsWithDefaults(currentGroups, defaultGroups, rigId){
  const result = [];
  const legacyItemsByTarget = {};

  (Array.isArray(currentGroups) ? currentGroups : []).forEach(group => {
    if(!group || !group.id) return;

    const targetId = getLegacySailingGroupTarget(rigId, group.id);
    if(targetId && targetId !== group.id){
      if(!legacyItemsByTarget[targetId]) legacyItemsByTarget[targetId] = [];
      legacyItemsByTarget[targetId] = legacyItemsByTarget[targetId].concat(group.items || []);
      return;
    }

    result.push(group);
  });

  (defaultGroups || []).forEach(defaultGroup => {
    let group = result.find(item => item && item.id === defaultGroup.id);

    if(!group){
      group = cloneAdminBaseValue(defaultGroup);
      result.push(group);
    } else {
      group.title = defaultGroup.title;
      group.type = defaultGroup.type;
      group.note = defaultGroup.note;
      group.rig_type = defaultGroup.rig_type;
      group.section_key = defaultGroup.section_key || defaultGroup.id;
      group.database_meaning = defaultGroup.database_meaning || defaultGroup.type;
      group.instance_policy = defaultGroup.instance_policy || group.instance_policy;
      appendAdminBaseItemsUnique(group, defaultGroup.items || []);
    }

    appendAdminBaseItemsUnique(group, legacyItemsByTarget[defaultGroup.id] || []);
  });

  return result;
}


function ensureAdminBaseDraftUpgrades(){
  if(!adminBaseDraft || typeof adminBaseDraft !== 'object') return;

  if(!Array.isArray(adminBaseDraft.structureTemplates)){
    adminBaseDraft.structureTemplates = getDefaultAdminBaseStructureTemplates();
  }

  getDefaultAdminBaseStructureTemplates().forEach(defaultTemplate => {
    const existing = adminBaseDraft.structureTemplates.find(template => (
      template &&
      (
        template.id === defaultTemplate.id ||
        (defaultTemplate.template_key && template.template_key === defaultTemplate.template_key)
      )
    ));

    if(!existing){
      adminBaseDraft.structureTemplates.push(cloneAdminBaseValue(defaultTemplate));
      return;
    }

    if(defaultTemplate.template_key === SO439_TEMPLATE_KEY){
      existing.title = defaultTemplate.title;
      existing.template_key = defaultTemplate.template_key;
      existing.category = defaultTemplate.category;
      existing.hull_type = defaultTemplate.hull_type;
      existing.rig_type = defaultTemplate.rig_type;
      existing.rig_subtype = defaultTemplate.rig_subtype;
      existing.manufacturer = defaultTemplate.manufacturer;
      existing.model = defaultTemplate.model;
      existing.year = defaultTemplate.year;
      existing.policy = defaultTemplate.policy;
      existing.note = defaultTemplate.note;
      existing.stats = cloneAdminBaseValue(defaultTemplate.stats);
      existing.groups = cloneAdminBaseValue(defaultTemplate.groups);
    }
  });

  if(!Array.isArray(adminBaseDraft.motorYachtGroups)){
    adminBaseDraft.motorYachtGroups = [];
  }

  let underwater = adminBaseDraft.motorYachtGroups.find(g => g && g.id === 'motor_underwater');
  if(!underwater){
    underwater = {id:'motor_underwater', title:'Underwater / Hull', items:[]};
    adminBaseDraft.motorYachtGroups.push(underwater);
  }

  if(!Array.isArray(underwater.items)) underwater.items = [];

  const hasKeel = underwater.items.some(item => {
    const t = String(item && item.title || '').toLowerCase();
    return t.includes('keel') || t.includes('киль');
  });

  if(!hasKeel){
    underwater.items.unshift({
      id:'underwater_keel',
      title:'Keel / Киль',
      category:'Underwater / Hull'
    });
  }

  if(adminBaseDraft.version !== ADMIN_BASE_VERSION){
    const defaults = getDefaultSailingRigGroups();
    if(!adminBaseDraft.sailingRigGroups || typeof adminBaseDraft.sailingRigGroups !== 'object'){
      adminBaseDraft.sailingRigGroups = {};
    }

    ['bermudan_sloop','ketch','schooner'].forEach(rigId => {
      adminBaseDraft.sailingRigGroups[rigId] = mergeAdminBaseGroupsWithDefaults(
        adminBaseDraft.sailingRigGroups[rigId],
        defaults[rigId],
        rigId
      );
    });

    adminBaseDraft.version = ADMIN_BASE_VERSION;
  }
}

function getAdminBaseStructureTemplates(){
  return Array.isArray(adminBaseDraft.structureTemplates)
    ? adminBaseDraft.structureTemplates
    : [];
}

function getAdminBaseMainEquipmentGroups(){
  return []
    .concat(getAdminBaseMotorGroups())
    .concat(getAdminBaseSharedGroups());
}

function getAdminBaseEditableGroups(){
  const sailing = adminBaseDraft.sailingRigGroups || {};
  return getAdminBaseMainEquipmentGroups().concat(
    Object.keys(sailing).reduce((list, rigId) => list.concat(sailing[rigId] || []), [])
  );
}

function getAdminBaseReadyLibraryGroups(){
  return getAdminBaseMainEquipmentGroups().slice();
}

function getAdminBaseSharedGroups(){
  return adminBaseDraft.sharedGroups || [];
}

function getAdminBaseMotorGroups(){
  return adminBaseDraft.motorYachtGroups || [];
}

function getAdminBaseSailingRigGroups(rig){
  const groups = adminBaseDraft.sailingRigGroups || {};
  return groups[rig || 'bermudan_sloop'] || [];
}

loadAdminBaseDraft();

function renderAdminBaseGroup(group, opts){
  const o = opts || {};
  const addButton = o.canAdd
    ? `<button class="yfd-admin-base-add-btn" data-admin-base-add="${group.id}" type="button">+ Add</button>`
    : '';

  return `
    <section class="yfd-admin-base-group">
      <div class="yfd-admin-base-group-head">
        <strong>${group.title}</strong>
        <div class="yfd-admin-base-group-actions">
          <span>${(group.items || []).length} items</span>
          ${addButton}
        </div>
      </div>
      <div class="yfd-admin-base-items">
        ${(group.items || []).map(item => `
          <div class="yfd-admin-base-item">
            <div class="yfd-admin-base-item-text">
              <strong>${item.title}</strong>
              <span>${item.category || item.source || 'Equipment'}</span>
            </div>
            ${o.canAdd ? `
              <div class="yfd-admin-base-item-actions">
                <button class="yfd-admin-base-edit-item" data-admin-base-edit="${group.id}" data-admin-base-item="${item.id}" type="button">Edit</button>
                <button class="yfd-admin-base-delete-item" data-admin-base-delete="${group.id}" data-admin-base-item="${item.id}" type="button">Delete</button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderAdminBaseRigBlock(rigId, rigTitle){
  const rigGroups = getAdminBaseSailingRigGroups(rigId);

  return `
    <section class="yfd-admin-base-rig-block">
      <div class="yfd-admin-base-rig-head">
        <span>Sailing rig specific</span>
        <strong>${rigTitle}</strong>
      </div>

      ${rigGroups.map(group => renderAdminBaseGroup(group, {canAdd:true})).join('')}
    </section>
  `;
}

function renderAdminBaseTemplate(template){
  return `
    <section class="yfd-admin-base-template">
      <div class="yfd-admin-base-template-head">
        <span>Structure template</span>
        <strong>${template.title}</strong>
        <p>${template.note || 'Readonly structure example'}</p>
      </div>
      ${(template.groups || []).map(renderAdminBaseGroup).join('')}
    </section>
  `;
}

function getReadyTemplateStaticRootById(id){
  const roots = isReadySailingSO439Yacht()
    ? getSo439SailingReadyRoots().concat(getSo439ReadyRootLayers())
    : [].concat(baseLayers || []).concat(optionalLayers || []);

  return roots
    .find(layer => layer && layer.id === id) || null;
}

function isReadyTemplateStaticRoot(id){
  return !!getReadyTemplateStaticRootById(id);
}

function getReadyTemplateContainerById(id){
  if(!id) return null;
  return getReadyTemplateStaticRootById(id)
    || findNodeById(id)
    || ((state.custom || []).find(deck => deck && deck.id === id) || null);
}

function applyReadyTemplateAdds(){
  if(!Array.isArray(state.readyTemplateAdds)) state.readyTemplateAdds = [];

  state.readyTemplateAdds.forEach(record => {
    if(!record || !record.parentId || !record.item) return;

    ensureReadyTemplateEquipmentStore(record.item, record.equipmentTemplates);

    const parent = getReadyTemplateStaticRootById(record.parentId);
    if(!parent) return;
    if(!Array.isArray(parent.items)) parent.items = [];

    const templateId = record.item.template_id || record.item.id || '';
    const exists = parent.items.some(item => {
      if(!item) return false;
      return (templateId && (item.template_id === templateId || item.id === templateId))
        || getStickerRef(parent.id, item) === getStickerRef(parent.id, record.item);
    });

    if(!exists){
      parent.items.push(cloneAdminBaseValue(record.item));
    }
  });
}

function getReadyTemplateRootLayers(){
  return getAllLayers()
    .filter(Boolean)
    .sort((a,b)=>(a.order ?? 999) - (b.order ?? 999));
}

function getReadyTemplateRows(){
  const rows = [];
  const visited = new Set();

  function pushContainer(container, order, level, parentTitle, source){
    if(!container || !container.id) return;

    rows.push({
      order,
      level,
      id:container.id,
      ref:container.id,
      parent:parentTitle || '',
      parentId:'',
      title:container.title || container.id,
      type:level === 1 ? 'Deck / Layer' : 'Area / Zone',
      note:container.note || '',
      target:'',
      key:'',
      containerId:container.id,
      canAdd:true,
      source:source || (isReadyUserCreated(container) ? 'User ready-made' : 'Ready-made')
    });

    (container.items || []).forEach((item, index) => {
      const itemOrder = order + '.' + (index + 1);
      const ref = getStickerRef(container.id, item);
      const display = getReadyDisplay(ref, item.title, item.type || '');
      const targetId = item.target || '';
      const targetNode = targetId ? getReadyTemplateContainerById(targetId) : null;
      const kind = itemKind(item);

      rows.push({
        order:itemOrder,
        level:level + 1,
        id:item.id || ref,
        ref,
        parent:container.title || container.id,
        parentId:container.id,
        title:display.title || item.title || 'Untitled',
        type:item.type || (kind === 'equipment' ? 'Equipment' : 'Area / Zone'),
        note:item.note || '',
        target:targetId,
        key:item.key || '',
        containerId:targetNode ? targetNode.id : '',
        canAdd:!!targetNode,
        canDelete:isReadyUserCreated(item),
        source:isReadyUserCreated(item) ? 'User ready-made' : 'Ready-made'
      });

      if(targetNode && !visited.has(targetNode.id)){
        visited.add(targetNode.id);
        pushContainerChildren(targetNode, itemOrder, level + 1);
      }
    });
  }

  function pushContainerChildren(container, order, level){
    (container.items || []).forEach((item, index) => {
      const itemOrder = order + '.' + (index + 1);
      const ref = getStickerRef(container.id, item);
      const display = getReadyDisplay(ref, item.title, item.type || '');
      const targetId = item.target || '';
      const targetNode = targetId ? getReadyTemplateContainerById(targetId) : null;
      const kind = itemKind(item);

      rows.push({
        order:itemOrder,
        level:level + 1,
        id:item.id || ref,
        ref,
        parent:container.title || container.id,
        parentId:container.id,
        title:display.title || item.title || 'Untitled',
        type:item.type || (kind === 'equipment' ? 'Equipment' : 'Area / Zone'),
        note:item.note || '',
        target:targetId,
        key:item.key || '',
        containerId:targetNode ? targetNode.id : '',
        canAdd:!!targetNode,
        canDelete:isReadyUserCreated(item),
        source:isReadyUserCreated(item) ? 'User ready-made' : 'Ready-made'
      });

      if(targetNode && !visited.has(targetNode.id)){
        visited.add(targetNode.id);
        pushContainerChildren(targetNode, itemOrder, level + 1);
      }
    });
  }

  getReadyTemplateRootLayers().forEach((layer, index) => {
    visited.add(layer.id);
    pushContainer(layer, String(index + 1), 1, '', isReadyUserCreated(layer) ? 'User ready-made' : 'Ready-made');
  });

  return rows;
}

function renderStructureTemplateTable(){
  const rows = getReadyTemplateRows();
  const equipmentCount = rows.filter(row => String(row.type || '').toLowerCase().includes('equipment')).length;
  const containerCount = rows.filter(row => row.canAdd).length;
  const activeTitle = isReadySailingSO439Yacht()
    ? SO439_TEMPLATE_TITLE
    : 'Ready-made motor yacht structure';
  const activeNote = isReadySailingSO439Yacht()
    ? 'Rows are generated from the SO439 sailing ready-made prototype opened by Ready-made.'
    : 'Rows are generated from the same structure opened by Ready-made. Adding here writes back to that ready-made tree.';

  return `
    <section class="yfd-structure-template-live">
      <div class="yfd-structure-template-summary">
        <div>
          <span>Live ready-made mirror</span>
          <strong>${activeTitle}</strong>
          <p>${activeNote}</p>
        </div>
        <div class="yfd-structure-template-stats">
          <span>${rows.length} rows</span>
          <span>${containerCount} containers</span>
          <span>${equipmentCount} equipment</span>
        </div>
      </div>

      <div class="yfd-structure-template-table" role="table" aria-label="Ready-made structure template">
        <div class="yfd-structure-template-row yfd-structure-template-row-head" role="row">
          <span>Order</span>
          <span>Level</span>
          <span>Title</span>
          <span>Type</span>
          <span>Parent</span>
          <span>Link</span>
          <span>Actions</span>
        </div>
        ${rows.map(row => `
          <div class="yfd-structure-template-row" role="row" style="--template-level:${Math.max(1, row.level || 1)}">
            <span class="yfd-template-order">${yfdEscapeAttr(row.order)}</span>
            <span>${row.level}</span>
            <span class="yfd-template-title">${yfdEscapeAttr(row.title)}</span>
            <span>${yfdEscapeAttr(row.type)}</span>
            <span>${yfdEscapeAttr(row.parent || '-')}</span>
            <span>${yfdEscapeAttr(row.target || row.key || row.ref || '-')}</span>
            <span class="yfd-template-actions">
              ${row.canAdd ? `<button class="yfd-template-add-child" data-structure-template-add="${yfdEscapeAttr(row.containerId)}" type="button">+ Add</button>` : ''}
              ${row.canDelete ? `<button class="yfd-template-delete-child" data-delete-ready-item="${yfdEscapeAttr(row.ref)}" data-delete-ready-parent="${yfdEscapeAttr(row.parentId)}" type="button">Delete</button>` : ''}
            </span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderStructureTemplateAddModal(parentId){
  const parent = getReadyTemplateContainerById(parentId);
  const title = parent ? parent.title : 'Ready-made container';

  return `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-structure-template-add-modal">
        <div class="yfd-action-head">
          <div>
            <span>Structure Template</span>
            <strong>Add to ${yfdEscapeAttr(title)}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">Г—</button>
        </div>

        <div class="yfd-choice-grid yfd-add-item-segments">
          <button class="yfd-choice is-selected yfd-structure-template-kind" data-structure-template-kind="equipment" type="button">
            <strong>Equipment</strong>
          </button>
          <button class="yfd-choice yfd-structure-template-kind" data-structure-template-kind="area" type="button">
            <strong>Area / Zone</strong>
          </button>
        </div>

        <label class="yfd-field">
          <span>Names, separated by comma</span>
          <textarea id="yfdStructureTemplateNames" data-structure-template-names rows="5" placeholder="Pump, Bar, Diving Station"></textarea>
        </label>

        <div class="yfd-builder-modal-note">
          This writes into the ready-made working tree. Area / Zone creates a linked child container; Equipment creates a service-ready equipment object.
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-primary-action" data-structure-template-save="${yfdEscapeAttr(parentId)}" type="button">Add to template</button>
        </div>
      </section>
    </div>
  `;
}

function openStructureTemplateAddModal(parentId){
  const parent = getReadyTemplateContainerById(parentId);
  if(!parent) return;

  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', renderStructureTemplateAddModal(parentId));
  setTimeout(() => {
    const input = document.getElementById('yfdStructureTemplateNames');
    if(input) input.focus();
  }, 50);
}

function parseStructureTemplateNames(text){
  return String(text || '')
    .split(',')
    .map(name => name.trim())
    .filter(Boolean);
}

function recordReadyTemplateRootAdd(parentId, item){
  if(!isReadyTemplateStaticRoot(parentId) || !item) return;
  if(!Array.isArray(state.readyTemplateAdds)) state.readyTemplateAdds = [];

  const templateId = item.template_id || item.id || '';
  if(templateId && state.readyTemplateAdds.some(record => record && record.item && (record.item.template_id === templateId || record.item.id === templateId))){
    return;
  }

  state.readyTemplateAdds.push({
    parentId,
    item:cloneAdminBaseValue(item),
    equipmentTemplates:item.key && equipmentStore[item.key]
      ? cloneAdminBaseValue(equipmentStore[item.key])
      : null
  });
}

function ensureReadyTemplateEquipmentStore(item, templates){
  if(!item || !item.key) return;

  const fallbackTemplates = [{
    id:item.key + '_instance_1',
    name:(item.title || 'Equipment') + ' #1'
  }];
  const sourceTemplates = Array.isArray(templates) && templates.length
    ? templates
    : (Array.isArray(equipmentStore[item.key]) && equipmentStore[item.key].length
      ? equipmentStore[item.key]
      : fallbackTemplates);

  const clonedTemplates = cloneAdminBaseValue(sourceTemplates);
  equipmentStore[item.key] = cloneAdminBaseValue(clonedTemplates);
  defaultEquipmentStore[item.key] = cloneAdminBaseValue(clonedTemplates);
}

function syncReadyTemplateEquipmentDefaults(){
  const visitedContainers = new Set();

  function syncContainer(container){
    if(!container || !container.id || visitedContainers.has(container.id)) return;
    visitedContainers.add(container.id);

    (container.items || []).forEach(item => {
      if(!item) return;
      if(item.key && isReadyUserCreated(item)){
        ensureReadyTemplateEquipmentStore(item);
      }

      const targetNode = item.target ? getReadyTemplateContainerById(item.target) : null;
      if(targetNode) syncContainer(targetNode);
    });
  }

  if(Array.isArray(state.readyTemplateAdds)){
    state.readyTemplateAdds.forEach(record => {
      if(!record || !record.item || !record.item.key) return;
      ensureReadyTemplateEquipmentStore(record.item, record.equipmentTemplates);
    });
  }

  getReadyTemplateRootLayers().forEach(syncContainer);
  getActiveReadyTreeNodes().forEach(syncContainer);
}

function createStructureTemplateItem(parentId, name, kind, index){
  const stamp = Date.now() + index;
  const templateId = 'template_item_' + slugifyCustomKey(parentId + '_' + name + '_' + stamp);
  const meta = makeReadyUserMeta('structure_template', {template_id:templateId});

  if(kind === 'area'){
    const targetId = parentId + '_' + slugifyCustomKey(name) + '_template_' + stamp;
    treeNodes.push({
      id:targetId,
      title:name,
      note:'Added from Structure Templates',
      ...makeReadyUserMeta('structure_template_container', {template_id:templateId + '_container'}),
      items:[]
    });

    return {
      id:templateId,
      title:name,
      type:'Area',
      note:'Added from Structure Templates',
      target:targetId,
      ...meta
    };
  }

  const key = 'template_equipment_' + slugifyCustomKey(parentId + '_' + name + '_' + stamp);
  equipmentStore[key] = [{
    id:key + '_instance_1',
    name:name + ' #1'
  }];
  defaultEquipmentStore[key] = cloneAdminBaseValue(equipmentStore[key]);

  return {
    id:templateId,
    title:name,
    key,
    type:'Equipment',
    note:'Added from Structure Templates',
    ...meta
  };
}

function saveStructureTemplateItems(parentId){
  const parent = getReadyTemplateContainerById(parentId);
  const input = document.getElementById('yfdStructureTemplateNames');
  const selected = document.querySelector('.yfd-structure-template-kind.is-selected');
  const kind = selected && selected.dataset.structureTemplateKind === 'area' ? 'area' : 'equipment';
  const names = parseStructureTemplateNames(input ? input.value : '');

  if(!parent || !input) return;
  if(!names.length){
    input.focus();
    return;
  }

  if(!Array.isArray(parent.items)) parent.items = [];

  names.forEach((name, index) => {
    const item = createStructureTemplateItem(parentId, name, kind, index);
    parent.items.push(item);
    recordReadyTemplateRootAdd(parentId, item);
  });

  closeActionModal();
  saveState();
  renderAdminBaseToolScreen(false);
}

function handleStructureTemplateEvent(e){
  const addBtn = e.target && e.target.closest ? e.target.closest('[data-structure-template-add]') : null;
  const kindBtn = e.target && e.target.closest ? e.target.closest('[data-structure-template-kind]') : null;
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-structure-template-save]') : null;

  if(!addBtn && !kindBtn && !saveBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(addBtn){
    openStructureTemplateAddModal(addBtn.dataset.structureTemplateAdd || '');
    return;
  }

  if(kindBtn){
    const group = kindBtn.closest('.yfd-add-item-segments');
    if(group){
      group.querySelectorAll('[data-structure-template-kind]').forEach(btn => {
        btn.classList.toggle('is-selected', btn === kindBtn);
      });
    }
    return;
  }

  saveStructureTemplateItems(saveBtn.dataset.structureTemplateSave || '');
}

document.addEventListener('click', handleStructureTemplateEvent, true);
document.addEventListener('touchend', handleStructureTemplateEvent, true);


function renderAdminBaseSectionTabs(active){
  const current = active || adminBaseActiveSection || 'main';
  const tabs = [
    {id:'main', title:'Main Equipment Base'},
    {id:'templates', title:'Structure Templates'},
    {id:'sailing', title:'Sailing Specific'}
  ];

  return `
    <div class="yfd-admin-base-tabs" role="tablist">
      ${tabs.map(tab => `
        <button class="${current === tab.id ? 'is-active' : ''}" data-admin-base-section="${tab.id}" type="button">
          ${tab.title}
        </button>
      `).join('')}
    </div>
  `;
}

function renderAdminBaseTemplateCard(template){
  const groups = Array.isArray(template.groups) ? template.groups : [];
  const itemCount = groups.reduce((sum, group) => sum + ((group.items || []).length), 0);
  const meta = [
    template.category || '',
    template.hull_type || '',
    template.rig_type || '',
    template.year || ''
  ].filter(Boolean).join(' / ');

  return `
    <section class="yfd-admin-base-template-card">
      <div>
        <span>Structure template</span>
        <strong>${template.title}</strong>
        <p>${template.note || 'Template record for ready-made structure generation.'}</p>
        <div class="yfd-admin-base-template-meta">
          <b>${meta || 'base template'}</b>
          <b>${groups.length} groups</b>
          <b>${itemCount} items</b>
        </div>
      </div>
    </section>
  `;
}

function renderAdminBaseTemplateCatalog(templates){
  const list = Array.isArray(templates) ? templates : [];

  return `
    <div class="yfd-admin-base-template-list">
      ${list.map(renderAdminBaseTemplateCard).join('')}
    </div>
  `;
}

function renderAdminBaseSectionContent(section, mainGroups, templates){
  const active = section || 'main';

  if(active === 'templates'){
    return `
      <section class="yfd-admin-base-branch yfd-admin-template-base">
        <div class="yfd-admin-base-branch-head">
          <span>Templates</span>
          <strong>Structure Templates</strong>
        </div>

        ${renderAdminBaseTemplateCatalog(templates)}
        ${renderStructureTemplateTable()}
      </section>
    `;
  }

  if(active === 'sailing'){
    return `
      <section class="yfd-admin-base-branch yfd-admin-sailing-specific">
        <div class="yfd-admin-base-branch-head">
          <span>Sailing only</span>
          <strong>Sailing Yacht Specific</strong>
        </div>

        ${renderAdminBaseRigBlock('bermudan_sloop', 'Bermudan sloop')}
        ${renderAdminBaseRigBlock('ketch', 'Ketch')}
        ${renderAdminBaseRigBlock('schooner', 'Schooner')}
      </section>
    `;
  }

  return `
    <section class="yfd-admin-base-branch yfd-admin-main-base">
      <div class="yfd-admin-base-branch-head">
        <span>Main library</span>
        <strong>Main Equipment Base</strong>
      </div>

      <div class="yfd-admin-base-subtitle">General yacht equipment base</div>
      ${(mainGroups || []).map(group => renderAdminBaseGroup(group, {canAdd:true})).join('')}
    </section>
  `;
}

function renderAdminBaseToolScreen(push=true){
  yfdSaveActiveScreen({screen:'admin_base_tool'});

  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(push) navStack.push({screen:'admin_base_tool'});

  if(module) module.hidden = true;
  if(hero) hero.hidden = true;
  if(!overview) return;

  const mainGroups = getAdminBaseMainEquipmentGroups();
  const templates = getAdminBaseStructureTemplates();

  overview.hidden = false;
  overview.classList.remove('yfd-ready-overview');
  overview.classList.add('yfd-admin-base-overview');

  overview.innerHTML = `
    <section class="yfd-admin-base-head">
      <button class="yfd-action-back" data-back type="button">← Back</button>
      <div>
        <span class="yfd-kicker">Admin base tool</span>
        <h2>Equipment base</h2>
        <p>Base = what can exist. Template = where it sits. Yacht = working copy of a real vessel.</p>
      </div>
    </section>

    ${renderAdminBaseSectionTabs(adminBaseActiveSection)}

    <section class="yfd-admin-base-layout yfd-admin-base-layout-sections">
      ${renderAdminBaseSectionContent(adminBaseActiveSection, mainGroups, templates)}
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function renderAdminBaseConfirmModal(){
  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Admin base tool</span>
            <strong>Edit global equipment base?</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <div class="yfd-builder-modal-note">
          This area is intended for editing the shared equipment base. Current step is readonly, but future changes here will affect what can be added to yachts.
        </div>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-confirm-admin-base-tool type="button">Open admin base tool</button>
        </div>
      </section>
    </div>
  `;
}

function openAdminBaseConfirmModal(){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderAdminBaseConfirmModal());
}


function renderWelcomeScreen(){
  const overview = document.getElementById('overview');
  if(overview) overview.classList.remove('yfd-admin-base-overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  yfdClearActiveScreen();
  navStack = [];
  yfdClearForwardStack();

  if(module) module.hidden = true;
  if(hero) hero.hidden = false;
  if(!overview) return;
  overview.hidden = false;

  overview.innerHTML = `
    <section class="yfd-welcome-card">
      <div>
        <span class="yfd-kicker">Fleet</span>
        <h2>Your yacht starts here</h2>
        <p>Create your first yacht and choose whether to start from a ready-made motor yacht structure or from an empty builder.</p>
      </div>
      <div class="yfd-fleet-start-actions">
        <button class="yfd-primary-action yfd-create-yacht-start" data-open-yacht-setup type="button">Create yacht</button>
        <button class="yfd-secondary-action yfd-admin-base-entry" data-open-admin-base-tool type="button">Admin Base Tool</button>
      </div>
    </section>
  `;
}


function renderYachtNameEditModal(yachtId){
  const yacht = state.yachts.find(y => y.id === yachtId);
  if(!yacht) return '';

  const name = String(yacht.name || '').replace(/"/g, '&quot;');

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Yacht</span>
            <strong>Edit name</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Yacht name</span>
          <input id="yfdYachtEditName" type="text" value="${name}" placeholder="Enter the actual yacht name">
        </label>

        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-save-yacht-name="${yachtId}" type="button">Save name</button>
        </div>
      </section>
    </div>
  `;
}

function openYachtNameEditModal(yachtId){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderYachtNameEditModal(yachtId));
  setTimeout(() => {
    const input = document.getElementById('yfdYachtEditName');
    if(input) input.focus();
  }, 50);
}

function saveYachtNameEdit(yachtId){
  const yacht = state.yachts.find(y => y.id === yachtId);
  if(!yacht) return;

  const input = document.getElementById('yfdYachtEditName');
  const name = input ? input.value.trim() : '';

  if(name){
    yacht.name = name;
    yacht.updatedAt = new Date().toISOString();
    saveState();
  }

  closeBuilderModal();
  renderFleetScreen();
}


function renderFleetScreen(){
  const overview = document.getElementById('overview');
  if(overview) overview.classList.remove('yfd-admin-base-overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  yfdClearActiveScreen();
  navStack = [];
  yfdClearForwardStack();

  if(module) module.hidden = true;
  if(hero) hero.hidden = false;
  if(!overview) return;
  overview.hidden = false;

  if(!state.yachts.length){
    renderWelcomeScreen();
    return;
  }

  const cards = state.yachts.map(yacht => `
    <article class="yfd-yacht-card ${state.activeYachtId === yacht.id ? 'is-active' : ''}">
      <div>
        <span class="yfd-kicker">${yacht.status || 'draft'}</span>
        <h2 class="yfd-yacht-name-line"><span>${yacht.name}</span><button class="yfd-yacht-inline-edit-name" data-edit-yacht-name="${yacht.id}" type="button">Edit name</button></h2>
        <p>${yacht.vesselType === 'sailing' ? 'Sailing yacht' : 'Motor yacht'} · ${yacht.hullCount === 1 ? 'Monohull' : yacht.hullCount === 2 ? 'Catamaran' : 'Trimaran'}</p>
      </div>
      <div class="yfd-yacht-card-actions">
        <label class="yfd-lock-control" title="Lock structure">
          <span class="yfd-lock-label">${yacht.locked ? 'Locked' : 'Open'}</span>
          <span class="yfd-lock-switch">
            <input type="checkbox" data-yacht-lock="${yacht.id}" ${yacht.locked ? 'checked' : ''}>
            <span></span>
          </span>
        </label>
        <button data-open-yacht="${yacht.id}" type="button">Open</button>
          <button class="yfd-yacht-delete-btn" data-delete-yacht="${yacht.id}" type="button">Delete</button>
      </div>
    </article>
  `).join('');

  overview.innerHTML = `
    <section class="yfd-fleet-head">
      <div>
        <span class="yfd-kicker">Fleet</span>
        <h2>My yachts</h2>
        <p>Select a yacht to continue building its structure.</p>
      </div>
      <div class="yfd-fleet-start-actions">
        <button class="yfd-primary-action" data-open-yacht-setup type="button">Create yacht</button>
        <button class="yfd-secondary-action yfd-admin-base-entry" data-open-admin-base-tool type="button">Admin Base Tool</button>
      </div>
    </section>

    <section class="yfd-yacht-grid">
      ${cards}
    </section>
  `;
}

function renderYachtSetupModal(){
  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal yfd-yacht-setup-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Fleet</span>
            <strong>Create yacht</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Yacht name</span>
          <input id="yfdYachtName" type="text" placeholder="Enter the actual yacht name">
        </label>

        <div class="yfd-setup-choice-group">
          <span>Type</span>
          <div>
            <button class="is-active" data-yacht-type="motor" type="button">Motor</button>
            <button data-yacht-type="sailing" type="button">Sailing</button>
          </div>
        </div>

        <div class="yfd-setup-choice-group">
          <span>Hull</span>
          <div>
            <button class="is-active" data-yacht-hulls="1" type="button">1</button>
            <button data-yacht-hulls="2" type="button">2</button>
            <button data-yacht-hulls="3" type="button">3</button>
          </div>
        </div>

        <div class="yfd-setup-rig" hidden>
          <span>Rig</span>
          <div>
            <button class="is-active" data-yacht-rig="bermudan_sloop" type="button">Bermuda Sloop</button>
            <button data-yacht-rig="ketch" type="button">Ketch</button>
            <button data-yacht-rig="schooner" type="button">Schooner</button>
          </div>
        </div>

        <details class="yfd-yacht-advanced">
          <summary>Show full yacht details</summary>
          <div class="yfd-yacht-advanced-grid">
            <input id="yfdYachtLength" placeholder="Length">
            <input id="yfdYachtBeam" placeholder="Beam">
            <input id="yfdYachtDraft" placeholder="Draft">
            <input id="yfdYachtYear" placeholder="Year">
            <input id="yfdYachtFlag" placeholder="Flag">
            <input id="yfdYachtMMSI" placeholder="MMSI">
            <input id="yfdYachtCallsign" placeholder="Call sign">
            <input id="yfdYachtRegistration" placeholder="Registration number">
            <input id="yfdYachtExpiry" placeholder="Registration expiry">
          </div>
        </details>

        <div class="yfd-start-methods">
          <article class="yfd-template-card is-primary" data-ready-motor-method>
            <span>Available now</span>
            <h3>Ready-made motor yacht structure</h3>
            <p>Use the current motor yacht baseline, then customize decks, areas and equipment.</p>
            <button data-create-yacht-method="ready_motor" type="button">Use ready-made structure</button>
          </article>

          <article class="yfd-template-card is-primary" data-ready-sailing-so439-method hidden>
            <span>Sailing prototype</span>
            <h3>Jeanneau SO439 - 2023</h3>
            <p>Ready-made sailing monohull with Bermudan sloop rig sections and the SO439 hull/deck systems.</p>
            <button data-create-yacht-method="${SO439_READY_METHOD}" type="button">Use Jeanneau template</button>
          </article>

          <article class="yfd-template-card">
            <span>Custom</span>
            <h3>Build from scratch</h3>
            <p>Create your yacht from an empty builder with the selected hull count and vessel type.</p>
            <button data-create-yacht-method="scratch" type="button">Build from scratch</button>
          </article>

          <article class="yfd-template-card is-disabled" data-coming-template-note hidden>
            <span>Coming soon</span>
            <h3>Template not ready yet</h3>
            <p>Ready-made templates for this yacht type will be added later. You can still build from scratch.</p>
          </article>
        </div>
      </section>
    </div>
  `;
}

function openYachtSetupModal(){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderYachtSetupModal());
  setTimeout(() => {
    const input = document.getElementById('yfdYachtName');
    if(input) input.focus();
    updateYachtSetupStartMethods();
  }, 50);
}


function updateYachtSetupStartMethods(){
  const vesselType = getYachtSetupValue('[data-yacht-type]', 'data-yacht-type', 'motor');
  const hullCount = Number(getYachtSetupValue('[data-yacht-hulls]', 'data-yacht-hulls', '1')) || 1;
  const rig = getYachtSetupValue('[data-yacht-rig]', 'data-yacht-rig', 'bermudan_sloop');
  const readyMotorCard = document.querySelector('[data-ready-motor-method]');
  const readyMotorBtn = document.querySelector('[data-create-yacht-method="ready_motor"]');
  const readySailingCard = document.querySelector('[data-ready-sailing-so439-method]');
  const readySailingBtn = document.querySelector(`[data-create-yacht-method="${SO439_READY_METHOD}"]`);
  const note = document.querySelector('[data-coming-template-note]');
  const motorAvailable = vesselType === 'motor' && hullCount === 1;
  const sailingSo439Available = vesselType === 'sailing' && hullCount === 1 && rig === 'bermudan_sloop';

  if(readyMotorCard){
    readyMotorCard.hidden = !motorAvailable;
    readyMotorCard.classList.toggle('is-disabled', !motorAvailable);
  }
  if(readyMotorBtn) readyMotorBtn.disabled = !motorAvailable;

  if(readySailingCard){
    readySailingCard.hidden = !sailingSo439Available;
    readySailingCard.classList.toggle('is-disabled', !sailingSo439Available);
  }
  if(readySailingBtn) readySailingBtn.disabled = !sailingSo439Available;

  if(note) note.hidden = motorAvailable || sailingSo439Available;
}

function getYachtSetupValue(selector, attr, fallback){
  const active = document.querySelector(selector + '.is-active');
  return active ? active.getAttribute(attr) : fallback;
}

function submitYachtSetup(method='scratch'){
  const name = document.getElementById('yfdYachtName')?.value || '';
  const isSo439 = method === SO439_READY_METHOD;
  const vesselType = isSo439 ? 'sailing' : getYachtSetupValue('[data-yacht-type]', 'data-yacht-type', 'motor');
  const hullCount = isSo439 ? 1 : (Number(getYachtSetupValue('[data-yacht-hulls]', 'data-yacht-hulls', '1')) || 1);
  const rig = vesselType === 'sailing' ? (isSo439 ? 'bermudan_sloop' : getYachtSetupValue('[data-yacht-rig]', 'data-yacht-rig', 'bermudan_sloop')) : null;

  createYachtFromQuickSetup({
    name:name || (isSo439 ? SO439_TEMPLATE_TITLE : ''),
    vesselType,
    hullCount,
    rig,
    startMethod:method,
    meta:{
      length:document.getElementById('yfdYachtLength')?.value || '',
      beam:document.getElementById('yfdYachtBeam')?.value || '',
      draft:document.getElementById('yfdYachtDraft')?.value || '',
      year:document.getElementById('yfdYachtYear')?.value || '',
      flag:document.getElementById('yfdYachtFlag')?.value || '',
      mmsi:document.getElementById('yfdYachtMMSI')?.value || '',
      callSign:document.getElementById('yfdYachtCallsign')?.value || '',
      registration:document.getElementById('yfdYachtRegistration')?.value || '',
      registrationExpiry:document.getElementById('yfdYachtExpiry')?.value || '',
      startMethod:method,
      template:method === 'ready_motor' ? 'ready_motor_yacht_structure' : (isSo439 ? SO439_TEMPLATE_KEY : 'scratch'),
      templateTitle:isSo439 ? SO439_TEMPLATE_TITLE : '',
      manufacturer:isSo439 ? 'Jeanneau' : '',
      model:isSo439 ? 'Sun Odyssey 439' : '',
      templateYear:isSo439 ? '2023' : '',
      rigSubtype:isSo439 ? 'fractional_sloop' : ''
    }
  });

  closeBuilderModal();
}



function isReadyLocked(id){
  const yacht = getActiveYacht && getActiveYacht();
  if(yacht && yacht.locked) return true;
  return !!state.readyLocks[id];
}

function isReadyInheritedLocked(id){
  const yacht = getActiveYacht && getActiveYacht();
  return !!(yacht && yacht.locked);
}

function renderReadyLockControl(id){
  const ownLocked = !!state.readyLocks[id];
  const inherited = isReadyInheritedLocked(id);
  const effectiveLocked = ownLocked || inherited;

  return `
    <button class="yfd-lock-control yfd-ready-lock-control ${effectiveLocked ? 'is-locked' : 'is-open'} ${inherited ? 'is-inherited-lock' : ''}" data-ready-lock="${id}" type="button" title="${inherited ? 'Yacht is locked' : 'Lock structure'}">
      <span class="yfd-lock-label">${inherited ? 'Yacht lock' : (effectiveLocked ? 'Locked' : 'Open')}</span>
      <span class="yfd-lock-switch-visual"><i></i></span>
    </button>
  `;
}

function renderUnlockReadyModal(id){
  const layer = getAllLayers().find(l => l.id === id);
  const title = layer ? layer.title : 'this structure';

  return `
    <div class="yfd-builder-modal-backdrop" data-builder-modal-backdrop>
      <section class="yfd-builder-modal" role="dialog" aria-modal="true">
        <div class="yfd-builder-modal-head">
          <div>
            <span>Unlock structure</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-builder-modal type="button">×</button>
        </div>
        <div class="yfd-builder-modal-note">
          You are about to unlock this structure. Changes may affect the current setup. Continue?
        </div>
        <div class="yfd-builder-modal-actions">
          <button class="yfd-secondary-action" data-close-builder-modal type="button">Cancel</button>
          <button class="yfd-primary-action" data-confirm-unlock-ready="${id}" type="button">Unlock and edit</button>
        </div>
      </section>
    </div>
  `;
}

function setReadyLocked(id, locked){
  if(!id) return;
  state.readyLocks[id] = !!locked;
  if(!state.readyLocks[id]) delete state.readyLocks[id];
  saveState();
  renderReadyMadeYachtScreen(false);
}

function openUnlockReadyModal(id){
  closeBuilderModal();
  document.body.insertAdjacentHTML('beforeend', renderUnlockReadyModal(id));
}


function renderSailingStructureDivider(){
  if(!isSailingYacht()) return '';

  return `
    <section class="yfd-sailing-divider">
      <div class="yfd-sailing-divider-line"></div>
      <span>Hull structure</span>
      <div class="yfd-sailing-divider-line"></div>
    </section>
  `;
}


function renderReadyTreeCard(opts){
  const o = opts || {};
  const level = o.level || 'area';
  const attrs = o.attrs || '';
  const extraClass = o.extraClass || '';
  const title = o.title || 'Untitled';
  const subtitle = o.subtitle || 'Area / Zone';
  const right = o.right || '';
  const left = o.left || '';

  return `
    <article class="yfd-ready-tree-card yfd-ready-level-${level} ${extraClass}" ${attrs} role="button" tabindex="0">
      <strong class="yfd-ready-tree-title">${title}</strong>
      <span class="yfd-ready-tree-badge">${subtitle}</span>
      <div class="yfd-ready-tree-actions">
        <div class="yfd-ready-tree-actions-left">${left}</div>
        <div class="yfd-ready-tree-actions-right">${right}</div>
      </div>
    </article>
  `;
}

function renderReadyMadeYachtScreen(push=true){
  yfdSaveActiveScreen({screen:'ready_yacht'});
  const overview = document.getElementById('overview');
  if(overview) overview.classList.remove('yfd-admin-base-overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(push) navStack.push({screen:'ready_yacht'});

  if(module) module.hidden = true;
  if(hero) hero.hidden = false;
  if(!overview) return;

  const yacht = getActiveYacht();
  const yachtName = yacht ? yacht.name : 'Motor Yacht';
  const yachtType = yacht
    ? `${yacht.vesselType === 'sailing' ? 'S/Y' : 'M/Y'} ${yachtName}`
    : 'M/Y Motor Yacht';

  overview.hidden = false;
  overview.classList.add('yfd-ready-overview');
  const visibleLayers = getVisibleLayers();

  const sailingLayers = visibleLayers.filter(layer => layer.is_sailing_root);
  const structureLayers = visibleLayers.filter(layer => !layer.is_sailing_root);

  overview.innerHTML = `
    <section class="yfd-ready-head yfd-ready-head-compact">
      <button class="yfd-action-back" data-back type="button">← Back</button>
      <div>
        <span class="yfd-kicker">Ready-made structure</span>
        <h2>${yachtType}</h2>
      </div>
    </section>
  ` +
  renderLayerControls() +
  sailingLayers.map(layer => {
    const display = getReadyDisplay(layer.id, layer.title, 'Deck / Area');
    return renderReadyTreeCard({
      level:'deck',
      attrs:`data-open="${layer.id}"`,
      extraClass:'yfd-sailing-root-card',
      title:display.title,
      subtitle:display.subtitle || 'Deck / Area',
      left:renderStickerButton(layer.id),
      right:renderReadyLockControl(layer.id)
    });
  }).join('') +
  renderSailingStructureDivider() +
  structureLayers.map(layer => {
    const display = getReadyDisplay(layer.id, layer.title, 'Deck / Area');
    return renderReadyTreeCard({
      level:'deck',
      attrs:`data-open="${layer.id}"`,
      extraClass:'',
      title:display.title,
      subtitle:display.subtitle || 'Deck / Area',
      left:renderStickerButton(layer.id),
      right:renderReadyLockControl(layer.id) + renderReadyEditButton(layer.id)
    });
  }).join('');
}

function openActiveYacht(){
  const yacht = getActiveYacht();
  if(!yacht) {
    renderFleetScreen();
    return;
  }

  state.builderHullCount = yacht.hullCount || state.builderHullCount || 1;
  saveState();

  if(isReadyYacht(yacht)){
    renderReadyMadeYachtScreen(true);
    return;
  }

  renderCustomBuilderScreenV2(true);
}

function renderOverview(){
  yfdClearActiveScreen();
  renderFleetScreen();
  return;

  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  navStack = [];
  yfdClearForwardStack();

  if(!overview) return;
  if(module) module.hidden = true;
  if(hero) hero.hidden = false;
  overview.hidden = false;

  overview.innerHTML = renderLayerControls() + getVisibleLayers().map(layer => `
    <article class="yfd-layer-card" data-open="${layer.id}" role="button" tabindex="0">
      <div>
        <div class="yfd-layer-top">
          <h2 class="yfd-layer-title">${layer.title}</h2>
          <div class="yfd-count">${(layer.items || []).length} modules</div>
        </div>
        <p class="yfd-layer-note">${layer.note}</p>
      </div>
    </article>
  `).join('');
}

function addCustomModule(deckId){
  const name = prompt("Module name:");
  if(!name || !name.trim()) return;

  const deck = state.custom.find(d => d.id === deckId);
  if(!deck) return;

  const moduleId = deckId + "_" + Date.now();

  const node = {
    id: moduleId,
    title: name.trim(),
    note: 'Custom module',
    ...makeReadyUserMeta('ready_custom_container'),
    items: []
  };

  // добавляем node в treeNodes
  treeNodes.push(node);

  // добавляем ссылку в deck.items
  deck.items.push({
    title: name.trim(),
    type: 'Area',
    target: moduleId,
    ...makeReadyUserMeta('ready_custom_container_link')
  });

  saveState();
  renderModule(deckId, false);
}

function findNodeById(id){
  return getActiveReadyTreeNodes().find(n => n.id === id);
}

function slugifyCustomKey(text){
  return String(text || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || ('item-' + Date.now());
}


function ensureReadyContainerNode(layerId, item){
  const layer = getLayer(layerId);
  if(!layer || !item) return null;

  const title = item.title || 'Untitled area';
  const existingTarget = item.target || '';
  if(existingTarget && findNodeById(existingTarget)) return existingTarget;

  const targetId = existingTarget || (layerId + "_" + slugifyCustomKey(title) + "_ready_" + Date.now());

  if(!findNodeById(targetId)){
    treeNodes.push({
      id: targetId,
      title: title,
      note: item.note || 'Custom structure container',
      ...makeReadyUserMeta('ready_custom_container'),
      items: []
    });
  }

  item.target = targetId;
  if(!item.type) item.type = 'Area';
  if(!item.note) item.note = 'Custom structure container';

  saveState();
  return targetId;
}

function addCustomItem(moduleId, name, itemType){
  const node = findNodeById(moduleId) || getLayer(moduleId);
  if(!node) return;

  if(!Array.isArray(node.items)) node.items = [];

  const finalName = (name || '').trim();
  if(!finalName) return;

  const isEquipment = String(itemType || '').trim().toLowerCase() === 'equipment';

  if(isEquipment){
    const key = slugifyCustomKey(moduleId + '-' + finalName + '-' + Date.now());
    if(!equipmentStore[key]){
      equipmentStore[key] = [];
    }

    node.items.push({
      title: finalName,
      key,
      type: 'Equipment',
      note: 'Custom equipment',
      ...makeReadyUserMeta('ready_custom_equipment')
    });
  } else {
    const targetId = moduleId + "_" + slugifyCustomKey(finalName) + "_" + Date.now();

    treeNodes.push({
      id: targetId,
      title: finalName,
      note: 'Custom area',
      ...makeReadyUserMeta('ready_custom_area_container'),
      items: []
    });

    node.items.push({
      title: finalName,
      type: 'Area',
      note: 'Custom area',
      target: targetId,
      ...makeReadyUserMeta('ready_custom_item')
    });
  }

  saveState();
  renderModule(moduleId, false);
}



function getAdminBaseLibraryGroupsForScope(scope, rootId){
  if(scope === 'sailing_rig'){
    const rigId = getActiveSailingRigId();
    const groups = getAdminBaseSailingRigGroups(rigId).slice();

    if(rootId){
      const exact = groups.filter(group => group && group.id === rootId);
      return exact.length ? exact : [];
    }

    return groups;
  }

  return getAdminBaseReadyLibraryGroups();
}

function mapAdminBaseGroupsToReadyLibrary(groups){
  return (groups || [])
    .map(group => ({
      id:group.id,
      title:group.title,
      source:group.rig_type ? 'admin_base_sailing' : 'admin_base_main',
      items:(group.items || []).map(item => ({
        id:'adminbase:' + group.id + ':' + item.id,
        raw_id:item.id,
        group_id:group.id,
        title:item.title,
        category:item.category || group.title,
        source:group.rig_type ? 'admin_base_sailing' : 'admin_base_main'
      }))
    }))
    .filter(group => group.items.length);
}

function getReadyLibraryGroups(opts){
  const o = opts || {};
  const scope = o.scope === 'sailing_rig' ? 'sailing_rig' : 'main';
  const mainGroups = mapAdminBaseGroupsToReadyLibrary(getAdminBaseLibraryGroupsForScope(scope, o.rootId || ''));

  if(mainGroups.length) return mainGroups;

  if(scope === 'sailing_rig') return [];

  return equipmentLibrary.categories.map(cat => ({
    id:cat.id,
    title:cat.title,
    source:'legacy_library',
    items:getLibraryItemsByCategory(cat.id).map(item => ({
      id:item.id,
      raw_id:item.id,
      group_id:cat.id,
      title:item.title,
      category:cat.title,
      source:'legacy_library'
    }))
  })).filter(group => group.items.length);
}

function getBuilderLibraryGroupsForTarget(targetType, targetId){
  if(targetType === 'sailing_root'){
    return getReadyLibraryGroups({scope:'sailing_rig', rootId:targetId});
  }

  return getReadyLibraryGroups({scope:'main'});
}

function findReadyLibraryBridgeItem(bridgeId){
  const id = String(bridgeId || '');

  if(id.indexOf('adminbase:') === 0){
    const parts = id.split(':');
    const groupId = parts[1] || '';
    const itemId = parts[2] || '';
    const group = findAdminBaseMainGroup(groupId);
    const item = group && Array.isArray(group.items)
      ? group.items.find(x => x && x.id === itemId)
      : null;

    if(!group || !item) return null;

    return {
      id:id,
      raw_id:item.id,
      group_id:group.id,
      title:item.title,
      category:item.category || group.title,
      key:slugifyCustomKey(group.id + '-' + item.title),
      source:group.rig_type ? 'admin_base_sailing' : 'admin_base_main'
    };
  }

  const legacy = findLibraryItem(id);
  if(!legacy) return null;

  return {
    id:legacy.id,
    raw_id:legacy.id,
    group_id:legacy.category,
    title:legacy.title,
    category:(findLibraryCategory(legacy.category) || {}).title || legacy.category || 'Equipment',
    key:legacy.key || legacy.id,
    source:'legacy_library'
  };
}

function createReadyEquipmentItemFromLibrary(libraryItemId){
  const bridgeItem = findReadyLibraryBridgeItem(libraryItemId);
  if(!bridgeItem) return null;

  const baseKey = bridgeItem.key || bridgeItem.raw_id || bridgeItem.title;
  const key = slugifyCustomKey('ready-' + baseKey + '-' + Date.now());

  if(!equipmentStore[key]){
    if(bridgeItem.source === 'legacy_library'){
      const templates = getLibraryTemplates(bridgeItem.raw_id);
      equipmentStore[key] = templates.length
        ? templates.map((tpl, index) => ({
            id:key + '_instance_' + index,
            name:tpl.title || tpl.id || (bridgeItem.title + ' #' + (index + 1))
          }))
        : [{
            id:key + '_instance_1',
            name:bridgeItem.title + ' #1'
          }];
    } else {
      equipmentStore[key] = [{
        id:key + '_instance_1',
        name:bridgeItem.title + ' #1'
      }];
    }
  }

  return {
    title:bridgeItem.title,
    key:key,
    type:'Equipment',
    note:'Attached from equipment library',
    library_ref:bridgeItem.id,
    library_source:bridgeItem.source,
    library_group_id:bridgeItem.group_id,
    ...makeReadyUserMeta(bridgeItem.source && bridgeItem.source.indexOf('admin_base') === 0 ? bridgeItem.source : 'equipment_library')
  };
}

function attachReadyLibraryEquipment(moduleId, libraryItemId){
  const node = findNodeById(moduleId) || getLayer(moduleId);
  const item = createReadyEquipmentItemFromLibrary(libraryItemId);

  if(!node || !item) return false;
  if(!Array.isArray(node.items)) node.items = [];

  node.items.push(item);
  saveState();
  closeReadyLibraryModal();
  closeActionModal();
  renderModule(moduleId, false);
  return true;
}

function renderReadyEquipmentLibraryModal(moduleId){
  return `
    <div class="yfd-ready-library-backdrop" data-ready-library-backdrop>
      <section class="yfd-ready-library-modal" role="dialog" aria-modal="true">
        <div class="yfd-ready-library-head">
          <div>
            <span>Equipment library</span>
            <strong>Add equipment</strong>
          </div>
          <button class="yfd-modal-close" data-close-ready-library type="button">×</button>
        </div>

        <div class="yfd-ready-library-scroll">
          ${getReadyLibraryGroups().map(group => `
            <section class="yfd-ready-library-section">
              <h3>${group.title}</h3>
              <div class="yfd-ready-library-grid">
                ${(group.items || []).map(item => `
                  <button class="yfd-ready-library-item" data-ready-library-select="${item.id}" data-ready-library-module="${moduleId}" type="button">
                    <strong>${item.title}</strong>
                    <span>${item.category || group.title}</span>
                  </button>
                `).join('')}
              </div>
            </section>
          `).join('')}
        </div>

        <div class="yfd-ready-library-actions">
          <button class="yfd-secondary-action" data-close-ready-library type="button">Cancel</button>
          <button class="yfd-primary-action is-disabled" data-ready-library-add-selected data-ready-library-module="${moduleId}" type="button" disabled>Add selected</button>
        </div>
      </section>
    </div>
  `;
}

function openReadyLibraryModal(moduleId){
  if(!moduleId) return;
  closeReadyLibraryModal();
  document.body.insertAdjacentHTML('beforeend', renderReadyEquipmentLibraryModal(moduleId));
}

function closeReadyLibraryModal(){
  const modal = document.querySelector('.yfd-ready-library-backdrop');
  if(modal) modal.remove();
}

function selectReadyLibraryItem(btn){
  if(!btn) return;

  const modal = btn.closest('.yfd-ready-library-modal');
  if(!modal) return;

  modal.querySelectorAll('.yfd-ready-library-item.is-selected').forEach(x => x.classList.remove('is-selected'));
  btn.classList.add('is-selected');

  const addBtn = modal.querySelector('[data-ready-library-add-selected]');
  if(addBtn){
    addBtn.disabled = false;
    addBtn.classList.remove('is-disabled');
    addBtn.dataset.readyLibrarySelected = btn.dataset.readyLibrarySelect || '';
    addBtn.dataset.readyLibraryModule = btn.dataset.readyLibraryModule || modalState.addItemModuleId || '';
  }
}


/* === V40-D3C-1B Admin Base Tool tap handler fix 20260507 === */


function findAdminBaseMainGroup(groupId){
  if(!groupId) return null;

  return getAdminBaseEditableGroups().find(group => group && group.id === groupId) || null;
}

function getAdminBaseGroupScopeLabel(group){
  return group && group.rig_type ? 'Sailing Rig Base' : 'Main Equipment Base';
}

function openAdminBaseBulkAddModal(groupId){
  const group = findAdminBaseMainGroup(groupId);
  if(!group) return;
  const scopeLabel = getAdminBaseGroupScopeLabel(group);

  closeActionModal();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-admin-base-bulk-modal">
        <div class="yfd-action-head">
          <div>
            <span>${scopeLabel}</span>
            <strong>Add to ${group.title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Items, separated by comma</span>
          <textarea id="yfdAdminBaseBulkInput" rows="5" placeholder="Pump 1, Pump 2, Spare Antenna, Extra Light"></textarea>
        </label>

        <div class="yfd-builder-modal-actions yfd-admin-base-bulk-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-primary-action" data-admin-base-save-bulk="${group.id}" type="button">Save items</button>
        </div>
      </section>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('yfdAdminBaseBulkInput');
    if(input) input.focus();
  }, 50);
}

function parseAdminBaseBulkItems(text, category){
  return String(text || '')
    .split(',')
    .map(x => x.trim())
    .filter(Boolean)
    .map(name => ({
      id:slugifyCustomKey((category || 'equipment') + '_' + name + '_' + Date.now()),
      title:name,
      category:category || 'Equipment'
    }));
}

function saveAdminBaseBulkItems(groupId){
  const group = findAdminBaseMainGroup(groupId);
  const input = document.getElementById('yfdAdminBaseBulkInput');

  if(!group || !input) return;

  const items = parseAdminBaseBulkItems(input.value, group.title);
  if(!items.length){
    input.focus();
    return;
  }

  if(!Array.isArray(group.items)) group.items = [];
  group.items = group.items.concat(items);

  saveAdminBaseDraft();
  closeActionModal();
  renderAdminBaseToolScreen(false);
}


function findAdminBaseMainItem(groupId, itemId){
  const group = findAdminBaseMainGroup(groupId);
  if(!group || !Array.isArray(group.items)) return {group:null, item:null, index:-1};

  const index = group.items.findIndex(item => item && item.id === itemId);
  if(index < 0) return {group, item:null, index:-1};

  return {group, item:group.items[index], index};
}

function openAdminBaseEditItemModal(groupId, itemId){
  const found = findAdminBaseMainItem(groupId, itemId);
  if(!found.group || !found.item) return;

  const title = String(found.item.title || '').replace(/"/g, '&quot;');
  const scopeLabel = getAdminBaseGroupScopeLabel(found.group);

  closeActionModal();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-admin-base-edit-modal">
        <div class="yfd-action-head">
          <div>
            <span>${scopeLabel}</span>
            <strong>Edit item</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Item name</span>
          <input id="yfdAdminBaseEditInput" type="text" value="${title}" placeholder="Equipment name">
        </label>

        <div class="yfd-builder-modal-actions yfd-admin-base-edit-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-primary-action" data-admin-base-save-edit="${found.group.id}" data-admin-base-item="${found.item.id}" type="button">Save</button>
        </div>
      </section>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('yfdAdminBaseEditInput');
    if(input){
      input.focus();
      input.select();
    }
  }, 50);
}

function saveAdminBaseItemEdit(groupId, itemId){
  const found = findAdminBaseMainItem(groupId, itemId);
  const input = document.getElementById('yfdAdminBaseEditInput');

  if(!found.item || !input) return;

  const value = String(input.value || '').trim();
  if(!value){
    input.focus();
    return;
  }

  found.item.title = value;
  saveAdminBaseDraft();
  closeActionModal();
  renderAdminBaseToolScreen(false);
}


function renderAdminBaseDeleteItemModal(groupId, itemId){
  const found = findAdminBaseMainItem(groupId, itemId);
  if(!found.group || !found.item) return '';

  const title = found.item.title || 'this item';
  const scopeLabel = getAdminBaseGroupScopeLabel(found.group);

  return `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-admin-base-delete-modal">
        <div class="yfd-action-head">
          <div>
            <span>${scopeLabel}</span>
            <strong>Delete item</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only this item from the editable demo base draft.</p>
          <p><strong>${title}</strong></p>
        </div>

        <div class="yfd-builder-modal-actions yfd-admin-base-delete-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-danger-action" data-admin-base-confirm-delete="${groupId}" data-admin-base-item="${itemId}" type="button">Delete item</button>
        </div>
      </section>
    </div>
  `;
}

function openAdminBaseDeleteItemModal(groupId, itemId){
  const html = renderAdminBaseDeleteItemModal(groupId, itemId);
  if(!html) return;
  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', html);
}

function deleteAdminBaseMainItem(groupId, itemId){
  const found = findAdminBaseMainItem(groupId, itemId);
  if(!found.group || !found.item || found.index < 0) return;

  found.group.items.splice(found.index, 1);
  saveAdminBaseDraft();
  closeActionModal();
  renderAdminBaseToolScreen(false);
}

function handleAdminBaseItemDeleteEvent(e){
  const deleteBtn = e.target && e.target.closest ? e.target.closest('[data-admin-base-delete]') : null;
  const confirmBtn = e.target && e.target.closest ? e.target.closest('[data-admin-base-confirm-delete]') : null;

  if(!deleteBtn && !confirmBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(deleteBtn){
    openAdminBaseDeleteItemModal(
      deleteBtn.dataset.adminBaseDelete || '',
      deleteBtn.dataset.adminBaseItem || ''
    );
    return;
  }

  if(confirmBtn){
    deleteAdminBaseMainItem(
      confirmBtn.dataset.adminBaseConfirmDelete || '',
      confirmBtn.dataset.adminBaseItem || ''
    );
    return;
  }
}

document.addEventListener('click', handleAdminBaseItemDeleteEvent, true);
document.addEventListener('touchend', handleAdminBaseItemDeleteEvent, true);

function handleAdminBaseItemEditEvent(e){
  const editBtn = e.target && e.target.closest ? e.target.closest('[data-admin-base-edit]') : null;
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-admin-base-save-edit]') : null;

  if(!editBtn && !saveBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(editBtn){
    openAdminBaseEditItemModal(
      editBtn.dataset.adminBaseEdit || '',
      editBtn.dataset.adminBaseItem || ''
    );
    return;
  }

  if(saveBtn){
    saveAdminBaseItemEdit(
      saveBtn.dataset.adminBaseSaveEdit || '',
      saveBtn.dataset.adminBaseItem || ''
    );
    return;
  }
}

document.addEventListener('click', handleAdminBaseItemEditEvent, true);
document.addEventListener('touchend', handleAdminBaseItemEditEvent, true);

function handleAdminBaseBulkAddEvent(e){
  const addBtn = e.target && e.target.closest ? e.target.closest('[data-admin-base-add]') : null;
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-admin-base-save-bulk]') : null;

  if(!addBtn && !saveBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(addBtn){
    openAdminBaseBulkAddModal(addBtn.dataset.adminBaseAdd || '');
    return;
  }

  if(saveBtn){
    saveAdminBaseBulkItems(saveBtn.dataset.adminBaseSaveBulk || '');
    return;
  }
}

document.addEventListener('click', handleAdminBaseBulkAddEvent, true);
document.addEventListener('touchend', handleAdminBaseBulkAddEvent, true);

function handleAdminBaseSectionNavEvent(e){
  const btn = e.target && e.target.closest ? e.target.closest('[data-admin-base-section]') : null;
  if(!btn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  adminBaseActiveSection = btn.dataset.adminBaseSection || 'main';
  renderAdminBaseToolScreen(false);
}

document.addEventListener('click', handleAdminBaseSectionNavEvent, true);
document.addEventListener('touchend', handleAdminBaseSectionNavEvent, true);

function handleAdminBaseToolEntryEvent(e){
  const openBtn = e.target && e.target.closest ? e.target.closest('[data-open-admin-base-tool]') : null;
  const confirmBtn = e.target && e.target.closest ? e.target.closest('[data-confirm-admin-base-tool]') : null;

  if(!openBtn && !confirmBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(openBtn){
    openAdminBaseConfirmModal();
    return;
  }

  if(confirmBtn){
    closeBuilderModal();
    renderAdminBaseToolScreen(true);
    return;
  }
}

document.addEventListener('click', handleAdminBaseToolEntryEvent, true);
document.addEventListener('touchend', handleAdminBaseToolEntryEvent, true);


function handleReadyLibraryControlEvent(e){
  const openBtn = e.target && e.target.closest ? e.target.closest('[data-open-ready-library]') : null;
  const closeBtn = e.target && e.target.closest ? e.target.closest('[data-close-ready-library]') : null;
  const backdrop = e.target && e.target.closest ? e.target.closest('[data-ready-library-backdrop]') : null;
  const selectBtn = e.target && e.target.closest ? e.target.closest('[data-ready-library-select]') : null;
  const addSelectedBtn = e.target && e.target.closest ? e.target.closest('[data-ready-library-add-selected]') : null;

  if(!openBtn && !closeBtn && !backdrop && !selectBtn && !addSelectedBtn) return;

  if(backdrop && e.target !== backdrop && !closeBtn && !selectBtn && !addSelectedBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(openBtn){
    openReadyLibraryModal(modalState.addItemModuleId || '');
    return;
  }

  if(closeBtn || (backdrop && e.target === backdrop)){
    closeReadyLibraryModal();
    return;
  }

  if(selectBtn){
    selectReadyLibraryItem(selectBtn);
    return;
  }

  if(addSelectedBtn){
    const itemId = addSelectedBtn.dataset.readyLibrarySelected || '';
    const moduleId = addSelectedBtn.dataset.readyLibraryModule || modalState.addItemModuleId || '';

    if(!itemId){
      return;
    }

    attachReadyLibraryEquipment(moduleId, itemId);
    return;
  }
}

document.addEventListener('click', handleReadyLibraryControlEvent, true);
document.addEventListener('touchend', handleReadyLibraryControlEvent, true);


function openAddItemModal(moduleId){
  modalState.addItemModuleId = moduleId;
  closeActionModal();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Custom module</span>
            <strong>Add item</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-choice-grid yfd-add-item-segments">
          <button class="yfd-choice is-selected" data-item-type="equipment" type="button">
            <strong>Equipment</strong>
          </button>
          <button class="yfd-choice" data-item-type="area" type="button">
            <strong>Area / Zone</strong>
          </button>
        </div>

        <label class="yfd-field">
          <span>Item name</span>
          <input id="yfdItemName" type="text" placeholder="Pump, Bar, Diving Station">
        </label>

        <button class="yfd-primary-action" data-create-item type="button">Create item</button>
        <button class="yfd-secondary-action yfd-ready-library-open-btn" data-open-ready-library type="button">From equipment library</button>
      </section>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('yfdItemName');
    if(input) input.focus();
  }, 50);
}

function closeActionModal(){
  const modal = document.querySelector('.yfd-action-backdrop');
  if(modal) modal.remove();
}

function getSelectedItemType(){
  const selected = document.querySelector('.yfd-choice.is-selected');
  return selected ? selected.dataset.itemType : 'equipment';
}

function getReadyOverride(ref){
  if(!state.overrides) state.overrides = {};
  return state.overrides[ref] || {};
}

function getReadyDisplay(ref, baseTitle, baseSubtitle){
  const o = getReadyOverride(ref);
  return {
    title: o.title || baseTitle || 'Untitled',
    subtitle: o.subtitle || baseSubtitle || '',
    note: o.subtitle || baseSubtitle || ''
  };
}

function renderReadyEditButton(ref){
  return `<button class="yfd-builder-delete-btn yfd-ready-edit-btn" data-ready-edit="${ref}" type="button" aria-label="Edit title">Edit</button>`;
}

function findReadyOverrideTarget(ref){
  const layers = [...getAllLayers(), ...getActiveReadyTreeNodes()];

  for(const layer of layers){
    if(layer.id === ref) return {kind:'layer', layer, ref};

    for(const item of (layer.items || [])){
      const itemRef = getStickerRef(layer.id, item);
      if(itemRef === ref) return {kind:'item', layer, item, ref};
    }
  }

  for(const key of Object.keys(equipmentStore || {})){
    for(const instance of (equipmentStore[key] || [])){
      if(instance.id === ref) return {kind:'instance', key, instance, ref};
    }
  }

  return null;
}

function renderReadyEditModal(ref){
  const target = findReadyOverrideTarget(ref);
  if(!target) return '';

  let baseTitle = '';
  let baseSubtitle = '';

  if(target.kind === 'layer'){
    baseTitle = target.layer.title || '';
    baseSubtitle = 'Area / Zone';
  } else if(target.kind === 'item'){
    baseTitle = target.item.title || '';
    baseSubtitle = itemKind(target.item) === 'equipment' ? 'Equipment' : 'Area / Zone';
  } else if(target.kind === 'instance'){
    baseTitle = target.instance.name || target.instance.title || '';
    baseSubtitle = 'Instance';
  }

  const display = getReadyDisplay(ref, baseTitle, baseSubtitle);
  const titleSafe = String(display.title || '').replace(/"/g, '&quot;');
  const subtitleSafe = String(display.subtitle || '').replace(/"/g, '&quot;');

  return `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Ready-made card</span>
            <strong>Edit name & subtitle</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Name</span>
          <input id="yfdReadyEditTitle" type="text" value="${titleSafe}">
        </label>

        <label class="yfd-field">
          <span>Subtitle</span>
          <input id="yfdReadyEditSubtitle" type="text" value="${subtitleSafe}" placeholder="Area / Zone">
        </label>

        <div class="yfd-builder-modal-note">
          Note is a separate sticker and is not edited here.
        </div>

        <button class="yfd-primary-action" data-save-ready-edit="${ref}" type="button">Save</button>
        <button class="yfd-secondary-action" data-clear-ready-edit="${ref}" type="button">Clear custom text</button>
      </section>
    </div>
  `;
}

function openReadyEditModal(ref){
  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', renderReadyEditModal(ref));
  setTimeout(() => {
    const input = document.getElementById('yfdReadyEditTitle');
    if(input) input.focus();
  }, 50);
}

function refreshAfterReadyEdit(){
  const current = navStack[navStack.length - 1];
  if(current && current.screen === 'module') renderModule(current.id, false);
  else if(current && current.screen === 'equipment') renderEquipment(current.title, false);
  else if(current && current.screen === 'ready_yacht') renderReadyMadeYachtScreen(false);
  else renderOverview();
}

function saveReadyEdit(ref){
  const target = findReadyOverrideTarget(ref);
  if(!target) return;

  const titleInput = document.getElementById('yfdReadyEditTitle');
  const subtitleInput = document.getElementById('yfdReadyEditSubtitle');
  const title = titleInput ? titleInput.value.trim() : '';
  const subtitle = subtitleInput ? subtitleInput.value.trim() : '';

  if(target.kind === 'instance'){
    if(title) target.instance.name = title;
  } else {
    if(!state.overrides) state.overrides = {};
    state.overrides[ref] = {title, subtitle};
    if(!title && !subtitle) delete state.overrides[ref];
  }

  closeActionModal();
  saveState();
  refreshAfterReadyEdit();
}

function clearReadyEdit(ref){
  const target = findReadyOverrideTarget(ref);
  if(target && target.kind === 'instance'){
    /* Instance names are real mutable equipmentStore data; no default clear here. */
  } else if(state.overrides && state.overrides[ref]){
    delete state.overrides[ref];
  }

  closeActionModal();
  saveState();
  refreshAfterReadyEdit();
}

function getStickerRef(layerId, item){
  if(!item) return layerId;
  return item.key || item.target || (layerId + ':' + item.title);
}

function renderStickerButton(ref){
  const text = state.stickers && state.stickers[ref] ? state.stickers[ref] : '';
  return `
    <button class="yfd-sticker ${text ? 'has-note' : ''}" data-sticker-ref="${ref}" type="button">
      ${text ? text : '+ note'}
    </button>
  `;
}

function openStickerModal(ref){
  modalState.stickerRef = ref;
  closeActionModal();

  const current = state.stickers && state.stickers[ref] ? state.stickers[ref] : '';

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>User sticker</span>
            <strong>Card note</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <label class="yfd-field">
          <span>Note</span>
          <input id="yfdStickerText" type="text" value="${current.replace(/"/g, '&quot;')}" placeholder="Needs check, owner note, service soon">
        </label>

        <button class="yfd-primary-action" data-save-sticker type="button">Save note</button>
        <button class="yfd-secondary-action" data-clear-sticker type="button">Clear note</button>
      </section>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('yfdStickerText');
    if(input) input.focus();
  }, 50);
}

function saveSticker(ref, text){
  if(!state.stickers) state.stickers = {};
  const value = (text || '').trim();

  if(value){
    state.stickers[ref] = value;
  } else {
    delete state.stickers[ref];
  }

  closeActionModal();

  const current = navStack[navStack.length - 1];
  saveState();
  if(current && current.screen === 'ready_yacht') renderReadyMadeYachtScreen(false);
  else if(current && current.screen === 'module') renderModule(current.id, false);
  else if(current && current.screen === 'equipment') renderEquipment(current.title, false);
  else if(current && current.screen === 'builder_hull') renderBuilderHullScreen(current.hullId, false);
  else if(current && current.screen === 'builder_deck') renderBuilderDeckScreen(current.deckId, false);
  else if(current && current.screen === 'builder_area') renderBuilderAreaScreen(current.areaId, false);
  else if(current && current.screen === 'builder_equipment') renderBuilderEquipmentScreen(current.equipmentId, false);
  else if(current && current.screen === 'custom_builder') renderCustomBuilderScreenV2(false);
  else if(getActiveYacht && getActiveYacht()) renderReadyMadeYachtScreen(false);
  else renderFleetScreen();
}


function renderReadyUserDeleteButton(parentId, itemRef, item){
  if(!isReadyUserCreated(item)) return '';
  return `<button class="yfd-ready-delete-item" data-delete-ready-item="${itemRef}" data-delete-ready-parent="${parentId}" type="button" aria-label="Delete item">Delete</button>`;
}

function findReadyUserItem(parentId, itemRef){
  const parent = getLayer(parentId) || findNodeById(parentId);
  if(!parent || !Array.isArray(parent.items)) return {parent:null, item:null, index:-1};

  const index = parent.items.findIndex(item => getStickerRef(parent.id || parentId, item) === itemRef);
  if(index < 0) return {parent, item:null, index:-1};

  return {parent, item:parent.items[index], index};
}

function isEquipmentKeyUsedElsewhere(key, ignoredItem){
  if(!key) return false;

  const layers = [...getAllLayers(), ...getActiveReadyTreeNodes()];

  for(const layer of layers){
    for(const item of (layer.items || [])){
      if(item === ignoredItem) continue;
      if(item && item.key === key) return true;
    }
  }

  return false;
}

function renderReadyUserItemDeleteModal(parentId, itemRef){
  const found = findReadyUserItem(parentId, itemRef);
  const item = found.item;
  const title = item ? (item.title || 'this item') : 'this item';
  const kind = itemKind(item || {});

  return `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-ready-delete-modal">
        <div class="yfd-action-head">
          <div>
            <span>Delete ${kind === 'equipment' ? 'equipment' : 'area / zone'}</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only the user-created item from this yacht structure.</p>
          <p>Future service/cardholder history must not be deleted automatically.</p>
        </div>

        <div class="yfd-builder-modal-actions yfd-ready-delete-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-ready-item="${itemRef}" data-confirm-delete-ready-parent="${parentId}" type="button">Delete item</button>
        </div>
      </section>
    </div>
  `;
}

function openReadyUserItemDeleteModal(parentId, itemRef){
  const found = findReadyUserItem(parentId, itemRef);
  if(!found.item || !isReadyUserCreated(found.item)) return;

  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', renderReadyUserItemDeleteModal(parentId, itemRef));
}

function refreshAfterReadyUserDelete(parentId){
  const current = navStack[navStack.length - 1];

  if(current && current.screen === 'admin_base_tool'){
    renderAdminBaseToolScreen(false);
    return;
  }

  if(current && current.screen === 'ready_yacht'){
    renderReadyMadeYachtScreen(false);
    return;
  }

  if(current && current.screen === 'module'){
    renderModule(current.id, false);
    return;
  }

  renderModule(parentId, false);
}

function deleteReadyUserItem(parentId, itemRef){
  const found = findReadyUserItem(parentId, itemRef);
  const item = found.item;

  if(!found.parent || !item || found.index < 0) return;
  if(!isReadyUserCreated(item)) return;

  const targetId = item.target || '';
  const key = item.key || '';
  const templateId = item.template_id || item.id || '';

  found.parent.items.splice(found.index, 1);

  if(templateId && Array.isArray(state.readyTemplateAdds)){
    state.readyTemplateAdds = state.readyTemplateAdds.filter(record => {
      const recordItem = record && record.item;
      return !(recordItem && (recordItem.template_id === templateId || recordItem.id === templateId));
    });
  }

  if(targetId){
    const targetNode = findNodeById(targetId);
    if(targetNode && isReadyUserCreated(targetNode)){
      const targetIndex = treeNodes.findIndex(node => node && node.id === targetId);
      if(targetIndex >= 0) treeNodes.splice(targetIndex, 1);
    }
  }

  if(key && equipmentStore[key] && !isEquipmentKeyUsedElsewhere(key, item)){
    delete equipmentStore[key];
    if(defaultEquipmentStore[key]) delete defaultEquipmentStore[key];
  }

  closeActionModal();
  saveState();
  refreshAfterReadyUserDelete(parentId);
}

function handleReadyUserItemDeleteCaptureEvent(e){
  const deleteBtn = e.target && e.target.closest ? e.target.closest('[data-delete-ready-item]') : null;
  const confirmBtn = e.target && e.target.closest ? e.target.closest('[data-confirm-delete-ready-item]') : null;

  if(!deleteBtn && !confirmBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(deleteBtn){
    openReadyUserItemDeleteModal(
      deleteBtn.dataset.deleteReadyParent || '',
      deleteBtn.dataset.deleteReadyItem || ''
    );
    return;
  }

  if(confirmBtn){
    deleteReadyUserItem(
      confirmBtn.dataset.confirmDeleteReadyParent || '',
      confirmBtn.dataset.confirmDeleteReadyItem || ''
    );
    return;
  }
}

document.addEventListener('click', handleReadyUserItemDeleteCaptureEvent, true);
document.addEventListener('touchend', handleReadyUserItemDeleteCaptureEvent, true);


function renderEmptySlots(layer){
  const count = (layer.items || []).length;
  if(count >= 6) return '';

  const slots = 6 - count;

  return Array.from({length: slots}).map(() => `
    <article class="yfd-system-card yfd-empty-slot" data-add-item="${layer.id}" role="button" tabindex="0">
      <div class="yfd-empty-slot-plus">+</div>
      <strong>Add item</strong>
      <span>Custom area or equipment</span>
    </article>
  `).join('');
}

function renderModule(id, push=true){
  yfdSaveActiveScreen({screen:'module', id});
  const overview = document.getElementById('overview');
  if(overview) overview.classList.remove('yfd-admin-base-overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');
  const layer = getLayer(id);

  if(!layer || !module) return;
  const layerDisplay = getReadyDisplay(layer.id, layer.title, 'Deck / Area');

  if(push) navStack.push({screen:'module', id});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  module.innerHTML = `
    <div class="yfd-module-head">
      <div class="yfd-module-card yfd-header-card">
        ${renderLogo()}
        <div>
          <h2 class="yfd-module-title">${layerDisplay.title}</h2>
          <p>${layerDisplay.note}</p>
        </div>
      </div>
    </div>

    <div class="yfd-module-action-row">
      <button class="yfd-action-back" data-back type="button">← Back</button>
      <button class="yfd-add-item yfd-action-add" data-add-item="${layer.id}" type="button">+ Add item</button>
      ${renderGalleryButton()}
      ${renderQuickShotButton()}
    </div>
<div class="yfd-grid">
      ${(layer.items || []).map(item => {
        const kind = itemKind(item);
        const itemRef = getStickerRef(layer.id, item);
        const itemDisplay = getReadyDisplay(itemRef, item.title, kind === 'equipment' ? 'Equipment' : 'Area / Zone');

        if(item.target){
          return renderReadyTreeCard({
            level:'area',
            attrs:`data-open="${item.target}"`,
            title:itemDisplay.title,
            subtitle:itemDisplay.subtitle || 'Area / Zone',
            left:renderStickerButton(itemRef),
            right:renderReadyEditButton(itemRef) + renderReadyUserDeleteButton(layer.id, itemRef, item)
          });
        }

        if(kind === 'equipment'){
          return renderReadyTreeCard({
            level:'equipment',
            attrs:`data-eq="${item.title}"`,
            title:itemDisplay.title,
            subtitle:itemDisplay.subtitle || 'Equipment',
            left:renderStickerButton(itemRef),
            right:renderReadyEditButton(itemRef) + renderReadyUserDeleteButton(layer.id, itemRef, item)
          });
        }

        return renderReadyTreeCard({
          level:'area',
          attrs:`data-ready-container="${layer.id}" data-ready-item-ref="${itemRef}"`,
          extraClass:'yfd-future-card yfd-standard-open-card',
          title:itemDisplay.title,
          subtitle:itemDisplay.subtitle || 'Area / Zone',
          left:renderStickerButton(itemRef),
          right:renderReadyEditButton(itemRef) + renderReadyUserDeleteButton(layer.id, itemRef, item)
        });
      }).join('')}
      ${renderEmptySlots(layer)}
    </div>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}

function resolveEquipmentKey(title){
  let itemKey = title;

  const match = [...getAllLayers(), ...getActiveReadyTreeNodes()]
    .flatMap(x => x.items || [])
    .find(i => i.title === title && i.key);

  if(match && match.key){
    itemKey = match.key;
  }

  return itemKey;
}

function addEquipmentInstance(title, name){
  const key = resolveEquipmentKey(title);
  const finalName = (name || '').trim();
  if(!finalName) return;

  if(!equipmentStore[key]){
    equipmentStore[key] = [];
  }

  const id = key + "_" + Date.now();

  equipmentStore[key].push({
    id,
    name: finalName,
    service_ref: id
  });

  saveState();
  renderEquipment(title, false);
}

function openAddInstanceModal(title){
  modalState.addInstanceTitle = title;
  closeActionModal();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Equipment</span>
            <strong>Add instance</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>
        <label class="yfd-field">
          <span>Instance name</span>
          <input id="yfdInstanceName" type="text" placeholder="${title} #3">
        </label>
        <button class="yfd-primary-action" data-create-instance type="button">Create instance</button>
      </section>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('yfdInstanceName');
    if(input) input.focus();
  }, 50);
}


/* === Ready equipment instance delete confirm v38 20260507 === */

function findReadyEquipmentInstance(instanceId){
  for(const key of Object.keys(equipmentStore || {})){
    const list = equipmentStore[key] || [];
    const instance = list.find(i => i.id === instanceId || i.service_ref === instanceId);
    if(instance) return {key, list, instance};
  }
  return {key:null, list:null, instance:null};
}

function openReadyInstanceNotice(message){
  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Instance</span>
            <strong>Cannot delete</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>
        <div class="yfd-service-hook">
          <p>${message || 'This action is not available.'}</p>
        </div>
        <button class="yfd-primary-action" type="button" data-close-action>OK</button>
      </section>
    </div>
  `);
}

function renderReadyInstanceDeleteModal(instanceId){
  const found = findReadyEquipmentInstance(instanceId);
  const title = found.instance ? (found.instance.name || found.instance.title || 'this instance') : 'this instance';

  return `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal yfd-ready-delete-modal">
        <div class="yfd-action-head">
          <div>
            <span>Delete instance</span>
            <strong>${title}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-service-hook">
          <p>This removes only this equipment instance from the ready-made working copy.</p>
          <p>At least one instance must remain inside the equipment card.</p>
        </div>

        <div class="yfd-builder-modal-actions yfd-ready-delete-actions">
          <button class="yfd-secondary-action" data-close-action type="button">Cancel</button>
          <button class="yfd-danger-action" data-confirm-delete-ready-instance="${instanceId}" type="button">Delete instance</button>
        </div>
      </section>
    </div>
  `;
}

function openReadyInstanceDeleteModal(instanceId){
  const found = findReadyEquipmentInstance(instanceId);
  if(!found.instance || !found.key || !found.list) return;

  if(found.list.length <= 1){
    openReadyInstanceNotice('Keep at least one instance. Otherwise the equipment card has no working object inside.');
    return;
  }

  closeActionModal();
  document.body.insertAdjacentHTML('beforeend', renderReadyInstanceDeleteModal(instanceId));
}

function deleteReadyEquipmentInstance(instanceId){
  const found = findReadyEquipmentInstance(instanceId);
  if(!found.instance || !found.key || !found.list) return;

  if(found.list.length <= 1){
    closeActionModal();
    openReadyInstanceNotice('Keep at least one instance. Otherwise the equipment card has no working object inside.');
    return;
  }

  equipmentStore[found.key] = found.list.filter(i => i.id !== found.instance.id);
  closeActionModal();
  saveState();

  const current = navStack[navStack.length - 1];
  if(current && current.screen === 'equipment'){
    renderEquipment(current.title, false);
  }
}

function handleReadyInstanceDeleteCaptureEvent(e){
  const deleteBtn = e.target && e.target.closest ? e.target.closest('[data-delete-ready-instance]') : null;
  const confirmBtn = e.target && e.target.closest ? e.target.closest('[data-confirm-delete-ready-instance]') : null;

  if(!deleteBtn && !confirmBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(deleteBtn){
    openReadyInstanceDeleteModal(deleteBtn.dataset.deleteReadyInstance || '');
    return;
  }

  if(confirmBtn){
    deleteReadyEquipmentInstance(confirmBtn.dataset.confirmDeleteReadyInstance || '');
    return;
  }
}

document.addEventListener('click', handleReadyInstanceDeleteCaptureEvent, true);
document.addEventListener('touchend', handleReadyInstanceDeleteCaptureEvent, true);


function renderEquipment(title, push=true){
  yfdSaveActiveScreen({screen:'equipment', title});

  const itemKey = resolveEquipmentKey(title);
  const instances = equipmentStore[itemKey] || [];



  const overview = document.getElementById('overview');
  const module = document.getElementById('module');
  const hero = document.querySelector('.yfd-hero');

  if(!module) return;

  if(push) navStack.push({screen:'equipment', title});

  if(overview) overview.hidden = true;
  if(hero) hero.hidden = true;
  module.hidden = false;

  module.innerHTML = `
    <div class="yfd-module-head yfd-equipment-head">
      <div class="yfd-module-card yfd-header-card yfd-equipment-title-card">
        ${renderLogo()}
        <div>
          <h2 class="yfd-module-title">${title}</h2>
          <p class="yfd-equipment-subtitle">Equipment</p>
        </div>
      </div>
    </div>

    <div class="yfd-module-action-row yfd-equipment-action-row">
      <button class="yfd-action-back" data-back type="button">← Back</button>
      <button class="yfd-add-instance yfd-action-add" data-add-instance="${title}" type="button">+ Add instance</button>
      ${renderGalleryButton()}
      ${renderQuickShotButton()}
    </div>

    <section class="yfd-equipment-panel">
      <div class="yfd-equipment-panel-head">
        <span>Instances</span>
        <strong>${instances.length}</strong>
      </div>

      <div class="yfd-equipment-list">
        ${
          instances.length
          ? instances.map(i => `
            <div class="yfd-ready-instance-standard-row">
              <div class="yfd-ready-instance-main">
                <strong class="yfd-ready-instance-title">${getReadyDisplay(i.id, i.name, '').title}</strong>
                <span class="yfd-ready-instance-badge">Instance</span>
                <div class="yfd-ready-instance-note">${renderStickerButton(i.id)}</div>
              </div>
              <div class="yfd-instance-actions yfd-ready-instance-actions">
                ${renderReadyEditButton(i.id)}
                <button class="yfd-ready-delete-instance" data-delete-ready-instance="${i.id}" type="button" aria-label="Delete instance">Delete</button>
                <button class="yfd-open-service" data-service-ref="${i.service_ref || i.id}" data-instance-name="${getReadyDisplay(i.id, i.name, '').title}" type="button">
                  Open service
                </button>
              </div>
            </div>
          `).join('')
          : `<div class="yfd-empty">No equipment added yet</div>`
        }
        <button class="yfd-add-instance" data-add-instance="${title}" type="button">+ Add instance</button>
      </div>
    </section>
  `;

  window.scrollTo({top:0, behavior:'smooth'});
}


function openServiceHook(serviceRef, instanceName){
  closeActionModal();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="yfd-action-backdrop" data-action-backdrop>
      <section class="yfd-action-modal">
        <div class="yfd-action-head">
          <div>
            <span>Service integration</span>
            <strong>${instanceName || 'Equipment instance'}</strong>
          </div>
          <button class="yfd-modal-close" data-close-action type="button">×</button>
        </div>

        <div class="yfd-service-hook">
          <p>This instance is ready to connect to the main service/cardholder system.</p>
          <code>service_ref: ${serviceRef || 'pending'}</code>
        </div>

        <button class="yfd-primary-action" type="button" data-close-action>
          OK
        </button>
      </section>
    </div>
  `);
}



/* === Ready-made motor scroll guard v36 20260506 === */

let yfdReadyMotorLastTapKey = '';
let yfdReadyMotorLastTapAt = 0;
let yfdReadyMotorTouchStartX = 0;
let yfdReadyMotorTouchStartY = 0;
let yfdReadyMotorTouchMoved = false;
let yfdReadyMotorSuppressClickUntil = 0;

function yfdReadyMotorDuplicateTap(e, key){
  const now = Date.now();

  if(e.type === 'touchend'){
    yfdReadyMotorLastTapKey = key;
    yfdReadyMotorLastTapAt = now;
    return false;
  }

  if(e.type === 'click' && yfdReadyMotorLastTapKey === key && now - yfdReadyMotorLastTapAt < 700){
    return true;
  }

  return false;
}

function yfdIsReadyMadeMotorContext(){
  const yacht = getActiveYacht && getActiveYacht();
  if(!yacht || yacht.vesselType === 'sailing') return false;

  const current = navStack && navStack.length ? navStack[navStack.length - 1] : null;
  if(!current) return false;

  return current.screen === 'ready_yacht' || current.screen === 'module' || current.screen === 'equipment';
}

document.addEventListener('touchstart', e => {
  if(!yfdIsReadyMadeMotorContext()) return;

  const t = e.touches && e.touches[0];
  if(!t) return;

  yfdReadyMotorTouchStartX = t.clientX;
  yfdReadyMotorTouchStartY = t.clientY;
  yfdReadyMotorTouchMoved = false;
}, {passive:true, capture:true});

document.addEventListener('touchmove', e => {
  if(!yfdIsReadyMadeMotorContext()) return;

  const t = e.touches && e.touches[0];
  if(!t) return;

  const dx = Math.abs(t.clientX - yfdReadyMotorTouchStartX);
  const dy = Math.abs(t.clientY - yfdReadyMotorTouchStartY);

  /*
    Ready-made motor:
    if user scrolls vertically or drags noticeably, do not treat touchend as tap.
  */
  if(dx > 14 || dy > 14){
    yfdReadyMotorTouchMoved = true;
    yfdReadyMotorSuppressClickUntil = Date.now() + 700;
  }
}, {passive:true, capture:true});

function yfdReadyMotorShouldIgnoreTapEvent(e){
  const now = Date.now();

  if(e.type === 'touchend' && yfdReadyMotorTouchMoved){
    yfdReadyMotorSuppressClickUntil = now + 700;
    return true;
  }

  if(e.type === 'click' && now < yfdReadyMotorSuppressClickUntil){
    return true;
  }

  return false;
}


function yfdIsReadyActionControl(target){
  if(!target || !target.closest) return false;

  return !!target.closest([
    '.yfd-ready-card-actions-clean',
    '.yfd-ready-card-actions-left',
    '.yfd-ready-card-actions-right',
    '.yfd-ready-instance-actions',
    '.yfd-ready-instance-note',
    '.yfd-sticker',
    '.yfd-ready-edit-btn',
    '.yfd-lock-control',
    '.yfd-ready-delete-instance',
    '.yfd-open-service',
    '[data-sticker-ref]',
    '[data-ready-edit]',
    '[data-ready-lock]',
    '[data-delete-ready-instance]',
    '[data-confirm-delete-ready-instance]',
    '[data-service-ref]',
    'button'
  ].join(','));
}

function handleReadyMadeMotorDirectTapCaptureEvent(e){
  if(!yfdIsReadyMadeMotorContext()) return;

  const target = e.target && e.target.closest ? e.target.closest(
    '[data-open], [data-eq], [data-add-instance], [data-service-ref]'
  ) : null;

  if(!target) return;

  /*
    Action buttons live inside cards. They must not open the parent card.
  */
  if(yfdIsReadyActionControl(e.target)){
    return;
  }

  /*
    Do not steal clicks from modals or builder/sailing screens.
    Ready-made motor direct capture is only for the stable ready-made flow.
  */
  if(target.closest('.yfd-builder-modal, .yfd-action-modal, .yfd-config-modal, .yfd-side-menu')){
    return;
  }

  if(yfdReadyMotorShouldIgnoreTapEvent(e)){
    return;
  }

  const open = target.closest('[data-open]');
  const eq = target.closest('[data-eq]');
  const addInstance = target.closest('[data-add-instance]');
  const service = target.closest('[data-service-ref]');

  const key =
    open ? 'open:' + (open.dataset.open || '') :
    eq ? 'eq:' + (eq.dataset.eq || '') :
    addInstance ? 'add-instance:' + (addInstance.dataset.addInstance || '') :
    service ? 'service:' + (service.dataset.serviceRef || '') :
    'ready-motor';

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(yfdReadyMotorDuplicateTap(e, key)) return;

  if(open){
    const id = open.dataset.open || '';
    if(id) renderModule(id);
    return;
  }

  if(eq){
    const title = eq.dataset.eq || '';
    if(title) renderEquipment(title);
    return;
  }

  if(addInstance){
    const title = addInstance.dataset.addInstance || '';
    if(title) openAddInstanceModal(title);
    return;
  }

  if(service){
    openServiceHook(service.dataset.serviceRef, service.dataset.instanceName || '');
    return;
  }
}

document.addEventListener('click', handleReadyMadeMotorDirectTapCaptureEvent, true);
document.addEventListener('touchend', handleReadyMadeMotorDirectTapCaptureEvent, true);


function handleBackControlEvent(e){
  const backBtn = e.target && e.target.closest ? e.target.closest('[data-back]') : null;
  if(!backBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  forceBack();
}

document.addEventListener('click', handleBackControlEvent, true);
document.addEventListener('touchend', handleBackControlEvent, true);

function handleStickerControlEvent(e){
  const target = e.target && e.target.closest ? e.target.closest('[data-sticker-ref]') : null;
  if(!target) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  openStickerModal(target.dataset.stickerRef);
}

document.addEventListener('click', handleStickerControlEvent, true);
document.addEventListener('touchend', handleStickerControlEvent, true);

function handleReadyEditControlEvent(e){
  const target = e.target && e.target.closest ? e.target.closest('[data-ready-edit]') : null;
  if(!target) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  openReadyEditModal(target.dataset.readyEdit || '');
}

document.addEventListener('click', handleReadyEditControlEvent, true);
document.addEventListener('touchend', handleReadyEditControlEvent, true);

function handleReadyEditSaveControlEvent(e){
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-save-ready-edit]') : null;
  const clearBtn = e.target && e.target.closest ? e.target.closest('[data-clear-ready-edit]') : null;
  if(!saveBtn && !clearBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(saveBtn){
    saveReadyEdit(saveBtn.dataset.saveReadyEdit || '');
    return;
  }

  if(clearBtn){
    clearReadyEdit(clearBtn.dataset.clearReadyEdit || '');
    return;
  }
}

document.addEventListener('click', handleReadyEditSaveControlEvent, true);
document.addEventListener('touchend', handleReadyEditSaveControlEvent, true);

function handleBuilderEditControlEvent(e){
  const editBtn = e.target && e.target.closest ? e.target.closest('[data-builder-edit]') : null;
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-save-builder-edit]') : null;
  const clearBtn = e.target && e.target.closest ? e.target.closest('[data-clear-builder-edit]') : null;
  if(!editBtn && !saveBtn && !clearBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(editBtn){
    openBuilderEditModal(editBtn.dataset.builderEditType || 'area', editBtn.dataset.builderEdit || '');
    return;
  }

  if(saveBtn){
    saveBuilderEdit(saveBtn.dataset.builderEditType || 'area', saveBtn.dataset.saveBuilderEdit || '');
    return;
  }

  if(clearBtn){
    clearBuilderEdit(clearBtn.dataset.builderEditType || 'area', clearBtn.dataset.clearBuilderEdit || '');
    return;
  }
}

document.addEventListener('click', handleBuilderEditControlEvent, true);
document.addEventListener('touchend', handleBuilderEditControlEvent, true);

function handleYachtNameEditControlEvent(e){
  const editBtn = e.target && e.target.closest ? e.target.closest('[data-edit-yacht-name]') : null;
  const saveBtn = e.target && e.target.closest ? e.target.closest('[data-save-yacht-name]') : null;
  if(!editBtn && !saveBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(editBtn){
    openYachtNameEditModal(editBtn.dataset.editYachtName || '');
    return;
  }

  if(saveBtn){
    saveYachtNameEdit(saveBtn.dataset.saveYachtName || '');
    return;
  }
}

document.addEventListener('click', handleYachtNameEditControlEvent, true);
document.addEventListener('touchend', handleYachtNameEditControlEvent, true);

function handleBuilderInstanceDeleteControlEvent(e){
  const deleteBtn = e.target && e.target.closest ? e.target.closest('[data-delete-builder-instance]') : null;
  const confirmBtn = e.target && e.target.closest ? e.target.closest('[data-confirm-delete-builder-instance]') : null;
  if(!deleteBtn && !confirmBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(deleteBtn){
    openBuilderDeleteInstanceModal(deleteBtn.dataset.deleteBuilderInstance || '');
    return;
  }

  if(confirmBtn){
    deleteBuilderInstance(confirmBtn.dataset.confirmDeleteBuilderInstance || '');
    return;
  }
}


function handleBuilderHullAddMenuEvent(e){
  const menuBtn = e.target && e.target.closest ? e.target.closest('[data-builder-add-hull-child-menu]') : null;
  if(!menuBtn) return;
  e.preventDefault();
  e.stopPropagation();
  openBuilderAddHullChildMenu(menuBtn.dataset.builderParentHull || '');
}

document.addEventListener('click', handleBuilderHullAddMenuEvent, true);
document.addEventListener('touchend', handleBuilderHullAddMenuEvent, true);

document.addEventListener('click', handleBuilderInstanceDeleteControlEvent, true);
document.addEventListener('touchend', handleBuilderInstanceDeleteControlEvent, true);

function handleAreaLibraryControlEvent(e){
  const openBtn = e.target && e.target.closest ? e.target.closest('[data-builder-library-open], [data-builder-area-library]') : null;
  const attachBtn = e.target && e.target.closest ? e.target.closest('[data-library-area-attach]') : null;
  const selectBtn = e.target && e.target.closest ? e.target.closest('[data-builder-library-select]') : null;
  const addSelectedBtn = e.target && e.target.closest ? e.target.closest('[data-builder-library-add-selected]') : null;
  if(!openBtn && !attachBtn && !selectBtn && !addSelectedBtn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(openBtn){
    if(openBtn.closest('.yfd-builder-create-item-modal') && builderModalState.childType !== 'equipment'){
      return;
    }

    const targetType = openBtn.dataset.builderLibraryOpen || 'area';
    const targetId = openBtn.dataset.builderLibraryId || openBtn.dataset.builderAreaLibrary || '';
    openBuilderEquipmentLibraryModal(targetType, targetId);
    return;
  }

  if(selectBtn){
    selectBuilderAreaLibraryItem(selectBtn);
    return;
  }

  if(addSelectedBtn){
    const targetType = addSelectedBtn.dataset.builderLibraryTargetType || builderModalState.libraryTargetType || 'area';
    const targetId = addSelectedBtn.dataset.builderLibraryTargetId || addSelectedBtn.dataset.builderLibraryArea || builderModalState.libraryTargetId || builderModalState.areaId || '';
    const itemId = addSelectedBtn.dataset.builderLibrarySelected || '';
    if(!itemId) return;
    if(yfdBuilderModalDuplicateTap(e, 'builder-library-add:' + targetType + ':' + targetId + ':' + itemId)) return;
    const ok = attachLibraryEquipmentToBuilderTarget(targetType, targetId, itemId);
    if(ok) closeBuilderModal();
    return;
  }

  if(attachBtn){
    const areaId = attachBtn.dataset.libraryArea || '';
    const itemId = attachBtn.dataset.libraryAreaAttach || '';
    if(yfdBuilderModalDuplicateTap(e, 'builder-area-library-legacy:' + areaId + ':' + itemId)) return;
    const ok = attachLibraryEquipmentToArea(areaId, itemId);
    if(ok) closeBuilderModal();
    return;
  }
}

document.addEventListener('click', handleAreaLibraryControlEvent, true);
document.addEventListener('touchend', handleAreaLibraryControlEvent, true);




/* === V40-D3D-1C Builder V2 scroll guard 20260507 === */
let yfdBuilderV2TouchActive = false;
let yfdBuilderV2TouchMoved = false;
let yfdBuilderV2TouchStartX = 0;
let yfdBuilderV2TouchStartY = 0;
let yfdBuilderV2BlockUntil = 0;
let yfdBuilderV2PressedEl = null;
let yfdBuilderV2TrimaranRail = null;
let yfdBuilderV2TrimaranRailStartScrollLeft = 0;
let yfdBuilderV2TrimaranRailDragging = false;

function yfdIsBuilderV2Area(target){
  if(!target || !target.closest) return false;
  return !!target.closest(
    '.yfd-builder-v2-hulls, .yfd-builder-v2-shared, .yfd-builder-v2-hull-section, .yfd-builder-v2-card-grid'
  );
}

function yfdIsBuilderV2TapTarget(target){
  if(!target || !target.closest) return false;
  return !!target.closest(
    '[data-open-builder-hull], [data-open-builder-deck], [data-open-builder-area], [data-open-builder-equipment], [data-builder-add-deck], [data-builder-add-child-menu], [data-builder-add-area-child-menu], [data-builder-add-hull-child-menu], [data-builder-add-instance]'
  );
}

function yfdBuilderV2BlockOpenForScroll(){
  const until = Date.now() + 900;
  yfdBuilderV2BlockUntil = until;
  if(typeof yfdBuilderIgnoreOpenUntil !== 'undefined'){
    yfdBuilderIgnoreOpenUntil = Math.max(yfdBuilderIgnoreOpenUntil || 0, until);
  }
}

document.addEventListener('touchstart', e => {
  const t = e.touches && e.touches[0];
  if(!t || !yfdIsBuilderV2Area(e.target)){
    yfdBuilderV2TouchActive = false;
    yfdBuilderV2TouchMoved = false;
    return;
  }

  yfdBuilderV2TouchActive = true;
  yfdBuilderV2TouchMoved = false;
  yfdBuilderV2TouchStartX = t.clientX;
  yfdBuilderV2TouchStartY = t.clientY;

  const trimaranHandle = e.target.closest(
    '.yfd-builder-v2-hull-section, ' +
    '.yfd-builder-v2-card-grid, ' +
    '.yfd-builder-v2-hull-card, ' +
    '.yfd-builder-v2-deck-card, ' +
    '.yfd-builder-v2-add-deck'
  );

  yfdBuilderV2TrimaranRail =
    trimaranHandle &&
    trimaranHandle.closest('.yfd-builder-v2-hulls-3');

  yfdBuilderV2TrimaranRailStartScrollLeft =
    yfdBuilderV2TrimaranRail
      ? (yfdBuilderV2TrimaranRail.scrollLeft || 0)
      : 0;

  yfdBuilderV2TrimaranRailDragging = false;

  yfdBuilderV2PressedEl = e.target.closest(
    '[data-open-builder-hull], [data-open-builder-deck], [data-open-builder-area], [data-open-builder-equipment], [data-builder-add-deck], [data-builder-add-child-menu], [data-builder-add-area-child-menu], [data-builder-add-hull-child-menu], [data-builder-add-instance]'
  );

  if(yfdBuilderV2PressedEl){
    yfdBuilderV2PressedEl.classList.add('is-builder-v2-pressed');
  }
}, true);

document.addEventListener('touchmove', e => {
  if(!yfdBuilderV2TouchActive) return;

  const t = e.touches && e.touches[0];
  if(!t) return;

  const dx = Math.abs(t.clientX - yfdBuilderV2TouchStartX);
  const dy = Math.abs(t.clientY - yfdBuilderV2TouchStartY);

  if(yfdBuilderV2TrimaranRail){

    const moveX = t.clientX - yfdBuilderV2TouchStartX;
    const absMoveX = Math.abs(moveX);

    const horizontalIntent =
      absMoveX > 4 &&
      absMoveX > (dy * 0.45);

    if(yfdBuilderV2TrimaranRailDragging || horizontalIntent){

      yfdBuilderV2TrimaranRailDragging = true;

      yfdBuilderV2TrimaranRail.classList.add(
        'is-trimaran-rail-dragging'
      );

      yfdBuilderV2TrimaranRail.scrollLeft =
        yfdBuilderV2TrimaranRailStartScrollLeft - moveX;

      yfdBuilderV2TouchMoved = true;
      yfdBuilderV2BlockOpenForScroll();

      if(yfdBuilderV2PressedEl){
        yfdBuilderV2PressedEl.classList.remove('is-builder-v2-pressed');
        yfdBuilderV2PressedEl = null;
      }

      e.preventDefault();
      e.stopPropagation();

      if(e.stopImmediatePropagation){
        e.stopImmediatePropagation();
      }

      return;
    }
  }

  if(dx > 10 || dy > 10){
    yfdBuilderV2TouchMoved = true;
    yfdBuilderV2BlockOpenForScroll();

    if(yfdBuilderV2PressedEl){
      yfdBuilderV2PressedEl.classList.remove('is-builder-v2-pressed');
      yfdBuilderV2PressedEl = null;
    }
  }
}, true);

document.addEventListener('touchend', e => {
  if(!yfdBuilderV2TouchActive) return;

  if(yfdBuilderV2TouchMoved && yfdIsBuilderV2TapTarget(e.target)){
    yfdBuilderV2BlockOpenForScroll();
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
  }

  if(yfdBuilderV2PressedEl){
    const pressed = yfdBuilderV2PressedEl;
    setTimeout(() => pressed.classList.remove('is-builder-v2-pressed'), 120);
  }

  if(yfdBuilderV2TrimaranRail){
    const rail = yfdBuilderV2TrimaranRail;

    rail.classList.remove('is-trimaran-rail-dragging');

    setTimeout(() => {
      rail.classList.remove('is-trimaran-rail-dragging');
    }, 60);
  }

  yfdBuilderV2PressedEl = null;
  yfdBuilderV2TrimaranRail = null;
  yfdBuilderV2TrimaranRailStartScrollLeft = 0;
  yfdBuilderV2TrimaranRailDragging = false;
  yfdBuilderV2TouchActive = false;
  yfdBuilderV2TouchMoved = false;
}, true);

document.addEventListener('click', e => {
  if(Date.now() > yfdBuilderV2BlockUntil) return;
  if(!yfdIsBuilderV2TapTarget(e.target)) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();
}, true);


let yfdBuilderTouchStartX = 0;
let yfdBuilderTouchStartY = 0;
let yfdBuilderIgnoreOpenUntil = 0;
let yfdBuilderTouchStartedOnPriority = false;
let yfdBuilderLastLockId = '';
let yfdBuilderLastLockAt = 0;

function yfdIsPriorityTapTarget(target){
  if(!target || !target.closest) return false;

  return !!target.closest([
    'button',
    'input',
    'textarea',
    'select',
    '[role="button"]',
    '[data-back]',
    '[data-close-builder-modal]',
    '[data-builder-create-deck]',
    '[data-builder-create-child]',
    '[data-builder-create-hull-child]',
    '[data-builder-create-area-child]',
    '[data-builder-add-deck]',
    '[data-builder-add-hull-child-menu]',
    '[data-builder-add-child-menu]',
    '[data-builder-add-area-child-menu]',
    '[data-builder-lock]',
    '[data-builder-edit]',
    '[data-delete-builder-deck]',
    '[data-delete-builder-item]',
    '[data-delete-builder-instance]',
    '[data-sailing-builder-root]',
    '[data-sailing-root-add-menu]',
    '[data-sailing-root-add-type]',
    '[data-sailing-root-create-item]',
    '[data-sailing-add-instance]',
    '.yfd-builder-slot',
    '.yfd-add-item',
    '.yfd-action-back',
    '.yfd-builder-mini-actions',
    '.yfd-object-menu',
    '.yfd-builder-modal',
    '.yfd-builder-modal-actions'
  ].join(','));
}

document.addEventListener('touchstart', e => {
  const t = e.touches && e.touches[0];
  if(!t) return;

  yfdBuilderTouchStartX = t.clientX;
  yfdBuilderTouchStartY = t.clientY;
  yfdBuilderTouchStartedOnPriority = yfdIsPriorityTapTarget(e.target);
}, {passive:true, capture:true});

document.addEventListener('touchmove', e => {
  const t = e.touches && e.touches[0];
  if(!t) return;

  if(yfdBuilderTouchStartedOnPriority){
    return;
  }

  const dx = Math.abs(t.clientX - yfdBuilderTouchStartX);
  const dy = Math.abs(t.clientY - yfdBuilderTouchStartY);

  /*
    iPhone tap protection:
    Small finger drift must not block the next tap.
    Only a real horizontal swipe should suppress open-card taps.
  */
  const realHorizontalSwipe = dx > 42 && dx > (dy * 1.35);

  if(realHorizontalSwipe){
    yfdBuilderIgnoreOpenUntil = Date.now() + 220;
  }
}, {passive:true, capture:true});

function yfdBuilderShouldIgnoreOpenTap(){
  return Date.now() < yfdBuilderIgnoreOpenUntil;
}

function yfdBuilderIsDuplicateLockEvent(e, id){
  const now = Date.now();
  if(e.type === 'touchend'){
    yfdBuilderLastLockId = id;
    yfdBuilderLastLockAt = now;
    return false;
  }
  if(e.type === 'click' && yfdBuilderLastLockId === id && now - yfdBuilderLastLockAt < 700){
    return true;
  }
  return false;
}

function handleBuilderLockCaptureEvent(e){
  const builderLock = e.target && e.target.closest ? e.target.closest('[data-builder-lock]') : null;
  if(!builderLock) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  const id = builderLock.dataset.builderLock || '';
  if(yfdBuilderIsDuplicateLockEvent(e, id)) return;
  const found = findBuilderLockTarget(id);
  if(!found || !found.target) return;

  if(isBuilderInheritedLocked(id)){
    openBuilderLockedNotice('Parent branch is locked');
    return;
  }

  if(found.target.locked){
    openUnlockBuilderModal(id);
    return;
  }

  setBuilderLocked(id, true);
}

document.addEventListener('click', handleBuilderLockCaptureEvent, true);
document.addEventListener('touchend', handleBuilderLockCaptureEvent, true);


let yfdBuilderLastDeleteKey = '';
let yfdBuilderLastDeleteAt = 0;

function yfdBuilderIsDuplicateDeleteEvent(e, key){
  const now = Date.now();
  if(e.type === 'touchend'){
    yfdBuilderLastDeleteKey = key;
    yfdBuilderLastDeleteAt = now;
    return false;
  }
  if(e.type === 'click' && yfdBuilderLastDeleteKey === key && now - yfdBuilderLastDeleteAt < 700){
    return true;
  }
  return false;
}

function handleBuilderActionIslandEvent(e){
  const island = e.target && e.target.closest ? e.target.closest('.yfd-builder-three-actions') : null;
  if(!island) return;

  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();
}

document.addEventListener('pointerdown', handleBuilderActionIslandEvent, true);
document.addEventListener('touchstart', handleBuilderActionIslandEvent, true);

function handleBuilderDeleteCaptureEvent(e){
  const deleteDeck = e.target && e.target.closest ? e.target.closest('[data-delete-builder-deck]') : null;
  const deleteItem = e.target && e.target.closest ? e.target.closest('[data-delete-builder-item]') : null;
  if(!deleteDeck && !deleteItem) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(deleteDeck){
    const deckId = deleteDeck.dataset.deleteBuilderDeck || '';
    const key = 'deck:' + deckId;
    if(yfdBuilderIsDuplicateDeleteEvent(e, key)) return;

    if(isBuilderLocked(deckId)){
      openBuilderLockedNotice('Deck is locked');
      return;
    }

    openBuilderDeleteDeckModal(deckId);
    return;
  }

  if(deleteItem){
    const itemId = deleteItem.dataset.deleteBuilderItem || '';
    const key = 'item:' + itemId;
    if(yfdBuilderIsDuplicateDeleteEvent(e, key)) return;

    if(isBuilderLocked(itemId)){
      openBuilderLockedNotice('Item or parent branch is locked');
      return;
    }

    openBuilderDeleteItemModal(itemId, deleteItem.dataset.builderItemType || 'area');
    return;
  }
}

document.addEventListener('click', handleBuilderDeleteCaptureEvent, true);
document.addEventListener('touchend', handleBuilderDeleteCaptureEvent, true);


let yfdBuilderLastCoreTapKey = '';
let yfdBuilderLastCoreTapAt = 0;

function yfdBuilderIsDuplicateCoreTap(e, key){
  const now = Date.now();
  if(e.type === 'touchend'){
    yfdBuilderLastCoreTapKey = key;
    yfdBuilderLastCoreTapAt = now;
    return false;
  }
  if(e.type === 'click' && yfdBuilderLastCoreTapKey === key && now - yfdBuilderLastCoreTapAt < 700){
    return true;
  }
  return false;
}

function handleBuilderCoreTapCaptureEvent(e){
  const addDeck = e.target && e.target.closest ? e.target.closest('[data-builder-add-deck]') : null;
  const openHull = e.target && e.target.closest ? e.target.closest('[data-open-builder-hull]') : null;

  if(!addDeck && !openHull) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(addDeck){
    const scope = addDeck.dataset.builderAddDeck || '';
    const hullId = addDeck.dataset.builderHull || '';
    const key = 'add-deck:' + scope + ':' + hullId;
    if(yfdBuilderIsDuplicateCoreTap(e, key)) return;
    openBuilderAddDeckModal(scope, hullId);
    return;
  }

  if(openHull){
    const hullId = openHull.dataset.openBuilderHull || '';
    const key = 'open-hull:' + hullId;
    if(yfdBuilderIsDuplicateCoreTap(e, key)) return;
    if(typeof yfdBuilderShouldIgnoreOpenTap === 'function' && yfdBuilderShouldIgnoreOpenTap()) return;
    renderBuilderHullScreen(hullId);
    return;
  }
}

document.addEventListener('click', handleBuilderCoreTapCaptureEvent, true);
document.addEventListener('touchend', handleBuilderCoreTapCaptureEvent, true);


function handleSailingBuilderRootCaptureEvent(e){
  const btn = e.target && e.target.closest ? e.target.closest('[data-sailing-builder-root]') : null;
  if(!btn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  openSailingBuilderRoot(btn.dataset.sailingBuilderRoot || 'sailing_top');
}

document.addEventListener('click', handleSailingBuilderRootCaptureEvent, true);
document.addEventListener('touchend', handleSailingBuilderRootCaptureEvent, true);


let yfdBuilderModalLastTapKey = '';
let yfdBuilderModalLastTapAt = 0;

function yfdBuilderModalDuplicateTap(e, key){
  const now = Date.now();
  if(e.type === 'touchend'){
    yfdBuilderModalLastTapKey = key;
    yfdBuilderModalLastTapAt = now;
    return false;
  }
  if(e.type === 'click' && yfdBuilderModalLastTapKey === key && now - yfdBuilderModalLastTapAt < 700){
    return true;
  }
  return false;
}

function handleBuilderModalActionCaptureEvent(e){
  const closeBtn = e.target && e.target.closest ? e.target.closest('[data-close-builder-modal]') : null;
  const backdrop = e.target && e.target.closest ? e.target.closest('[data-builder-modal-backdrop]') : null;

  const createDeck = e.target && e.target.closest ? e.target.closest('[data-builder-create-deck]') : null;
  const createChild = e.target && e.target.closest ? e.target.closest('[data-builder-create-child]') : null;
  const createHullChild = e.target && e.target.closest ? e.target.closest('[data-builder-create-hull-child]') : null;
  const createAreaChild = e.target && e.target.closest ? e.target.closest('[data-builder-create-area-child]') : null;

  const confirmUnlock = e.target && e.target.closest ? e.target.closest('[data-confirm-unlock-builder]') : null;
  const confirmDeleteDeck = e.target && e.target.closest ? e.target.closest('[data-confirm-delete-builder-deck]') : null;
  const confirmDeleteItem = e.target && e.target.closest ? e.target.closest('[data-confirm-delete-builder-item]') : null;
  const confirmDeleteInstance = e.target && e.target.closest ? e.target.closest('[data-confirm-delete-builder-instance]') : null;

  const target =
    closeBtn ||
    createDeck ||
    createChild ||
    createHullChild ||
    createAreaChild ||
    confirmUnlock ||
    confirmDeleteDeck ||
    confirmDeleteItem ||
    confirmDeleteInstance;

  const backdropClose = backdrop && e.target === backdrop;

  if(!target && !backdropClose) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(closeBtn || backdropClose){
    if(yfdBuilderModalDuplicateTap(e, 'modal-close')) return;
    closeBuilderModal();
    return;
  }

  if(createDeck){
    if(yfdBuilderModalDuplicateTap(e, 'create-deck')) return;
    submitBuilderAddDeckModal();
    return;
  }

  if(createChild){
    if(yfdBuilderModalDuplicateTap(e, 'create-child')) return;
    submitBuilderAddChildModal();
    return;
  }

  if(createHullChild){
    if(yfdBuilderModalDuplicateTap(e, 'create-hull-child')) return;
    submitBuilderAddHullChildModal();
    return;
  }

  if(createAreaChild){
    if(yfdBuilderModalDuplicateTap(e, 'create-area-child')) return;
    submitBuilderAddAreaChildModal();
    return;
  }

  if(confirmUnlock){
    const id = confirmUnlock.dataset.confirmUnlockBuilder || '';
    if(yfdBuilderModalDuplicateTap(e, 'unlock:' + id)) return;
    closeBuilderModal();
    setBuilderLocked(id, false);
    return;
  }

  if(confirmDeleteDeck){
    if(yfdBuilderModalDuplicateTap(e, 'delete-deck-confirm')) return;
    submitBuilderDeleteDeck();
    return;
  }

  if(confirmDeleteItem){
    if(yfdBuilderModalDuplicateTap(e, 'delete-item-confirm')) return;
    submitBuilderDeleteItem();
    return;
  }

  if(confirmDeleteInstance){
    const id = confirmDeleteInstance.dataset.confirmDeleteBuilderInstance || '';
    if(yfdBuilderModalDuplicateTap(e, 'delete-instance-confirm:' + id)) return;
    deleteBuilderInstance(id);
    return;
  }
}

document.addEventListener('click', handleBuilderModalActionCaptureEvent, true);
document.addEventListener('touchend', handleBuilderModalActionCaptureEvent, true);

function handleBuilderAddKindSelectEvent(e){
  const btn = e.target && e.target.closest ? e.target.closest('[data-builder-kind-select]') : null;
  if(!btn) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  const kind = btn.dataset.builderKindSelect === 'area' ? 'area' : 'equipment';
  builderModalState.childType = kind;

  const group = btn.closest('.yfd-add-item-segments');
  if(group){
    group.querySelectorAll('[data-builder-kind-select]').forEach(item => {
      item.classList.toggle('is-selected', item === btn);
      item.setAttribute('aria-selected', item === btn ? 'true' : 'false');
    });
  }

  const inputId = btn.dataset.builderKindTargetInput || '';
  const input = inputId ? document.getElementById(inputId) : null;
  if(input){
    input.placeholder = btn.dataset.builderKindPlaceholder || '';
    input.focus();
  }

  const modal = btn.closest('.yfd-builder-create-item-modal');
  const libraryBtn = modal ? modal.querySelector('[data-builder-equipment-library-action]') : null;
  if(libraryBtn){
    const showLibrary = kind === 'equipment';
    libraryBtn.hidden = !showLibrary;
    libraryBtn.disabled = !showLibrary;
  }
}

document.addEventListener('click', handleBuilderAddKindSelectEvent, true);
document.addEventListener('touchend', handleBuilderAddKindSelectEvent, true);


let yfdSailingRootLastTapKey = '';
let yfdSailingRootLastTapAt = 0;

function yfdSailingRootDuplicateTap(e, key){
  const now = Date.now();
  if(e.type === 'touchend'){
    yfdSailingRootLastTapKey = key;
    yfdSailingRootLastTapAt = now;
    return false;
  }
  if(e.type === 'click' && yfdSailingRootLastTapKey === key && now - yfdSailingRootLastTapAt < 700){
    return true;
  }
  return false;
}

function handleSailingRootSafeCaptureEvent(e){
  const addMenu = e.target && e.target.closest ? e.target.closest('[data-sailing-root-add-menu]') : null;
  const addType = e.target && e.target.closest ? e.target.closest('[data-sailing-root-add-type]') : null;
  const createItem = e.target && e.target.closest ? e.target.closest('[data-sailing-root-create-item]') : null;
  const openItem = e.target && e.target.closest ? e.target.closest('[data-open-sailing-root-item]') : null;
  const editBtn = e.target && e.target.closest ? e.target.closest('[data-sailing-root-edit]') : null;
  const saveEdit = e.target && e.target.closest ? e.target.closest('[data-sailing-root-save-edit]') : null;
  const deleteBtn = e.target && e.target.closest ? e.target.closest('[data-sailing-root-delete]') : null;
  const confirmDelete = e.target && e.target.closest ? e.target.closest('[data-sailing-root-confirm-delete]') : null;
  const addInstance = e.target && e.target.closest ? e.target.closest('[data-sailing-add-instance]') : null;

  const target = addMenu || addType || createItem || openItem || editBtn || saveEdit || deleteBtn || confirmDelete || addInstance;
  if(!target) return;

  e.preventDefault();
  e.stopPropagation();
  if(e.stopImmediatePropagation) e.stopImmediatePropagation();

  if(addMenu){
    const rootId = addMenu.dataset.sailingRootAddMenu || 'sailing_top';
    if(yfdSailingRootDuplicateTap(e, 'add-menu:' + rootId)) return;
    openSailingRootAddMenu(rootId);
    return;
  }

  if(addType){
    const rootId = addType.dataset.sailingRootId || 'sailing_top';
    const type = addType.dataset.sailingRootAddType || 'area';
    if(yfdSailingRootDuplicateTap(e, 'add-type:' + rootId + ':' + type)) return;
    openSailingRootCreateItemModal(rootId, type);
    return;
  }

  if(createItem){
    if(yfdSailingRootDuplicateTap(e, 'create-item')) return;
    submitSailingRootCreateItem();
    return;
  }

  if(openItem){
    const id = openItem.dataset.openSailingRootItem || '';
    if(yfdSailingRootDuplicateTap(e, 'open-item:' + id)) return;
    if(typeof yfdBuilderShouldIgnoreOpenTap === 'function' && yfdBuilderShouldIgnoreOpenTap()) return;
    openSailingRootItemScreen(id);
    return;
  }

  if(editBtn){
    const id = editBtn.dataset.sailingRootEdit || '';
    if(yfdSailingRootDuplicateTap(e, 'edit:' + id)) return;
    openSailingRootEditModal(id);
    return;
  }

  if(saveEdit){
    const id = saveEdit.dataset.sailingRootSaveEdit || '';
    if(yfdSailingRootDuplicateTap(e, 'save-edit:' + id)) return;
    saveSailingRootEdit(id);
    return;
  }

  if(deleteBtn){
    const id = deleteBtn.dataset.sailingRootDelete || '';
    if(yfdSailingRootDuplicateTap(e, 'delete:' + id)) return;
    openSailingRootDeleteModal(id);
    return;
  }

  if(confirmDelete){
    const id = confirmDelete.dataset.sailingRootConfirmDelete || '';
    if(yfdSailingRootDuplicateTap(e, 'confirm-delete:' + id)) return;
    deleteSailingRootItem(id);
    return;
  }

  if(addInstance){
    const id = addInstance.dataset.sailingAddInstance || '';
    if(yfdSailingRootDuplicateTap(e, 'add-instance:' + id)) return;
    addSailingEquipmentInstance(id);
    return;
  }
}

document.addEventListener('click', handleSailingRootSafeCaptureEvent, true);
document.addEventListener('touchend', handleSailingRootSafeCaptureEvent, true);

document.addEventListener('click', e => {
  const sticker = e.target.closest('[data-sticker-ref]');
  if(sticker){
    e.preventDefault();
    e.stopPropagation();
    openStickerModal(sticker.dataset.stickerRef);
    return;
  }

  const openMenu = e.target.closest('[data-open-menu]');
  if(openMenu){ openSideMenu(); return; }




  const yachtLock = e.target.closest('[data-yacht-lock]');
  if(yachtLock){
    const yachtId = yachtLock.dataset.yachtLock || '';
    const yacht = state.yachts.find(y => y.id === yachtId);
    if(!yacht) return;

    if(yacht.locked){
      e.preventDefault();
      yachtLock.checked = true;
      openUnlockYachtModal(yachtId);
      return;
    }

    setYachtLocked(yachtId, true);
    return;
  }

  const confirmUnlockYacht = e.target.closest('[data-confirm-unlock-yacht]');
  if(confirmUnlockYacht){
    setYachtLocked(confirmUnlockYacht.dataset.confirmUnlockYacht || '', false);
    closeBuilderModal();
    return;
  }

  const deleteYachtBtn = e.target.closest('[data-delete-yacht]');
  if(deleteYachtBtn){
    e.preventDefault();
    e.stopPropagation();
    openDeleteYachtModal(deleteYachtBtn.dataset.deleteYacht || '');
    return;
  }

  const confirmDeleteYacht = e.target.closest('[data-confirm-delete-yacht]');
  if(confirmDeleteYacht){
    e.preventDefault();
    deleteYacht(confirmDeleteYacht.dataset.confirmDeleteYacht || '');
    return;
  }

  const openYachtSetup = e.target.closest('[data-open-yacht-setup]');
  if(openYachtSetup){
    openYachtSetupModal();
    return;
  }

  const yachtType = e.target.closest('[data-yacht-type]');
  if(yachtType){
    document.querySelectorAll('[data-yacht-type]').forEach(btn => btn.classList.remove('is-active'));
    yachtType.classList.add('is-active');
    const rig = document.querySelector('.yfd-setup-rig');
    if(rig) rig.hidden = yachtType.dataset.yachtType !== 'sailing';
    updateYachtSetupStartMethods();
    return;
  }

  const yachtHulls = e.target.closest('[data-yacht-hulls]');
  if(yachtHulls){
    document.querySelectorAll('[data-yacht-hulls]').forEach(btn => btn.classList.remove('is-active'));
    yachtHulls.classList.add('is-active');
    updateYachtSetupStartMethods();
    return;
  }

  const yachtRig = e.target.closest('[data-yacht-rig]');
  if(yachtRig){
    document.querySelectorAll('[data-yacht-rig]').forEach(btn => btn.classList.remove('is-active'));
    yachtRig.classList.add('is-active');
    updateYachtSetupStartMethods();
    return;
  }

  const createYachtMethod = e.target.closest('[data-create-yacht-method]');
  if(createYachtMethod){
    submitYachtSetup(createYachtMethod.dataset.createYachtMethod || 'scratch');
    return;
  }

  const openYacht = e.target.closest('[data-open-yacht], [data-open-builder-from-yacht]');
  if(openYacht){
    const id = openYacht.dataset.openYacht || openYacht.dataset.openBuilderFromYacht;
    const yacht = state.yachts.find(y => y.id === id);
    if(yacht){
      state.activeYachtId = yacht.id;
      state.builderHullCount = yacht.hullCount || 1;
      yfdClearForwardStack();
      saveState();
      openActiveYacht();
    }
    return;
  }

  const closeMenu = e.target.closest('[data-close-menu]');
  if(closeMenu && (closeMenu === e.target || closeMenu.dataset.closeMenu !== undefined)){
    closeSideMenu();
    return;
  }

  const quickShot = e.target.closest('[data-quick-shot]');
  if(quickShot){ openQuickShot(); return; }

  const back = e.target.closest('[data-back]');
  if(back){ forceBack(); return; }

  const forward = e.target.closest('[data-forward]');
  if(forward){ goForward(); return; }

  const gallery = e.target.closest('[data-open-gallery]');
  if(gallery){ openGalleryStub(); return; }

  const addDeck = e.target.closest('[data-add-deck]');
  if(addDeck){ openAddDeckModal(); return; }

  const openBuilder = e.target.closest('[data-open-builder]');
  if(openBuilder){
    closeConfigModal();
    yfdClearForwardStack();
    renderCustomBuilderScreenV2();
    return;
  }

  const builderHulls = e.target.closest('[data-builder-hulls]');
  if(builderHulls){
    setBuilderHullCount(builderHulls.dataset.builderHulls);
    return;
  }

  const builderAddDeck = e.target.closest('[data-builder-add-deck]');
  if(builderAddDeck){
    const scope = builderAddDeck.dataset.builderAddDeck;
    const hullId = builderAddDeck.dataset.builderHull || '';
    openBuilderAddDeckModal(scope, hullId);
    return;
  }

  const closeBuilder = e.target.closest('[data-close-builder-modal]');
  if(closeBuilder){
    closeBuilderModal();
    return;
  }

  const builderBackdrop = e.target.closest('[data-builder-modal-backdrop]');
  if(builderBackdrop && e.target === builderBackdrop){
    closeBuilderModal();
    return;
  }

  const builderCreateDeck = e.target.closest('[data-builder-create-deck]');
  if(builderCreateDeck){
    submitBuilderAddDeckModal();
    return;
  }


  const builderLock = e.target.closest('[data-builder-lock]');
  if(builderLock){
    e.preventDefault();
    e.stopPropagation();

    const id = builderLock.dataset.builderLock || '';
    const found = findBuilderLockTarget(id);
    if(!found || !found.target) return;

    if(isBuilderInheritedLocked(id)){
      openBuilderLockedNotice('Parent branch is locked');
      return;
    }

    if(found.target.locked){
      openUnlockBuilderModal(id);
      return;
    }

    setBuilderLocked(id, true);
    return;
  }

  const confirmUnlockBuilder = e.target.closest('[data-confirm-unlock-builder]');
  if(confirmUnlockBuilder){
    setBuilderLocked(confirmUnlockBuilder.dataset.confirmUnlockBuilder || '', false);
    closeBuilderModal();
    return;
  }

  const deleteBuilderDeck = e.target.closest('[data-delete-builder-deck]');
  if(deleteBuilderDeck){
    e.preventDefault();
    e.stopPropagation();
    const deckId = deleteBuilderDeck.dataset.deleteBuilderDeck || '';
    if(isBuilderLocked(deckId)){
      openBuilderLockedNotice('Deck is locked');
      return;
    }
    openBuilderDeleteDeckModal(deckId);
    return;
  }

  const confirmDeleteBuilderDeck = e.target.closest('[data-confirm-delete-builder-deck]');
  if(confirmDeleteBuilderDeck){
    e.preventDefault();
    submitBuilderDeleteDeck();
    return;
  }

  const deleteBuilderItem = e.target.closest('[data-delete-builder-item]');
  if(deleteBuilderItem){
    e.preventDefault();
    e.stopPropagation();
    const itemId = deleteBuilderItem.dataset.deleteBuilderItem || '';
    if(isBuilderLocked(itemId)){
      openBuilderLockedNotice('Item or parent branch is locked');
      return;
    }
    openBuilderDeleteItemModal(itemId, deleteBuilderItem.dataset.builderItemType || 'area');
    return;
  }

  const confirmDeleteBuilderItem = e.target.closest('[data-confirm-delete-builder-item]');
  if(confirmDeleteBuilderItem){
    e.preventDefault();
    submitBuilderDeleteItem();
    return;
  }

  const openBuilderArea = e.target.closest('[data-open-builder-area]');
  if(openBuilderArea){
    if(yfdBuilderShouldIgnoreOpenTap()) return;
    yfdClearForwardStack();
    renderBuilderAreaScreen(openBuilderArea.dataset.openBuilderArea);
    return;
  }

  const areaChildMenu = e.target.closest('[data-builder-add-area-child-menu]');
  if(areaChildMenu){
    openBuilderAddAreaChildMenu(areaChildMenu.dataset.builderParentArea || '');
    return;
  }

  const areaChildKind = e.target.closest('[data-builder-add-area-child]');
  if(areaChildKind){
    openBuilderAddAreaChildModal(areaChildKind.dataset.builderParentArea || builderModalState.areaId || '', areaChildKind.dataset.builderAddAreaChild || '');
    return;
  }

  const areaChildCreate = e.target.closest('[data-builder-create-area-child]');
  if(areaChildCreate){
    submitBuilderAddAreaChildModal();
    return;
  }

  const hullChildKind = e.target.closest('[data-builder-add-hull-child]');
  if(hullChildKind){
    openBuilderAddHullChildModal(
      hullChildKind.dataset.builderParentHull || '',
      hullChildKind.dataset.builderAddHullChild || ''
    );
    return;
  }

  const hullChildCreate = e.target.closest('[data-builder-create-hull-child]');
  if(hullChildCreate){
    submitBuilderAddHullChildModal();
    return;
  }

  const openBuilderHull = e.target.closest('[data-open-builder-hull]');
  if(openBuilderHull){
    if(yfdBuilderShouldIgnoreOpenTap()) return;
    yfdClearForwardStack();
    renderBuilderHullScreen(openBuilderHull.dataset.openBuilderHull);
    return;
  }

  const openBuilderDeck = e.target.closest('[data-open-builder-deck]');
  if(openBuilderDeck){
    if(yfdBuilderShouldIgnoreOpenTap()) return;
    yfdClearForwardStack();
    renderBuilderDeckScreen(openBuilderDeck.dataset.openBuilderDeck);
    return;
  }

  const builderEquipment = e.target.closest('[data-open-builder-equipment]');
  if(builderEquipment){
    if(yfdBuilderShouldIgnoreOpenTap()) return;
    yfdClearForwardStack();
    renderBuilderEquipmentScreen(builderEquipment.dataset.openBuilderEquipment);
    return;
  }

  const builderAddInstance = e.target.closest('[data-builder-add-instance]');
  if(builderAddInstance){
    addBuilderEquipmentInstance(builderAddInstance.dataset.builderAddInstance);
    return;
  }

  const builderAddChildMenu = e.target.closest('[data-builder-add-child-menu]');
  if(builderAddChildMenu){
    openBuilderAddChildMenu(builderAddChildMenu.dataset.builderParentDeck || '');
    return;
  }

  const builderAddChild = e.target.closest('[data-builder-add-child]');
  if(builderAddChild){
    const deckId = builderAddChild.dataset.builderParentDeck || builderModalState.deckId || '';
    const childType = builderAddChild.dataset.builderAddChild || '';
    openBuilderAddChildModal(deckId, childType);
    return;
  }

  const builderCreateChild = e.target.closest('[data-builder-create-child]');
  if(builderCreateChild){
    submitBuilderAddChildModal();
    return;
  }


  const readyLock = e.target.closest('[data-ready-lock]');
  if(readyLock){
    e.preventDefault();
    e.stopPropagation();

    const id = readyLock.dataset.readyLock || '';
    if(isReadyInheritedLocked(id)){
      openBuilderLockedNotice('Yacht is locked');
      return;
    }

    if(state.readyLocks[id]){
      openUnlockReadyModal(id);
      return;
    }

    setReadyLocked(id, true);
    return;
  }

  const confirmUnlockReady = e.target.closest('[data-confirm-unlock-ready]');
  if(confirmUnlockReady){
    setReadyLocked(confirmUnlockReady.dataset.confirmUnlockReady || '', false);
    closeBuilderModal();
    return;
  }

  const openConfig = e.target.closest('[data-open-config]');
  if(openConfig){ openConfigModal(); return; }

  const closeConfig = e.target.closest('[data-close-config]');
  if(closeConfig){ closeConfigModal(); return; }

  const backdrop = e.target.closest('[data-config-backdrop]');
  if(backdrop && e.target === backdrop){ closeConfigModal(); return; }

  const toggle = e.target.closest('[data-toggle-layer]');
  if(toggle){
    toggleLayer(toggle.dataset.toggleLayer);
    closeConfigModal();
    openConfigModal();
    return;
  }


  const deleteReadyCustomDeckBtn = e.target.closest('[data-delete-ready-custom-deck]');
  if(deleteReadyCustomDeckBtn){
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    openReadyCustomDeckDeleteModal(deleteReadyCustomDeckBtn.dataset.deleteReadyCustomDeck || '');
    return;
  }

  const confirmDeleteReadyCustomDeck = e.target.closest('[data-confirm-delete-ready-custom-deck]');
  if(confirmDeleteReadyCustomDeck){
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    deleteReadyCustomDeck(confirmDeleteReadyCustomDeck.dataset.confirmDeleteReadyCustomDeck || '');
    return;
  }

  const saveStickerBtn = e.target.closest('[data-save-sticker]');
  if(saveStickerBtn){
    const input = document.getElementById('yfdStickerText');
    saveSticker(modalState.stickerRef, input ? input.value : '');
    return;
  }

  const clearStickerBtn = e.target.closest('[data-clear-sticker]');
  if(clearStickerBtn){
    saveSticker(modalState.stickerRef, '');
    return;
  }

  const openService = e.target.closest('[data-service-ref]');
  if(openService){
    openServiceHook(openService.dataset.serviceRef, openService.dataset.instanceName);
    return;
  }


  const readyContainer = e.target.closest('[data-ready-container]');
  if(readyContainer){
    const layerId = readyContainer.dataset.readyContainer || '';
    const ref = readyContainer.dataset.readyItemRef || '';
    const layer = getLayer(layerId);
    const item = layer ? (layer.items || []).find(it => getStickerRef(layer.id, it) === ref) : null;
    const targetId = ensureReadyContainerNode(layerId, item);
    if(targetId) renderModule(targetId);
    return;
  }

  const addInstance = e.target.closest('[data-add-instance]');
  if(addInstance){
    openAddInstanceModal(addInstance.dataset.addInstance);
    return;
  }

  const addItem = e.target.closest('[data-add-item]');
  if(addItem){
    openAddItemModal(addItem.dataset.addItem);
    return;
  }

  const closeAction = e.target.closest('[data-close-action]');
  if(closeAction){ closeActionModal(); return; }

  const actionBackdrop = e.target.closest('[data-action-backdrop]');
  if(actionBackdrop && e.target === actionBackdrop){ closeActionModal(); return; }

  const typeChoice = e.target.closest('[data-item-type]');
  if(typeChoice){
    document.querySelectorAll('.yfd-choice').forEach(x => x.classList.remove('is-selected'));
    typeChoice.classList.add('is-selected');
    return;
  }

  const createItem = e.target.closest('[data-create-item]');
  if(createItem){
    const input = document.getElementById('yfdItemName');
    addCustomItem(modalState.addItemModuleId, input ? input.value : '', getSelectedItemType());
    closeActionModal();
    return;
  }

  const createDeck = e.target.closest('[data-create-deck]');
  if(createDeck){
    const input = document.getElementById('yfdDeckName');
    addCustomDeck(input ? input.value : '');
    closeActionModal();
    openConfigModal();
    return;
  }

  const createInstance = e.target.closest('[data-create-instance]');
  if(createInstance){
    const input = document.getElementById('yfdInstanceName');
    addEquipmentInstance(modalState.addInstanceTitle, input ? input.value : '');
    closeActionModal();
    return;
  }

  const open = e.target.closest('[data-open]');
  if(open){ renderModule(open.dataset.open); return; }

  const eq = e.target.closest('[data-eq]');
  if(eq){ renderEquipment(eq.dataset.eq); return; }

});

let yfdTouchStartX = 0;
let yfdTouchStartY = 0;
let yfdSwipeActive = false;
let yfdSwipeMoved = false;
let yfdSwipeCompleting = false;

function resetSwipeVisual(){
  const module = document.getElementById('module');
  if(module){
    module.classList.remove('is-swiping-back', 'is-swipe-returning', 'is-swipe-completing');
    module.style.transform = '';
    module.style.opacity = '';
  }
  document.body.classList.remove('yfd-swipe-peek');
}

document.addEventListener('touchstart', e => {
  if(yfdSwipeCompleting) return;

  const t = e.touches && e.touches[0];
  if(!t) return;

  yfdTouchStartX = t.clientX;
  yfdTouchStartY = t.clientY;
  yfdSwipeMoved = false;

  const trimaranRail = e.target && e.target.closest && e.target.closest('.yfd-builder-v2-hulls-3');
  yfdSwipeActive = !trimaranRail && navStack.length > 0 && yfdTouchStartX < 52;
}, {passive:true});

document.addEventListener('touchmove', e => {
  if(!yfdSwipeActive || yfdSwipeCompleting) return;

  const t = e.touches && e.touches[0];
  if(!t) return;

  const dx = t.clientX - yfdTouchStartX;
  const dy = Math.abs(t.clientY - yfdTouchStartY);

  if(dx < 0 || dy > 48){
    yfdSwipeActive = false;
    resetSwipeVisual();
    return;
  }

  if(dx < 6) return;

  const module = document.getElementById('module');
  if(!module) return;

  if(dy < 34){ e.preventDefault(); }

  yfdSwipeMoved = true;

  const width = Math.max(window.innerWidth || 390, 320);
  const resistance = dx < 170 ? 1.08 : .88;
  const move = Math.min(dx * resistance, width * .82);
  const progress = Math.min(move / width, 1);

  module.classList.add('is-swiping-back');
  module.classList.remove('is-swipe-returning', 'is-swipe-completing');
  document.body.classList.add('yfd-swipe-peek');

  module.style.transform = `translate3d(${move}px,0,0) scale(${1 - progress * .018})`;
  module.style.opacity = String(Math.max(.78, 1 - progress * .20));
}, {passive:false});

document.addEventListener('touchend', e => {
  if(!yfdSwipeActive || yfdSwipeCompleting) return;

  const t = e.changedTouches && e.changedTouches[0];
  const module = document.getElementById('module');

  yfdSwipeActive = false;

  if(!t || !module){
    resetSwipeVisual();
    return;
  }

  const dx = t.clientX - yfdTouchStartX;
  const dy = Math.abs(t.clientY - yfdTouchStartY);
  const width = Math.max(window.innerWidth || 390, 320);
  const shouldGoBack = yfdSwipeMoved && dx > Math.min(96, width * .23) && dy < 58 && navStack.length > 0;

  module.classList.remove('is-swiping-back');

  if(shouldGoBack){
    yfdSwipeCompleting = true;
    module.classList.add('is-swipe-completing');
    module.style.transform = `translate3d(${width}px,0,0) scale(.985)`;
    module.style.opacity = '.74';

    window.setTimeout(() => {
      forceBack();
      yfdSwipeCompleting = false;
      resetSwipeVisual();
    }, 210);
    return;
  }

  module.classList.add('is-swipe-returning');
  module.style.transform = 'translate3d(0,0,0)';
  module.style.opacity = '1';

  window.setTimeout(() => {
    resetSwipeVisual();
  }, 240);
}, {passive:true});

document.addEventListener('touchcancel', () => {
  yfdSwipeActive = false;
  yfdSwipeCompleting = false;
  resetSwipeVisual();
}, {passive:true});



/*
  DEV NOTE — LocalStorage diagnostics / reset helpers

  State key:
  - yfd_state_v1

  Active screen key:
  - yfd_active_screen_v2

  Browser console helpers:
  - yfdDebugState()
  - yfdClearActiveScreen()
  - yfdResetBuilderBelowDecks()
  - yfdResetAllState()

  Use carefully. These helpers are for development/testing only.
*/

window.yfdDebugBuilderHulls = function(){
  const raw = localStorage.getItem(STORAGE_KEY);
  const saved = raw ? JSON.parse(raw) : null;
  const builder = saved && saved.builder ? saved.builder : state.builder;
  console.table((builder.hulls || []).map(h => ({
    hull:h.id,
    decks:(h.decks || []).map(d => d.title + ' [' + (d.hullId || 'no-hull') + ' / mode ' + (d.hullMode || '?') + ']').join(', ')
  })));
  return builder.hulls;
};

window.yfdDebugState = function(){
  return {
    stateKey: STORAGE_KEY,
    activeScreenKey: YFD_ACTIVE_SCREEN_KEY,
    state: JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'),
    activeScreen: JSON.parse(localStorage.getItem(YFD_ACTIVE_SCREEN_KEY) || 'null')
  };
};

window.yfdClearActiveScreen = function(){
  localStorage.removeItem(YFD_ACTIVE_SCREEN_KEY);
  console.log('YFD active screen cleared');
};

window.yfdResetBuilderBelowDecks = function(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return console.log('No YFD state found');
  const saved = JSON.parse(raw);
  if(saved.builder){
    saved.builder = stripBuilderBelowDecks(saved.builder);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    localStorage.removeItem(YFD_ACTIVE_SCREEN_KEY);
    console.log('YFD builder cleaned below decks. Reload page.');
  }
};

window.yfdResetAllState = function(){
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(YFD_ACTIVE_SCREEN_KEY);
  console.log('YFD state cleared. Reload page.');
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('YFD CORE v2 READY');
  loadState();
  if(!yfdRestoreActiveScreen()){
    renderOverview();
  }
});
