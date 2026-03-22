import { Link } from "react-router-dom";
import { MessageCircle, Heart, Users, Target, Sprout, ChevronRight, Check, Globe, Handshake, Wheat, Leaf } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { useCountUp } from "../hooks/useCountUp";

const WHATSAPP_FUND = `https://wa.me/250780000000?text=${encodeURIComponent("Hello SoyaThrive! I would like to support your initiative. Please tell me how I can contribute.")}`;

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
  { date: "Feb 2026", event: "Market validation survey of 120 households completed in Ngororero", status: "done" },
  { date: "Mar 2026", event: "Business plan submitted to African Leadership University", status: "done" },
  { date: "Mid 2026", event: "RDB registration and processing facility setup", status: "upcoming" },
  { date: "Late 2026", event: "Pilot production and market launch in Ngororero District", status: "upcoming" },
  { date: "2027", event: "Reach 2,850 households; expand distribution to schools and health centers", status: "upcoming" },
  { date: "2027–2028", event: "Operational sustainability achieved; expand to Gakenke, Nyamagabe, Nyabihu", status: "upcoming" },
];

const fundingUses = [
  { Icon: Wheat, title: "Processing Equipment", desc: "Milling, roasting, and packaging machines for the community processing unit.", color: "text-green-700", bg: "bg-green-50" },
  { Icon: Heart, title: "Nutrition Education", desc: "Fund cooking demonstrations and CHW-led nutrition sessions across communities.", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: Sprout, title: "Farmer Support", desc: "Capacity building, training, and supply agreements for smallholder soybean farmers.", color: "text-green-700", bg: "bg-green-50" },
  { Icon: Target, title: "Product Development", desc: "Research, testing, and quality assurance for fortified soy product lines.", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: Globe, title: "Distribution Expansion", desc: "Extend distribution reach to more health centers, schools, and communities.", color: "text-green-700", bg: "bg-green-50" },
  { Icon: Leaf, title: "Program Operations", desc: "Cover administration, regulatory compliance, and monitoring & evaluation.", color: "text-amber-600", bg: "bg-amber-50" },
];

const fundingSources = [
  { label: "Product Revenue", pct: 45, color: "bg-green-600" },
  { label: "Grants & Donations", pct: 35, color: "bg-amber-500" },
  { label: "Impact Investment", pct: 12, color: "bg-green-400" },
  { label: "Founder Contributions", pct: 8, color: "bg-amber-400" },
];

const howToSupport = [
  { Icon: Heart, title: "Make a Donation", desc: "One-time or recurring contributions fund equipment, nutrition education, and farmer training.", action: "Donate via WhatsApp", href: WHATSAPP_FUND },
  { Icon: Handshake, title: "Become a Partner", desc: "NGOs, corporations, and institutions can partner through formal agreements to co-implement nutrition programs.", action: "Discuss Partnership", href: WHATSAPP_FUND },
  { Icon: Users, title: "Support Farmers", desc: "Sponsor soybean farmer training and supply chain development to ensure sustainable production.", action: "Support Farmers", href: WHATSAPP_FUND },
  { Icon: Globe, title: "Grant Funding", desc: "We welcome applications from foundations aligned with nutrition, food security, and rural development.", action: "Contact Us", href: WHATSAPP_FUND },
];

export default function Funding() {
  return (
    <>
      <PageHero
        badge="Support Us"
        title="Fund the"
        highlight="Mission"
        subtitle="Every contribution — big or small — helps us nourish children, empower farmers, and build sustainable food systems in Ngororero District."
        color="green"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* WhatsApp Funding CTA */}
        <div className="bg-green-600 rounded-3xl p-8 sm:p-10 text-white text-center mb-16">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Make an Impact?</h2>
          <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
            The fastest way to get started is a WhatsApp message. Tell us how you'd like to help
            and we'll guide you through every step.
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full mb-3">
              Your Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What Your Support Achieves</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            <AnimatedStat value={5000} suffix="+" label="Target Households by Year 3" color="text-green-700" />
            <AnimatedStat value={92} suffix="%" label="Community Interest in Products" color="text-amber-600" />
            <AnimatedStat value={20000} suffix="+" label="Children in Target Schools & ECDs" color="text-green-700" />
            <AnimatedStat value={89} suffix="%" label="Willing to Buy at Target Price" color="text-amber-600" />
          </div>
        </div>

        {/* How to support */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How You Can Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToSupport.map((h) => (
              <div key={h.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <h.Icon className="w-6 h-6 text-green-700" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Where Your Contribution Goes</h2>
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

        {/* Funding sources + Milestones */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Blended Funding Model</h2>
            <p className="text-sm text-gray-400 mb-6">How SoyaThrive sustains its operations over time.</p>
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
                Grants and donations are critical in early years. Revenue grows as community adoption increases.
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
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${m.status === "done" ? "bg-green-600" : "bg-gray-300"}`} />
                  <div>
                    <div className={`text-xs font-bold mb-0.5 ${m.status === "done" ? "text-green-700" : "text-gray-400"}`}>{m.date}</div>
                    <p className="text-sm text-gray-600">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grant opportunities */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Grant &amp; Partnership Opportunities</h2>
          <p className="text-gray-500 text-sm mb-6">We actively pursue partnerships aligned with our nutrition and agricultural mission.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { org: "WFP Rwanda", focus: "Food security, nutrition programs, and agro-processing support" },
              { org: "UNICEF Rwanda", focus: "Child well-being, nutrition, and maternal health programs" },
              { org: "Rwanda Development Board", focus: "Agro-processing investment and social enterprise support" },
              { org: "African Development Foundation", focus: "Youth-led social enterprises and rural food systems" },
              { org: "USAID Rwanda", focus: "Food security, nutrition, and agricultural development programs" },
              { org: "Corporate CSR Partners", focus: "Food, health, and community impact programs in Rwanda" },
            ].map((g) => (
              <div key={g.org} className="bg-white rounded-xl p-4 border border-gray-100 flex gap-3 items-start">
                <Check className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{g.org}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{g.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-green-700 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Every Child Deserves Good Nutrition</h2>
              <p className="text-green-200 leading-relaxed mb-6">
                Your support — whether a donation, partnership, or in-kind contribution — directly improves
                the nutrition and health of children in Ngororero District, Rwanda.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "100% of contributions go toward program delivery",
                  "Full transparency through impact reporting",
                  "Aligned with SDG 2 (Zero Hunger) and SDG 3 (Good Health)",
                ].map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-green-100">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_FUND}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-green-700 hover:bg-green-50 font-bold rounded-xl transition-all"
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
            <div className="bg-white/10 border border-white/15 rounded-3xl p-8">
              <h3 className="text-amber-400 font-bold text-lg mb-4">Why SoyaThrive?</h3>
              <div className="space-y-4">
                {[
                  { label: "Validated Demand", text: "92% community interest confirmed through rigorous field research in Feb 2026." },
                  { label: "Community-Rooted", text: "Products co-created with mothers, farmers, and CHWs ensuring adoption and trust." },
                  { label: "Scalable Model", text: "Starting in Ngororero; replicable across high-malnutrition districts in Rwanda." },
                ].map((w) => (
                  <div key={w.label} className="border-l-2 border-amber-400 pl-4">
                    <div className="font-bold text-sm text-amber-300 mb-0.5">{w.label}</div>
                    <p className="text-green-100 text-xs leading-relaxed">{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
