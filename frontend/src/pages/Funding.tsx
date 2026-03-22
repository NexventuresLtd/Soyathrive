import { Link } from "react-router-dom";
import { MessageCircle, Heart, Users, Target, Sprout, ChevronRight, Check, Globe, Handshake, GraduationCap, Building2 } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { useCountUp } from "../hooks/useCountUp";

const WHATSAPP_FUND = `https://wa.me/250780000000?text=${encodeURIComponent("Hello! I would like to support CHANCE For ALL. Please tell me how I can contribute.")}`;

function AnimatedStat({ value, suffix = "", label, color }: { value: number; suffix?: string; label: string; color: string }) {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div ref={ref} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
      <div className={`text-4xl font-extrabold ${color} mb-1`}>{count.toLocaleString()}{suffix}</div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
}

const milestones = [
  { date: "Sep 2025", event: "CHANCE For ALL established in Nyamasheke District", status: "done" },
  { date: "Oct–Dec 2025", event: "Operational systems and frameworks developed", status: "done" },
  { date: "Feb 2026", event: "Market validation survey conducted among parents", status: "done" },
  { date: "Mar 2026", event: "Business plan submitted to African Leadership University", status: "done" },
  { date: "Jun 2026", event: "First school partnerships formalized (target: 2 schools)", status: "upcoming" },
  { date: "Dec 2026", event: "4 partner schools; 300 students enrolled", status: "upcoming" },
  { date: "Jun 2027", event: "300 paying families; 35% operational costs self-funded", status: "upcoming" },
  { date: "Dec 2027", event: "150+ vulnerable teens served via cross-subsidy model", status: "upcoming" },
  { date: "Dec 2028", event: "Expansion to 2+ additional districts; 800+ students total", status: "upcoming" },
];

const fundingUses = [
  { Icon: GraduationCap, title: "Mentor Training", desc: "Equip mentors with trauma-informed and youth development skills.", color: "text-blue-600", bg: "bg-blue-50" },
  { Icon: Heart, title: "Counseling Sessions", desc: "Fund professional counseling for vulnerable teenagers who cannot pay.", color: "text-rose-600", bg: "bg-rose-50" },
  { Icon: Building2, title: "School Materials", desc: "Provide stationery, workbooks, and learning resources to beneficiaries.", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: Target, title: "Career Workshops", desc: "Run career guidance and life-skills workshops across partner schools.", color: "text-green-600", bg: "bg-green-50" },
  { Icon: Globe, title: "Outreach & Expansion", desc: "Extend our reach to more schools and under-served communities.", color: "text-purple-600", bg: "bg-purple-50" },
  { Icon: Sprout, title: "Program Operations", desc: "Cover coordination, administration, and monitoring & evaluation tools.", color: "text-blue-600", bg: "bg-blue-50" },
];

const fundingSources = [
  { label: "Program Fees", pct: 42, color: "bg-blue-600" },
  { label: "Grants & Donations", pct: 35, color: "bg-amber-500" },
  { label: "Founder Contributions", pct: 15, color: "bg-green-500" },
  { label: "Partnerships & Sponsorships", pct: 8, color: "bg-purple-500" },
];

const howToSupport = [
  { Icon: Heart, title: "Make a Donation", desc: "One-time or recurring contributions directly fund services for vulnerable teenagers.", action: "Donate via WhatsApp", href: WHATSAPP_FUND },
  { Icon: Handshake, title: "Become a Partner", desc: "Schools, NGOs, and corporations can formalize partnerships through MoUs.", action: "Discuss Partnership", href: WHATSAPP_FUND },
  { Icon: Users, title: "Volunteer as Mentor", desc: "Trained mentors are the heart of our program. Join the network.", action: "Apply as Mentor", href: WHATSAPP_FUND },
  { Icon: Globe, title: "Apply for Grants", desc: "We welcome applications from foundations interested in Rwanda youth development.", action: "Contact Us", href: WHATSAPP_FUND },
];

export default function Funding() {
  return (
    <>
      <PageHero
        badge="Support Us"
        title="Fund the"
        highlight="Mission"
        subtitle="Every contribution — big or small — helps us give abandoned and vulnerable teenagers a chance at a better future."
        badgeColor="blue"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* WhatsApp Funding CTA */}
        <div className="bg-green-600 rounded-3xl p-8 sm:p-10 text-white text-center mb-16">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Make an Impact?</h2>
          <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
            The fastest way to get started is a WhatsApp message. Tell us how you'd like to help and we'll guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_FUND}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" /> Fund via WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Use Contact Form <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Impact stats */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
              Your Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What Your Support Achieves</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            <AnimatedStat value={300} suffix="+" label="Students Targeted in 2026" color="text-blue-600" />
            <AnimatedStat value={150} suffix="+" label="Vulnerable Teens Served Free" color="text-amber-500" />
            <AnimatedStat value={4} label="Partner Schools" color="text-green-600" />
            <AnimatedStat value={74} suffix="%" label="Parents Willing to Pay" color="text-blue-600" />
          </div>
        </div>

        {/* How to support */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How You Can Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToSupport.map((h) => (
              <div key={h.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <h.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{h.desc}</p>
                <a
                  href={h.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> {h.action}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* What funding covers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Where Your Money Goes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundingUses.map((f) => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <f.Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funding sources breakdown + Milestones */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Expected Funding Sources</h2>
            <p className="text-sm text-gray-400 mb-6">How the program sustains itself at scale.</p>
            <div className="space-y-5">
              {fundingSources.map((f) => (
                <div key={f.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{f.label}</span>
                    <span className="font-bold text-gray-900">{f.pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${f.color} rounded-full`} style={{ width: `${f.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 leading-relaxed">
                Grants and donations are critical especially in early years as program fees grow with enrollment.
                We welcome multi-year funding commitments from foundations and impact investors.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 overflow-auto max-h-[420px]">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Growth Milestones</h2>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.date} className="flex gap-4 items-start">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${m.status === "done" ? "bg-blue-500" : "bg-gray-300"}`} />
                  <div>
                    <div className={`text-xs font-bold mb-0.5 ${m.status === "done" ? "text-blue-600" : "text-gray-400"}`}>{m.date}</div>
                    <p className="text-sm text-gray-600">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grant opportunities */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Grant Opportunities</h2>
          <p className="text-gray-500 text-sm mb-6">We actively pursue partnerships with foundations aligned to our mission.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { org: "UNICEF Rwanda", focus: "Child well-being, protection, and education programs" },
              { org: "Save the Children", focus: "Youth development, education, and poverty programs" },
              { org: "Government Youth Programs", focus: "MIGEPROF — child protection and youth empowerment" },
              { org: "African Development Foundation", focus: "Youth-led social enterprises and rural communities" },
              { org: "USAID Rwanda", focus: "Education, youth empowerment, and mental health programs" },
              { org: "Corporate Sponsors", focus: "CSR programs focused on education and community impact" },
            ].map((g) => (
              <div key={g.org} className="bg-white rounded-xl p-4 border border-gray-100 flex gap-3 items-start">
                <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{g.org}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{g.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-blue-800 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Every Child Deserves a Chance</h2>
              <p className="text-blue-200 leading-relaxed mb-6">
                Your support — whether a donation, partnership, or mentorship — directly changes the trajectory of a teenager's life in Nyamasheke, Rwanda.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "100% of donations go toward program delivery",
                  "Full transparency through annual impact reports",
                  "We are aligned with SDG 3 and SDG 4",
                ].map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-blue-100">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_FUND}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Fund via WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all"
                >
                  Contact Us <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-blue-700">
              <img src="/impact-funding.jpg" alt="Impact of your funding" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
