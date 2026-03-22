import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Sprout, Target, HandHeart, Check, ChevronRight, MessageCircle } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL = "https://wa.me/250780000000";

const services = [
  {
    id: "counseling",
    Icon: Heart,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    headerBg: "bg-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    accent: "text-rose-600",
    label: "A",
    title: "School-Based Counseling",
    subtitle: "Emotional Well-being Support",
    focus: "Provide safe and confidential counseling support that strengthens emotional resilience and mental well-being among teenagers.",
    approach: [
      "Professional counseling sessions within school environments",
      "One-on-one private counseling for individual support",
      "Group emotional support sessions to build peer resilience",
      "Collaboration with teachers to identify students needing support",
    ],
    impact: "Students gain improved emotional stability, stronger self-confidence, and better focus in their academic and personal lives.",
    partner: "Solid Minds Clinic",
  },
  {
    id: "mentorship",
    Icon: Sprout,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    headerBg: "bg-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    accent: "text-blue-600",
    label: "B",
    title: "Mentorship Programs",
    subtitle: "Personal Development",
    focus: "Strengthen teenagers' confidence, leadership abilities, and personal development through structured mentorship.",
    approach: [
      "Regular mentorship sessions with trained mentors",
      "Workshops on leadership, communication, and goal setting",
      "Peer mentorship circles for collaborative learning",
      "Exposure to positive role models and professional guidance",
    ],
    impact: "Students develop stronger self-esteem, improved decision-making, and a supportive guidance network.",
    partner: "Trained Mentor Network",
  },
  {
    id: "career",
    Icon: Target,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    headerBg: "bg-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-600",
    label: "C",
    title: "Career Guidance",
    subtitle: "Opportunity Readiness Training",
    focus: "Prepare teenagers for higher education and employment through structured career-readiness programs.",
    approach: [
      "Career exploration sessions introducing professional pathways",
      "Guidance on university applications, scholarships, and training",
      "Workshops on goal-setting and professional communication",
      "Opportunity-readiness training for internships and employment",
    ],
    impact: "Students gain clarity on career choices, increased motivation to succeed academically, and better future preparedness.",
    partner: "Community Professionals",
  },
  {
    id: "support",
    Icon: HandHeart,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    headerBg: "bg-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "text-green-600",
    label: "D",
    title: "Support for Vulnerable Teens",
    subtitle: "For Those Who Need It Most",
    focus: "Reduce barriers that prevent vulnerable teenagers from continuing their education.",
    approach: [
      "Partial assistance for school-related needs",
      "Tailored mentorship for abandoned students",
      "Partnerships with schools and community organizations",
      "Support funded through cross-subsidy model and donations",
    ],
    impact: "Vulnerable teenagers receive support to remain in school, strengthen emotional well-being, and pursue better opportunities.",
    partner: "NGO & Community Partners",
  },
];

const demandData = [
  { label: "Life-Skills Training", pct: 76.4 },
  { label: "Career Guidance & Mentorship", pct: 70.8 },
  { label: "Professional Counseling", pct: 63.2 },
  { label: "Academic Coaching", pct: 44.0 },
  { label: "Peer Support Programs", pct: 38.5 },
];

const barColors = ["bg-blue-600", "bg-blue-500", "bg-amber-500", "bg-blue-400", "bg-amber-400"];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero
        badge="Services"
        title="Integrated Support"
        highlight="Model"
        subtitle="Four key service components delivered directly within partner schools — ensuring accessibility, consistency, and engagement."
        badgeColor="blue"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === null ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Services
          </button>
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(active === s.id ? null : s.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === s.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <s.Icon className="w-4 h-4" /> {s.title}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services
            .filter((s) => active === null || active === s.id)
            .map((s) => (
              <div key={s.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${s.headerBg} p-6 flex items-start gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <s.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-0.5">Component {s.label}</div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <div className="text-sm opacity-80">{s.subtitle}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-gray-600 italic mb-4 border-l-2 border-gray-200 pl-3">{s.focus}</p>

                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Our Approach</h4>
                  <ul className="space-y-2 mb-5">
                    {s.approach.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className={`w-4 h-4 ${s.accent} mt-0.5 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={`${s.bg} rounded-xl p-3 border ${s.border} mb-3`}>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Impact: </span>
                    <span className="text-xs text-gray-600">{s.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Partner:</span>
                    <span className={`text-xs font-semibold ${s.accent}`}>{s.partner}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Service Validation */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Validation</h2>
          <p className="text-gray-500 text-sm mb-8">
            Survey results (Feb 2026) — most valued services among parents and students in Nyamasheke District.
          </p>
          <div className="space-y-6">
            {demandData.map((d, i) => (
              <div key={d.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-gray-700">{d.label}</span>
                  <span className="font-bold text-blue-600">{d.pct}%</span>
                </div>
                <div className="h-3.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColors[i]} transition-all duration-700`}
                    style={{ width: `${d.pct}%`, transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-subsidy explainer */}
        <div className="bg-blue-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-800/50 px-3 py-1 rounded-full mb-4">
                Dual-Impact Model
              </span>
              <h2 className="text-2xl font-bold mb-4">How the Cross-Subsidy Works</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Families who can afford to pay for structured mentorship and counseling services do so. This revenue directly funds free services for abandoned or vulnerable teenagers who cannot pay — creating a sustainable, self-reinforcing cycle of impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Enroll Your Child <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Paying Clients", desc: "Students from financially stable families enrolled in premium mentorship & counseling.", color: "bg-amber-400/20 border-amber-400/30" },
                { label: "→ Revenue Generated", desc: "Term-based fees collected via mobile money, reinvested into the program.", color: "bg-white/10 border-white/10" },
                { label: "Subsidized Beneficiaries", desc: "Abandoned & vulnerable teenagers receive the same quality services at no cost.", color: "bg-blue-400/20 border-blue-400/30" },
              ].map((s) => (
                <div key={s.label} className={`${s.color} border rounded-2xl p-4`}>
                  <div className="text-sm font-bold text-white mb-1">{s.label}</div>
                  <div className="text-xs text-blue-200">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
