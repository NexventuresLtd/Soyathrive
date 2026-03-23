import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Eyebrow from "../components/ui/Eyebrow";
import BarChart from "../components/ui/BarChart";
import CTABand from "../components/ui/CTABand";
import PhotoBlock from "../components/ui/PhotoBlock";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20learn%20more%20about%20nutrition%20education.";

const whyMatters = [
  { num: "01", stat: "1 in 3", label: "Children in rural Rwanda show signs of stunting from chronic undernutrition." },
  { num: "02", stat: "0–5 yrs", label: "The critical window. Nutrition in the first five years determines lifelong health outcomes." },
  { num: "03", stat: "3×", label: "More protein per serving in soybeans compared to maize or cassava." },
];

const programs = [
  {
    num: "01",
    title: "Cooking Demonstrations",
    image: "/images/cooking-demo.jpg",
    desc: "Hands-on community workshops at health centers showing families how to prepare soy foods within their existing cooking routines.",
    outcomes: ["Prepare porridge, bread, and local dishes", "Portion sizes for children under five", "Take-home recipe cards in Kinyarwanda"],
  },
  {
    num: "02",
    title: "CHW Nutrition Sessions",
    image: "/images/chw-session.jpg",
    desc: "Community Health Workers deliver structured nutrition education during home visits and community health days  ,  reaching families where they are.",
    outcomes: ["One-on-one guidance for caregivers", "Integrated with existing health program visits", "Consistent messaging across Ngororero District"],
  },
  {
    num: "03",
    title: "School & ECD Programs",
    image: "/images/school-program.jpg",
    desc: "Integration with Early Childhood Development centers and primary schools to build nutritious soy foods into school feeding programs.",
    outcomes: ["School feeding program implementation support", "Teacher and caregiver nutrition training", "Children build healthy eating habits early"],
  },
  {
    num: "04",
    title: "Farmer Capacity Building",
    image: "/images/farmer-training.jpg",
    desc: "Training smallholder soybean farmers on cultivation, post-harvest handling, and food safety  ,  ensuring quality supply and farmer livelihood improvement.",
    outcomes: ["Improved soybean yields and quality", "Post-harvest handling and storage", "Market linkage and fair pricing support"],
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
    image: "/images/recipes/porridge.jpg",
    ingredients: ["3 tbsp Soy Porridge Mix", "250ml boiling water", "Pinch of salt or sugar"],
    steps: ["Boil water in a pot.", "Add porridge mix while stirring continuously.", "Cook 5 min until smooth. Serve warm."],
    tip: "Perfect for breakfast  ,  provides 22g of protein for growing children.",
  },
  {
    title: "Soy-Fortified Ugali",
    time: "20 min",
    difficulty: "Easy",
    image: "/images/recipes/ugali.jpg",
    ingredients: ["2 cups maize flour", "½ cup Soy Flour", "3 cups water", "Pinch of salt"],
    steps: ["Boil salted water.", "Mix soy with maize flour.", "Add gradually, stirring until stiff. Serve with vegetables or beans."],
    tip: "Blending 20% soy flour doubles the protein without changing the taste families love.",
  },
  {
    title: "Soy Milk Chai",
    time: "5 min",
    difficulty: "Easy",
    image: "/images/recipes/chai.jpg",
    ingredients: ["200ml Soy Milk", "1 tea bag", "Ginger or cinnamon (optional)", "Sugar to taste"],
    steps: ["Heat soy milk gently.", "Add tea bag, steep 3 minutes.", "Add ginger or cinnamon. Sweeten to taste."],
    tip: "A nutritious alternative to black tea  ,  great for the whole family, morning or evening.",
  },
  {
    title: "Roasted Soy Trail Mix",
    time: "5 min",
    difficulty: "Easy",
    image: "/images/recipes/trail-mix.jpg",
    ingredients: ["50g Roasted Soy Snacks", "Groundnuts (optional)", "Dried fruit (optional)"],
    steps: ["Combine roasted soy snacks with groundnuts.", "Add dried fruit for sweetness.", "Pack into small bags for school snacks."],
    tip: "A protein-packed school snack that keeps children focused and energised.",
  },
];

