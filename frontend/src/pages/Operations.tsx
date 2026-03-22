import { Building2, Search, ClipboardList, Handshake, Lightbulb, BarChart2, UserCircle, FolderOpen, Sprout, Brain, Users, Check, MessageCircle, ChevronRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL = "https://wa.me/250780000000";

const processSteps = [
  { step: 1, title: "School Partnership Development", desc: "Chance for All identifies and partners with secondary schools to implement the program within their environment.", Icon: Building2 },
  { step: 2, title: "Student Identification", desc: "Partner schools help identify students — both vulnerable beneficiaries and paying clients — using defined criteria.", Icon: Search },
  { step: 3, title: "Program Enrollment", desc: "Students are registered in the mentorship and counseling program and individual needs are assessed.", Icon: ClipboardList },
  { step: 4, title: "Mentorship & Counseling Sessions", desc: "Mentors conduct regular sessions on personal development, emotional well-being, and academic support.", Icon: Handshake },
  { step: 5, title: "Life Skills Workshops", desc: "Students participate in workshops that build confidence, leadership, and resilience.", Icon: Lightbulb },
  { step: 6, title: "Support Services & Follow-up", desc: "Beneficiaries may receive school materials or assistance. Progress is tracked via M&E tools.", Icon: BarChart2 },
];

const team = [
  { role: "Program Director", resp: "Provides strategic leadership, oversees partnerships, and ensures program sustainability.", Icon: UserCircle },
  { role: "Program Coordinator", resp: "Manages school partnerships, organizes activities, and supervises mentors.", Icon: FolderOpen },
  { role: "Mentors", resp: "Provide regular mentorship sessions and personal development support to students.", Icon: Sprout },
  { role: "Professional Counselors", resp: "Deliver trauma-informed counseling sessions and psychological support.", Icon: Brain },
  { role: "Volunteers", resp: "Assist with mentorship activities, workshops, and student engagement programs.", Icon: Users },
];

const management = [
  { fn: "Program Delivery / Mentorship Coordination", desc: "Organizing mentorship sessions, counseling services, and life-skills workshops. Coordinating schedules and supporting mentors." },
  { fn: "Administration / Program Operations", desc: "Managing daily activities, coordinating school communication, maintaining documentation, and overseeing logistics." },
  { fn: "Human Resources", desc: "Recruiting, training, and supervising mentors, counselors, and staff. Ensuring ethical safeguarding standards." },
  { fn: "Community Engagement & Outreach", desc: "Promoting via social media, school partnerships, and community outreach. Communicating program benefits to stakeholders." },
  { fn: "Monitoring & Evaluation", desc: "Tracking program outcomes, student participation, and mentorship progress through internal monitoring tools." },
];

const marketing = [
  { group: "Paying Clients", Icon: Users, channels: "Instagram, Facebook, WhatsApp, school meetings, parent presentations, youth workshops", message: "Structured mentorship & counseling programs supporting emotional well-being, leadership, and academic success." },
  { group: "Beneficiaries", Icon: Handshake, channels: "School partnerships, community outreach, local leaders, social workers", message: "Access to mentorship, counseling, and educational support to help vulnerable teenagers stay in school." },
  { group: "Schools & Partners", Icon: Building2, channels: "School meetings, administrator outreach, educational presentations", message: "A structured program improving student well-being, discipline, and personal development." },
];

const permits = [
  { label: "RDB Registration", desc: "Legal registration through the Rwanda Development Board as a social enterprise or non-profit initiative." },
  { label: "Child Protection Compliance", desc: "Adherence to national child protection policies and education regulations by MINEDUC." },
  { label: "School Authorizations", desc: "Formal approval from each partner school to conduct sessions and workshops on their premises." },
];

export default function Operations() {
  return (
    <>
      <PageHero
        badge="Operations"
        title="Operations &"
        highlight="Marketing Plan"
        subtitle="A school-based service delivery model ensuring consistent, accessible support within safe and familiar learning environments."
        badgeColor="purple"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Permits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Permits &amp; Licenses</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {permits.map((p) => (
              <div key={p.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{p.label}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service delivery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Delivery Process</h2>
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-blue-100 hidden md:block" />
            <div className="space-y-5">
              {processSteps.map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                    <p.Icon className="w-5 h-5" />
                    <span className="text-xs font-bold opacity-60 mt-0.5">{p.step}</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Management Structure</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((t) => (
              <div key={t.role} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <t.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.role}</h3>
                <p className="text-sm text-gray-500">{t.resp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management functions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Management Functions</h2>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-100">
              {management.map((m, i) => (
                <div key={m.fn} className="flex gap-5 p-5 hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{m.fn}</h3>
                    <p className="text-sm text-gray-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marketing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Marketing Plan</h2>

          {/* Awareness */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-blue-800 mb-2">Customer Awareness Strategy</h3>
              <ul className="space-y-1.5 text-sm text-blue-700">
                {["Social media: Instagram, WhatsApp, Facebook", "School partnerships and parent meetings", "Presentations during school events", "Community outreach in rural areas"].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-bold text-amber-800 mb-2">Pricing Strategy</h3>
              <p className="text-sm text-amber-700 mb-3">Survey findings: most parents prefer prices below $10–$20/month.</p>
              <ul className="space-y-1.5 text-sm text-amber-700">
                {["Monthly or school-term packages within $10–$20/month", "Free introductory sessions for new families", "Group discounts for multiple students", "Mobile money payment accepted"].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target channels */}
          <div className="grid md:grid-cols-3 gap-5">
            {marketing.map((m) => (
              <div key={m.group} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <m.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{m.group}</h3>
                <div className="mb-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Channels</div>
                  <p className="text-xs text-gray-600">{m.channels}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Key Message</div>
                  <p className="text-xs text-gray-600">{m.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Suppliers &amp; Operational Partners</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Suppliers</h3>
              <ul className="space-y-2">
                {["Stationery and educational material suppliers", "Printing services for training manuals", "Technology suppliers for admin equipment"].map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 font-bold">•</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Operational Partners</h3>
              <ul className="space-y-2">
                {["Partner schools — student access and learning spaces", "Solid Minds Clinic — professional counseling services", "Community organizations — outreach and program awareness"].map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 font-bold">•</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-blue-800 rounded-3xl p-8 text-center text-white">
          <MessageCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2">Want to Partner With Us?</h3>
          <p className="text-blue-200 text-sm mb-5">Reach out directly via WhatsApp to discuss school partnerships or volunteering.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

