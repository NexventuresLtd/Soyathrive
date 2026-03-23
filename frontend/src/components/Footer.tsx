import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Heart } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/250780000000?text=Hello%20SoyaThrive%20Initiative%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work.`;

const sections = [
  {
    heading: "About",
    links: [
      { label: "The Problem We Solve", to: "/story#problem" },
      { label: "Mission & Vision", to: "/story#mission" },
      { label: "Our Founding Story", to: "/story#founding" },
      { label: "Our Products", to: "/products" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Nutrition & Education", to: "/nutrition" },
      { label: "For Schools & ECDs", to: "/partners#schools" },
      { label: "For Health Centers", to: "/partners#health" },
      { label: "For Farmers", to: "/partners#farmers" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Buy Our Products", to: "/get-involved#buy" },
      { label: "Partner with Us", to: "/get-involved#partner" },
      { label: "Donate", to: "/get-involved#donate" },
      { label: "Contact Us", to: "/get-involved#contact" },
    ],
  },
];

const sdgs = [
  { code: "02", title: "Zero Hunger" },
  { code: "03", title: "Good Health" },
  { code: "08", title: "Decent Work" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/[0.07]">
      {/* Top amber rule */}
      <div className="h-0.5 bg-amber-500" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img
                src="/logo.png"
                alt="SoyaThrive"
                className="h-8 w-auto object-contain opacity-80"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <div className="flex items-baseline">
                <span className="font-black text-white text-base tracking-tight">Soya</span>
                <span className="font-black text-amber-500 text-base tracking-tight">Thrive</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-[260px]">
              Transforming locally grown soybeans into affordable, fortified foods for children under five in Ngororero District, Rwanda.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Ngororero District, Western Province, Rwanda
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {sdgs.map((s) => (
                <div key={s.code} className="flex items-center gap-1.5 border border-gray-800 px-2.5 py-1.5">
                  <span className="text-[10px] font-black text-amber-500">SDG {s.code}</span>
                  <span className="text-[10px] text-gray-600">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {sections.map((s) => (
            <div key={s.heading}>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">{s.heading}</p>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 SoyaThrive Initiative · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-700 flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 text-red-700/50" /> for Rwanda's children
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
