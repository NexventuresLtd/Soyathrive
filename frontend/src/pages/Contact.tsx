import { useState } from "react";
import { MapPin, Landmark, Calendar, MessageCircle, Leaf, Users, Handshake, Tractor, ChevronDown, Check } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.";
const WHATSAPP_MSG = (role: string) =>
  `https://wa.me/250780000000?text=${encodeURIComponent(`Hello SoyaThrive! I am interested as a ${role}. I would like to learn more.`)}`;

const roles = [
  { id: "donor", Icon: Handshake, title: "Donor / NGO", desc: "Fund soy food production, nutrition education, or farmer training programs." },
  { id: "partner", Icon: Leaf, title: "Institutional Partner", desc: "Schools, health centers, and ECD programs interested in bulk supply partnerships." },
  { id: "farmer", Icon: Tractor, title: "Soybean Farmer", desc: "Smallholder farmers in Ngororero interested in supply agreements and training." },
  { id: "community", Icon: Users, title: "Community Member", desc: "Households, CHWs, or community leaders wanting to learn about our products." },
];

const faqs = [
  { q: "Where are SoyaThrive products available?", a: "SoyaThrive is currently in the pilot stage in Ngororero District, Rwanda. Products will be distributed through local retailers, health centers, ECD centers, and community cooperatives." },
  { q: "How much do soy products cost?", a: "Fortified soy flour is targeted at 800–1,200 RWF per kilogram — a price confirmed as affordable and acceptable through community research. Other products are priced similarly." },
  { q: "How can farmers supply soybeans to SoyaThrive?", a: "We welcome local soybean farmers in Ngororero and surrounding districts. Contact us via WhatsApp to discuss supply agreements, pricing, and capacity building support." },
  { q: "Is SoyaThrive registered?", a: "SoyaThrive is in the process of registering with the Rwanda Development Board (RDB) and obtaining food safety certification from the Rwanda Standards Board (RSB)." },
  { q: "How does SoyaThrive ensure product quality?", a: "We implement standardized processing procedures, hygienic packaging, and quality control checks in compliance with Rwanda Standards Board requirements." },
  { q: "How can schools or health centers partner with us?", a: "Institutions can contact us via WhatsApp or the form below to discuss bulk supply agreements and integration with nutrition programs. We offer institutional pricing." },
];

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px bg-amber-500" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{text}</span>
    </div>
  );
}

