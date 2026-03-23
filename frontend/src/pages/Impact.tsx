import PageHero from "../components/ui/PageHero";
import Eyebrow from "../components/ui/Eyebrow";
import CTABand from "../components/ui/CTABand";
import PhotoBlock from "../components/ui/PhotoBlock";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";
import { useCountUp } from "../hooks/useCountUp";

const stories = [
  {
    initials: "DM",
    name: "Divine Mukamana",
    role: "Mother of three",
    location: "Ngororero District",
    photo: "/images/stories/divine.jpg",
    color: "bg-green-800",
    quote:
      "Before SoyaThrive, I struggled to give my children enough protein. Now I use the soy porridge every morning. My youngest has grown so much stronger  ,  and the price fits our budget.",
    context: "Participating household · Baseline survey respondent",
  },
  {
    initials: "JP",
    name: "Jean Pierre Hakizimana",
    role: "Soybean farmer",
    location: "Ngororero District",
    photo: "/images/stories/farmer-jean-pierre.jpg",
    color: "bg-amber-700",
    quote:
      "I used to sell my soybeans at whatever price buyers offered. Now I have a contract. I know what I will earn before I even harvest. It has changed how I plan for my family.",
    context: "Partner farmer · 2nd season supply agreement",
  },
  {
    initials: "AC",
    name: "Alphonsine Cyuzuzo",
    role: "Community Health Worker",
    location: "Ngororero Sector",
    photo: "/images/stories/chw-alphonsine.jpg",
    color: "bg-green-900",
    quote:
      "When I recommend SoyaThrive products, families trust me because the products actually work and the price is real. I've seen children improve in just a few months.",
    context: "CHW Network Partner · Ngororero Sector",
  },
];

const milestones = [
  {
    quarter: "Q1 2026",
    title: "Foundation",
    items: [
      "Community survey completed (52 households)",
      "Product validation and pricing confirmed",
      "Founder network and advisor team established",
    ],
    status: "done",
  },
  {
    quarter: "Q2 2026",
    title: "Launch",
    items: [
      "First production batch  ,  soy porridge + flour",
      "3 CHW network partnerships activated",
      "2 ECD center supply agreements signed",
    ],
    status: "done",
  },
  {
    quarter: "Q3 2026",
    title: "Distribution Growth",
    items: [
      "Expand to 5 additional CHW distribution points",
      "Launch soy milk and roasted snack products",
      "First school feeding program partnership",
    ],
    status: "current",
  },
  {
    quarter: "Q4 2026",
    title: "Scale",
    items: [
      "1,000+ households reached in Ngororero District",
      "10+ farmer supply contracts active",
      "Community nutrition outcomes baseline established",
    ],
    status: "planned",
  },
  {
    quarter: "2027",
    title: "Expansion",
    items: [
      "Expansion to second district in Western Province",
      "Annual impact report published",
      "Seek Series A impact investment",
    ],
    status: "planned",
  },
];

function ImpactStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 1800);
  return (
    <div ref={ref} className="px-6 py-8 border-r border-b border-gray-200 last:border-r-0">
      <div className="text-3xl sm:text-4xl font-black text-green-800 [font-variant-numeric:tabular-nums] mb-1">
        {count}{suffix}
      </div>
      <p className="text-xs text-gray-500 leading-snug">{label}</p>
    </div>
  );
}

