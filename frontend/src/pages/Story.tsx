import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Eyebrow from "../components/ui/Eyebrow";
import BarChart from "../components/ui/BarChart";
import CTABand from "../components/ui/CTABand";
import PhotoBlock from "../components/ui/PhotoBlock";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250787144794?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";

const barriers = [
  { label: "Cost / Price", pct: 80.8 },
  { label: "Limited Availability", pct: 65.4 },
  { label: "Lack of Knowledge", pct: 48.1 },
  { label: "Cultural Preference", pct: 23.1 },
  { label: "Taste", pct: 15.4 },
];

const values = [
  { num: "01", title: "Affordability", desc: "Every product priced within reach of low-income households, addressing the #1 reported barrier." },
  { num: "02", title: "Quality & Safety", desc: "All products meet Rwanda Standards Board food safety requirements with hygienic, labeled packaging." },
  { num: "03", title: "Measurable Impact", desc: "We track nutrition outcomes, repeat purchases, and farmer income to prove real change." },
  { num: "04", title: "Community-Driven", desc: "Products co-created with mothers, CHWs, and farmers to ensure cultural relevance and adoption." },
  { num: "05", title: "Farmer Partnership", desc: "Contractual relationships with smallholder farmers  ,  guaranteed market, fair prices, capacity building." },
  { num: "06", title: "Child-Centered", desc: "All activities prioritise improving nutrition for children under five  ,  our north star." },
];

const model = [
  { num: "01", title: "Source Locally", desc: "Partner with smallholder soybean farmers in Ngororero for a guaranteed, quality supply." },
  { num: "02", title: "Process & Fortify", desc: "Transform raw soybeans into fortified flour, porridge mix, soy milk, and healthy snacks." },
  { num: "03", title: "Distribute & Educate", desc: "Deliver products through CHW networks and health centers, paired with nutrition education." },
];

const team = [
  {
    initials: "JP",
    name: "Jean Paul Bukuru",
    role: "Founder & CEO",
    location: "Ngororero District, Rwanda",
    photo: "/Jayp_profile.jpeg",
    bio: "Entrepreneur and public health advocate with hands-on experience at Rwanda Biomedical Center's Maternal, Child, and Community Health program. Founded SoyaThrive to bridge the gap between local soybean production and affordable child nutrition.",
    color: "bg-green-800",
  },
  {
    initials: "CJ",
    name: "Dr. Chioma Joy Okonkwo",
    role: "Strategic Advisor",
    location: "Nutrition & Enterprise Strategy",
    photo: "/Jayp_profile.jpeg",
    bio: "Providing strategic guidance on enterprise development, nutrition programming, and sustainable food systems. Advises SoyaThrive on program design and impact measurement frameworks.",
    color: "bg-amber-700",
  },
];

