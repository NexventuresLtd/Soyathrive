import { useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Eyebrow from "../components/ui/Eyebrow";
import CTABand from "../components/ui/CTABand";
import PhotoBlock from "../components/ui/PhotoBlock";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_BASE =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20partner%20as%20a%20";

const partnerTypes = [
  {
    id: "schools",
    label: "Schools & ECDs",
    tag: "For Schools & ECDs",
    image: "/images/partners/school-children.jpg",
    headline: "Feed children better  ,  every school day.",
    intro:
      "SoyaThrive supplies schools and Early Childhood Development centers with fortified soy foods at bulk pricing, paired with nutrition education for teachers and caregivers.",
    benefits: [
      "Bulk pricing on all four soy products",
      "Dedicated supply chain support to ensure consistency",
      "Nutrition training sessions for teachers and kitchen staff",
      "Kinyarwanda-language parent education materials",
      "Alignment with Rwanda government school feeding standards",
      "Regular visits from our nutrition field team",
    ],
    stats: [
      { stat: "50%+", label: "of children in rural Rwanda attend ECD or primary school" },
      { stat: "Protein", label: "deficiency is the #1 nutrition gap in school-age children" },
    ],
  },
  {
    id: "health",
    label: "Health Centers & CHWs",
    tag: "For Health Centers & CHWs",
    image: "/images/partners/health-workers.jpg",
    headline: "The community trusts you  ,  we support you.",
    intro:
      "Community Health Workers and health centers are the most trusted nutrition advisors in Ngororero District. We provide CHWs with products, training, and resources to make effective recommendations.",
    benefits: [
      "Free product samples for CHW education sessions",
      "Structured nutrition education modules for CHW delivery",
      "Product stock for integration into health center programs",
      "Co-branding support  ,  endorsed distribution builds trust",
      "Data sharing on community nutrition outcomes",
      "Priority access to new product launches",
    ],
    stats: [
      { stat: "87%", label: "of households trust CHW nutrition recommendations" },
      { stat: "71%", label: "trust nurses and health workers for nutrition advice" },
    ],
  },
  {
    id: "farmers",
    label: "Farmers & Cooperatives",
    tag: "For Farmers & Cooperatives",
    image: "/images/partners/soy-farmers.jpg",
    headline: "Grow soybeans. We guarantee the market.",
    intro:
      "We work directly with smallholder soybean farmers in Ngororero District, offering contractual purchase agreements, fair pricing, and capacity building on cultivation and post-harvest handling.",
    benefits: [
      "Guaranteed purchase contracts  ,  no uncertainty at harvest",
      "Fair prices above spot market averages",
      "Training on improved soybean cultivation practices",
      "Post-harvest handling and storage guidance",
      "Access to quality soybean seeds and inputs",
      "Connection to a growing, stable local market",
    ],
    stats: [
      { stat: "Guaranteed", label: "market for every kilogram of quality soybeans you produce" },
      { stat: "Fair price", label: "above standard market rates with consistent, reliable payment" },
    ],
  },
];

function PartnerApplicationForm({ partnerType }: { partnerType: string; waParam?: string }) {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello SoyaThrive, I would like to partner as a ${partnerType}.\n\nName: ${name}\nOrganisation: ${org}\nLocation: ${location}\nMessage: ${message}`
    );
    window.open(`https://wa.me/250780000000?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">
            Your Name *
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">
            Organisation *
          </label>
          <input
            required
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors"
            placeholder="School, health center, cooperative..."
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">
          Location / District
        </label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors"
          placeholder="e.g. Ngororero District"
        />
      </div>
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">
          Tell us about your interest
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors resize-none"
          placeholder="How would you like to partner with SoyaThrive?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-800 hover:bg-green-900 text-white font-bold text-sm transition-colors"
      >
        <MessageCircle className="w-4 h-4" /> Send via WhatsApp
      </button>
    </form>
  );
}

export default function Partners() {
  const { ref: typesRef, activeIndex: typesIdx } = useStaggeredInView<HTMLDivElement>(partnerTypes.length, 100);

  return (
    <>
      <PageHero
        badge="For Partners"
        title="Grow With"
        highlight="SoyaThrive"
        subtitle="We partner with schools, health centers, community health workers, and soybean farmers to build a stronger nutrition system across Ngororero District."
      />

      {/* ── OVERVIEW ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Who We Work With" />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Three types of<br />partnership, one mission.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              Our model works because it connects all parts of the community nutrition system.
              Jump to the section that fits your organisation.
            </p>
          </div>
          <div ref={typesRef} className="grid sm:grid-cols-3 gap-4">
            {partnerTypes.map((p, i) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`group overflow-hidden border border-gray-200 bg-white hover:border-green-300 transition-colors ${i <= typesIdx ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <PhotoBlock
                  src={p.image}
                  alt={p.label}
                  overlay="green"
                  className="h-36 sm:h-40"
                >
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-white font-black text-sm">{p.label}</p>
                  </div>
                </PhotoBlock>
                <div className="p-5">
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.intro.substring(0, 90)}…</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-800 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL SECTIONS ── */}
      {partnerTypes.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-20 sm:py-28 border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* Section photo banner */}
            <PhotoBlock
              src={p.image}
              alt={p.label}
              overlay="green"
              className="h-48 sm:h-56 mb-12"
            >
              <div className="flex flex-col justify-end h-full px-8 pb-8">
                <Eyebrow text={p.tag} light />
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {p.headline}
                </h2>
              </div>
            </PhotoBlock>

            <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start mb-14">
              <div>
                <p className="text-base text-gray-500 leading-relaxed mb-8">{p.intro}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-4">
                  What you get
                </p>
                <ul className="space-y-3">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {p.stats.map((s) => (
                  <div key={s.label} className="border border-gray-200 bg-white px-6 py-5">
                    <div className="text-3xl font-black text-green-800 mb-2">{s.stat}</div>
                    <p className="text-sm text-gray-500 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application form */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                Partnership Application
              </p>
              <h3 className="text-xl font-black text-gray-900 tracking-tight mb-6">
                Express your interest  ,  we'll respond within 48 hours.
              </h3>
              <div className="max-w-2xl">
                <PartnerApplicationForm partnerType={p.label} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABand
        eyebrow="Questions?"
        headline="Not sure which partnership fits you?"
        body="Chat with us on WhatsApp  ,  we'll help you find the right way to get involved."
        primaryLabel="Chat on WhatsApp"
        primaryHref={WHATSAPP_BASE + "partner"}
        primaryAmber={false}
      />
    </>
  );
}
