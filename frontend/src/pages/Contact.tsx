import { useState } from "react";
import { Building2, Users, Handshake, Sprout, MapPin, Landmark, Calendar, MessageCircle, HeartPulse, BookOpen, ChevronDown, Check } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL = "https://wa.me/250780000000";
const WHATSAPP_MSG = (role: string) =>
  `https://wa.me/250780000000?text=${encodeURIComponent(`Hello! I am interested in CHANCE For ALL as a ${role}. I would like to learn more.`)}`;

const roles = [
  { id: "school", Icon: Building2, title: "School / Institution", desc: "Partner with us to bring structured mentorship and counseling to your students.", color: "text-blue-600", bg: "bg-blue-50" },
  { id: "parent", Icon: Users, title: "Parent / Guardian", desc: "Enroll your child in our affordable term-based mentorship and counseling program.", color: "text-amber-600", bg: "bg-amber-50" },
  { id: "donor", Icon: Handshake, title: "Donor / NGO", desc: "Fund the cross-subsidy model enabling free services for vulnerable teenagers.", color: "text-green-600", bg: "bg-green-50" },
  { id: "mentor", Icon: Sprout, title: "Volunteer / Mentor", desc: "Join our trained mentor network and guide teenagers through personal development.", color: "text-rose-600", bg: "bg-rose-50" },
];

const faqs = [
  { q: "How much does the program cost?", a: "The program is priced at $10–$20 per month (school-term packages). Exact pricing depends on the number of sessions and services enrolled in. Free introductory sessions are available." },
  { q: "Where are services delivered?", a: "All services are delivered within partner secondary schools in Nyamasheke District. Students receive support in a safe, familiar environment — no travel required." },
  { q: "Who qualifies as a beneficiary?", a: "Vulnerable and abandoned teenagers in partner schools are identified in collaboration with school administrators and local leaders using defined vulnerability criteria." },
  { q: "How is confidentiality maintained?", a: "All counseling sessions are private and conducted according to professional ethical standards. No information is shared without the student's consent." },
  { q: "Is the organization registered?", a: "Chance for All is in the process of registering through the Rwanda Development Board (RDB) as a social enterprise, complying with all child protection and education regulations." },
  { q: "How can my organization partner with you?", a: "Schools, NGOs, and community organizations can reach out via the contact form or WhatsApp to discuss formal partnership through MoUs and multi-year agreements." },
];

export default function Contact() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedRoleLabel = roles.find((r) => r.id === selectedRole)?.title ?? "General";

  return (
    <>
      <PageHero
        badge="Get Involved"
        title="Join the"
        highlight="Movement"
        subtitle="Partner with us, enroll your child, support vulnerable teenagers, or volunteer as a mentor in Nyamasheke District."
        badgeColor="blue"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* WhatsApp quick contact bar */}
        <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-5 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-green-900">Prefer a quick chat?</p>
              <p className="text-sm text-green-700">Message us directly on WhatsApp — we respond fast.</p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" /> Open WhatsApp
          </a>
        </div>

        {/* Role selector */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">How Would You Like to Help?</h2>
          <p className="text-gray-500 text-center mb-8">Select your role to tailor the message below.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRole(selectedRole === r.id ? null : r.id)}
                className={`text-left rounded-2xl p-6 border-2 transition-all hover:shadow-md ${
                  selectedRole === r.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <r.Icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{r.title}</h3>
                <p className="text-xs text-gray-500">{r.desc}</p>
                {selectedRole === r.id && (
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-blue-600">
                    <Check className="w-3 h-3" /> Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* WhatsApp per-role buttons */}
          {selectedRole && (
            <div className="mt-6 text-center">
              <a
                href={WHATSAPP_MSG(selectedRoleLabel)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us as a {selectedRoleLabel}
              </a>
            </div>
          )}
        </div>

        {/* Contact form + info */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {selectedRole ? `Contact Us — ${selectedRoleLabel}` : "Send Us a Message"}
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-500 text-sm mb-6">We've received your message and will be in touch within 2–3 business days.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", message: "" }); }}
                      className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-500 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Follow up on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Organization / School <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="School or organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      placeholder={
                        selectedRole === "school" ? "Tell us about your school and how you'd like to partner..." :
                        selectedRole === "parent" ? "Tell us about your child and which services interest you..." :
                        selectedRole === "donor" ? "Tell us about your organization and how you'd like to support..." :
                        "How can we help you?"
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-sm"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respond within 2–3 business days. Or chat instantly on WhatsApp.</p>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-blue-800 rounded-3xl p-7 text-white">
              <h3 className="font-bold text-lg mb-5">Contact Info</h3>
              <div className="space-y-4 text-sm">
                {[
                  { Icon: MapPin, label: "Location", val: "Nyamasheke District, Western Province, Rwanda" },
                  { Icon: Landmark, label: "Institution", val: "African Leadership University (ALU)" },
                  { Icon: Calendar, label: "Founded", val: "September 2025" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-3 items-start">
                    <c.Icon className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-blue-400 text-xs font-semibold">{c.label}</div>
                      <div className="text-blue-100">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-blue-700">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-bold text-amber-800 mb-3">SDG Alignment</h3>
              <div className="space-y-2">
                <div className="flex gap-2 items-center text-sm text-amber-700">
                  <HeartPulse className="w-4 h-4 shrink-0" /> SDG 3 — Good Health &amp; Well-being
                </div>
                <div className="flex gap-2 items-center text-sm text-amber-700">
                  <BookOpen className="w-4 h-4 shrink-0" /> SDG 4 — Quality Education
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Chancelline Niyotugendana</h3>
              <div className="text-blue-600 text-sm mb-0.5">Founder & Program Director</div>
              <div className="text-gray-400 text-xs">Student ID: 745770020 · ALU</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
