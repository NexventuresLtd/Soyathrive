import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Market", to: "/market" },
  { label: "Operations", to: "/operations" },
  { label: "Funding", to: "/funding" },
  { label: "Acronyms", to: "/acronyms" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 text-sm rounded-lg transition-all font-medium ${
      isActive
        ? "bg-blue-100 text-blue-800 font-semibold"
        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2.5 text-sm rounded-lg transition-all font-medium block ${
      isActive
        ? "bg-blue-50 text-blue-800 font-semibold border-l-2 border-blue-500 pl-3"
        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
    }`;

  return (
    <nav
      className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur border-b border-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.png"
            alt="CHANCE For ALL"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <span className="font-extrabold text-blue-800 text-base">CHANCE</span>
            <span className="font-bold text-amber-500 text-base"> For ALL</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Get Involved
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-blue-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg text-center transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
}
