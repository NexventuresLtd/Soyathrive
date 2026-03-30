import { Link } from "react-router-dom";
import { Eye, Target, Leaf, Shield, BarChart2, Users, ArrowRight, MessageCircle, GraduationCap, Handshake } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250787144794?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";

function Eyebrow({ text, amber }: { text: string; amber?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`block w-8 h-px ${amber ? "bg-amber-600" : "bg-green-700"}`} />
      <span className={`text-xs font-bold uppercase tracking-[0.15em] ${amber ? "text-amber-600" : "text-green-700"}`}>
        {text}
      </span>
    </div>
  );
}

const objectives = [
  { num: "01", title: "Product & Brand Quality", date: "By Year 3", text: "Develop high-quality, safe, and nutritionally fortified soy products, achieving at least 60% repeat purchase rate and strong brand trust among households and institutions in Ngororero." },
  { num: "02", title: "Market Penetration", date: "By Year 3", text: "Reach at least 5,000 households and secure distribution partnerships with retail outlets, schools, and health centers within Ngororero District." },
  { num: "03", title: "Financial Sustainability", date: "By Year 2", text: "Achieve operational break-even by end of Year 2 and a minimum 15% net profit margin by Year 3, supported by sustainable production and strategic partnerships." },
];

const values = [
  { Icon: Leaf, title: "Affordability", desc: "Every product priced to be accessible to low-income households in rural Rwanda.", color: "text-green-700" },
  { Icon: Shield, title: "Quality & Safety", desc: "All products meet RSB national food safety standards  ,  standardized processing, hygienic packaging.", color: "text-amber-600" },
  { Icon: BarChart2, title: "Measurable Impact", desc: "We track nutrition outcomes, repeat purchases, and farmer income improvements.", color: "text-green-700" },
  { Icon: Users, title: "Community-Driven", desc: "Products co-created with mothers, CHWs, and farmers to ensure cultural relevance.", color: "text-amber-600" },
  { Icon: Handshake, title: "Farmer Partnership", desc: "Contractual relationships with smallholder farmers ensure sustainable supply and fair income.", color: "text-green-700" },
  { Icon: Target, title: "Child-Centered", desc: "All activities prioritize improving nutrition outcomes for children under five.", color: "text-amber-600" },
];

const team = [
  { name: "Jean Paul Bukuru", role: "Founder & CEO", id: "Ngororero District, Rwanda", bio: "Entrepreneur and public health advocate with hands-on experience at Rwanda Biomedical Center's Maternal, Child, and Community Health program. Founded SoyaThrive to bridge the gap between local soybean production and affordable child nutrition.", initials: "JP" },
  { name: "Dr. Chioma Joy Okonkwo", role: "Strategic Advisor", id: "Nutrition & Enterprise Strategy", bio: "Providing strategic guidance on enterprise development, nutrition programming, and sustainable food systems. Advises SoyaThrive on program design and impact measurement frameworks.", initials: "CJ" },
];

