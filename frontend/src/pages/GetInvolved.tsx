import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle, MapPin, ArrowRight, ShoppingCart, Building2, GraduationCap, Smartphone, type LucideIcon } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Eyebrow from "../components/ui/Eyebrow";
import PhotoBlock from "../components/ui/PhotoBlock";

const distributionPoints: { type: string; locations: string[]; Icon: LucideIcon }[] = [
  { type: "Local Markets", locations: ["Ngororero Main Market", "Muhanga Market", "Gitarama Market"], Icon: ShoppingCart },
  { type: "Health Centers", locations: ["Ngororero Health Center", "Kabaya Health Center", "Kivumu Health Center"], Icon: Building2 },
  { type: "ECD / Schools", locations: ["Ngororero ECD Centers", "Partner Primary Schools"], Icon: GraduationCap },
  { type: "WhatsApp Order", locations: ["Order online, delivered to your area or pickup point"], Icon: Smartphone },
];

const donationImpacts = [
  { amount: "5,000 RWF", impact: "Provides 5kg of fortified soy flour  ,  enough to supplement a family's diet for 2 weeks." },
  { amount: "20,000 RWF", impact: "Funds a CHW cooking demonstration session reaching 15–20 caregivers in one community." },
  { amount: "50,000 RWF", impact: "Subsidises soy products for 10 vulnerable families for one full month." },
  { amount: "Your choice", impact: "Every amount helps us reach more families and expand our nutrition education programs." },
];

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello SoyaThrive Initiative,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    );
    window.open(`https://wa.me/250787144794?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">Your Name *</label>
          <input
            required value={name} onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">Email Address</label>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">Subject</label>
        <select
          value={subject} onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-green-800 transition-colors bg-white"
        >
          <option>General enquiry</option>
          <option>Buy our products</option>
          <option>Partnership request</option>
          <option>Donation enquiry</option>
          <option>Media or press</option>
        </select>
      </div>
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1.5">Message *</label>
        <textarea
          required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-800 transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-800 hover:bg-green-900 text-white font-bold text-sm transition-colors"
      >
        <MessageCircle className="w-4 h-4" /> Send via WhatsApp
      </button>
    </form>
  );
}

export default function GetInvolved() {
  return (
    <>
      <PageHero
        badge="Get Involved"
        title="Four Ways to"
        highlight="Make a Difference"
        subtitle="Buy our products, partner with us, support our mission with a donation, or simply get in touch. Every action helps end child malnutrition in Ngororero District."
      />

      {/* ── SECTION NAV ── */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 overflow-x-auto">
          <div className="flex min-w-max">
            {[
              { label: "Buy Our Products", hash: "buy" },
              { label: "Partner with Us", hash: "partner" },
              { label: "Donate", hash: "donate" },
              { label: "Contact", hash: "contact" },
            ].map((s) => (
              <a
                key={s.hash}
                href={`#${s.hash}`}
                className="px-5 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 whitespace-nowrap transition-colors border-r border-gray-100 last:border-r-0"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BUY ── */}
      <section id="buy" className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Buy Our Products" />
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                Find SoyaThrive<br />products near you.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Our products are available through local markets, health centers, and school programs
                in Ngororero District  ,  and via WhatsApp ordering with local delivery or pickup.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {distributionPoints.map((d) => (
                  <div key={d.type} className="border border-gray-200 bg-gray-50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <d.Icon className="w-4 h-4 text-green-700 shrink-0" />
                      <h3 className="font-black text-gray-900 text-sm">{d.type}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {d.locations.map((l) => (
                        <li key={l} className="flex items-start gap-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-green-700" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/250787144794?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20order%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-800 hover:bg-green-900 text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              {/* Product image */}
              <PhotoBlock
                src="/images/soy-products-display.jpg"
                alt="SoyaThrive product range display"
                overlay="none"
                className="h-48 border border-gray-200"
              />
              <div className="border border-gray-200 bg-gray-50">
                <div className="px-5 py-3 border-b border-gray-200">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Pricing Guide</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { product: "Soy Porridge Mix (500g)", price: "800 RWF" },
                    { product: "Soy Porridge Mix (1kg)", price: "1,400 RWF" },
                    { product: "Fortified Soy Flour (1kg)", price: "1,000–1,200 RWF" },
                    { product: "Soy Milk (200ml)", price: "300 RWF" },
                    { product: "Soy Milk (500ml)", price: "650 RWF" },
                    { product: "Roasted Soy Snacks (50g)", price: "200 RWF" },
                    { product: "Roasted Soy Snacks (200g)", price: "700 RWF" },
                  ].map((item) => (
                    <div key={item.product} className="flex items-center justify-between px-5 py-3">
                      <span className="text-sm text-gray-700">{item.product}</span>
                      <span className="text-sm font-black text-green-800">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-gray-200">
                  <p className="text-xs text-gray-400">Bulk discounts available for schools, health centers, and cooperatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER ── */}
      <section id="partner" className="py-20 sm:py-28 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Partner with Us" amber />
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                Build the nutrition system<br />together.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                We partner with schools, health centers, community health workers, and soybean farmers
                to create a complete community nutrition system.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { type: "Schools & ECDs", desc: "Supply agreements, school feeding programs, nutrition education.", to: "/partners#schools" },
                  { type: "Health Centers & CHWs", desc: "Product stock, CHW training, community education resources.", to: "/partners#health" },
                  { type: "Farmers & Cooperatives", desc: "Guaranteed purchase contracts, fair pricing, capacity building.", to: "/partners#farmers" },
                ].map((pt) => (
                  <Link
                    key={pt.type}
                    to={pt.to}
                    className="flex items-start gap-4 border border-gray-200 bg-white p-5 hover:border-green-300 transition-colors group"
                  >
                    <Check className="w-4 h-4 text-green-700 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-sm mb-0.5">{pt.type}</h3>
                      <p className="text-sm text-gray-500">{pt.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-green-700 mt-0.5 shrink-0 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <PhotoBlock
                src="/images/partnership-meeting.jpg"
                alt="SoyaThrive partnership meeting with community leaders"
                overlay="green"
                className="h-44"
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Partnership in action</p>
                  <p className="text-white/70 text-xs">Community meeting  ,  Ngororero District</p>
                </div>
              </PhotoBlock>
              <div className="border border-gray-200 bg-white p-6">
                <h3 className="font-black text-gray-900 text-base mb-3">Quick Message</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Not ready for a form? Send us a quick WhatsApp and we'll guide you from there.
                </p>
                <a
                  href="https://wa.me/250787144794?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20discuss%20a%20partnership%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-800 hover:bg-green-900 text-white font-bold text-sm transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4" /> Message Us
                </a>
              </div>
              <div className="border border-gray-200 bg-white px-6 py-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">We respond within</p>
                <p className="text-4xl font-black text-green-800 mb-1">48 hrs</p>
                <p className="text-sm text-gray-500">to all partnership enquiries, Monday–Saturday.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE ── */}
      <section id="donate" className="py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Donate" />
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                Help us reach the<br />most vulnerable families.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                SoyaThrive is built to be financially sustainable  ,  but in the early stages, donations
                help us subsidise products for families who need them most and expand education programs.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Every donation goes directly to product subsidies and community education. We publish
                a transparent quarterly impact report showing exactly how funds are used.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {donationImpacts.map((d) => (
                  <div key={d.amount} className="border border-gray-200 p-5">
                    <div className="text-xl font-black text-green-800 mb-2">{d.amount}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{d.impact}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/250787144794?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20make%20a%20donation.%20Please%20send%20me%20payment%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Enquire About Donating
              </a>
            </div>
            <div className="space-y-4">
              <PhotoBlock
                src="/images/community-family.jpg"
                alt="Family benefiting from SoyaThrive nutrition program"
                overlay="green"
                className="h-48"
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Your donation in action</p>
                  <p className="text-white/70 text-xs">SoyaThrive beneficiary family  ,  Ngororero</p>
                </div>
              </PhotoBlock>
              <div className="bg-gray-950 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3">Our commitment</p>
                <p className="text-white font-black text-base leading-snug mb-4">
                  "Every donation is accounted for and reported  ,  no exceptions."
                </p>
                <ul className="space-y-2">
                  {["100% directed to program activities", "Quarterly transparency reports", "Personal thank-you from the founder", "Updates on the families you help"].map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow text="Contact" amber />
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight mb-5">
                We'd love to<br />hear from you.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Whether you're a family looking to buy, an organisation exploring partnership, a
                journalist covering food security, or anyone else  ,  our door is always open.
              </p>
              <ContactForm />
            </div>
            <div className="space-y-4">
              <PhotoBlock
                src="/images/founder-office.jpg"
                alt="Jean Paul Bukuru, Founder of SoyaThrive Initiative"
                overlay="none"
                className="h-44 border border-gray-200"
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/70 to-transparent px-5 py-4">
                  <p className="text-white font-bold text-sm">Jean Paul Bukuru</p>
                  <p className="text-white/70 text-xs">Founder & CEO · SoyaThrive Initiative</p>
                </div>
              </PhotoBlock>
              <div className="border border-gray-200 bg-white p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Direct Contact</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/250787144794"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-green-800 hover:text-green-900 transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" /> +250 780 000 000
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">Location</p>
                    <p className="text-sm text-gray-600 flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                      Ngororero District, Western Province, Rwanda
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">Response Time</p>
                    <p className="text-2xl font-black text-green-800">24–48 hrs</p>
                    <p className="text-xs text-gray-500 mt-0.5">Mon–Sat for all enquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
