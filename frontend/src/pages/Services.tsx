import { useState } from "react";
import { Link } from "react-router-dom";
import { Wheat, Coffee, Milk, Cookie, Check, ArrowRight, MessageCircle, X } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Modal from "../components/ui/Modal";
import Eyebrow from "../components/ui/Eyebrow";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20am%20interested%20in%20your%20soy%20products.";

const products = [
  {
    Icon: Coffee,
    num: "01",
    title: "Soy Porridge Mix",
    subtitle: "Ready-to-Cook for Children",
    accent: "green",
    interest: "4.48 / 5",
    interestPct: 89.6,
    desc: "Ready-to-cook nutritious porridge from soy and other grains, designed specifically for children and families.",
    features: [
      "Highest community interest rating (4.48/5)",
      "Designed for children under five years old",
      "Quick preparation — fits existing cooking habits",
      "Fortified with essential micronutrients",
      "Distributed through schools, health centers, cooperatives",
    ],
    details: {
      nutrition: "Per 100g: Protein ~22g, Carbohydrates ~58g, Fat ~8g, Iron, Calcium, Vitamin A, B vitamins",
      preparation: "Add 3 tablespoons to 250ml boiling water. Stir for 5 minutes. Optionally add sugar or salt.",
      target: "Children aged 6 months–5 years, suitable for the whole family",
      price: "Sold in 500g and 1kg packs at household-affordable pricing",
      availability: "School feeding programs, health centers, local shops, community events",
    },
  },
  {
    Icon: Wheat,
    num: "02",
    title: "Fortified Soy Flour",
    subtitle: "Everyday Family Nutrition",
    accent: "amber",
    interest: "4.21 / 5",
    interestPct: 84.2,
    desc: "Protein-rich flour from processed soybeans — blends with other flours to prepare porridge, bread, and local meals.",
    features: [
      "High protein content targeting child malnutrition",
      "Blends with cassava, maize, or sorghum flour",
      "Hygienically packaged with nutritional labeling",
      "Target price: 800–1,200 RWF per kilogram",
      "89% of respondents willing to buy at this price",
    ],
    details: {
      nutrition: "Per 100g: Protein ~36g, Carbohydrates ~30g, Fat ~20g, Fiber ~9g, Iron, Calcium, Zinc",
      preparation: "Mix 2 tablespoons with water or other flour. Fortified with vitamins for children.",
      target: "Children under five, pregnant women, low-income households in rural Rwanda",
      price: "800–1,200 RWF per kilogram (~$0.60–$0.90 USD)",
      availability: "Local markets, health centers, ECD centers, cooperative distribution points",
    },
  },
  {
    Icon: Milk,
    num: "03",
    title: "Soy Milk",
    subtitle: "Plant-Based Protein Alternative",
    accent: "green",
    interest: "3.87 / 5",
    interestPct: 77.4,
    desc: "An affordable plant-based milk alternative providing protein and essential nutrients — accessible substitute for animal milk.",
    features: [
      "Affordable alternative to expensive cow's milk",
      "Rich in protein and essential amino acids",
      "Suitable for the whole family",
      "Locally produced, reducing supply chain costs",
      "Rated 3.87/5 by survey respondents",
    ],
    details: {
      nutrition: "Per 200ml: Protein ~7g, Carbohydrates ~15g, Fat ~4g, Calcium, Iron, B vitamins",
      preparation: "Shake well. Serve chilled or at room temperature. Can be used in cooking.",
      target: "Children and adults, especially those unable to access or afford cow's milk",
      price: "Available in 200ml and 500ml portions at affordable community pricing",
      availability: "Local shops, health centers, and community distribution programs",
    },
  },
  {
    Icon: Cookie,
    num: "04",
    title: "Roasted Soy Snacks",
    subtitle: "Healthy On-the-Go Snack",
    accent: "amber",
    interest: "3.74 / 5",
    interestPct: 74.8,
    desc: "Roasted soybeans packaged as a protein-rich snack — ideal for school-aged children as a nutritious alternative.",
    features: [
      "High protein snack replacing unhealthy options",
      "Good source of fiber and essential fatty acids",
      "Convenient packaging for school and community use",
      "Distributed through retailers and ECD centers",
      "Rated 3.74/5 by survey respondents",
    ],
    details: {
      nutrition: "Per 50g: Protein ~17g, Carbohydrates ~15g, Fat ~11g, Fiber ~7g, Iron, Zinc",
      preparation: "Ready to eat. No preparation required. Ideal as a school snack.",
      target: "School-aged children, adults seeking affordable protein snacks",
      price: "Small individual packs and 200g bags at competitive market prices",
      availability: "Local retail shops, school canteens, mobile vending points",
    },
  },
];

const interestData = [
  { label: "Soy Porridge Mix", value: 4.48, pct: 89.6 },
  { label: "Fortified Soy Flour", value: 4.21, pct: 84.2 },
  { label: "Soy Milk", value: 3.87, pct: 77.4 },
  { label: "Roasted Soy Snacks", value: 3.74, pct: 74.8 },
];