export default function Contact() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const { ref: roleRef, activeIndex: roleIdx } = useStaggeredInView(roles.length, 80);
  const { ref: formRef, inView: formIn } = useInView();
  const { ref: faqRef, inView: faqIn } = useInView();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a pre-filled WhatsApp message from the form data
    const roleLabel = selectedRole ? `[${selectedRoleLabel}] ` : "";
    const orgPart = form.org ? `\nOrganization: ${form.org}` : "";
    const msg = `${roleLabel}Hello SoyaThrive!\n\nName: ${form.name}\nEmail: ${form.email}${orgPart}\n\n${form.message}`;
    const waUrl = `https://wa.me/250780000000?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
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
        image="/images/contact-bg.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* WhatsApp quick bar */}
        <section className="mb-20 border border-green-200 bg-green-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-black text-green-900">Prefer a quick chat?</p>
              <p className="text-sm text-green-700">Message us directly on WhatsApp — we respond promptly.</p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-green-700 hover:bg-green-800 text-white font-black transition-colors shrink-0 text-sm"
          >
            <MessageCircle className="w-4 h-4" /> Open WhatsApp
          </a>
        </section>

        {/* Role selector */}
        <section className="mb-20">
          <Eyebrow text="Your Role" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">
            How Would You Like<br />
            <span className="text-green-700">to Engage?</span>
          </h2>
          <p className="text-sm text-gray-400 mb-10">Select your role to tailor the conversation.</p>

          <div ref={roleRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {roles.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setSelectedRole(selectedRole === r.id ? null : r.id)}
                className={`text-left p-7 border-l-2 transition-all duration-500 ${
                  i < roleIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${
                  selectedRole === r.id
                    ? "bg-green-50 border-l-green-700"
                    : "bg-white border-l-transparent hover:border-l-green-700 hover:bg-gray-50"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <r.Icon className={`w-5 h-5 mb-4 ${selectedRole === r.id ? "text-green-700" : "text-gray-400"}`} />
                <h3 className="font-black text-gray-900 mb-1.5 text-sm">{r.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                {selectedRole === r.id && (
                  <div className="mt-3 flex items-center gap-1 text-xs font-black text-green-700">
                    <Check className="w-3 h-3" /> Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          {selectedRole && (
            <div className="mt-6 flex justify-center animate-fade-up">
              <a
                href={WHATSAPP_MSG(selectedRoleLabel)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-700 hover:bg-green-800 text-white font-black transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us as a {selectedRoleLabel}
              </a>
            </div>
          )}
        </section>

        {/* Contact form + info */}
        <section
          ref={formRef}
          className={`grid lg:grid-cols-3 gap-px bg-gray-200 mb-20 transition-all duration-700 ${formIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="lg:col-span-2 bg-white p-10">
            <Eyebrow text="Message" />
            <h2 className="text-2xl font-black text-gray-900 mb-8">
              {selectedRole ? `Contact Us — ${selectedRoleLabel}` : "Send Us a Message"}
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-700 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Your message has been opened in WhatsApp. We respond promptly — usually within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", message: "" }); }}
                    className="px-6 py-2.5 bg-green-700 text-white text-sm font-black hover:bg-green-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-green-700 text-green-700 text-sm font-bold hover:bg-green-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Open WhatsApp Again
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.15em] mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-600 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.15em] mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.15em] mb-2">
                    Organization <span className="font-normal normal-case text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-600 transition-colors"
                    placeholder="Organization or institution name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.15em] mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-green-600 transition-colors resize-none"
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
                  className="w-full py-3.5 bg-green-700 hover:bg-green-800 text-white font-black transition-all text-sm"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">Submitting opens WhatsApp with your message pre-filled. We respond within 24 hours.</p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-px">
            <div className="bg-green-900 p-8 text-white flex-1">
              <h3 className="font-black text-lg mb-6">Contact Info</h3>
              <div className="space-y-5 text-sm">
                {[
                  { Icon: MapPin, label: "Location", val: "Ngororero District, Western Province, Rwanda" },
                  { Icon: Landmark, label: "Sector", val: "Agro-Processing · Social Enterprise · Nutrition" },
                  { Icon: Calendar, label: "Founded", val: "2026" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-3 items-start">
                    <c.Icon className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-green-500 text-[10px] font-black uppercase tracking-[0.15em] mb-0.5">{c.label}</div>
                      <div className="text-green-100 text-sm">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-green-800">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-green-800 hover:bg-amber-50 font-black transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-8">
              <h3 className="font-black text-amber-900 mb-4 text-sm uppercase tracking-wider">SDG Alignment</h3>
              <div className="space-y-2.5">
                {[
                  "SDG 2 — Zero Hunger",
                  "SDG 3 — Good Health & Well-being",
                  "SDG 8 — Decent Work & Economic Growth",
                ].map((s) => (
                  <div key={s} className="flex gap-2 items-center text-sm text-amber-800">
                    <Leaf className="w-3.5 h-3.5 shrink-0 text-amber-500" /> {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-100">
              <h3 className="font-black text-gray-900 mb-0.5">Jean Paul Bukuru</h3>
              <div className="text-green-700 text-sm mb-0.5 font-semibold">Founder & CEO</div>
              <div className="text-gray-400 text-xs">Ngororero District, Rwanda · 2026</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          ref={faqRef}
          className={`transition-all duration-700 ${faqIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="FAQ" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Frequently Asked<br />
            <span className="text-green-700">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto border border-gray-200 divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3 animate-fade-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
