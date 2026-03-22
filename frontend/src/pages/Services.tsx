import { Link } from "react-router-dom";
import { Wheat, Coffee, Milk, Cookie, BookOpen, Check, ChevronRight, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20am%20interested%20in%20your%20soy%20products.";

const products = [
  {
    Icon: Wheat,
    label: "Product 1",
    title: "Fortified Soy Flour",
    subtitle: "Everyday Nutrition",
    headerBg: "bg-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "text-green-700",
    desc: "Protein-rich flour made from processed soybeans that can be mixed with other flours to prepare porridge, bread, and other local meals.",
    features: [
      "High protein content to combat child malnutrition",
      "Can be blended with cassava, maize or sorghum flour",
      "Safe and hygienically packaged with clear nutritional labeling",
      "Target price: 800–1,200 RWF per kilogram",
      "89% of survey respondents willing to buy at this price",
    ],
    interest: "4.21 / 5",
  },
  {
    Icon: Coffee,
    label: "Product 2",
    title: "Soy Porridge Mix",
    subtitle: "Ready-to-Cook for Children",
    headerBg: "bg-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-700",
    desc: "A ready-to-cook nutritious porridge made from soy and other grains, designed especially for children and families for easy daily preparation.",
    features: [
      "Highest community interest rating: 4.48 / 5",
      "Designed for children under five years old",
      "Quick and easy preparation — fits existing cooking habits",
      "Fortified with essential micronutrients",
      "Distributed through schools, health centers, and cooperatives",
    ],
    interest: "4.48 / 5",
  },
  {
    Icon: Milk,
    label: "Product 3",
    title: "Soy Milk",
    subtitle: "Plant-Based Protein Alternative",
    headerBg: "bg-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "text-green-700",
    desc: "A plant-based milk alternative made from soybeans that provides affordable protein and essential nutrients — an accessible substitute for animal milk.",
    features: [
      "Affordable alternative to expensive cow's milk",
      "Rich in protein and essential amino acids",
      "Suitable for the whole family, especially children",
      "Locally produced reducing supply chain costs",
      "Rated 3.87 / 5 by survey respondents",
    ],
    interest: "3.87 / 5",
  },
  {
    Icon: Cookie,
    label: "Product 4",
    title: "Roasted Soy Snacks",
    subtitle: "Healthy On-the-Go Snack",
    headerBg: "bg-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-700",
    desc: "Roasted soybeans packaged as a healthy, protein-rich snack option — ideal for school-aged children and families looking for nutritious alternatives.",
    features: [
      "High protein snack replacing unhealthy processed options",
      "Good source of fiber and essential fatty acids",
      "Convenient packaging for school and community use",
      "Distributed through local retailers and ECD centers",
      "Rated 3.74 / 5 by survey respondents",
    ],
    interest: "3.74 / 5",
  },
];

const interestData = [
  { label: "Soy Porridge Mix", value: 4.48, pct: 89.6 },
  { label: "Fortified Soy Flour", value: 4.21, pct: 84.2 },
  { label: "Soy Milk", value: 3.87, pct: 77.4 },
  { label: "Roasted Soy Snacks", value: 3.74, pct: 74.8 },
];

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Products"
        title="Soy-Based"
        highlight="Nutrition"
        subtitle="Affordable, locally produced, and nutritious soy foods designed to combat protein deficiency and child malnutrition in Ngororero District."
        color="green"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((p) => (
            <div key={p.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${p.headerBg} p-6 flex items-start gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <p.Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-0.5">{p.label}</div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <div className="text-sm opacity-80">{p.subtitle}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-4 border-l-2 border-gray-200 pl-3 italic">{p.desc}</p>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Key Features</h4>
                <ul className="space-y-2 mb-5">
                  {p.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className={`w-4 h-4 ${p.accent} mt-0.5 shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`${p.bg} rounded-xl p-3 border ${p.border}`}>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Community Interest: </span>
                  <span className={`text-sm font-bold ${p.accent}`}>{p.interest}</span>
                  <span className="text-xs text-gray-400"> out of 5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interest chart */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Community Interest in Products</h2>
          <p className="text-gray-500 text-sm mb-8">
            Survey results (Feb 2026) — respondent interest scores when asked about purchasing soy products
            if affordable and locally available (scale of 1–5).
          </p>
          <div className="space-y-6">
            {interestData.map((d) => (
              <div key={d.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-gray-700">{d.label}</span>
                  <span className="font-bold text-green-700">{d.value} / 5.0</span>
                </div>
                <div className="h-3.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green-600 transition-all duration-700"
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition education service */}
        <div className="bg-green-700 rounded-3xl p-8 sm:p-12 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-300 bg-green-800/50 px-3 py-1 rounded-full mb-4">
                Community Service
              </span>
              <h2 className="text-2xl font-bold mb-4">Nutrition Education & Farmer Capacity Building</h2>
              <p className="text-green-100 text-sm leading-relaxed mb-6">
                Beyond selling products, SoyaThrive provides nutrition education to caregivers — helping them
                understand the benefits of soy foods and encouraging long-term dietary behavior change.
                We also train local farmers on improved soybean cultivation practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/operations"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-sm transition-all"
                >
                  See Our Operations <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold rounded-xl text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Cooking Demonstrations", desc: "Hands-on workshops showing families how to prepare soy foods in their daily meals." },
                { title: "CHW Nutrition Sessions", desc: "Community Health Workers deliver nutrition education alongside product distribution." },
                { title: "Farmer Training", desc: "Capacity building on improved soybean cultivation, post-harvest handling, and market linkages." },
                { title: "School Programs", desc: "Integration with ECD centers and primary schools to improve children's diets at scale." },
              ].map((s) => (
                <div key={s.title} className="bg-white/10 border border-white/15 rounded-2xl p-4">
                  <div className="text-sm font-bold text-amber-300 mb-1">{s.title}</div>
                  <div className="text-xs text-green-100 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Product Differentiation</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Community Co-creation", desc: "Developed with input from mothers, CHWs, and local farmers ensuring cultural relevance." },
              { title: "Affordable Pricing", desc: "Priced at 800–1,200 RWF/kg — accessible to the 80.8% of households citing cost as a barrier." },
              { title: "Nutrition + Education", desc: "Every product distribution paired with cooking demos and nutritional guidance." },
              { title: "Guaranteed Farmer Market", desc: "Contracts and training for soy farmers ensuring consistent supply and fair income." },
              { title: "Quality & Safety First", desc: "Standardized processing and hygienic packaging that builds consumer trust." },
              { title: "Scalable Model", desc: "Community-based model replicable across Gakenke, Nyamagabe, and other high-malnutrition districts." },
            ].map((d) => (
              <div key={d.title} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{d.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