const differentiators = [
  { num: "01", title: "Community Co-creation", desc: "Developed with mothers, CHWs, and farmers ensuring cultural relevance and adoption." },
  { num: "02", title: "Affordable Pricing", desc: "Priced at 800–1,200 RWF/kg — accessible to the 80.8% citing cost as the top barrier." },
  { num: "03", title: "Nutrition + Education", desc: "Every product distribution paired with cooking demos and nutritional guidance." },
  { num: "04", title: "Guaranteed Farmer Market", desc: "Contracts and training for soy farmers ensuring consistent supply and fair income." },
  { num: "05", title: "Quality & Safety First", desc: "Standardized processing and hygienic packaging that builds lasting consumer trust." },
  { num: "06", title: "Scalable Model", desc: "Community-based model replicable across high-malnutrition districts in Rwanda." },
];

export default function Services() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const { ref: productsRef, activeIndex: prodActive } = useStaggeredInView<HTMLDivElement>(products.length, 100);
  const { ref: chartRef, inView: chartIn } = useInView<HTMLDivElement>();
  const { ref: diffRef, activeIndex: diffActive } = useStaggeredInView<HTMLDivElement>(differentiators.length);

  const selected = activeProduct !== null ? products[activeProduct] : null;

  return (
    <>
      <PageHero
        badge="Our Products"
        title="Soy Foods That"
        highlight="Actually Reach Families"
        subtitle="Four affordable, locally produced, nutritious soy products — each price-tested and validated by 52 households in Ngororero District."
      />

      {/* ── PRODUCTS GRID ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Product Line" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Four core products.
            </h2>
            <p className="text-xs text-gray-400 font-medium">Click any card for full nutritional details</p>
          </div>
          <div ref={productsRef} className="grid sm:grid-cols-2 gap-px bg-gray-200">
            {products.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActiveProduct(i)}
                className={`text-left bg-white p-8 hover:bg-gray-50 transition-colors group focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-inset ${
                  i <= prodActive ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-10 h-10 flex items-center justify-center ${
                    p.accent === "green" ? "bg-green-800" : "bg-amber-600"
                  }`}>
                    <p.Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-black text-gray-300 tracking-[0.2em]">{p.num}</span>
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-1">{p.title}</h3>
                <p className={`text-xs font-semibold mb-4 ${p.accent === "green" ? "text-green-800" : "text-amber-600"}`}>
                  {p.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${p.accent === "green" ? "text-green-700" : "text-amber-600"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Interest </span>
                    <span className={`font-black text-base ${p.accent === "green" ? "text-green-800" : "text-amber-600"}`}>
                      {p.interest}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-700 transition-colors">
                    Full details →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      <Modal open={activeProduct !== null} onClose={() => setActiveProduct(null)} title={selected?.title} size="lg">
        {selected && (
          <div>
            <div className={`px-7 py-6 flex items-center gap-4 ${selected.accent === "green" ? "bg-green-800" : "bg-amber-700"}`}>
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <selected.Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-0.5">Product {selected.num}</div>
                <div className="text-sm font-medium opacity-80">{selected.subtitle}</div>
              </div>
            </div>
            <div className="p-7 space-y-6">
              <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-4">{selected.desc}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-3">All Features</h4>
                  <ul className="space-y-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${selected.accent === "green" ? "text-green-700" : "text-amber-600"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Nutritional Info", val: selected.details.nutrition },
                    { label: "Preparation", val: selected.details.preparation },
                    { label: "Target Group", val: selected.details.target },
                    { label: "Pricing", val: selected.details.price },
                    { label: "Availability", val: selected.details.availability },
                  ].map((d) => (
                    <div key={d.label} className="border-l-2 border-gray-100 pl-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{d.label}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{d.val}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-800 hover:bg-green-900 text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                </a>
                <button
                  onClick={() => setActiveProduct(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold text-sm transition-colors"
                >
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* ── COMMUNITY INTEREST CHART ── */}
      <section ref={chartRef} className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={chartIn ? "animate-fade-left" : "opacity-0"}>
              <Eyebrow text="Survey Results" amber />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-4">
                We built what the<br />community asked for.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-5 max-w-md">
                Survey respondents in Ngororero District were asked to rate their interest in purchasing
                each product if available locally at an affordable price (scale 1–5).
              </p>
              <p className="text-sm text-gray-400">
                The two highest-rated products — porridge mix and soy flour — are our primary focus.
                This isn't a coincidence: they're what families actually need and will use.
              </p>
            </div>
            <div className={`space-y-6 ${chartIn ? "animate-fade-right delay-150" : "opacity-0"}`}>
              {interestData.map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-medium text-gray-700">{d.label}</span>
                    <span className="font-black text-green-800 [font-variant-numeric:tabular-nums]">
                      {d.value}<span className="text-gray-400 font-normal text-xs"> / 5.0</span>
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-200 overflow-hidden">
                    {chartIn && (
                      <div
                        className="h-full bg-green-800 animate-bar-fill"
                        style={{ "--target-width": `${d.pct}%` } as React.CSSProperties}
                      />
                    )}
                  </div>
                </div>
              ))}
              <p className="text-[11px] text-gray-400 pt-2">
                Source: SoyaThrive community survey, Feb 2026 (n=52)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Why SoyaThrive" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-12">
            Not just another food product.
          </h2>
          <div ref={diffRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className={`bg-white px-7 py-7 hover:bg-green-50/30 transition-colors ${i <= diffActive ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-3">{d.num}</div>
                <h3 className="font-black text-gray-900 text-sm mb-2">{d.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3">Ready to order?</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Find our products near you.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Available at local markets, health centers, and through our WhatsApp ordering channel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/get-involved#buy"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm transition-colors"
            >
              Where to Buy <ArrowRight className="w-4 h-4" />
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
