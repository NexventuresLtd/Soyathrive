import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Eyebrow from "../components/ui/Eyebrow";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20learn%20more%20about%20nutrition%20education.";

const whyMatters = [
  { num: "01", stat: "1 in 3", label: "Children in rural Rwanda show signs of stunting from chronic undernutrition." },
  { num: "02", stat: "0–5", label: "The critical window. Nutrition in the first five years determines lifelong health outcomes." },
  { num: "03", stat: "Protein", label: "The key deficiency. Soybeans contain 3× more protein per serving than maize or cassava." },
];

const programs = [
  {
    num: "01",
    title: "Cooking Demonstrations",
    desc: "Hands-on community workshops showing families how to prepare soy foods within their existing cooking routines. Held at health centers and community gathering points.",
    outcomes: ["Learn to prepare porridge, bread, and local dishes", "Understand portion sizes for children under five", "Take-home recipes in Kinyarwanda"],
  },
  {
    num: "02",
    title: "CHW Nutrition Sessions",
    desc: "Community Health Workers deliver short, structured nutrition education sessions during home visits and community health days — reaching families where they are.",
    outcomes: ["One-on-one guidance for caregivers", "Integrated with existing health program visits", "Consistent messaging across Ngororero District"],
  },
  {
    num: "03",
    title: "School & ECD Programs",
    desc: "Integration with Early Childhood Development centers and primary schools to embed nutritious soy foods into school feeding programs and build lifelong food habits.",
    outcomes: ["Support school feeding program implementation", "Teacher and caregiver nutrition training", "Children learn healthy eating from an early age"],
  },
  {
    num: "04",
    title: "Farmer Capacity Building",
    desc: "Training smallholder soybean farmers on best practices for cultivation, post-harvest handling, and food safety — ensuring quality supply and farmer livelihood improvement.",
    outcomes: ["Improved soybean yields and quality", "Post-harvest handling and storage training", "Market linkage and fair pricing support"],
  },
];

const chwTrustData = [
  { label: "Community Health Workers", pct: 87 },
  { label: "Nurses & Health Workers", pct: 71 },
  { label: "Family members", pct: 54 },
  { label: "Radio / Media", pct: 32 },
  { label: "Neighbors", pct: 21 },
];

const recipes = [
  {
    title: "Soy Porridge (Uji wa Soya)",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["3 tbsp Soy Porridge Mix", "250ml boiling water", "Pinch of salt or sugar"],
    steps: ["Boil water in a pot.", "Add porridge mix while stirring continuously.", "Cook for 5 minutes until smooth. Serve warm."],
    tip: "Perfect for breakfast — one serving provides 22g of protein for growing children.",
  },
  {
    title: "Soy-Fortified Ugali",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 cups maize flour", "½ cup Soy Flour", "3 cups water", "Pinch of salt"],
    steps: ["Boil salted water.", "Mix soy flour with maize flour.", "Add flour gradually, stirring until stiff. Serve with vegetables or beans."],
    tip: "Blending 20% soy flour into ugali doubles the protein without changing the taste families love.",
  },
  {
    title: "Soy Milk Chai",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["200ml Soy Milk", "1 tea bag", "Ginger or cinnamon (optional)", "Sugar to taste"],
    steps: ["Heat soy milk gently.", "Add tea bag and steep for 3 minutes.", "Add ginger or cinnamon. Sweeten to taste."],
    tip: "A nutritious alternative to black tea — great for the whole family, morning or evening.",
  },
  {
    title: "Roasted Soy Trail Mix",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["50g Roasted Soy Snacks", "Groundnuts (optional)", "Dried fruit (optional)"],
    steps: ["Combine roasted soy snacks with groundnuts.", "Add dried fruit for sweetness.", "Pack into small bags for school snacks."],
    tip: "A protein-packed school snack that keeps children focused and energised through the day.",
  },
];

