import { Link } from "react-router-dom";
import { Wheat, Heart, Users, ChevronRight, MessageCircle, Leaf, ShieldCheck, ChevronDown } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";

function StatCard({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
      <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-green-100 mt-1 leading-snug">{label}</div>
    </div>
  );
}

const highlights = [
  {
    Icon: Wheat,
    title: "Fortified Soy Products",
    desc: "Soy flour, porridge mix, soy milk, and roasted snacks made from locally sourced soybeans.",
    to: "/products",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    Icon: Heart,
    title: "Nutrition Education",
    desc: "Community workshops and cooking demonstrations led by trusted Community Health Workers.",
    to: "/products",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    Icon: Users,
    title: "Farmer Empowerment",
    desc: "Partnering with smallholder farmers to build reliable soybean supply chains and income.",
    to: "/operations",
    color: "text-green-700",
    bg: "bg-green-50",
  },
  {
    Icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Standardized processing, safe packaging, and food safety compliance from day one.",
    to: "/about",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const milestones = [
  {
    date: "Feb 2026",
    tag: "Research",
    title: "Market validation completed",
    desc: "Survey of 120 respondents in Ngororero confirmed 92% interest in soy-based products.",
  },
  {
    date: "Mar 2026",
    tag: "Milestone",
    title: "Business plan submitted to ALU",
    desc: "Comprehensive plan submitted for Bachelor of Science in Entrepreneurial Leadership.",
  },
  {
    date: "2026",
    tag: "Next Step",
    title: "RDB registration & pilot launch",
    desc: "Processing facility setup, farmer agreements, and pilot production planned for 2026.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-green-700">
        <div className="max-w-5xl mx-auto px-6 text-center py-28">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-green-100 text-sm font-medium">Ngororero District, Rwanda · Est. 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Soya<span className="text-amber-400">Thrive</span>
          </h1>

          <p className="text-xl sm:text-2xl text-green-100 font-medium mb-4">
            Fighting Child Malnutrition Through Soy
          </p>
          <p className="max-w-2xl mx-auto text-green-200 text-base sm:text-lg mb-10 leading-relaxed">
            A community-based social enterprise producing affordable, high-protein soy foods to nourish
            children under five in Ngororero District — while empowering local farmers and communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/products"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all shadow-md text-sm sm:text-base"
            >
              Our Products
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded-xl transition-all text-sm sm:text-base"
            >
              Our Story
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard value={92} suffix="%" label="Community Interest in Soy Products" />
            <StatCard value={5000} suffix="+" label="Target Households by Year 3" />
            <StatCard value={86} suffix="%" label="Community Already Aware of Soy" />
            <StatCard value={89} suffix="%" label="Willing to Buy at Target Price" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-green-300 animate-bounce">
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              An Integrated Nutrition Solution
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <Link
                key={h.title}
                to={h.to}
                className="group bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-xl ${h.bg} flex items-center justify-center mb-3`}>
                  <h.Icon className={`w-6 h-6 ${h.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{h.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Survey insight */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-green-200 mb-3">Research Insight · Feb 2026</p>
          <blockquote className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
            "80.8% of households cite <span className="text-amber-400">cost</span> as the main barrier
            to accessing protein-rich foods for their children."
          </blockquote>
          <p className="text-green-200 mb-6 max-w-2xl mx-auto">
            SoyaThrive addresses this gap directly — offering nutritious soy foods at prices
            low-income families can afford.
          </p>
          <Link
            to="/market"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-200 hover:text-white transition-colors"
          >
            View full market analysis
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Community-Centered Nutrition
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                SoyaThrive is more than a food business. We combine affordable soy food production
                with nutrition education, farmer empowerment, and community engagement — creating a
                self-reinforcing system that improves health and livelihoods simultaneously.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Products co-created with mothers, CHWs, and local farmers",
                  "Distributed through trusted community health networks",
                  "Soybeans sourced from Ngororero smallholder farmers",
                  "Nutrition education paired with every product purchase",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition-all"
                >
                  Our Story <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-green-400 text-gray-700 hover:text-green-700 font-semibold rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-green-700 rounded-3xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6 text-amber-400">Value Proposition</h3>
              <div className="space-y-4">
                {[
                  { label: "For Households", text: "Affordable, nutritious soy foods that improve child health without straining family budgets." },
                  { label: "For Farmers", text: "Reliable market access, fair prices, and capacity building for soybean cultivation." },
                  { label: "For Communities", text: "Integrated nutrition education that drives behavior change and long-term dietary improvement." },
                ].map((v) => (
                  <div key={v.label} className="border-l-2 border-amber-400 pl-4">
                    <div className="font-bold text-sm text-amber-300 mb-1">{v.label}</div>
                    <p className="text-green-100 text-sm leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full mb-3">
                Progress
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Latest Milestones</h2>
            </div>
            <Link to="/funding" className="text-sm text-green-700 hover:text-green-900 font-semibold hidden sm:block">
              Support our work →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {milestones.map((n) => (
              <div key={n.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-white bg-green-700 px-2 py-0.5 rounded">
                    {n.tag}
                  </span>
                  <span className="text-xs text-gray-400">{n.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{n.title}</h3>
                <p className="text-sm text-gray-500">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Join the Mission
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Whether you want to fund, partner, or simply learn more — SoyaThrive welcomes you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/funding"
              className="px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition-all shadow-md"
            >
              Support SoyaThrive
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold rounded-xl transition-all"
            >
              Get in Touch
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Chat Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
