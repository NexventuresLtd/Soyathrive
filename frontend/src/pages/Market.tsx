import PageHero from "../components/ui/PageHero";

const swot = {
  strengths: {
    color: "bg-blue-50 border-blue-200",
    title: "text-blue-800",
    items: [
      "Skills and expertise in mentorship, youth development, and mental health awareness",
      "Clear mission focused on supporting abandoned and vulnerable teenagers",
      "Unique dual-impact model serving both paying clients and vulnerable beneficiaries",
      "Collaboration with schools for direct student access",
      "Technical support from Solid Minds Clinic counseling professionals",
    ],
  },
  weaknesses: {
    color: "bg-amber-50 border-amber-200",
    title: "text-amber-800",
    items: [
      "New initiative still building reputation and credibility",
      "Limited financial resources during the early stage",
      "Dependence on partnerships and external funding",
      "Limited number of trained mentors and counselors initially",
      "Some rural schools may lack infrastructure for delivery",
    ],
  },
  opportunities: {
    color: "bg-blue-50 border-blue-200",
    title: "text-blue-800",
    items: [
      "Government commitment to youth development and child protection",
      "Increasing demand for mentorship among financially stable families",
      "Growing awareness of adolescent mental health",
      "Supportive national policies encouraging child protection programs",
      "Development initiatives improving access to rural schools",
    ],
  },
  threats: {
    color: "bg-red-50 border-red-200",
    title: "text-red-800",
    items: [
      "Competition from NGOs and youth development programs",
      "Financial sustainability risks if enrollment is limited",
      "Social stigma around mental health in some communities",
      "Changes in education policies affecting school partnerships",
      "Environmental challenges (heavy rain, transportation) affecting access",
    ],
  },
};

const competitors = [
  { name: "Compassion International", services: "Child sponsorship, education support", strength: "Strong international funding, trusted community presence", weakness: "Focuses on younger children; no structured teen mentorship", segment: "Vulnerable children", threat: "Low" },
  { name: "Sherrie Silver Foundation", services: "Youth empowerment, talent development", strength: "Strong public visibility and youth engagement", weakness: "Broad focus; not teen-specific; urban-centered", segment: "Youth empowerment", threat: "Medium" },
  { name: "Local Churches & Groups", services: "Spiritual guidance, informal mentorship", strength: "Strong local trust and accessibility", weakness: "No professional counseling training; inconsistent", segment: "Community members", threat: "Low" },
  { name: "School Support Committees", services: "School monitoring, basic student support", strength: "Direct school access", weakness: "No mental health expertise or financial resources", segment: "Vulnerable students", threat: "Low" },
  { name: "Private Counseling Centers", services: "Professional psychological counseling", strength: "Professional therapists and structured counseling", weakness: "Expensive and not integrated within schools", segment: "Paying families", threat: "Medium" },
];

const marketData = [
  { label: "TAM", fullLabel: "Total Addressable Market", desc: "Secondary school students in Rwanda lacking structured support", value: "$67.5M", subvalue: "/year", students: "900,000 students", calc: "1.5M × 60%" },
  { label: "SAM", fullLabel: "Serviceable Available Market", desc: "Rural students in target districts (Nyamasheke & similar)", value: "$4.5M", subvalue: "/year", students: "60,000 students", calc: "100,000 × 60%" },
  { label: "SOM", fullLabel: "Serviceable Obtainable Market", desc: "Realistic early market share — 5% of SAM", value: "$225K", subvalue: "/year", students: "3,000 students", calc: "60,000 × 5%" },
];

const threatColors: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
};

export default function Market() {
  return (
    <>
      <PageHero
        badge="Market Analysis"
        title="Industry &"
        highlight="Market"
        subtitle="Understanding the landscape of youth mentorship and mental health services in Rwanda."
        badgeColor="purple"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Industry background */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Background</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              In Rwanda, many adolescents face social and emotional challenges that affect their education and personal development. Vulnerable teenagers — particularly those affected by poverty, family instability, or abandonment — often lack mentorship, emotional support, and financial resources to remain engaged in school.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Although access to education has improved, many students still struggle with psychological stress, low motivation, and limited guidance for their future. Adolescents who experience trauma may develop depression and loneliness, which negatively impact academic performance and well-being.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { label: "MINEDUC", desc: "Ministry of Education reforms emphasizing holistic student development" },
              { label: "MIGEPROF", desc: "Child protection frameworks supporting vulnerable reintegration" },
              { label: "NCC", desc: "National child protection and community-based support coordination" },
              { label: "UNICEF Rwanda", desc: "Child well-being programs creating an enabling environment" },
            ].map((g) => (
              <div key={g.label} className="bg-white rounded-xl p-4 border border-gray-100 flex gap-3">
                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded h-fit">{g.label}</span>
                <p className="text-xs text-gray-500">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market size TAM/SAM/SOM */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Target Market Size</h2>
          <p className="text-gray-500 text-sm mb-8">
            Based on average pricing of $25/term × 3 terms = $75/student/year for secondary school students aged 15–19.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {marketData.map((m, i) => (
              <div key={m.label} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-extrabold text-gray-50">{m.label}</div>
                <div className="relative">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-extrabold text-sm text-white ${["bg-blue-600", "bg-amber-500", "bg-blue-800"][i]}`}>
                    {m.label}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{m.fullLabel}</div>
                  <div className="text-3xl font-extrabold text-gray-900 mb-0.5">{m.value}<span className="text-lg text-gray-400">{m.subvalue}</span></div>
                  <div className="text-sm text-blue-600 font-semibold mb-3">{m.students}</div>
                  <p className="text-xs text-gray-500 mb-2">{m.desc}</p>
                  <span className="text-xs bg-gray-50 border border-gray-100 text-gray-400 px-2 py-0.5 rounded font-mono">{m.calc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-16">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Competitor Overview</h2>
            <p className="text-sm text-gray-500 mt-1">Key players in Rwanda's youth development and child protection sector.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  {["Organization", "Services", "Key Strength", "Key Weakness", "Target Segment", "Threat Level"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold text-gray-500 uppercase text-xs tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {competitors.map((c) => (
                  <tr key={c.name} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">{c.name}</td>
                    <td className="px-5 py-4 text-gray-500 max-w-[140px]">{c.services}</td>
                    <td className="px-5 py-4 text-gray-600 max-w-[160px]">{c.strength}</td>
                    <td className="px-5 py-4 text-gray-500 max-w-[160px]">{c.weakness}</td>
                    <td className="px-5 py-4">
                      <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">{c.segment}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${threatColors[c.threat]}`}>{c.threat}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SWOT */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">SWOT Analysis</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {(Object.entries(swot) as [string, { color: string; title: string; items: string[] }][]).map(([key, val]) => (
              <div key={key} className={`rounded-3xl border p-6 sm:p-8 ${val.color}`}>
                <h3 className={`font-extrabold text-lg capitalize mb-4 ${val.title}`}>{key}</h3>
                <ul className="space-y-2.5">
                  {val.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-1 shrink-0 text-gray-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
