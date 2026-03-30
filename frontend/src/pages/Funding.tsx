import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, Users, Target, Sprout, ChevronRight, Check, Globe, Handshake, Wheat, Leaf, X } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Modal from "../components/ui/Modal";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_FUND = `https://wa.me/250787144794?text=${encodeURIComponent("Hello SoyaThrive! I would like to support your initiative. Please tell me how I can contribute.")}`;

function AnimatedStat({ value, suffix = "", label, color }: { value: number; suffix?: string; label: string; color: string }) {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div ref={ref} className="bg-white border border-gray-100 p-8 text-center hover:border-green-200 hover:shadow-md transition-all">
      <div className={`text-4xl font-black ${color} mb-1 [font-variant-numeric:tabular-nums]`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] leading-snug mt-2">{label}</div>
    </div>
  );
}

const milestones = [
  { date: "Feb 2026", event: "Market validation survey of 120 households completed in Ngororero", status: "done" },
  { date: "Mar 2026", event: "SoyaThrive formally constituted; RDB registration and company formation initiated", status: "done" },
  { date: "Mid 2026", event: "RDB registration and processing facility setup", status: "upcoming" },
  { date: "Late 2026", event: "Pilot production and market launch in Ngororero District", status: "upcoming" },
  { date: "2027", event: "Reach 2,850 households; expand distribution to schools and health centers", status: "upcoming" },
  { date: "2027–2028", event: "Operational sustainability achieved; expand to Gakenke, Nyamagabe, Nyabihu", status: "upcoming" },
];

const fundingUses = [
  { Icon: Wheat, title: "Processing Equipment", desc: "Milling, roasting, and packaging machines for the community processing unit." },
  { Icon: Heart, title: "Nutrition Education", desc: "Fund cooking demonstrations and CHW-led nutrition sessions across communities." },
  { Icon: Sprout, title: "Farmer Support", desc: "Capacity building, training, and supply agreements for smallholder soybean farmers." },
  { Icon: Target, title: "Product Development", desc: "Research, testing, and quality assurance for fortified soy product lines." },
  { Icon: Globe, title: "Distribution Expansion", desc: "Extend distribution reach to more health centers, schools, and communities." },
  { Icon: Leaf, title: "Program Operations", desc: "Cover administration, regulatory compliance, and monitoring & evaluation." },
];

const fundingSources = [
  { label: "Product Revenue", pct: 45, color: "bg-green-700" },
  { label: "Grants & Donations", pct: 35, color: "bg-amber-500" },
  { label: "Impact Investment", pct: 12, color: "bg-green-400" },
  { label: "Founder Contributions", pct: 8, color: "bg-amber-300" },
];

const howToSupport = [
  {
    Icon: Heart,
    title: "Make a Donation",
    desc: "One-time or recurring contributions fund equipment, nutrition education, and farmer training.",
    action: "Donate via WhatsApp",
    href: WHATSAPP_FUND,
    modalTitle: "How to Donate",
    modalContent: [
      "Reach out to us via WhatsApp  ,  we'll guide you through the steps.",
      "Donations can be made via mobile money (MTN or Airtel Rwanda).",
      "We issue impact reports to donors who contribute regularly.",
      "All funds go directly into program delivery  ,  no administrative overhead surprises.",
    ],
  },
  {
    Icon: Handshake,
    title: "Become a Partner",
    desc: "NGOs, corporations, and institutions can partner through formal agreements to co-implement nutrition programs.",
    action: "Discuss Partnership",
    href: WHATSAPP_FUND,
    modalTitle: "Partnership Options",
    modalContent: [
      "Formal MoUs available for NGOs and corporate CSR partnerships.",
      "Co-implement nutrition education programs in schools and health centers.",
      "Co-brand product packaging for visibility and alignment.",
      "Joint grant applications with established institutions welcomed.",
    ],
  },
  {
    Icon: Users,
    title: "Support Farmers",
    desc: "Sponsor soybean farmer training and supply chain development to ensure sustainable production.",
    action: "Support Farmers",
    href: WHATSAPP_FUND,
    modalTitle: "Farmer Support Pathways",
    modalContent: [
      "Fund training workshops on improved soybean cultivation techniques.",
      "Sponsor post-harvest handling equipment for farmer cooperatives.",
      "Contribute to establishing formal supply agreements with smallholders.",
      "Support quality control infrastructure at the farm level.",
    ],
  },
  {
    Icon: Globe,
    title: "Grant Funding",
    desc: "We welcome applications from foundations aligned with nutrition, food security, and rural development.",
    action: "Contact Us",
    href: WHATSAPP_FUND,
    modalTitle: "Grant Opportunities",
    modalContent: [
      "Aligned with SDG 2 (Zero Hunger), SDG 3 (Good Health), and SDG 8 (Decent Work).",
      "Multi-year funding commitments help us plan capacity expansion.",
      "We provide detailed monitoring and evaluation reports to all grant funders.",
      "Introductory calls and formal proposals available upon request.",
    ],
  },
];

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px bg-amber-500" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{text}</span>
    </div>
  );
}