export default function Impact() {
  const { ref: storiesRef, activeIndex: storyIdx } = useStaggeredInView<HTMLDivElement>(stories.length, 100);
  const { ref: milestoneRef, activeIndex: milestoneIdx } = useStaggeredInView<HTMLDivElement>(milestones.length, 80);
  const { ref: dataRef, inView: dataIn } = useInView<HTMLDivElement>();

  return (
    <>
      <PageHero
        badge="Impact"
        title="Real People,"
        highlight="Real Change."
        subtitle="Every number represents a child better nourished, a farmer with reliable income, or a family that now has access to something they didn't before."
      />

      {/* ── STORIES ── */}
      <section id="stories" className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Our Stories" />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Behind every data point<br />is a family.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              We measure impact in numbers  ,  but these are the stories that tell us why the numbers matter.
            </p>
          </div>
          <div ref={storiesRef} className="grid sm:grid-cols-3 gap-4">
            {stories.map((s, i) => (
              <div
                key={s.name}
                className={`border border-gray-200 bg-white overflow-hidden flex flex-col ${i <= storyIdx ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Person photo */}
                <PhotoBlock
                  src={s.photo}
                  alt={`${s.name}  ,  ${s.role}`}
                  overlay="green"
                  className="h-44 sm:h-52"
                  position="object-top"
                >
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-white font-black text-sm">{s.name}</p>
                    <p className="text-white/70 text-xs">{s.role} · {s.location}</p>
                  </div>
                </PhotoBlock>

                <div className="p-6 flex-1 flex flex-col">
                  <blockquote className="flex-1 mb-5">
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{s.quote}"</p>
                  </blockquote>
                  <p className="text-[10px] font-bold text-green-800 uppercase tracking-wider">{s.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA & REPORTS ── */}
      <section id="data" className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Data & Reports" amber />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Numbers that tell<br />the whole story.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              Our February 2026 community survey provides the evidence base for every product, price,
              and program decision.
            </p>
          </div>

          {/* Stat counters */}
          <div
            ref={dataRef}
            className={`grid grid-cols-2 sm:grid-cols-4 border-l border-t border-gray-200 bg-white mb-14 ${dataIn ? "animate-fade-up" : "opacity-0"}`}
          >
            <ImpactStat end={52} suffix="" label="households in baseline survey" />
            <ImpactStat end={89} suffix="%" label="willing to buy at target price" />
            <ImpactStat end={92} suffix="%" label="interested in at least one product" />
            <ImpactStat end={87} suffix="%" label="trust CHW nutrition advice" />
          </div>

          {/* Product interest table */}
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-4">
            Community Interest by Product
          </p>
          <div className="border border-gray-200 bg-white overflow-hidden mb-14">
            <div className="grid grid-cols-4 border-b border-gray-100 px-5 py-3 bg-gray-50">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Product</span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Interest Score</span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 hidden sm:block">% Would Buy</span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Status</span>
            </div>
            {[
              { product: "Soy Porridge Mix", score: "4.48 / 5", pct: "89.6%", status: "In production" },
              { product: "Fortified Soy Flour", score: "4.21 / 5", pct: "84.2%", status: "In production" },
              { product: "Soy Milk", score: "3.87 / 5", pct: "77.4%", status: "Launching Q3" },
              { product: "Roasted Soy Snacks", score: "3.74 / 5", pct: "74.8%", status: "Launching Q3" },
            ].map((row, i) => (
              <div
                key={row.product}
                className={`grid grid-cols-4 px-5 py-4 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <span className="font-medium text-gray-800">{row.product}</span>
                <span className="font-black text-green-800">{row.score}</span>
                <span className="text-gray-600 hidden sm:block">{row.pct}</span>
                <span className={`text-xs font-semibold ${row.status === "In production" ? "text-green-700" : "text-amber-600"}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          {/* Key findings grid */}
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-4">Key Survey Findings</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {[
              { stat: "80.8%", finding: "of families cite cost as the primary barrier to protein-rich food." },
              { stat: "65.4%", finding: "report limited availability as a key challenge in their area." },
              { stat: "92%", finding: "of all 52 surveyed households want at least one SoyaThrive product." },
              { stat: "4.48/5", finding: "average interest in soy porridge mix  ,  the highest-rated product." },
              { stat: "CHWs", finding: "trusted by 87% of households as the top source of nutrition advice." },
              { stat: "2026", finding: "SoyaThrive launches its first production batch in Q2 of this year." },
            ].map((f) => (
              <div key={f.stat} className="bg-white px-6 py-6 hover:bg-green-50/30 transition-colors">
                <div className="text-2xl font-black text-green-800 mb-2">{f.stat}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{f.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Milestones" />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              A plan with<br />a clear roadmap.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              Defined, measurable milestones for each phase of growth  ,  from launch through district-wide scale.
            </p>
          </div>
          <div ref={milestoneRef} className="relative pl-0 sm:pl-10">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div
                  key={m.quarter}
                  className={`flex gap-0 sm:gap-6 ${i <= milestoneIdx ? "animate-fade-left" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center shrink-0 -ml-10 mt-5">
                    <div className={`w-5 h-5 border-2 flex items-center justify-center ${
                      m.status === "done" ? "bg-green-800 border-green-800" :
                      m.status === "current" ? "bg-amber-500 border-amber-500" :
                      "bg-white border-gray-300"
                    }`}>
                      {m.status === "done" && <div className="w-1.5 h-1.5 bg-white" />}
                    </div>
                  </div>
                  {/* Card */}
                  <div className={`flex-1 border p-6 ${
                    m.status === "current" ? "border-amber-300 bg-amber-50/40" :
                    m.status === "done" ? "border-gray-200 bg-white" : "border-gray-200 bg-gray-50"
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{m.quarter}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 ${
                        m.status === "done" ? "bg-green-100 text-green-800" :
                        m.status === "current" ? "bg-amber-100 text-amber-700" :
                        "bg-gray-100 text-gray-500"
                      }`}>
                        {m.status === "done" ? "Completed" : m.status === "current" ? "In Progress" : "Planned"}
                      </span>
                    </div>
                    <h3 className="font-black text-gray-900 text-base mb-3">{m.title}</h3>
                    <ul className="space-y-1.5">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className={`w-1.5 h-1.5 mt-1.5 shrink-0 rounded-full ${
                            m.status === "done" ? "bg-green-700" :
                            m.status === "current" ? "bg-amber-500" : "bg-gray-300"
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Be Part of the Story"
        headline="Help us reach 1,000 families by end of 2026."
        body="Partner with us, buy our products, or support our mission with a donation."
        primaryLabel="Get Involved"
        primaryTo="/get-involved"
        secondaryLabel="Partner with Us"
        secondaryTo="/partners"
      />
    </>
  );
}