export default function Story() {
  const { ref: statsRef, inView: statsIn } = useInView<HTMLDivElement>();
  const { ref: vmRef, inView: vmIn } = useInView<HTMLDivElement>();
  const { ref: modelRef, activeIndex: modelIdx } = useStaggeredInView<HTMLDivElement>(3, 120);
  const { ref: valuesRef, activeIndex: valActive } = useStaggeredInView<HTMLDivElement>(values.length);
  const { ref: teamRef, activeIndex: teamIdx } = useStaggeredInView<HTMLDivElement>(team.length, 100);

  return (
    <>
      <PageHero
        badge="Our Story"
        title="Why We Started"
        highlight="SoyaThrive"
        subtitle="A local response to a measurable problem  ,  turning Rwanda's soybean abundance into affordable nutrition for the children who need it most."
      />

      {/* ── THE PROBLEM ── */}
      <section id="problem" className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow text="The Problem We Solve" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-6">
                Malnutrition has a<br />measurable cause.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-5">
                In Ngororero District, protein deficiency among children under five is driven by a
                simple fact: nutritious food exists, but families can't access or afford it.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Our February 2026 community survey of 52 households confirmed what local health workers
                already knew  ,  the barriers are economic and logistical. Families <em>want</em> to feed
                their children well.
              </p>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 bg-gray-50 mb-8">
                {[
                  { stat: "80.8%", label: "cite cost as barrier" },
                  { stat: "65.4%", label: "limited availability" },
                  { stat: "48.1%", label: "lack of knowledge" },
                ].map((s) => (
                  <div key={s.label} className={`px-3 py-5 text-center ${statsIn ? "animate-fade-up" : "opacity-0"}`}>
                    <div className="text-lg sm:text-2xl font-black text-green-800 mb-1">{s.stat}</div>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/nutrition"
                className="inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-900 transition-colors group"
              >
                How we educate communities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div>
              {/* Community photo + chart */}
              <PhotoBlock
                src="https://www.migeprof.gov.rw/fileadmin/_processed_/9/d/csm_A_young_boy_drinks_milk_at_an_early_childhood_development_centre_in_Rwanda__provided_daily_to_every_child_to_help_prevent_malnutrition_7d70517c10.jpg"
                alt="Community health survey in Ngororero District"
                overlay="green"
                className="h-44 sm:h-52 mb-6"
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-xs font-medium">
                    Community survey · Feb 2026 · Ngororero District
                  </p>
                </div>
              </PhotoBlock>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
                Why families don't eat more protein-rich foods
              </p>
              <BarChart
                data={barriers}
                source="Source: SoyaThrive household survey, February 2026 (n=52)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section id="mission" className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Mission & Vision" />
          <div
            ref={vmRef}
            className={`grid lg:grid-cols-2 gap-px bg-gray-200 mb-14 ${vmIn ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="bg-white px-8 py-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 mb-4">Our Vision</p>
              <p className="text-2xl sm:text-3xl font-black text-gray-950 leading-snug tracking-tight">
                "A Rwanda where every child has access to affordable, nutritious food."
              </p>
            </div>
            <div className="bg-white px-8 py-10 border-t border-gray-200 lg:border-t-0">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-green-800 mb-4">Our Mission</p>
              <p className="text-base text-gray-600 leading-relaxed">
                To produce and distribute affordable soy-based food products that reduce child malnutrition
                in Ngororero District, while empowering local farmers and delivering nutrition education
                through trusted community health networks.
              </p>
            </div>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-6">How the model works</p>
          <div ref={modelRef} className="grid sm:grid-cols-3 gap-px bg-gray-200">
            {model.map((m, i) => (
              <div
                key={m.title}
                className={`bg-white px-7 py-8 ${i <= modelIdx ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-5">{m.num}</div>
                <div className="w-6 h-0.5 bg-green-800 mb-5" />
                <h3 className="font-black text-gray-900 text-base mb-2">{m.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section id="founding" className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Our Founding Story" />

          {/* Founder narrative with photo */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-6">
                Built from experience,<br />driven by evidence.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Jean Paul Bukuru grew up in rural Western Province and spent years working at Rwanda
                Biomedical Center's Maternal, Child, and Community Health program. He saw firsthand how
                malnutrition shaped the lives of children  ,  not through a lack of care from parents,
                but through a lack of accessible, affordable options.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Soybeans were already being grown across Ngororero District. The missing link was
                processing, packaging, and getting products to families at a price they could afford  , 
                with the knowledge to use them effectively.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                In early 2026, Jean Paul conducted a structured community survey to validate the gap.
                The data confirmed what the community already lived every day. SoyaThrive was founded
                to close that gap with a sustainable, community-owned solution.
              </p>
              <blockquote className="border-l-2 border-amber-500 pl-5">
                <p className="text-base sm:text-lg font-semibold text-gray-800 leading-snug italic mb-2">
                  "The solution was right there  ,  local soybeans, willing farmers, trusted health
                  workers. We just needed to connect the dots."
                </p>
                <cite className="text-xs text-gray-400 not-italic font-bold uppercase tracking-wider">
                  Jean Paul Bukuru  ,  Founder & CEO
                </cite>
              </blockquote>
            </div>

            {/* Founder photo + survey stats */}
            <div className="space-y-4">
              <PhotoBlock
                src="/Jayp_profile.jpeg"
                alt="Jean Paul Bukuru, Founder of SoyaThrive Initiative"
                overlay="none"
                className="h-64 sm:h-72 border border-gray-200"
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/80 to-transparent px-5 py-4">
                  <p className="text-white font-bold text-sm">Jean Paul Bukuru</p>
                  <p className="text-white/70 text-xs">Founder & CEO, SoyaThrive Initiative</p>
                </div>
              </PhotoBlock>

              <div className="border border-gray-200 bg-gray-50">
                <div className="px-5 py-3 border-b border-gray-200">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Survey Validation · Feb 2026
                  </p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { stat: "52", label: "households surveyed" },
                    { stat: "89%", label: "willing to buy at target price" },
                    { stat: "92%", label: "interested in at least one product" },
                    { stat: "87%", label: "trust CHWs for nutrition advice" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between px-5 py-3">
                      <p className="text-xs text-gray-500">{s.label}</p>
                      <span className="font-black text-green-800 text-base">{s.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core values */}
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-6">Core Values</p>
          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 mb-16">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`bg-white px-7 py-7 hover:bg-green-50/40 transition-colors ${i <= valActive ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-3">{v.num}</div>
                <h3 className="font-black text-gray-900 text-sm mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-6">The Team</p>
          <div ref={teamRef} className="grid sm:grid-cols-2 gap-4">
            {team.map((p, i) => (
              <div
                key={p.name}
                className={`border border-gray-200 bg-white overflow-hidden ${i <= teamIdx ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <PhotoBlock
                  src={p.photo}
                  alt={`${p.name}  ,  ${p.role}`}
                  overlay="none"
                  className="h-40 sm:h-48"
                  position="object-top"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-black text-sm">{p.name}</p>
                    <p className="text-white/70 text-xs">{p.role}</p>
                  </div>
                </PhotoBlock>
                <div className="p-6">
                  <p className="text-xs text-amber-700 font-semibold mb-2">{p.location}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Next Step"
        headline="See our products in action."
        body="Four soy-based foods, each priced and designed for the communities we serve."
        primaryLabel="Our Products"
        primaryTo="/products"
        secondaryLabel="Contact Us"
        secondaryHref={WHATSAPP_URL}
      />
    </>
  );
}
