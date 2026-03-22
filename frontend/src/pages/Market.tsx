import PageHero from "../components/ui/PageHero";

const swot = {
  Strengths: {
    color: "bg-green-50 border-green-200",
    title: "text-green-800",
    items: [
      "Locally produced soy-based foods that are affordable and nutritious",
      "High community interest in soy products — 92% rated interest 4–5 out of 5",
      "Integration of nutrition education with food production",
      "Partnerships with farmers, Community Health Workers, and health centers",
      "Products co-created with community ensuring cultural relevance",
    ],
  },
  Weaknesses: {
    color: "bg-amber-50 border-amber-200",
    title: "text-amber-800",
    items: [
      "New brand with limited recognition in the early stage",
      "Limited financial resources during startup phase",
      "Soy foods still unfamiliar to some households in preparation formats",
      "Requires community awareness investment to increase adoption",
      "Small processing capacity initially limiting scale",
    ],
  },
  Opportunities: {
    color: "bg-green-50 border-green-200",
    title: "text-green-800",
    items: [
      "Government support for nutrition improvement and food security in Rwanda",
      "Increasing demand for affordable protein-rich foods",
      "Expansion of soybean farming with 46% projected yield increase",
      "Potential partnerships with NGOs, schools, and nutrition programs",
      "Untapped institutional market in ECD centers and schools",
    ],
  },
  Threats: {
    color: "bg-red-50 border-red-200",
    title: "text-red-800",
    items: [
      "Competition from maize flour, fortified cereals, and similar foods",
      "Fluctuations in soybean supply or market prices",
      "Low purchasing power among some households",
      "Food safety regulations and certification requirements",
      "Potential new entrants from agro-processing sector",
    ],
  },
};

const competitors = [
  {
    name: "Africa Improved Foods (AIF)",
    services: "Fortified blended foods (CSB+, Likuni Phala)",
    strength: "Strong brand, government contracts, WFP partnerships",
    weakness: "Higher-priced; not tailored to rural low-income households",
    segment: "Nationwide / Institutional",
    level: "Medium",
  },
  {
    name: "Local Informal Soy Mills",
    services: "Raw soy flour, unpackaged soy products",
    strength: "Accessible, affordable, familiar to communities",
    weakness: "Inconsistent quality, poor hygiene, no nutrition education",
    segment: "Local rural households",
    level: "Low",
  },
  {
    name: "Cerelac (Imported Brand)",
    services: "Infant cereals, fortified weaning food",
    strength: "High quality, internationally trusted brand",
    weakness: "Expensive — unaffordable for low-income families",
    segment: "Urban / Middle-income",
    level: "Low",
  },
  {
    name: "NGO Nutrition Programs (UNICEF/WFP)",
    services: "Supplementary feeding, therapeutic foods",
    strength: "Free access, high trust, government alignment",
    weakness: "Unsustainable supply; program-based not market-based",
    segment: "Vulnerable households",
    level: "Low",
  },
];

const levelColors: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
};

const marketData = [
  {
    label: "TAM",
    fullLabel: "Total Addressable Market",
    desc: "Low-income households across Rwanda lacking access to affordable protein foods",
    value: "40.56B RWF",
    sub: "/year",
    detail: "1,560,000 households × 26,000 RWF/year",
  },
  {
    label: "SAM",
    fullLabel: "Serviceable Available Market",
    desc: "Low-income households in Ngororero District",
    value: "1.48B RWF",
    sub: "/year",
    detail: "57,000 households × 26,000 RWF/year",
  },
  {
    label: "SOM",
    fullLabel: "Serviceable Obtainable Market",
    desc: "Realistic early share for SoyaThrive (5% of SAM)",
    value: "74.1M RWF",
    sub: "/year",
    detail: "2,850 households × 26,000 RWF/year",
  },
];

const segments = [
  {
    title: "Households with Children Under Five",
    desc: "Primary segment — rural families in Ngororero whose young children need protein-rich nutrition to prevent stunting. Estimated 57,000 low-income households targeted.",
    color: "border-green-300 bg-green-50",
    accent: "text-green-700",
  },
  {
    title: "Pregnant & Breastfeeding Mothers",
    desc: "Health workers encourage increased protein intake during pregnancy and lactation. SoyaThrive products provide an affordable option for maternal nutrition.",
    color: "border-amber-300 bg-amber-50",
    accent: "text-amber-700",
  },
  {
    title: "Schools & ECD Centers",
    desc: "150–200 institutions in Ngororero providing meals to over 20,000 children annually — key institutional channel for bulk supply of fortified soy products.",
    color: "border-green-300 bg-green-50",
    accent: "text-green-700",
  },
  {
    title: "Local Retailers & Small Shops",
    desc: "Distribution partners who supply food products to households in rural communities — key channel for last-mile product delivery.",
    color: "border-amber-300 bg-amber-50",
    accent: "text-amber-700",
  },
];