export default function Nutrition() {
  const { ref: whyRef, activeIndex: whyIdx } = useStaggeredInView<HTMLDivElement>(3, 100);
  const { ref: programsRef, activeIndex: progIdx } = useStaggeredInView<HTMLDivElement>(4, 100);
  const { ref: chwRef, inView: chwIn } = useInView<HTMLDivElement>();
  const { ref: recipesRef, activeIndex: recipeIdx } = useStaggeredInView<HTMLDivElement>(4, 100);

  return (
    <>
      <PageHero
        badge="Nutrition & Education"
        title="Food Alone Is"
        highlight="Not Enough."
        subtitle="SoyaThrive pairs every product with education — because lasting change in child nutrition requires both what families eat and what they know."
      />

      {/* ── WHY NUTRITION MATTERS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
            <div>
              <Eyebrow text="Why Nutrition Matters" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                The first five years<br />shape a lifetime.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Adequate protein and micronutrient intake during a child's first five years directly
                affects brain development, immune function, and physical growth. Deficiencies during
                this window can have irreversible consequences.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Soybeans are one of the most protein-dense, affordable, and locally available foods
                in Rwanda — yet most families don't know how to prepare them or don't have access to
                processed soy foods. This is the gap we close.
              </p>
            </div>
            <div ref={whyRef} className="grid sm:grid-cols-3 gap-px bg-gray-200">
              {whyMatters.map((w, i) => (
                <div
                  key={w.num}
                  className={`bg-white px-6 py-8 ${i <= whyIdx ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-4">{w.num}</div>
                  <div className="text-3xl font-black text-green-800 mb-3">{w.stat}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{w.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION PROGRAMS ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Education Programs" />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              How we deliver<br />nutrition education.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              Our education programs are embedded into existing community health infrastructure — reaching
              families through the channels they already trust and use.
            </p>
          </div>
          <div ref={programsRef} className="grid sm:grid-cols-2 gap-px bg-gray-200">
            {programs.map((p, i) => (
              <div
                key={p.title}
                className={`bg-white px-7 py-8 ${i <= progIdx ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-5">{p.num}</div>
                <h3 className="font-black text-gray-900 text-base mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 bg-green-800 mt-1.5 shrink-0 rounded-full" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHW TRUST ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow text="Trusted Partners" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                We partner with the people<br />communities trust most.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Our survey found that <strong className="text-gray-800 font-semibold">87% of households</strong> identify
                Community Health Workers as their most trusted source of nutrition advice — above radio,
                media, or even neighbors.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                This is why CHW partnerships are at the heart of our distribution and education strategy.
                When a CHW recommends SoyaThrive products, families listen. We equip CHWs with the
                materials, training, and products they need to make that recommendation confidently.
              </p>
              <Link
                to="/partners#health"
                className="inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-900 transition-colors group"
              >
                Partner with us as a health center
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div ref={chwRef}>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-6">
                Most trusted source of nutrition advice
              </p>
              <div className="space-y-5">
                {chwTrustData.map((d) => (
                  <div key={d.label}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm font-medium text-gray-700">{d.label}</span>
                      <span className="text-sm font-black text-green-800 [font-variant-numeric:tabular-nums]">
                        {d.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 overflow-hidden">
                      {chwIn && (
                        <div
                          className="h-full bg-green-800 animate-bar-fill"
                          style={{ "--target-width": `${d.pct}%` } as React.CSSProperties}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-4">
                Source: SoyaThrive community survey, Feb 2026 (n=52)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECIPE CORNER ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Recipe Corner" amber />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Simple recipes,<br />powerful nutrition.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              All recipes use SoyaThrive products and fit existing cooking habits in Ngororero District.
              Preparation guides are available in Kinyarwanda.
            </p>
          </div>
          <div ref={recipesRef} className="grid sm:grid-cols-2 gap-4">
            {recipes.map((r, i) => (
              <div
                key={r.title}
                className={`border border-gray-200 bg-white ${i <= recipeIdx ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="px-7 py-5 border-b border-gray-100 flex items-center justify-between gap-4">
                  <h3 className="font-black text-gray-900 text-base">{r.title}</h3>
                  <div className="flex gap-3 shrink-0">
                    <span className="text-[10px] font-bold text-gray-400 border border-gray-200 px-2 py-1">{r.time}</span>
                    <span className="text-[10px] font-bold text-green-800 border border-green-200 bg-green-50 px-2 py-1">{r.difficulty}</span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-3">Ingredients</p>
                      <ul className="space-y-1.5">
                        {r.ingredients.map((ing) => (
                          <li key={ing} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="w-1 h-1 bg-amber-500 mt-1.5 shrink-0 rounded-full" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-3">Steps</p>
                      <ol className="space-y-1.5">
                        {r.steps.map((step, si) => (
                          <li key={step} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-[10px] font-black text-green-800 shrink-0 mt-0.5">{si + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="text-xs text-amber-700 font-medium leading-relaxed">
                      <span className="font-black">Tip: </span>{r.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3">Get In Touch</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Bring nutrition education to your community.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We work with schools, health centers, and cooperatives to deliver programs where they're needed most.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm transition-colors"
            >
              For Partners <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
