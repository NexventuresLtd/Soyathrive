import { Link } from "react-router-dom";
import { Brain, Sprout, Target, ChevronDown, ChevronRight, MessageCircle, Users, HandHeart } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

// Replace with the actual WhatsApp number
const WHATSAPP_URL = "https://wa.me/250780000000";

function StatCard({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 text-center">
      <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-blue-200 mt-1 leading-snug">{label}</div>
    </div>
  );
}

const highlights = [
  {
    Icon: Brain,
    title: "Professional Counseling",
    desc: "Trauma-informed counseling within school environments by certified professionals.",
    to: "/services",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    Icon: Sprout,
    title: "Structured Mentorship",
    desc: "Trained mentors guiding students through personal growth, leadership, and life skills.",
    to: "/services",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    Icon: Target,
    title: "Career Readiness",
    desc: "Workshops on university applications, scholarships, and professional development.",
    to: "/services",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    Icon: HandHeart,
    title: "Cross-Subsidy Model",
    desc: "Paying clients fund free services for abandoned and vulnerable teenagers.",
    to: "/about",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const news = [
  {
    date: "Feb 2026",
    tag: "Research",
    title: "Market validation survey completed",
    desc: "74.5% of parents expressed willingness to pay for structured mentorship services.",
  },
  {
    date: "Sep 2025",
    tag: "Launch",
    title: "CHANCE For ALL established",
    desc: "Foundational operational systems developed, including counseling and mentorship frameworks.",
  },
  {
    date: "Mar 2026",
    tag: "Milestone",
    title: "Business plan submitted to ALU",
    desc: "Comprehensive plan submitted for Bachelor of Science in Entrepreneurial Leadership.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-800">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-28">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">Nyamasheke District, Rwanda · Est. 2025</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            CHANCE <span className="text-amber-400">For ALL</span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-4">
            School-Based Counseling &amp; Mentorship Social Enterprise
          </p>
          <p className="max-w-2xl mx-auto text-blue-200 text-base sm:text-lg mb-10 leading-relaxed">
            Empowering secondary school students aged 15–19 with professional counseling, structured
            mentorship, life-skills development, and career guidance — reaching those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/services"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-105 text-sm sm:text-base"
            >
              Explore Our Services
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded-xl transition-all text-sm sm:text-base"
            >
              Learn More
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard value={300} suffix="+" label="Students Targeted (2026)" />
            <StatCard value={4} label="Partner Schools" />
            <StatCard value={150} suffix="+" label="Vulnerable Teens Served" />
            <StatCard value={74} suffix="%" label="Parents Willing to Pay" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-blue-300 animate-bounce">
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Photo banner — origin story */}
      <section className="relative h-72 sm:h-96 overflow-hidden bg-blue-900">
        <img
          src="/nyamasheke.jpg"
          alt="Nyamasheke District, Rwanda"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-blue-900/60 border border-amber-400/30 px-3 py-1 rounded-full mb-3">
            Where We Come From
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow">
            Rooted in Nyamasheke, Rwanda
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-xl drop-shadow">
            Born from the need to support vulnerable youth in one of Rwanda's most under-served districts.
          </p>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Integrated Support for Every Student
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <Link
                key={h.title}
                to={h.to}
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-xl ${h.bg} flex items-center justify-center mb-3`}>
                  <h.Icon className={`w-6 h-6 ${h.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{h.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Students photo section */}
      <section className="py-0">
        <div className="grid md:grid-cols-3 h-64 sm:h-80">
          <div className="relative overflow-hidden bg-blue-100">
            <img src="/students.jpg" alt="Students in session" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-800/40 flex items-end p-4">
              <span className="text-white font-bold text-sm">Students in Session</span>
            </div>
          </div>
          <div className="relative overflow-hidden bg-amber-100">
            <img src="/counseling.jpg" alt="Counseling support" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-amber-800/40 flex items-end p-4">
              <span className="text-white font-bold text-sm">One-on-One Counseling</span>
            </div>
          </div>
          <div className="relative overflow-hidden bg-blue-100">
            <img src="/mentorship.jpg" alt="Mentorship program" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-900/40 flex items-end p-4">
              <span className="text-white font-bold text-sm">Mentorship Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Survey insight banner */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-3">Survey Insight · Feb 2026</p>
          <blockquote className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
            "40.8% of schools don't currently offer mentorship and counseling —
            while 49% of parents rate existing mental health support as{" "}
            <span className="text-amber-300">inadequate</span>."
          </blockquote>
          <Link
            to="/market"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white transition-colors"
          >
            View full market analysis
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Latest updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-3">
                Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Latest Milestones</h2>
            </div>
            <Link to="/funding" className="text-sm text-blue-600 hover:text-blue-800 font-semibold hidden sm:block">
              View all milestones →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {news.map((n) => (
              <div key={n.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-white bg-blue-600 px-2 py-0.5 rounded">
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

      {/* Impact photo + community */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                Our Community
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Built on Trust, Driven by Impact
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every session, every conversation, every moment of mentorship builds a stronger future for Rwanda's youth.
                We work hand-in-hand with schools, families, and community leaders to create lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
                >
                  Meet Our Team <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-72 bg-blue-100">
              <img src="/community.jpg" alt="Our community" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Whether you're a school, a parent, or a supporter — there's a role for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md"
            >
              Get Involved Today
            </Link>
            <Link
              to="/funding"
              className="px-8 py-3.5 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold rounded-xl transition-all"
            >
              Support Our Work
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Chat Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
