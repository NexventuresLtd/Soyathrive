import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

type Child = { label: string; to: string };
type NavLeaf = { kind: "leaf"; label: string; to: string; end?: boolean };
type NavGroup = { kind: "group"; label: string; activePath: string; items: Child[] };
type NavItem = NavLeaf | NavGroup;

const NAV: NavItem[] = [
  { kind: "leaf", label: "Home", to: "/", end: true },
  {
    kind: "group",
    label: "Our Story",
    activePath: "/story",
    items: [
      { label: "The Problem We Solve", to: "/story#problem" },
      { label: "Mission & Vision", to: "/story#mission" },
      { label: "Our Founding Story", to: "/story#founding" },
    ],
  },
  { kind: "leaf", label: "Our Products", to: "/products" },
  { kind: "leaf", label: "Nutrition & Education", to: "/nutrition" },
  {
    kind: "group",
    label: "For Partners",
    activePath: "/partners",
    items: [
      { label: "Schools & ECDs", to: "/partners#schools" },
      { label: "Health Centers & CHWs", to: "/partners#health" },
      { label: "Farmers & Cooperatives", to: "/partners#farmers" },
    ],
  },
  {
    kind: "group",
    label: "Impact",
    activePath: "/impact",
    items: [
      { label: "Our Stories", to: "/impact#stories" },
      { label: "Data & Reports", to: "/impact#data" },
    ],
  },
  {
    kind: "group",
    label: "Get Involved",
    activePath: "/get-involved",
    items: [
      { label: "Buy Our Products", to: "/get-involved#buy" },
      { label: "Partner with Us", to: "/get-involved#partner" },
      { label: "Donate", to: "/get-involved#donate" },
      { label: "Contact", to: "/get-involved#contact" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const openDd = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeDd = () => {
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 140);
  };

  const leafClass = ({ isActive }: { isActive: boolean }) =>
    `px-2.5 py-5 text-[13px] font-medium transition-colors relative whitespace-nowrap ${
      isActive ? "text-gray-900 nav-active" : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_rgb(0,0,0,0.08)]" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center h-16 gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.png"
            alt="SoyaThrive"
            className="h-8 w-auto object-contain"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <div className="flex items-baseline gap-0">
            <span className="font-black text-green-800 text-[1rem] tracking-tight leading-none">Soya</span>
            <span className="font-black text-amber-600 text-[1rem] tracking-tight leading-none">Thrive</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1">
          {NAV.map((item) => {
            if (item.kind === "leaf") {
              return (
                <NavLink key={item.to} to={item.to} end={item.end} className={leafClass}>
                  {item.label}
                </NavLink>
              );
            }
            const isGroupActive = location.pathname.startsWith(item.activePath);
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDd(item.label)}
                onMouseLeave={closeDd}
              >
                <button
                  className={`flex items-center gap-1 px-2.5 py-5 text-[13px] font-medium transition-colors relative whitespace-nowrap ${
                    isGroupActive ? "text-gray-900 nav-active" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 pt-0.5 z-50 transition-all duration-150 ${
                    isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                  }`}
                  onMouseEnter={() => openDd(item.label)}
                  onMouseLeave={closeDd}
                >
                  <div className="min-w-[210px] bg-white border border-gray-200 shadow-lg shadow-black/[0.07] py-1.5">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="block px-4 py-2.5 text-[13px] text-gray-600 hover:bg-green-50 hover:text-green-800 border-l-2 border-transparent hover:border-green-700 transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/get-involved#buy"
            className="hidden xl:inline-flex items-center px-4 py-1.5 bg-green-800 hover:bg-green-900 text-white text-[13px] font-semibold transition-colors"
          >
            Buy Now
          </Link>
          <button
            className="xl:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-up">
          <div className="max-w-6xl mx-auto px-5 py-2 flex flex-col divide-y divide-gray-50">
            {NAV.map((item) => {
              if (item.kind === "leaf") {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `px-3 py-3 text-sm font-medium transition-colors ${
                        isActive ? "text-green-800 border-l-2 border-green-700 pl-2.5" : "text-gray-600 hover:text-gray-900"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }
              const isExpanded = mobileExpanded === item.label;
              const isGroupActive = location.pathname.startsWith(item.activePath);
              return (
                <div key={item.label}>
                  <button
                    className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium transition-colors ${
                      isGroupActive ? "text-green-800" : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`faq-content ${isExpanded ? "open" : ""}`}>
                    <div className="faq-inner pb-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="block pl-8 pr-3 py-2.5 text-sm text-gray-500 hover:text-green-700 hover:bg-green-50 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              to="/get-involved#buy"
              className="mt-2 mb-1 flex items-center justify-center px-4 py-2.5 bg-green-800 hover:bg-green-900 text-white text-sm font-bold transition-colors"
            >
              Buy Our Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