export default function Nutrition() {
  const { ref: whyRef, activeIndex: whyIdx } = useStaggeredInView<HTMLDivElement>(3, 100);
  const { ref: programsRef, activeIndex: progIdx } = useStaggeredInView<HTMLDivElement>(4, 100);
  const { ref: recipesRef, activeIndex: recipeIdx } = useStaggeredInView<HTMLDivElement>(4, 100);

  return (
    <>
      <PageHero
        badge="Nutrition & Education"
        title="Food Alone Is"
        highlight="Not Enough."
        subtitle="SoyaThrive pairs every product with education  ,  because lasting change in child nutrition requires both what families eat and what they know."
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
                Soybeans are one of the most protein-dense, affordable, and locally available foods in
                Rwanda  ,  yet most families don't know how to prepare them. This is the gap we close.
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
              Our education programs are embedded into existing community health infrastructure  , 
              reaching families through the channels they already trust and use.
            </p>
          </div>
          <div ref={programsRef} className="grid sm:grid-cols-2 gap-4">
            {programs.map((p, i) => (
              <div
                key={p.title}
                className={`border border-gray-200 bg-white overflow-hidden ${i <= progIdx ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <PhotoBlock
                  src={p.image}
                  alt={p.title}
                  overlay="green"
                  className="h-36 sm:h-44"
                >
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black text-white/60 tracking-[0.2em]">{p.num}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-black text-white text-base">{p.title}</h3>
                  </div>
                </PhotoBlock>
                <div className="p-6">
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-green-800 mt-1.5 shrink-0 rounded-full" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
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
                Community Health Workers as their most trusted source of nutrition advice  ,  above radio,
                media, or even neighbors.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                CHW partnerships are at the heart of our distribution and education strategy. We equip
                CHWs with the materials, training, and products they need to make confident recommendations.
              </p>
              <Link
                to="/partners#health"
                className="inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-900 transition-colors group"
              >
                Partner with us as a health center
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div>
              {/* CHW photo */}
              <PhotoBlock
                src="/images/chw-community.jpg"
                alt="Community Health Worker delivering nutrition education"
                overlay="green"
                className="h-44 sm:h-52 mb-6"
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Community Health Worker</p>
                  <p className="text-white/70 text-xs">Nutrition education session  ,  Ngororero District</p>
                </div>
              </PhotoBlock>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
                Most trusted source of nutrition advice
              </p>
              <BarChart
                data={chwTrustData}
                source="Source: SoyaThrive community survey, Feb 2026 (n=52)"
              />
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
              Preparation guides available in Kinyarwanda.
            </p>
          </div>
          <div ref={recipesRef} className="grid sm:grid-cols-2 gap-4">
            {recipes.map((r, i) => (
              <div
                key={r.title}
                className={`border border-gray-200 bg-white overflow-hidden ${i <= recipeIdx ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <PhotoBlock
                  src={r.image}
                  alt={r.title}
                  overlay="amber"
                  className="h-36 sm:h-40"
                >
                  <div className="flex items-end justify-between h-full px-5 pb-4">
                    <h3 className="font-black text-white text-base">{r.title}</h3>
                    <div className="flex gap-2 shrink-0">
                      <span className="text-[10px] font-bold text-white/60 border border-white/20 px-2 py-1">{r.time}</span>
                      <span className="text-[10px] font-bold text-white bg-amber-600/70 px-2 py-1">{r.difficulty}</span>
                    </div>
                  </div>
                </PhotoBlock>
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
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
                  <p className="text-xs text-amber-700 font-medium leading-relaxed border-t border-gray-100 pt-4">
                    <span className="font-black">Tip: </span>{r.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Get In Touch"
        headline="Bring nutrition education to your community."
        body="We work with schools, health centers, and cooperatives to deliver programs where needed most."
        primaryLabel="For Partners"
        primaryTo="/partners"
        secondaryLabel="WhatsApp"
        secondaryHref={WHATSAPP_URL}
      />
    </>
  );
}