export default function Funding() {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const { ref: statsRef, activeIndex: statsIdx } = useStaggeredInView(4, 80);
  const { ref: usesRef, activeIndex: usesIdx } = useStaggeredInView(fundingUses.length, 70);
  const { ref: howRef, activeIndex: howIdx } = useStaggeredInView(howToSupport.length, 80);
  const { ref: modelRef, inView: modelIn } = useInView();
  const { ref: grantRef, inView: grantIn } = useInView();

  const activeSupport = modalIdx !== null ? howToSupport[modalIdx] : null;

  return (
    <>
      <PageHero
        badge="Support Us"
        title="Fund the"
        highlight="Mission"
        subtitle="Every contribution  ,  big or small  ,  helps us nourish children, empower farmers, and build sustainable food systems in Ngororero District."
        color="green"
        image="/images/funding-bg.jpg"
      />

      {/* Support modal */}
      <Modal
        open={modalIdx !== null}
        onClose={() => setModalIdx(null)}
        title={activeSupport?.modalTitle}
        size="md"
      >
        {activeSupport && (
          <div className="px-7 py-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-700 flex items-center justify-center">
                <activeSupport.Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-gray-900">{activeSupport.title}</p>
                <p className="text-xs text-gray-400">{activeSupport.desc}</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              {activeSupport.modalContent.map((item, i) => (
                <div key={i} className="flex gap-3 items-start border-l-2 border-l-green-700 pl-4 py-2">
                  <span className="text-xs font-black text-gray-300 [font-variant-numeric:tabular-nums] shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
              <a
                href={activeSupport.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white font-black text-sm hover:bg-green-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> {activeSupport.action}
              </a>
              <button
                onClick={() => setModalIdx(null)}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4" /> Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      <div className="max-w-11/12 mx-auto px-6 lg:px-8 py-20">

        {/* Primary WhatsApp CTA */}
        <section className="mb-20 relative bg-green-900 hero-grain overflow-hidden p-10 sm:p-16"
          style={{ backgroundImage: "url(/images/funding-cta-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-green-900/88" />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase tracking-tighter"
          >
            FUND
          </div>
          <div className="relative z-10 max-w-2xl">
            <Eyebrow text="Get Started" />
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-5">
              Ready to Make<br />
              <span className="text-amber-400">an Impact?</span>
            </h2>
            <p className="text-green-200 leading-relaxed mb-8 text-sm max-w-lg">
              The fastest way to get started is a WhatsApp message. Tell us how you'd like to help
              and we'll guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_FUND}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-800 font-black hover:bg-amber-50 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" /> Fund via WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm"
              >
                Use Contact Form <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Impact stats */}
        <section className="mb-20">
          <Eyebrow text="Your Impact" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            What Your Support<br />
            <span className="text-green-700">Achieves</span>
          </h2>
          <div ref={statsRef} className="grid sm:grid-cols-4 gap-px bg-gray-200">
            {[
              { value: 5000, suffix: "+", label: "Target Households by Year 3", color: "text-green-700" },
              { value: 92, suffix: "%", label: "Community Interest in Products", color: "text-amber-600" },
              { value: 20000, suffix: "+", label: "Children in Target Schools & ECDs", color: "text-green-700" },
              { value: 89, suffix: "%", label: "Willing to Buy at Target Price", color: "text-amber-600" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`transition-all duration-500 ${i < statsIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <AnimatedStat {...s} />
              </div>
            ))}
          </div>
        </section>

        {/* How to support */}
        <section className="mb-20">
          <Eyebrow text="Ways to Help" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">
            How You Can Help
          </h2>
          <p className="text-sm text-gray-400 mb-10">Click any card to learn more about each support pathway.</p>
          <div ref={howRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {howToSupport.map((h, i) => (
              <button
                key={h.title}
                onClick={() => setModalIdx(i)}
                className={`bg-white p-7 text-left border-l-2 border-l-green-700 hover:border-l-amber-500 hover:shadow-md hover:-translate-y-1 transition-all duration-500 group ${
                  i < howIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h.Icon className="w-5 h-5 text-green-700 group-hover:text-amber-600 mb-4 transition-colors" />
                <h3 className="font-black text-gray-900 mb-2">{h.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{h.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 group-hover:text-amber-600 transition-colors">
                  Learn more <ChevronRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Where contributions go */}
        <section className="mb-20">
          <Eyebrow text="Allocation" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Where Your<br />
            <span className="text-amber-600">Contribution Goes</span>
          </h2>
          <div ref={usesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {fundingUses.map((f, i) => (
              <div
                key={f.title}
                className={`bg-white p-7 border-l-2 border-l-green-700 hover:border-l-amber-500 transition-all duration-500 ${
                  i < usesIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <f.Icon className="w-5 h-5 text-green-700 mb-4" />
                <h3 className="font-black text-gray-900 mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Funding model + Milestones */}
        <section
          ref={modelRef}
          className={`mb-20 grid md:grid-cols-2 gap-px bg-gray-200 transition-all duration-700 ${modelIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white p-10">
            <Eyebrow text="Sustainability" />
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Blended Funding Model</h2>
            <p className="text-xs text-gray-400 mb-8 leading-relaxed">How SoyaThrive sustains its operations over time.</p>
            <div className="space-y-6">
              {fundingSources.map((f) => (
                <div key={f.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-gray-700">{f.label}</span>
                    <span className="font-black text-gray-900 [font-variant-numeric:tabular-nums]">{f.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full ${f.color} animate-bar-fill`}
                      style={{ "--target-width": `${f.pct}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mt-8 pt-6 border-t border-gray-100">
              Grants and donations are critical in early years. Revenue grows as community adoption increases.
              We welcome multi-year funding commitments from foundations and impact investors.
            </p>
          </div>
          <div className="bg-white p-10">
            <Eyebrow text="Timeline" />
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8">Growth Milestones</h2>
            <div className="space-y-5">
              {milestones.map((m) => (
                <div key={m.date} className="flex gap-4 items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${m.status === "done" ? "bg-green-700" : "bg-gray-200"}`} />
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-[0.15em] mb-0.5 ${m.status === "done" ? "text-green-700" : "text-gray-400"}`}>
                      {m.date}
                    </div>
                    <p className={`text-sm leading-relaxed ${m.status === "done" ? "text-gray-700" : "text-gray-400"}`}>
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grant opportunities */}
        <section
          ref={grantRef}
          className={`mb-16 transition-all duration-700 ${grantIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Partnerships" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">
            Grant & Partnership<br />
            <span className="text-green-700">Opportunities</span>
          </h2>
          <p className="text-sm text-gray-400 mb-8">We actively pursue partnerships aligned with our nutrition and agricultural mission.</p>
          <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
            {[
              { org: "WFP Rwanda", focus: "Food security, nutrition programs, and agro-processing support" },
              { org: "UNICEF Rwanda", focus: "Child well-being, nutrition, and maternal health programs" },
              { org: "Rwanda Development Board", focus: "Agro-processing investment and social enterprise support" },
              { org: "African Development Foundation", focus: "Youth-led social enterprises and rural food systems" },
              { org: "USAID Rwanda", focus: "Food security, nutrition, and agricultural development programs" },
              { org: "Corporate CSR Partners", focus: "Food, health, and community impact programs in Rwanda" },
            ].map((g) => (
              <div key={g.org} className="bg-white p-6 flex gap-4 items-start hover:bg-gray-50 transition-colors">
                <Check className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                <div>
                  <div className="font-black text-gray-900 text-sm">{g.org}</div>
                  <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{g.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="grid md:grid-cols-2 gap-px bg-gray-900 overflow-hidden">
          <div className="bg-green-900 p-10 sm:p-14 relative overflow-hidden hero-grain">
            <div className="absolute inset-0 bg-green-900/60" />
            <div className="relative z-10">
              <Eyebrow text="Why SoyaThrive" />
              <h2 className="text-2xl font-black text-white mb-5 leading-tight">
                Every Child Deserves<br />
                <span className="text-amber-400">Good Nutrition</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  { label: "Validated Demand", text: "92% community interest confirmed through rigorous field research in Feb 2026." },
                  { label: "Community-Rooted", text: "Products co-created with mothers, farmers, and CHWs ensuring adoption and trust." },
                  { label: "Scalable Model", text: "Starting in Ngororero; replicable across high-malnutrition districts in Rwanda." },
                ].map((w) => (
                  <div key={w.label} className="border-l-2 border-amber-400 pl-4">
                    <div className="font-black text-sm text-amber-300 mb-0.5">{w.label}</div>
                    <p className="text-green-200 text-xs leading-relaxed">{w.text}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-950 p-10 sm:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-black text-xl mb-4">Contribute Today</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "100% of contributions go toward program delivery",
                  "Full transparency through impact reporting",
                  "Aligned with SDG 2 (Zero Hunger) and SDG 3 (Good Health)",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_FUND}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-green-800 hover:bg-amber-50 font-black transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" /> Fund via WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-black transition-all text-sm"
              >
                Contact Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
