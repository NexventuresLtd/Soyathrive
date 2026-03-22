import { Tractor, Factory, Package, Store, Users, Check, MessageCircle, ChevronRight, ClipboardList, Handshake, UserCircle, Leaf } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20discuss%20a%20partnership.";

const processSteps = [
  { step: 1, title: "Raw Material Sourcing", desc: "Soybeans are purchased from local smallholder farmers and cooperatives in Ngororero and surrounding districts through formal supply agreements.", Icon: Tractor },
  { step: 2, title: "Processing & Production", desc: "Soybeans are cleaned, roasted, milled, and processed into soy flour, porridge mix, roasted snacks, and soy milk using community-level equipment.", Icon: Factory },
  { step: 3, title: "Quality Control & Packaging", desc: "Processed products are quality-checked and packaged with clear labeling, nutritional information, storage instructions, and RSB compliance markings.", Icon: Package },
  { step: 4, title: "Distribution", desc: "Products are transported to local markets, small retail shops, health centers, and Early Childhood Development (ECD) centers via CHW and cooperative networks.", Icon: Store },
  { step: 5, title: "Nutrition Education", desc: "Community Health Workers deliver nutrition education alongside product distribution — showing households how to incorporate soy foods into daily meals.", Icon: Users },
  { step: 6, title: "Farmer Capacity Building", desc: "Ongoing training for soy farmers on improved cultivation practices, post-harvest handling, and quality standards to ensure consistent supply.", Icon: ClipboardList },
];

const team = [
  { role: "Production Staff", resp: "Operate processing equipment, ensure hygiene standards, and maintain production quality.", Icon: Factory },
  { role: "Quality Control", resp: "Monitor food safety and packaging compliance in line with Rwanda Standards Board requirements.", Icon: ClipboardList },
  { role: "Community Outreach", resp: "Conduct nutrition education programs and cooking demonstrations with Community Health Workers.", Icon: Users },
  { role: "Sales & Distribution", resp: "Coordinate product delivery to retail shops, health centers, ECD centers, and cooperatives.", Icon: Store },
  { role: "Farmer Liaison", resp: "Manage relationships with smallholder farmers, supply agreements, and capacity building programs.", Icon: Tractor },
];

const management = [
  { fn: "Production & Quality Management", desc: "Overseeing processing operations, maintaining hygiene standards, and ensuring all products meet RSB food safety requirements." },
  { fn: "Supply Chain Management", desc: "Managing soybean sourcing from farmers, maintaining supply agreements, and handling raw material procurement." },
  { fn: "Sales & Marketing", desc: "Promoting products through CHW networks, school partnerships, and community demonstrations. Managing retail and institutional relationships." },
  { fn: "Community Engagement", desc: "Coordinating nutrition education, cooking demonstrations, and behavior change communication with local health networks." },
  { fn: "Monitoring & Evaluation", desc: "Tracking sales, repeat purchase rates, nutrition outcomes, and farmer income improvements through internal tools." },
];

const permits = [
  { label: "RDB Registration", desc: "Business registration with Rwanda Development Board as a social enterprise." },
  { label: "RSB Certification", desc: "Food safety and processing certification from the Rwanda Standards Board." },
  { label: "District Permits", desc: "Local operating permits from Ngororero District authorities." },
  { label: "Labeling Compliance", desc: "Product labeling and packaging compliance approvals for all soy products." },
];

const marketing = [
  { group: "Households", Icon: Users, channels: "Community Health Workers, community meetings, radio, cooking demos", message: "Affordable, nutritious soy foods that improve your child's health and growth." },
  { group: "Institutions (Schools/ECDs)", Icon: Handshake, channels: "School visits, health center partnerships, district programs", message: "Bulk supply of fortified soy products for child feeding programs at affordable prices." },
  { group: "Retailers", Icon: Store, channels: "Direct sales visits, market demonstrations, product sampling", message: "High-demand nutritious products that sell well and serve the community." },
];

export default function Operations() {
  return (
    <>
      <PageHero
        badge="Operations"
        title="Operations &"
        highlight="Marketing Plan"
        subtitle="A community-centered production and distribution model that connects local farmers, processors, and households in Ngororero District."
        color="green"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Permits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Permits &amp; Licenses Required</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {permits.map((p) => (
              <div key={p.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{p.label}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="bg-green-700 rounded-3xl p-8 sm:p-10 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6 text-amber-400">Equipment &amp; Physical Assets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Soybean cleaning and sorting equipment",
              "Roasting machine for soy snacks",
              "Milling machine for soy flour production",
              "Grinding and mixing equipment for porridge mix",
              "Packaging and sealing machines",
              "Storage facilities for raw materials and finished products",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/10 border border-white/15 rounded-xl p-4">
                <Leaf className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm text-green-100">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Production process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Delivery Process</h2>
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-green-100 hidden md:block" />
            <div className="space-y-5">
              {processSteps.map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-700 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                    <p.Icon className="w-5 h-5" />
                    <span className="text-xs font-bold opacity-60 mt-0.5">{p.step}</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Human Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((t) => (
              <div key={t.role} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                  <t.Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.role}</h3>
                <p className="text-sm text-gray-500">{t.resp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management functions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Management Functions</h2>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-100">
              {management.map((m, i) => (
                <div key={m.fn} className="flex gap-5 p-5 hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{m.fn}</h3>
                    <p className="text-sm text-gray-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marketing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Marketing Plan</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 mb-2">Customer Awareness Strategy</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                {["Community Health Workers as trusted product advocates", "Cooking demonstrations and free sampling events", "Radio and community announcements in local areas", "Partnerships with health centers and ECD programs"].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-bold text-amber-800 mb-2">Pricing Strategy</h3>
              <p className="text-sm text-amber-700 mb-3">Research confirmed optimal price: 800–1,200 RWF per kg for soy flour.</p>
              <ul className="space-y-1.5 text-sm text-amber-700">
                {["Priced within reach of low-income households (800–1,200 RWF/kg)", "Free samples distributed at health center visits", "Bulk discounts for institutional buyers (schools, ECDs)", "Mobile money payments accepted"].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {marketing.map((m) => (
              <div key={m.group} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                  <m.Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{m.group}</h3>
                <div className="mb-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Channels</div>
                  <p className="text-xs text-gray-600">{m.channels}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Key Message</div>
                  <p className="text-xs text-gray-600">{m.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Suppliers &amp; Distribution Partners</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Suppliers</h3>
              <ul className="space-y-2">
                {["Smallholder soybean farmers in Ngororero and surrounding districts", "Packaging materials and labeling suppliers", "Equipment vendors for agro-processing machinery"].map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-green-600 font-bold">•</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Distribution Partners</h3>
              <ul className="space-y-2">
                {["Community Health Workers — last-mile distribution and education", "ECD centers and primary schools — institutional bulk sales", "Local retail shops and markets — consumer access points", "Health centers — integrated product and nutrition outreach"].map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-green-600 font-bold">•</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-green-700 rounded-3xl p-8 text-center text-white">
          <UserCircle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2">Want to Partner or Supply With Us?</h3>
          <p className="text-green-200 text-sm mb-5">Reach out directly via WhatsApp to discuss farmer partnerships, distribution agreements, or institutional supply.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-green-700 hover:bg-green-50 font-bold rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
