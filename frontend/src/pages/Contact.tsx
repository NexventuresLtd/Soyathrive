import { useState } from "react";
import { MapPin, Landmark, Calendar, MessageCircle, Leaf, Users, Handshake, Tractor, ChevronDown, Check } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";
const WHATSAPP_MSG = (role: string) =>
  `https://wa.me/250780000000?text=${encodeURIComponent(`Hello SoyaThrive! I am interested as a ${role}. I would like to learn more.`)}`;

const roles = [
  { id: "donor", Icon: Handshake, title: "Donor / NGO", desc: "Fund soy food production, nutrition education, or farmer training programs.", color: "text-green-700", bg: "bg-green-50" },
  { id: "partner", Icon: Leaf, title: "Institutional Partner", desc: "Schools, health centers, and ECD programs interested in bulk supply partnerships.", color: "text-amber-600", bg: "bg-amber-50" },
  { id: "farmer", Icon: Tractor, title: "Soybean Farmer", desc: "Smallholder farmers in Ngororero interested in supply agreements and training.", color: "text-green-700", bg: "bg-green-50" },
  { id: "community", Icon: Users, title: "Community Member", desc: "Households, CHWs, or community leaders wanting to learn about our products.", color: "text-amber-600", bg: "bg-amber-50" },
];

const faqs = [
  { q: "Where are SoyaThrive products available?", a: "SoyaThrive is currently in the pilot stage in Ngororero District, Rwanda. Products will be distributed through local retailers, health centers, ECD centers, and community cooperatives." },
  { q: "How much do soy products cost?", a: "Fortified soy flour is targeted at 800–1,200 RWF per kilogram — a price confirmed as affordable and acceptable through community research. Other products are priced similarly." },
  { q: "How can farmers supply soybeans to SoyaThrive?", a: "We welcome local soybean farmers in Ngororero and surrounding districts. Contact us via WhatsApp to discuss supply agreements, pricing, and capacity building support." },
  { q: "Is SoyaThrive registered?", a: "SoyaThrive is in the process of registering with the Rwanda Development Board (RDB) and obtaining food safety certification from the Rwanda Standards Board (RSB)." },
  { q: "How does SoyaThrive ensure product quality?", a: "We implement standardized processing procedures, hygienic packaging, and quality control checks in compliance with Rwanda Standards Board requirements." },
  { q: "How can schools or health centers partner with us?", a: "Institutions can contact us via WhatsApp or the form below to discuss bulk supply agreements and integration with nutrition programs. We offer institutional pricing." },
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
        title="Contact"
        highlight="SoyaThrive"
        subtitle="Partner with us, supply soybeans, stock our products, fund our mission, or simply learn more about what we do."
        color="green"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* WhatsApp quick bar */}
        <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-5 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-green-900">Prefer a quick chat?</p>
              <p className="text-sm text-green-700">Message us directly on WhatsApp — we respond promptly.</p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" /> Open WhatsApp
          </a>
        </div>

        {/* Role selector */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">How Would You Like to Engage?</h2>
          <p className="text-gray-500 text-center mb-8">Select your role to tailor the conversation.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRole(selectedRole === r.id ? null : r.id)}
                className={`text-left rounded-2xl p-6 border-2 transition-all hover:shadow-md ${
                  selectedRole === r.id
                    ? "border-green-500 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-300"
                }`}
              >
                <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <r.Icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{r.title}</h3>
                <p className="text-xs text-gray-500">{r.desc}</p>
                {selectedRole === r.id && (
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-green-700">
                    <Check className="w-3 h-3" /> Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          {selectedRole && (
            <div className="mt-6 text-center">
              <a
                href={WHATSAPP_MSG(selectedRoleLabel)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us as a {selectedRoleLabel}
              </a>
            </div>
          )}
        </div>

        {/* Contact form + info */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {selectedRole ? `Contact Us — ${selectedRoleLabel}` : "Send Us a Message"}
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-500 text-sm mb-6">We've received your message and will be in touch within 2–3 business days.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", message: "" }); }}
                      className="px-5 py-2 bg-green-700 text-white rounded-xl text-sm font-semibold hover:bg-green-800 transition-colors"
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
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
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
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Organization / Institution <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                      placeholder="Organization or institution name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all resize-none"
                      placeholder={
                        selectedRole === "donor" ? "Tell us about your organization and how you'd like to support..." :
                        selectedRole === "partner" ? "Tell us about your institution and the type of partnership you're interested in..." :
                        selectedRole === "farmer" ? "Tell us about your farm and soybean production capacity..." :
                        "How can we help you?"
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition-all shadow-md text-sm"
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
            <div className="bg-green-700 rounded-3xl p-7 text-white">
              <h3 className="font-bold text-lg mb-5">Contact Info</h3>
              <div className="space-y-4 text-sm">
                {[
                  { Icon: MapPin, label: "Location", val: "Ngororero District, Western Province, Rwanda" },
                  { Icon: Landmark, label: "Institution", val: "African Leadership University (ALU)" },
                  { Icon: Calendar, label: "Submitted", val: "22nd March, 2026" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-3 items-start">
                    <c.Icon className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-green-400 text-xs font-semibold">{c.label}</div>
                      <div className="text-green-100">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-green-600">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 bg-white text-green-700 hover:bg-green-50 font-bold rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-bold text-amber-800 mb-3">SDG Alignment</h3>
              <div className="space-y-2">
                <div className="flex gap-2 items-center text-sm text-amber-700">
                  <Leaf className="w-4 h-4 shrink-0" /> SDG 2 — Zero Hunger
                </div>
                <div className="flex gap-2 items-center text-sm text-amber-700">
                  <Leaf className="w-4 h-4 shrink-0" /> SDG 3 — Good Health &amp; Well-being
                </div>
                <div className="flex gap-2 items-center text-sm text-amber-700">
                  <Leaf className="w-4 h-4 shrink-0" /> SDG 8 — Decent Work &amp; Economic Growth
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Jean Paul Bukuru</h3>
              <div className="text-green-700 text-sm mb-0.5">Founder & Program Director</div>
              <div className="text-gray-400 text-xs">Student ID: 256897847 · ALU</div>
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
