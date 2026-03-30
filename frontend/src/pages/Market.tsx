import PageHero from "../components/ui/PageHero";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";
import { Users, Building2, ShoppingBag } from "lucide-react";

const swot = {
  Strengths: {
    accent: "border-l-green-600",
    label: "text-green-700",
    items: [
      "Locally produced soy-based foods that are affordable and nutritious",
      "High community interest in soy products  ,  92% rated interest 4–5 out of 5",
      "Integration of nutrition education with food production",
      "Partnerships with farmers, Community Health Workers, and health centers",
      "Products co-created with community ensuring cultural relevance",
    ],
  },
  Weaknesses: {
    accent: "border-l-amber-500",
    label: "text-amber-700",
    items: [
      "New brand with limited recognition in the early stage",
      "Limited financial resources during startup phase",
      "Soy foods still unfamiliar to some households in preparation formats",
      "Requires community awareness investment to increase adoption",
      "Small processing capacity initially limiting scale",
    ],
  },
  Opportunities: {
    accent: "border-l-green-600",
    label: "text-green-700",
    items: [
      "Government support for nutrition improvement and food security in Rwanda",
      "Increasing demand for affordable protein-rich foods",
      "Expansion of soybean farming with 46% projected yield increase",
      "Potential partnerships with NGOs, schools, and nutrition programs",
      "Untapped institutional market in ECD centers and schools",
    ],
  },
  Threats: {
    accent: "border-l-red-500",
    label: "text-red-700",
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
    weakness: "Expensive  ,  unaffordable for low-income families",
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
    value: "40.56B",
    unit: "RWF / year",
    detail: "1,560,000 households × 26,000 RWF/year",
    color: "bg-green-700",
  },
  {
    label: "SAM",
    fullLabel: "Serviceable Available Market",
    desc: "Low-income households in Ngororero District",
    value: "1.48B",
    unit: "RWF / year",
    detail: "57,000 households × 26,000 RWF/year",
    color: "bg-amber-600",
  },
  {
    label: "SOM",
    fullLabel: "Serviceable Obtainable Market",
    desc: "Realistic early share for SoyaThrive (5% of SAM)",
    value: "74.1M",
    unit: "RWF / year",
    detail: "2,850 households × 26,000 RWF/year",
    color: "bg-green-800",
  },
];

const segmentIcons = [Users, Users, Building2, ShoppingBag];

const segments = [
  {
    title: "Households with Children Under Five",
    desc: "Primary segment  ,  rural families in Ngororero whose young children need protein-rich nutrition to prevent stunting. Estimated 57,000 low-income households targeted.",
    tag: "Primary",
  },
  {
    title: "Pregnant & Breastfeeding Mothers",
    desc: "Health workers encourage increased protein intake during pregnancy and lactation. SoyaThrive products provide an affordable option for maternal nutrition.",
    tag: "Primary",
  },
  {
    title: "Schools & ECD Centers",
    desc: "150–200 institutions in Ngororero providing meals to over 20,000 children annually  ,  key institutional channel for bulk supply of fortified soy products.",
    tag: "Institutional",
  },
  {
    title: "Local Retailers & Small Shops",
    desc: "Distribution partners who supply food products to households in rural communities  ,  key channel for last-mile product delivery.",
    tag: "Distribution",
  },
];

const govPartners = [
  { label: "RDB", desc: "Rwanda Development Board supports agro-processing business registration and investment" },
  { label: "RAB", desc: "Rwanda Agriculture Board promotes improved soybean seed varieties and farmer training" },
  { label: "RBC", desc: "Rwanda Biomedical Center nutrition programs align with SoyaThrive's health goals" },
  { label: "WFP", desc: "World Food Programme nutrition partnerships create institutional market opportunities" },
];

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px bg-amber-500" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{text}</span>
    </div>
  );
}

