import { Link } from "react-router-dom";
import { Eye, Target, Leaf, Shield, BarChart2, Users, ChevronRight, MessageCircle, GraduationCap, Handshake } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";

const objectives = [
  {
    num: "01",
    title: "Product & Brand Quality",
    date: "By Year 3",
    text: "Develop and maintain high-quality, safe, and nutritionally fortified soy-based products, achieving at least 60% repeat purchase rate and strong brand trust among households and institutions in Ngororero District.",
    color: "border-green-300 bg-green-50",
  },
  {
    num: "02",
    title: "Market Penetration & Customer Reach",
    date: "By Year 3",
    text: "Establish SoyaThrive in Ngororero District by reaching at least 5,000 households and securing distribution partnerships with retail outlets, schools, and health centers.",
    color: "border-amber-300 bg-amber-50",
  },
  {
    num: "03",
    title: "Investment & Financial Sustainability",
    date: "By Year 2",
    text: "Achieve operational break-even by end of Year 2 and reach a minimum net profit margin of 15% by Year 3, supported by sustainable production and strategic partnerships.",
    color: "border-green-200 bg-green-50",
  },
];

const values = [
  { Icon: Leaf, title: "Affordability", desc: "Every product is priced to be accessible to low-income households in rural Rwanda.", color: "text-green-700", bg: "bg-green-50" },
  { Icon: Shield, title: "Quality & Safety", desc: "All products meet national food safety standards with standardized processing and hygienic packaging.", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: BarChart2, title: "Measurable Impact", desc: "We track nutrition outcomes, repeat purchases, and farmer income improvements.", color: "text-green-700", bg: "bg-green-50" },
  { Icon: Users, title: "Community-Driven", desc: "Products co-created with mothers, CHWs, and farmers to ensure cultural relevance.", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: Handshake, title: "Farmer Partnership", desc: "Contractual relationships with smallholder farmers ensure sustainable supply and fair income.", color: "text-green-700", bg: "bg-green-50" },
  { Icon: Target, title: "Child-Centered", desc: "All activities prioritize improving nutrition outcomes for children under five.", color: "text-amber-600", bg: "bg-amber-50" },
];

const team = [
  {
    name: "Jean Paul Bukuru",
    role: "Founder & Program Director",
    id: "Student ID: 256897847",
    bio: "Bachelor of Science in Entrepreneurial Leadership at African Leadership University. Inspired by personal experience with rural child malnutrition and professional exposure at Rwanda Biomedical Center's MCCH program.",
    initials: "JP",
  },
  {
    name: "Dr. Chioma Joy Okonkwo",
    role: "Academic Supervisor",
    id: "African Leadership University",
    bio: "Providing academic supervision and strategic guidance for the development of SoyaThrive as a sustainable community-based social enterprise addressing child malnutrition in Rwanda.",
    initials: "CJ",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Our Mission &"
        highlight="Story"
        subtitle="Addressing child malnutrition in Ngororero District through affordable soy-based foods, farmer empowerment, and community nutrition education."
        color="green"
      />

      {/* Founding story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full mb-4">
                Founding Story
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Born from Lived Experience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SoyaThrive was inspired by both personal experience and professional exposure to the realities
                of malnutrition in Rwanda. Growing up in a rural community, our founder witnessed many children
                suffering from stunting and poor nutrition — often due to limited access to affordable, protein-rich foods.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This experience was further reinforced during an internship at the Rwanda Biomedical Center (RBC),
                working in Public Health under the Maternal, Child, and Community Health (MCCH) program. The work
                provided deeper insight into the widespread challenges of child malnutrition and the urgent need for
                sustainable, community-based nutrition solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These experiences motivated the creation of SoyaThrive as a practical and scalable response to
                this critical problem — one that combines local soy processing, farmer capacity building, and
                community nutrition education.
              </p>
            </div>
            <div className="bg-green-700 rounded-3xl p-8 text-white">
              <h3 className="font-bold text-xl mb-6 text-amber-400">Key Research Findings</h3>
              <div className="space-y-5">
                {[
                  { stat: "92%", desc: "of survey respondents rated interest in soy products at 4–5 out of 5" },
                  { stat: "80.8%", desc: "identified cost as the main barrier to consuming protein-rich foods" },
                  { stat: "88%", desc: "of households have already consumed soy products in some form" },
                  { stat: "89%", desc: "willing to purchase soy flour at target price of 1,000–1,200 RWF/kg" },
                ].map((s) => (
                  <div key={s.stat} className="flex gap-4 items-start">
                    <div className="text-2xl font-extrabold text-amber-400 shrink-0 w-16">{s.stat}</div>
                    <p className="text-green-100 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-green-700 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Vision Statement</h2>
            <p className="text-green-100 leading-relaxed">
              A Rwanda where every child grows up healthy, nourished, and free from malnutrition,
              supported by sustainable, community-driven food systems that ensure access to affordable,
              nutritious diets for all households.
            </p>
          </div>

          <div className="bg-amber-600 rounded-3xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Mission Statement</h2>
            <p className="text-amber-50 leading-relaxed">
              To combat child malnutrition in Rwanda by delivering affordable, protein-rich soy foods
              while empowering farmers and communities through sustainable nutrition and agricultural solutions.
            </p>
          </div>
        </div>

        {/* Overview stats */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Overview</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
            SoyaThrive Initiative is a social enterprise focused on reducing chronic malnutrition among children
            under five in Rwanda, starting in Ngororero District. Foundational research has been completed including
            household nutrition surveys, stakeholder interviews, and market validation. The next phase involves
            registration with RDB, establishing the processing facility, and launching pilot production.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "120", desc: "Households surveyed in Ngororero District (Feb 2026)" },
              { label: "95,000", desc: "Total households in Ngororero — our starting market" },
              { label: "150–200", desc: "ECD centers and schools targeted for institutional supply" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-extrabold text-green-700 mb-1">{s.label}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <v.Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Strategic Objectives</h2>
          <div className="space-y-5">
            {objectives.map((o) => (
              <div key={o.num} className={`border rounded-2xl p-6 flex gap-6 items-start ${o.color}`}>
                <span className="text-4xl font-extrabold text-gray-300 shrink-0 leading-none">{o.num}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{o.title}</h3>
                    <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full">{o.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-32 bg-green-700 flex items-center justify-center">
                  <span className="text-white font-extrabold text-5xl">{t.initials}</span>
                </div>
                <div className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-green-700" />
                    <div className="text-green-700 font-medium text-sm">{t.role}</div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-0.5">{t.name}</h3>
                  <div className="text-gray-400 text-xs mb-4">{t.id}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Want to Know More?</h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Reach out via WhatsApp, or explore our products and funding pages to learn how you can get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all"
            >
              Explore Our Products <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
