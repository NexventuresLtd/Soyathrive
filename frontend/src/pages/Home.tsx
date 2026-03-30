import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";
import { useCountUp } from "../hooks/useCountUp";
import Eyebrow from "../components/ui/Eyebrow";
import BarChart from "../components/ui/BarChart";
import CTABand from "../components/ui/CTABand";
import PhotoBlock from "../components/ui/PhotoBlock";

const WHATSAPP_URL =
  "https://wa.me/250787144794?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";

const barriers = [
  { label: "Cost / Price", pct: 80.8 },
  { label: "Limited Availability", pct: 65.4 },
  { label: "Lack of Knowledge", pct: 48.1 },
  { label: "Cultural Preference", pct: 23.1 },
  { label: "Taste", pct: 15.4 },
];

const cycle = [
  { num: "01", title: "Local Soybeans", desc: "Sourced from smallholder farmers in Ngororero District  ,  guaranteed market, fair income." },
  { num: "02", title: "Fortified Foods", desc: "Processed into affordable flour, porridge, soy milk, and snacks for every household." },
  { num: "03", title: "Healthy Children", desc: "Children grow stronger. Farmers earn more. Communities build lasting food security." },
];

const proof = [
  { value: 52, suffix: "", label: "Households in baseline survey" },
  { value: 89, suffix: "%", label: "Willing to buy at our price" },
  { value: 87, suffix: "%", label: "Trust CHW nutrition advice" },
  { value: 4, suffix: ".48/5", label: "Interest score  ,  soy porridge" },
];

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 1600);
  return (
    <div ref={ref} className="py-8 px-6 border-r border-b border-gray-200 last:border-r-0">
      <div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight [font-variant-numeric:tabular-nums] mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-gray-500 leading-snug">{label}</div>
    </div>
  );
}

export default function Home() {
  const { ref: cycleRef, activeIndex: cycleIdx } = useStaggeredInView<HTMLDivElement>(3, 120);
  const { ref: proofRef, inView: proofIn } = useInView<HTMLDivElement>();

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-800" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-0 min-h-[540px] sm:min-h-[600px]">
            {/* Left */}
            <div className="flex flex-col justify-center py-16 sm:py-24 pr-0 lg:pr-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-green-800 mb-6 animate-fade-in">
                Ngororero District, Rwanda
              </p>
              <h1 className="text-display text-gray-950 mb-6 animate-fade-up delay-100 max-w-2xl">
                Nourishing Rwanda's Future,{" "}
                <span className="text-green-800">One Meal</span>{" "}
                at a Time.
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
                Affordable, locally produced soy foods  ,  paired with community education  ,  to help every
                child under five in Ngororero District thrive.
              </p>
              <div className="flex flex-wrap items-center gap-3 animate-fade-up delay-300">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-800 hover:bg-green-900 text-white text-sm font-bold transition-colors"
                >
                  Find Our Products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors"
                >
                  Partner with Us
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-gray-500 hover:text-green-800 text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Right  ,  hero image */}
            <div className="hidden lg:block -mr-0">
              <PhotoBlock
                src="https://www.unicef.org/rwanda/sites/unicef.org.rwanda/files/styles/press_release_feature/public/4G7A4891.jpg.webp?itok=N53dDnDa"
                alt="Mother feeding a healthy child in Rwanda"
                overlay="green"
                className="h-full min-h-[540px]"
              >
                {/* Floating stats on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  {[
                    { num: "80.8%", label: "of families struggle to afford protein-rich food" },
                    { num: "4.48/5", label: "community interest in soy porridge mix" },
                  ].map((s) => (
                    <div key={s.num} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3">
                      <span className="text-xl font-black text-amber-400 shrink-0">{s.num}</span>
                      <span className="text-xs text-white/80 leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </PhotoBlock>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow text="The Problem" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-6">
                Child malnutrition is a<br />solvable problem.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                In Ngororero District, <strong className="text-gray-800 font-semibold">80.8% of families</strong> struggle
                to afford protein-rich foods  ,  not because nutritious food doesn't exist, but because it
                isn't produced locally, priced affordably, or distributed where families need it most.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Soybeans grow abundantly in Western Province. SoyaThrive closes the gap between what
                is grown and what ends up on children's plates.
              </p>
              <Link
                to="/story#problem"
                className="inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-900 transition-colors group"
              >
                See the full research data
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-6">
                Why families don't eat more protein foods
              </p>
              <BarChart
                data={barriers}
                source="Source: SoyaThrive community survey, Feb 2026 (n=52)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION CYCLE ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Our Solution" />
          <div className="grid sm:grid-cols-2 gap-4 items-start mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              From farm to fork  , <br />a complete system.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed sm:pt-2">
              SoyaThrive doesn't just sell food. We create a circular system that feeds children,
              empowers farmers, and builds long-term food security across Ngororero District.
            </p>
          </div>
          <div ref={cycleRef} className="grid sm:grid-cols-3 gap-px bg-gray-200">
            {cycle.map((c, i) => (
              <div
                key={c.title}
                className={`bg-white px-8 py-10 ${i <= cycleIdx ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-6">{c.num}</div>
                <div className="w-8 h-0.5 bg-green-800 mb-5" />
                <h3 className="font-black text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
            <div>
              <Eyebrow text="Evidence Base" />
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                Community-validated from day one.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                Before building anything, we went into the community. Our February 2026 survey of 52
                households validated demand, pricing, and distribution channels.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Every product, price point, and program is built on what families told us  ,  not what
                we assumed.
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-4">
                Trusted by
              </p>
              <div className="flex flex-wrap gap-2">
                {["Community Health Workers", "ECD Centers", "Soy Farmers", "Health Centers"].map((t) => (
                  <span key={t} className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div ref={proofRef}>
              <div className={`grid grid-cols-2 border-l border-t border-gray-200 ${proofIn ? "animate-fade-right" : "opacity-0"}`}>
                {proof.map((p) => (
                  <Counter key={p.label} end={p.value} suffix={p.suffix} label={p.label} />
                ))}
              </div>
              <blockquote className="mt-8 border-l-2 border-green-800 pl-5">
                <p className="text-base text-gray-700 leading-relaxed italic font-medium mb-3">
                  "The community health worker showed me how easy it is to prepare. My children actually
                  like the taste  ,  that was the biggest surprise."
                </p>
                <cite className="text-xs text-gray-400 not-italic font-bold uppercase tracking-wider">
                  Divine  ,  Mother of 3, Ngororero District
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="grid grid-cols-3 h-40 sm:h-56">
        <PhotoBlock src="https://chwcentral.org/wp-content/uploads/2020/11/Rwanda-Nov-2020-Feature-Main-Pic.png" alt="Community health worker session" overlay="green" />
        <PhotoBlock src="../public/SoyaThrive_Products.png" alt="SoyaThrive product range" overlay="dark" />
        <PhotoBlock src="https://www.farmafrica.org/wp-content/uploads/2025/12/RS22344_Soybean-Alupe-05_lpr.jpg" alt="Soybean farmers in Ngororero" overlay="green" />
      </div>

      {/* ── CTA ── */}
      <CTABand
        eyebrow="Take Action"
        headline="Ready to make a difference in Ngororero District?"
        body="Buy our products, partner with us as a school or health center, or support our mission with a donation."
        primaryLabel="Learn About Our Products"
        primaryTo="/products"
        secondaryLabel="Get Involved"
        secondaryTo="/get-involved"
      />
    </>
  );
}
