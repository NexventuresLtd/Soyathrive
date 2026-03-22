import { useState } from "react";
import PageHero from "../components/ui/PageHero";

const acronyms = [
  { abbr: "ALU", full: "African Leadership University", category: "Education" },
  { abbr: "EAV Ntendezi", full: "Ecole Agri-Veterinaire De Ntendezi", category: "Education" },
  { abbr: "GCGO", full: "Great Challenges and Great Opportunities", category: "Framework" },
  { abbr: "MIGEPROF", full: "Ministry of Gender and Family Promotion", category: "Government" },
  { abbr: "MINEDUC", full: "Ministry of Education", category: "Government" },
  { abbr: "MINALOC", full: "Ministry of Local Government", category: "Government" },
  { abbr: "NCDA", full: "National Child Development Agency", category: "Government" },
  { abbr: "NCC", full: "National Commission For Children", category: "Government" },
  { abbr: "NGO", full: "Non-Government Organization", category: "Organization" },
  { abbr: "NISR", full: "National Institute of Statistics of Rwanda", category: "Government" },
  { abbr: "RBC", full: "Rwanda Biomedical Center", category: "Government" },
  { abbr: "RGB", full: "Rwanda Government Board", category: "Government" },
  { abbr: "RRA", full: "Rwanda Revenue Authority", category: "Government" },
  { abbr: "SDG", full: "Sustainable Development Goals", category: "Framework" },
  { abbr: "TIN", full: "Taxpayer Identification Number", category: "Finance" },
  { abbr: "UNICEF", full: "United National Children Funds", category: "Organization" },
];

const categories = ["All", ...Array.from(new Set(acronyms.map((a) => a.category)))];

const categoryColors: Record<string, string> = {
  Education: "bg-blue-100 text-blue-700",
  Government: "bg-emerald-100 text-emerald-700",
  Organization: "bg-purple-100 text-purple-700",
  Framework: "bg-amber-100 text-amber-700",
  Finance: "bg-rose-100 text-rose-700",
};

export default function Acronyms() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = acronyms.filter((a) => {
    const matchSearch =
      a.abbr.toLowerCase().includes(search.toLowerCase()) ||
      a.full.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <>
      <PageHero
        badge="Reference"
        title="Acronyms &"
        highlight="Abbreviations"
        subtitle="A complete reference guide to all abbreviations and acronyms used in the CHANCE For ALL business plan."
        badgeColor="amber"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search acronyms..."
              className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-gray-400 mb-5">
          Showing {filtered.length} of {acronyms.length} acronyms
        </p>

        {/* List */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((a) => (
              <div
                key={a.abbr}
                className="bg-white border border-gray-100 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-emerald-700 text-base w-32 shrink-0">{a.abbr}</span>
                  <span className="text-gray-700 text-sm">{a.full}</span>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${categoryColors[a.category] || "bg-gray-100 text-gray-600"}`}>
                  {a.category}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm">No acronyms found matching "{search}"</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-3 text-emerald-600 text-sm font-semibold hover:underline">
              Clear search
            </button>
          </div>
        )}

        {/* Alphabet quick reference */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">Quick Reference by Category</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(categoryColors).map(([cat, color]) => {
              const count = acronyms.filter((a) => a.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setSearch(""); }}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-gray-300 transition-colors text-left"
                >
                  <span className="text-sm font-medium text-gray-700">{cat}</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${color}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
