import { Link } from "react-router-dom";
import { Eye, Zap, Users, Lock, BarChart2, Globe, Building2, Heart, ChevronRight, MessageCircle, GraduationCap, Handshake } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL = "https://wa.me/250780000000";

const objectives = [
  { num: "01", title: "Market Establishment", date: "Dec 2026", text: "Formalize partnerships with at least 4 secondary schools in Nyamasheke District and enroll a minimum of 300 students.", color: "border-blue-300 bg-blue-50" },
  { num: "02", title: "Revenue & Sustainability", date: "Jun 2027", text: "Enroll at least 300 paying families, generating revenue to cover 35% of operational costs through the cross-subsidy model.", color: "border-amber-300 bg-amber-50" },
  { num: "03", title: "Social Impact", date: "Dec 2027", text: "Provide fully subsidized services to at least 150 vulnerable or abandoned teenagers through strategic partnerships.", color: "border-green-300 bg-green-50" },
  { num: "04", title: "Geographic Expansion", date: "Dec 2028", text: "Expand to at least two additional districts, increasing total enrollment to 800 students across all partner schools.", color: "border-purple-300 bg-purple-50" },
  { num: "05", title: "Brand & Quality Assurance", date: "2028", text: "Achieve 85% parent satisfaction, 90% student retention, and annual impact reporting on emotional and academic outcomes.", color: "border-rose-300 bg-rose-50" },
];

const values = [
  { Icon: Handshake, title: "Inclusion", desc: "Every teenager, regardless of background or socio-economic status, deserves access to professional support.", color: "text-blue-600", bg: "bg-blue-50" },
  { Icon: Lock, title: "Confidentiality", desc: "All counseling sessions are private and handled with the highest ethical standards.", color: "text-gray-600", bg: "bg-gray-50" },
  { Icon: BarChart2, title: "Measurable Impact", desc: "We track emotional resilience, academic engagement, and career readiness outcomes.", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: Globe, title: "Sustainability", desc: "A cross-subsidy model ensures long-term financial viability and continuous social impact.", color: "text-green-600", bg: "bg-green-50" },
  { Icon: Building2, title: "School-Centered", desc: "Services delivered within schools reduce barriers and maximize student engagement.", color: "text-blue-600", bg: "bg-blue-50" },
  { Icon: Heart, title: "Trauma-Informed", desc: "All staff and mentors are trained in adolescent development and ethical safeguarding.", color: "text-rose-600", bg: "bg-rose-50" },
];

const team = [
  {
    name: "Chancelline Niyotugendana",
    role: "Founder & Program Director",
    id: "Student ID: 745770020",
    bio: "Bachelor of Science in Entrepreneurial Leadership at African Leadership University. Passionate about youth mental health and rural development.",
    photo: "/founder.jpg",
    initials: "CN",
  },
  {
    name: "Kellia Marie Reine Isaro",
    role: "Supervisor",
    id: "African Leadership University",
    bio: "Providing academic supervision and strategic guidance for the development of Chance for All as a sustainable social enterprise.",
    photo: "/supervisor.jpg",
    initials: "KI",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Our Mission &"
        highlight="Vision"
        subtitle="Addressing the gap in mental health support, mentorship, and career readiness for secondary school students in rural Rwanda."
        badgeColor="blue"
      />

      {/* Origin story banner */}
      <section className="relative h-64 sm:h-80 overflow-hidden bg-blue-900">
        <img
          src="/origin.jpg"
          alt="Where we come from — Nyamasheke District"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow mb-2">
            Where We Come From
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl drop-shadow">
            Born in Nyamasheke — one of Rwanda's most underserved districts — CHANCE For ALL was founded
            to give every abandoned child a universe of untold potential.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative bg-blue-700 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Vision Statement</h2>
              <p className="text-blue-100 leading-relaxed">
                To become the leading school-based adolescent counseling and mentorship social enterprise in rural Rwanda by 2030, setting the national standard for accessible, high-quality mental health support, career guidance, and opportunity readiness for secondary school students.
              </p>
            </div>
          </div>

          <div className="relative bg-amber-500 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Mission Statement</h2>
              <p className="text-amber-50 leading-relaxed">
                Chance for All exists to address the gap in accessible, structured mental health and career readiness support for secondary school students in rural Rwanda — through a sustainable cross-subsidy model that engages paying families while supporting vulnerable and abandoned teenagers.
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
            Chance for All is a school-based counseling and mentorship social enterprise established in September 2025 in Nyamasheke District, Rwanda. Since its launch, foundational operational systems have been developed, including a structured counseling and mentorship framework, safeguarding and ethical compliance procedures, stakeholder engagement processes, and monitoring and evaluation tools.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "40.8%", desc: "of schools don't currently offer mentorship or counseling" },
              { label: "49%", desc: "rate current mental health support as inadequate or very inadequate" },
              { label: "74.5%", desc: "of parents willing to pay for structured mentorship services" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-extrabold text-blue-600 mb-1">{s.label}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
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

        {/* Team — with photos */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Photo */}
                <div className="relative h-56 bg-blue-50">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback avatar */}
                  <div className="absolute inset-0 bg-blue-600 items-center justify-center hidden">
                    <span className="text-white font-extrabold text-5xl">{t.initials}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <div className="text-blue-600 font-medium text-sm">{t.role}</div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-0.5">{t.name}</h3>
                  <div className="text-gray-400 text-xs mb-4">{t.id}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community photos */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact in Action</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/impact1.jpg", label: "Group mentorship sessions" },
              { src: "/impact2.jpg", label: "Life-skills workshops" },
              { src: "/impact3.jpg", label: "School partnership" },
              { src: "/impact4.jpg", label: "Career guidance day" },
              { src: "/impact5.jpg", label: "Community outreach" },
              { src: "/impact6.jpg", label: "Student celebrations" },
            ].map((img) => (
              <div key={img.src} className="relative rounded-2xl overflow-hidden h-48 bg-blue-100 group">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-end p-4">
                  <span className="text-white font-semibold text-sm drop-shadow">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp + CTA */}
        <div className="bg-blue-800 rounded-3xl p-8 sm:p-12 text-white text-center">
          <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Want to Know More?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Reach out to us directly via WhatsApp, or explore our services and funding pages to learn how you can get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all"
            >
              Explore Our Services <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
