export const company = {
  name: "B.V Dordtsche Petroleum Maatschappij",
  shortName: "Dordtsche Petroleum",
  address: "Carel Van Bylandtlaan 30, The Hague, 2596 HR, Netherlands",
  email: "info@dordtsche-petrol.nl",
  kvk: "27002689",
  hours: "Mon – Fri : 9:00 am – 5:00 pm CET",
  tagline: "Refined Petroleum Supply & Trading",
};

/** Absolute 1200x630 social preview image (social crawlers require absolute URLs). */
export const OG_IMAGE =
  "https://project--3ef5d425-ed0b-4b9d-88ab-c9427439a79f.lovable.app/og-image.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  specs: { label: string; value: string }[];
  description: string[];
  metrics: { label: string; value: number }[];
};

export const services: Service[] = [
  {
    slug: "d2-diesel-gas-oil",
    name: "D2 Diesel Gas Oil",
    short: "Gasoil L-0.2-62 GOST 305-82, supplied on contract and trial shipment.",
    summary:
      "D2 gas oil is a middle distillate fraction supplied to GOST 305-82 standards for power generation, heavy transport and industrial burners.",
    specs: [
      { label: "Origin", value: "Multiple refineries" },
      { label: "Specification", value: "GOST 305-82 / L-0.2-62" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "Our D2 gas oil programme covers both long-term contract volumes and immediate trial shipments. Every parcel is drawn from allocated refinery stock and is available for inspection prior to lifting.",
      "Quality and quantity are determined at the loading port by SGS or an equivalent independent inspector, with the certificate issued as final documentation for settlement.",
    ],
    metrics: [
      { label: "Spec compliance", value: 98 },
      { label: "On-time lifting", value: 94 },
    ],
  },
  {
    slug: "ultra-low-sulphur-diesel",
    name: "Ultra Low Sulphur Diesel",
    short: "ULSD at 15 PPM and 10 PPM sulphur content for regulated markets.",
    summary:
      "Ultra low sulphur diesel at 10 PPM and 15 PPM, meeting emission requirements for road transport and modern after-treatment systems.",
    specs: [
      { label: "Grades", value: "10 PPM / 15 PPM" },
      { label: "Application", value: "Road transport, gensets" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "ULSD is our most requested grade. We hold allocation in both 10 PPM and 15 PPM specification and can structure a rolling monthly contract or a single trial cargo to validate quality.",
      "Buyers are asked to provide a financial statement from their bank confirming financial capability before negotiations are opened. Only direct end buyers, appointed representatives and mandates are considered.",
    ],
    metrics: [
      { label: "Spec compliance", value: 99 },
      { label: "Repeat buyers", value: 91 },
    ],
  },
  {
    slug: "biodiesel-b100",
    name: "Biodiesel (B100)",
    short: "Pure fatty acid methyl ester for blending and low-carbon programmes.",
    summary:
      "B100 biodiesel supplied for blending into conventional diesel pools or direct use in compatible engines and burners.",
    specs: [
      { label: "Grade", value: "B100 (FAME)" },
      { label: "Application", value: "Blending, industrial heat" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "B100 supports buyers working to reduce the carbon intensity of their fuel pool without replacing existing distribution infrastructure.",
      "We advise on blend ratios, cold-flow behaviour and storage handling so that the delivered product performs in the buyer's own climate and tankage.",
    ],
    metrics: [
      { label: "Spec compliance", value: 97 },
      { label: "Blend accuracy", value: 96 },
    ],
  },
  {
    slug: "residual-fuel-oil",
    name: "Residual Fuel Oil (RFO)",
    short: "Heavy residual grades for marine propulsion and industrial power.",
    summary:
      "Residual fuel oil for large bore marine engines, boilers and industrial power generation, available in the common viscosity grades.",
    specs: [
      { label: "Grades", value: "Common viscosity grades" },
      { label: "Application", value: "Marine, boilers, power" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "RFO parcels are offered against confirmed vessel or terminal nominations, with heating and handling requirements agreed in advance of loading.",
      "Viscosity, density, sulphur and water content are certified at load port so that the receiving plant can plan combustion settings before the cargo arrives.",
    ],
    metrics: [
      { label: "Spec compliance", value: 95 },
      { label: "Nomination accuracy", value: 92 },
    ],
  },
  {
    slug: "aviation-gasoline-avgas",
    name: "Aviation Gasoline (AVGAS)",
    short: "AVGAS for piston aircraft, handled under strict cleanliness control.",
    summary:
      "Aviation gasoline for piston-engine aircraft, moved under strict cleanliness and segregation controls from refinery to receiving depot.",
    specs: [
      { label: "Product", value: "AVGAS" },
      { label: "Application", value: "Piston aircraft" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "AVGAS demands dedicated handling. Every step of the chain — tankage, lines, hoses and sampling — is segregated and documented before a parcel is released.",
      "Certificates of quality and analysis accompany each lifting, together with the full batch traceability record required by aviation authorities.",
    ],
    metrics: [
      { label: "Spec compliance", value: 99 },
      { label: "Cleanliness checks", value: 100 },
    ],
  },
  {
    slug: "jet-fuel-a1-kerosene",
    name: "Jet Fuel (JET A-1, Kerosene)",
    short: "JET A-1 and kerosene for airport supply and industrial use.",
    summary:
      "JET A-1 and kerosene supplied to airline, airport and industrial buyers, with full batch documentation on every parcel.",
    specs: [
      { label: "Grades", value: "JET A-1, Kerosene" },
      { label: "Application", value: "Aviation, industrial" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "Jet fuel is our most tightly controlled programme. Parcels are released only against a complete refinery certificate and independent inspection at load port.",
      "We work with airport fuel farms and into-plane operators to align lifting windows with their own uplift schedules and storage capacity.",
    ],
    metrics: [
      { label: "Spec compliance", value: 99 },
      { label: "Documentation complete", value: 100 },
    ],
  },
  {
    slug: "marine-diesel-oil",
    name: "Marine Diesel Oil (MDO)",
    short: "MDO bunkers for coastal, offshore and deep-sea operators.",
    summary:
      "Marine diesel oil for auxiliary engines, offshore support vessels and coastal fleets, delivered on FOB terms at nominated ports.",
    specs: [
      { label: "Product", value: "MDO" },
      { label: "Application", value: "Marine bunkers" },
      { label: "Delivery Term", value: "FOB" },
      { label: "Inspection", value: "SGS or equivalent" },
    ],
    description: [
      "MDO supply is coordinated around the vessel's schedule, with quantities confirmed against the nomination and bunker delivery note.",
      "Sulphur limits are matched to the emission control areas on the buyer's trading route so the fleet stays compliant across the voyage.",
    ],
    metrics: [
      { label: "Spec compliance", value: 96 },
      { label: "Bunker punctuality", value: 93 },
    ],
  },
];

export const stats = [
  { value: "7", label: "Refined Products" },
  { value: "40", label: "Delivery Ports" },
  { value: "120", label: "Contract Buyers" },
  { value: "60", label: "Years In Trade" },
];
