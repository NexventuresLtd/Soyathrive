import { useCountUp } from "../hooks/useCountUp";
import PageHero from "../components/ui/PageHero";
import { Link } from "react-router-dom";

function AnimatedMoney({ value, label, sub, color }: { value: number; label: string; sub: string; color: string }) {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div ref={ref} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center hover:shadow-md transition-shadow">
      <div className={`text-4xl font-extrabold ${color} mb-2`}>${count.toLocaleString()}</div>
      <div className="font-semibold text-gray-700 mb-1">{label}</div>
      <div className="text-xs text-gray-400">{sub}</div>
    </div>
  );
}

const assumptions = [
  "Average fee per student per term: $25 (Year 1 average)",
  "Payment frequency: 3 school terms per year",
  "Annual spend per student: $75/year ($25 × 3 terms)",
  "60% of rural students currently lack structured support",
  "5% SAM capture in early years (SOM target = $225K)",
  "Revenue grows as partnerships and enrollment scale each year",
];

const costTable = [
  { item: "Legal & Registration", y1: 1200, y2: 0, y3: 0, category: "startup" },
  { item: "Equipment & Furniture", y1: 4500, y2: 0, y3: 0, category: "startup" },
  { item: "Initial Training", y1: 2800, y2: 0, y3: 0, category: "startup" },
  { item: "Marketing Setup", y1: 2000, y2: 0, y3: 0, category: "startup" },
  { item: "Working Capital Reserve", y1: 8020, y2: 0, y3: 0, category: "startup" },
  { item: "Staff Salaries", y1: 36000, y2: 52000, y3: 75000, category: "operating" },
  { item: "Counseling & Mentorship Materials", y1: 8000, y2: 12000, y3: 18000, category: "operating" },
  { item: "School Partnership Costs", y1: 6000, y2: 9000, y3: 14000, category: "operating" },
  { item: "Admin & Overhead", y1: 7900, y2: 11000, y3: 14800, category: "operating" },
  { item: "Monitoring & Evaluation", y1: 4000, y2: 6000, y3: 6000, category: "operating" },
];

const revenueTable = [
  { source: "Program Fees (paying clients)", y1: 13500, y2: 29000, y3: 60000 },
  { source: "Grants & Donations", y1: 9000, y2: 16000, y3: 32000 },
  { source: "Founder Contributions", y1: 3325, y2: 6000, y3: 10000 },
  { source: "Partnerships & Sponsorships", y1: 500, y2: 4000, y3: 7200 },
];

const milestones = [
  { date: "Sep 2025", event: "CHANCE For ALL established in Nyamasheke District", status: "done" },
  { date: "Oct–Dec 2025", event: "Operational systems and frameworks developed", status: "done" },
  { date: "Feb 2026", event: "Market validation survey conducted among parents", status: "done" },
  { date: "Mar 2026", event: "Business plan submitted to African Leadership University", status: "done" },
  { date: "Jun 2026", event: "First school partnerships formalized (target: 2 schools)", status: "upcoming" },
  { date: "Dec 2026", event: "4 partner schools; 300 students enrolled", status: "upcoming" },
  { date: "Jun 2027", event: "300 paying families; 35% operational costs self-funded", status: "upcoming" },
  { date: "Dec 2027", event: "150+ vulnerable teens served via cross-subsidy model", status: "upcoming" },
  { date: "Dec 2028", event: "Expansion to 2+ additional districts; 800+ students total", status: "upcoming" },
];

const fundingBreakdown = [
  { label: "Program Fees", pct: 42, color: "bg-emerald-500" },
  { label: "Grants & Donations", pct: 35, color: "bg-blue-500" },
  { label: "Founder Contributions", pct: 15, color: "bg-amber-500" },
  { label: "Partnerships", pct: 8, color: "bg-purple-500" },
];