export default function About() {
  const { ref: storyRef, inView: storyIn } = useInView<HTMLDivElement>();
  const { ref: vmRef, inView: vmIn } = useInView<HTMLDivElement>();
  const { ref: statsRef, inView: statsIn } = useInView<HTMLDivElement>();
  const { ref: valuesRef, activeIndex: valActive } = useStaggeredInView<HTMLDivElement>(values.length);
  const { ref: objRef, inView: objIn } = useInView<HTMLDivElement>();
  const { ref: teamRef, inView: teamIn } = useInView<HTMLDivElement>();

  return (
    <>
      <PageHero
        badge="About Us"
        title="Our Mission &"
        highlight="Story"
        subtitle="Addressing child malnutrition in Ngororero District through affordable soy-based foods, farmer empowerment, and community nutrition education."
        color="green"
        image="/images/about-bg.jpg"
      />

      {/* ── FOUNDING STORY ── */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="max-w-11/12 mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={storyIn ? "animate-fade-left" : "opacity-0"}>
              <Eyebrow text="Founding Story" />
              <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-6">
                Born from Lived Experience
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                SoyaThrive was inspired by both personal experience and professional exposure to the
                realities of malnutrition in Rwanda. Growing up in a rural community, our founder
                witnessed many children suffering from stunting and poor nutrition due to limited
                access to affordable, protein-rich foods.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                This was reinforced during an internship at the Rwanda Biomedical Center (RBC),
                working in Public Health under the Maternal, Child, and Community Health (MCCH)
                program  ,  providing deep insight into the widespread challenges of child malnutrition.
              </p>
              <p className="text-gray-500 leading-relaxed">
                These experiences motivated the creation of SoyaThrive as a practical and scalable
                response  ,  combining local soy processing, farmer capacity building, and community
                nutrition education.
              </p>
            </div>

            <div className={`border border-gray-100 divide-y divide-gray-100 ${storyIn ? "animate-fade-right delay-150" : "opacity-0"}`}>
              {[
                { stat: "92%", desc: "of survey respondents rated interest in soy products at 4–5 out of 5" },
                { stat: "80.8%", desc: "identified cost as the main barrier to consuming protein-rich foods" },
                { stat: "88%", desc: "of households have already consumed soy products in some form" },
                { stat: "89%", desc: "willing to purchase soy flour at 1,000–1,200 RWF per kilogram" },
              ].map((s) => (
                <div key={s.stat} className="p-6 flex gap-5 items-start hover:bg-green-50/30 transition-colors">
                  <div className="text-3xl font-black text-amber-600 [font-variant-numeric:tabular-nums] leading-none w-16 shrink-0">
                    {s.stat}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pt-1">{s.desc}</p>
                </div>
              ))}
              <div className="px-6 py-3 bg-gray-50">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Survey findings · Ngororero District · Feb 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section ref={vmRef} className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-11/12 mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            <div className={`bg-green-800 p-10 relative overflow-hidden ${vmIn ? "animate-fade-up" : "opacity-0"}`}>
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 text-[8rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">V</div>
              <div className="relative">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6">
                  <Eye className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-6 h-px bg-amber-400" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber-400">Vision</span>
                </div>
                <p className="text-white/80 leading-relaxed text-base">
                  A Rwanda where every child grows up healthy, nourished, and free from malnutrition,
                  supported by sustainable, community-driven food systems that ensure access to
                  affordable, nutritious diets for all households.
                </p>
              </div>
            </div>
            <div className={`bg-amber-600 p-10 relative overflow-hidden ${vmIn ? "animate-fade-up delay-150" : "opacity-0"}`}>
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 text-[8rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">M</div>
              <div className="relative">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-6 h-px bg-white/60" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/80">Mission</span>
                </div>
                <p className="text-white/90 leading-relaxed text-base">
                  To combat child malnutrition in Rwanda by delivering affordable, protein-rich soy
                  foods while empowering farmers and communities through sustainable nutrition and
                  agricultural solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-11/12 mx-auto px-6 sm:px-10">
          <Eyebrow text="Business Overview" />
          <h2 className={`text-4xl font-black text-gray-900 tracking-tight mb-12 ${statsIn ? "animate-fade-up" : "opacity-0"}`}>
            Where We Stand
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-gray-200">
            {[
              { label: "120", sub: "Households surveyed", desc: "Comprehensive field research completed in Ngororero District, February 2026." },
              { label: "95,000", sub: "Total households", desc: "Estimated households in Ngororero District  ,  our primary starting market." },
              { label: "150–200", sub: "Schools & ECD centers", desc: "Targeted for institutional bulk supply, serving over 20,000 children annually." },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`bg-white p-8 hover:bg-green-50/30 transition-colors ${statsIn ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl font-black text-green-700 [font-variant-numeric:tabular-nums] leading-none mb-1">
                  {s.label}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 border-t border-gray-100 pt-3 mt-3">
                  {s.sub}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-11/12 mx-auto px-6 sm:px-10">
          <Eyebrow text="Core Values" />
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-14">
            What Guides Us
          </h2>
          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`border-l-2 border-l-green-700 hover:border-l-amber-600 border border-gray-100 bg-white pl-5 pr-5 py-6 transition-all duration-300 card-lift ${
                  i <= valActive ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-8 border border-gray-200 flex items-center justify-center mb-4">
                  <v.Icon className={`w-4 h-4 ${v.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ── */}
      <section ref={objRef} className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-11/12 mx-auto px-6 sm:px-10">
          <Eyebrow text="Strategic Objectives" amber />
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-14">
            Our Three-Year Goals
          </h2>
          <div className="space-y-px bg-gray-200">
            {objectives.map((o, i) => (
              <div
                key={o.num}
                className={`bg-white p-8 flex gap-8 items-start hover:bg-amber-50/30 transition-colors ${objIn ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span className="text-[4.5rem] font-black text-gray-100 leading-none shrink-0 [font-variant-numeric:tabular-nums]">
                  {o.num}
                </span>
                <div className="flex-1 pt-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-black text-gray-900 text-lg">{o.title}</h3>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest border border-gray-200 text-gray-400 px-2.5 py-0.5">
                      {o.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section ref={teamRef} className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-11/12 mx-auto px-6 sm:px-10">
          <Eyebrow text="Our Team" />
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-14">
            The People Behind SoyaThrive
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {team.map((t, i) => (
              <div
                key={t.name}
                className={`border border-gray-200 bg-white overflow-hidden card-lift ${teamIn ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="h-24 bg-green-800 flex items-center px-8">
                  <span className="text-5xl font-black text-white/20 leading-none">{t.initials}</span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-green-700" />
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700">{t.role}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-0.5 mt-1">{t.name}</h3>
                  <div className="text-xs text-gray-400 mb-4 font-medium">{t.id}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-green-800 hero-grain border-t-2 border-amber-500">
        <div className="relative z-10 max-w-11/12 mx-auto px-6 sm:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-amber-400" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Get Involved</span>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">Want to Know More?</h2>
              <p className="text-white/60 mt-2 max-w-xl text-sm leading-relaxed">
                Reach out via WhatsApp, or explore our products and funding pages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm rounded-lg transition-all"
              >
                Our Products <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/25 text-white hover:bg-white/10 font-semibold text-sm rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