export default function Market() {
  const { ref: heroRef, inView: heroIn } = useInView();
  const { ref: mktRef, inView: mktIn } = useInView();
  const { ref: segRef, activeIndex: segIdx } = useStaggeredInView(segments.length, 80);
  const { ref: swotRef, inView: swotIn } = useInView();
  const { ref: compRef, inView: compIn } = useInView();

  return (
    <>
      <PageHero
        badge="Market Analysis"
        title="Industry &"
        highlight="Market"
        subtitle="Understanding the soy nutrition landscape in Rwanda  ,  market opportunity, competition, and strategic positioning for SoyaThrive."
        color="green"
        image="/images/market-bg.jpg"
      />

      <div className="max-w-11/12 mx-auto px-6 lg:px-8 py-20">

        {/* Industry Background */}
        <section
          ref={heroRef}
          className={`mb-20 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Industry Context" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
                A Favourable Landscape<br />
                <span className="text-green-700">for Soy Nutrition</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SoyaThrive operates in Rwanda's agriculture and agro-processing sector  ,  transforming
                locally grown soybeans into affordable, high-protein food products. Rwanda's government
                recently introduced new high-yield soybean varieties projected to increase soybean
                production by <span className="font-bold text-green-700">46%</span>, creating a favourable
                environment for community-level soy processing.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Despite 86% of surveyed households in Ngororero reporting awareness of soy foods,
                structured and packaged soy products are not widely available in rural communities.
                This gap  ,  combined with high protein deficiency rates and strong consumer interest  , 
                presents a clear market opportunity for SoyaThrive.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {govPartners.map((g) => (
                <div key={g.label} className="bg-white p-6">
                  <span className="inline-block text-xs font-black bg-green-700 text-white px-2 py-0.5 mb-3 tracking-wide">
                    {g.label}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Size */}
        <section
          ref={mktRef}
          className={`mb-20 transition-all duration-700 ${mktIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Market Size" />
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Total Market<br />
              <span className="text-amber-600">Opportunity</span>
            </h2>
            <p className="text-xs text-gray-400 max-w-xs text-right leading-relaxed">
              Based on bi-weekly purchases of 1,000 RWF/household = 26,000 RWF annually per household.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-gray-200">
            {marketData.map((m, i) => (
              <div key={m.label} className="bg-white p-8 relative overflow-hidden group">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-2 -right-2 text-[7rem] font-black text-gray-50 leading-none select-none pointer-events-none"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {m.label}
                </div>
                <div className={`inline-block text-xs font-black text-white px-2.5 py-1 mb-4 ${m.color}`}>
                  {m.label}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                  {m.fullLabel}
                </div>
                <div className="text-3xl font-black text-gray-900 [font-variant-numeric:tabular-nums] mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-gray-400 mb-4">{m.unit}</div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{m.desc}</p>
                <code className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 block">
                  {m.detail}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Market Segments */}
        <section className="mb-20">
          <Eyebrow text="Target Segments" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Who We Serve
          </h2>
          <div ref={segRef} className="grid sm:grid-cols-2 gap-6">
            {segments.map((s, i) => {
              const Icon = segmentIcons[i];
              return (
                <div
                  key={s.title}
                  className={`border-l-2 border-l-green-700 pl-6 pr-6 py-6 bg-white border border-gray-100 hover:border-l-amber-500 hover:shadow-md transition-all duration-500 ${
                    i < segIdx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-0.5">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-gray-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Competitor Table */}
        <section
          ref={compRef}
          className={`mb-20 transition-all duration-700 ${compIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Competitive Landscape" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
            Competitor Overview
          </h2>
          <p className="text-sm text-gray-400 mb-8">Key players in Rwanda's nutrition and soy food processing sector.</p>
          <div className="border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {["Organization", "Services", "Key Strength", "Key Weakness", "Segment", "Threat"].map((h) => (
                      <th key={h} className="px-5 py-3.5 font-black text-gray-500 text-[10px] uppercase tracking-[0.15em] text-left whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {competitors.map((c, i) => (
                    <tr
                      key={c.name}
                      className="hover:bg-gray-50 transition-colors"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <td className="px-5 py-4 font-bold text-gray-900 whitespace-nowrap">{c.name}</td>
                      <td className="px-5 py-4 text-gray-500 max-w-[140px] text-xs">{c.services}</td>
                      <td className="px-5 py-4 text-gray-600 max-w-[160px] text-xs">{c.strength}</td>
                      <td className="px-5 py-4 text-gray-400 max-w-[160px] text-xs">{c.weakness}</td>
                      <td className="px-5 py-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2 py-1 whitespace-nowrap">
                          {c.segment}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 ${levelColors[c.level]}`}>
                          {c.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SWOT */}
        <section
          ref={swotRef}
          className={`transition-all duration-700 ${swotIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Strategic Analysis" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            SWOT Analysis
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
            {(Object.entries(swot) as [string, { accent: string; label: string; items: string[] }][]).map(([key, val], i) => (
              <div
                key={key}
                className={`bg-white p-8 border-l-4 ${val.accent} transition-all duration-500`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`text-xs font-black uppercase tracking-[0.2em] mb-5 ${val.label}`}>
                  {key}
                </div>
                <ul className="space-y-3">
                  {val.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