export default function Financials() {
  return (
    <>
      <PageHero
        badge="Financial Plan"
        title="Financials &"
        highlight="Milestones"
        subtitle="A phased growth model — pilot, expansion, and scaling — with projected revenue growth from $26K in Year 1 to $109K in Year 3."
        badgeColor="blue"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Animated key figures */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <AnimatedMoney value={18520} label="Startup Cost" sub="One-time investment to launch" color="text-rose-600" />
          <AnimatedMoney value={26325} label="Year 1 Revenue" sub="Program fees, grants, donations" color="text-emerald-600" />
          <AnimatedMoney value={109200} label="Year 3 Revenue" sub="With scale and expansion" color="text-blue-600" />
        </div>

        {/* Key assumptions */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Key Assumptions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {assumptions.map((a) => (
              <div key={a} className="flex items-start gap-2.5 text-sm text-gray-600">
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {a}
              </div>
            ))}
          </div>
        </div>

        {/* Cost table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-10">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Cost Estimates &amp; Projections</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Item</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Year 1</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Year 2</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Year 3</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {costTable.map((r) => (
                  <tr key={r.item} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-gray-800">{r.item}</td>
                    <td className="px-6 py-3.5 font-mono text-gray-700">{r.y1 > 0 ? `$${r.y1.toLocaleString()}` : "—"}</td>
                    <td className="px-6 py-3.5 font-mono text-gray-700">{r.y2 > 0 ? `$${r.y2.toLocaleString()}` : "—"}</td>
                    <td className="px-6 py-3.5 font-mono text-gray-700">{r.y3 > 0 ? `$${r.y3.toLocaleString()}` : "—"}</td>
                    <td className="px-6 py-3.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.category === "startup" ? "bg-rose-100 text-rose-700" : "bg-blue-100 text-blue-700"}`}>
                        {r.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Projected Revenue by Source</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Revenue Source</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Year 1</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Year 2</th>
                  <th className="px-6 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Year 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {revenueTable.map((r) => (
                  <tr key={r.source} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-gray-800">{r.source}</td>
                    <td className="px-6 py-3.5 font-mono text-emerald-700">${r.y1.toLocaleString()}</td>
                    <td className="px-6 py-3.5 font-mono text-emerald-700">${r.y2.toLocaleString()}</td>
                    <td className="px-6 py-3.5 font-mono text-emerald-700">${r.y3.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="bg-emerald-50 font-bold">
                  <td className="px-6 py-3.5 text-emerald-800">Total Revenue</td>
                  <td className="px-6 py-3.5 font-mono text-emerald-800">$26,325</td>
                  <td className="px-6 py-3.5 font-mono text-emerald-800">$55,000</td>
                  <td className="px-6 py-3.5 font-mono text-emerald-800">$109,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Funding breakdown + Milestones */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Expected Financing Sources</h2>
            <div className="space-y-5">
              {fundingBreakdown.map((f) => (
                <div key={f.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-gray-700">{f.label}</span>
                    <span className="font-bold text-gray-900">{f.pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${f.color} rounded-full`} style={{ width: `${f.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones timeline */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 overflow-auto max-h-96">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Growth Milestones</h2>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.date} className="flex gap-4 items-start">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${m.status === "done" ? "bg-emerald-500" : "bg-gray-300"}`} />
                  <div>
                    <div className={`text-xs font-bold mb-0.5 ${m.status === "done" ? "text-emerald-600" : "text-gray-400"}`}>{m.date}</div>
                    <p className="text-sm text-gray-600">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-800 rounded-3xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl font-bold mb-5">Recommendations</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Strengthen school partnerships through MoUs and multi-year agreements for predictable operations.",
              "Pursue grant funding from UNICEF Rwanda, Save the Children, and government youth programs.",
              "Invest in digital tools (mobile money, WhatsApp management) for efficient payment and communication.",
              "Build a robust M&E framework to demonstrate measurable outcomes for donors and schools.",
              "Train additional mentors in advance of expansion to ensure quality is maintained at scale.",
              "Engage community leaders and local churches as allies for stigma reduction and referral networks.",
            ].map((r) => (
              <div key={r} className="flex gap-3 items-start text-sm text-emerald-100">
                <span className="text-amber-400 shrink-0 mt-0.5">→</span>
                {r}
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-900 font-bold rounded-xl text-sm transition-all"
          >
            Partner With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