export default function Market() {
  return (
    <>
      <PageHero
        badge="Market Analysis"
        title="Industry &"
        highlight="Market"
        subtitle="Understanding the soy nutrition landscape in Rwanda — market opportunity, competition, and strategic positioning for SoyaThrive."
        color="green"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Industry background */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Background</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              SoyaThrive operates in Rwanda's agriculture and agro-processing sector — transforming locally
              grown soybeans into affordable, high-protein food products. Rwanda's government recently introduced
              new high-yield soybean varieties projected to increase soybean production by 46%, creating a
              favorable environment for community-level soy processing.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Despite 86% of surveyed households in Ngororero reporting awareness of soy foods, structured
              and packaged soy products are not widely available in rural communities. This gap — combined
              with the high protein deficiency rate and strong consumer interest — presents a clear market
              opportunity for SoyaThrive.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { label: "RDB", desc: "Rwanda Development Board supports agro-processing business registration and investment" },
              { label: "RAB", desc: "Rwanda Agriculture Board promotes improved soybean seed varieties and farmer training" },
              { label: "RBC", desc: "Rwanda Biomedical Center nutrition programs align with SoyaThrive's health goals" },
              { label: "WFP", desc: "World Food Programme nutrition partnerships create institutional market opportunities" },
            ].map((g) => (
              <div key={g.label} className="bg-white rounded-xl p-4 border border-gray-100 flex gap-3">
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded h-fit">{g.label}</span>
                <p className="text-xs text-gray-500">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market size */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Market Size</h2>
          <p className="text-gray-500 text-sm mb-8">
            Based on bi-weekly purchases of 1,000 RWF/household = 26,000 RWF annually per household.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {marketData.map((m, i) => (
              <div key={m.label} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-extrabold text-gray-50">{m.label}</div>
                <div className="relative">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-extrabold text-sm text-white ${["bg-green-700", "bg-amber-600", "bg-green-800"][i]}`}>
                    {m.label}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{m.fullLabel}</div>
                  <div className="text-2xl font-extrabold text-gray-900 mb-0.5">{m.value}<span className="text-base text-gray-400">{m.sub}</span></div>
                  <p className="text-xs text-gray-500 mb-2 mt-2">{m.desc}</p>
                  <span className="text-xs bg-gray-50 border border-gray-100 text-gray-400 px-2 py-0.5 rounded font-mono">{m.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market segments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Market Segments</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {segments.map((s) => (
              <div key={s.title} className={`border rounded-2xl p-6 ${s.color}`}>
                <h3 className={`font-bold text-lg mb-2 ${s.accent}`}>{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-16">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Competitor Overview</h2>
            <p className="text-sm text-gray-500 mt-1">Key players in Rwanda's nutrition and soy food processing sector.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  {["Organization", "Services", "Key Strength", "Key Weakness", "Target Segment", "Threat Level"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {competitors.map((c) => (
                  <tr key={c.name} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{c.name}</td>
                    <td className="px-5 py-4 text-gray-500 max-w-[140px]">{c.services}</td>
                    <td className="px-5 py-4 text-gray-600 max-w-[160px]">{c.strength}</td>
                    <td className="px-5 py-4 text-gray-500 max-w-[160px]">{c.weakness}</td>
                    <td className="px-5 py-4">
                      <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">{c.segment}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[c.level]}`}>{c.level}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SWOT */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">SWOT Analysis</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {(Object.entries(swot) as [string, { color: string; title: string; items: string[] }][]).map(([key, val]) => (
              <div key={key} className={`rounded-3xl border p-6 sm:p-8 ${val.color}`}>
                <h3 className={`font-extrabold text-lg capitalize mb-4 ${val.title}`}>{key}</h3>
                <ul className="space-y-2.5">
                  {val.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-1 shrink-0 text-gray-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
