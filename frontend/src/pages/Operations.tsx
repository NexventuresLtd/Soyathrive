import { Tractor, Factory, Package, Store, Users, Check, MessageCircle, ChevronRight, ClipboardList, Handshake, Leaf } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { useInView } from "../hooks/useInView";
import { useStaggeredInView } from "../hooks/useStaggeredInView";

const WHATSAPP_URL =
  "https://wa.me/250780000000?text=Hello%20SoyaThrive%2C%20I%20would%20like%20to%20discuss%20a%20partnership.";

const processSteps = [
  { step: 1, title: "Raw Material Sourcing", desc: "Soybeans are purchased from local smallholder farmers and cooperatives in Ngororero and surrounding districts through formal supply agreements.", Icon: Tractor },
  { step: 2, title: "Processing & Production", desc: "Soybeans are cleaned, roasted, milled, and processed into soy flour, porridge mix, roasted snacks, and soy milk using community-level equipment.", Icon: Factory },
  { step: 3, title: "Quality Control & Packaging", desc: "Processed products are quality-checked and packaged with clear labeling, nutritional information, storage instructions, and RSB compliance markings.", Icon: Package },
  { step: 4, title: "Distribution", desc: "Products are transported to local markets, small retail shops, health centers, and Early Childhood Development (ECD) centers via CHW and cooperative networks.", Icon: Store },
  { step: 5, title: "Nutrition Education", desc: "Community Health Workers deliver nutrition education alongside product distribution  ,  showing households how to incorporate soy foods into daily meals.", Icon: Users },
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

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px bg-amber-500" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{text}</span>
    </div>
  );
}

export default function Operations() {
  const { ref: permitRef, inView: permitIn } = useInView();
  const { ref: processRef, activeIndex: processIdx } = useStaggeredInView(processSteps.length, 100);
  const { ref: teamRef, activeIndex: teamIdx } = useStaggeredInView(team.length, 90);
  const { ref: mgmtRef, inView: mgmtIn } = useInView();
  const { ref: mktRef, inView: mktIn } = useInView();
  const { ref: partnerRef, inView: partnerIn } = useInView();

  return (
    <>
      <PageHero
        badge="Operations"
        title="Operations &"
        highlight="Marketing Plan"
        subtitle="A community-centered production and distribution model that connects local farmers, processors, and households in Ngororero District."
        color="green"
        image="/images/operations-bg.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Permits */}
        <section
          ref={permitRef}
          className={`mb-20 transition-all duration-700 ${permitIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Regulatory Compliance" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Permits & Licenses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {permits.map((p) => (
              <div key={p.label} className="bg-white p-7 border-l-2 border-l-green-700 hover:border-l-amber-500 transition-colors">
                <div className="w-8 h-8 bg-green-700 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-black text-gray-900 mb-2 text-sm">{p.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment */}
        <section className="mb-20 relative overflow-hidden">
          <div
            className="relative bg-green-900 hero-grain p-10 sm:p-14"
            style={{ backgroundImage: "url(/images/equipment-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-green-900/85" />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase tracking-tighter"
            >
              EQUIP
            </div>
            <div className="relative z-10">
              <Eyebrow text="Physical Assets" />
              <h2 className="text-3xl font-black text-white tracking-tight mb-8">
                Equipment &<br />
                <span className="text-amber-400">Processing Infrastructure</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Soybean cleaning and sorting equipment",
                  "Roasting machine for soy snacks",
                  "Milling machine for soy flour production",
                  "Grinding and mixing equipment for porridge mix",
                  "Packaging and sealing machines",
                  "Storage facilities for raw materials and finished products",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3 border border-white/10 p-4 bg-white/5">
                    <span className="text-xs font-black text-amber-400 shrink-0 mt-0.5 [font-variant-numeric:tabular-nums]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-green-100 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="mb-20">
          <Eyebrow text="How We Work" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Product Delivery<br />
            <span className="text-green-700">Process</span>
          </h2>
          <div ref={processRef} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />
            <div className="space-y-4">
              {processSteps.map((p, i) => (
                <div
                  key={p.step}
                  className={`flex gap-6 items-start transition-all duration-500 ${
                    i < processIdx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative z-10 w-16 h-16 bg-green-700 text-white flex flex-col items-center justify-center shrink-0">
                    <p.Icon className="w-5 h-5" />
                    <span className="text-[10px] font-black opacity-60 mt-0.5 [font-variant-numeric:tabular-nums]">
                      {String(p.step).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="border-l-2 border-l-green-700 hover:border-l-amber-500 pl-6 py-4 flex-1 transition-colors">
                    <h3 className="font-black text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <Eyebrow text="Human Resources" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Our Team
          </h2>
          <div ref={teamRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {team.map((t, i) => (
              <div
                key={t.role}
                className={`bg-white p-7 border-l-2 border-l-green-700 hover:border-l-amber-500 transition-all duration-500 ${
                  i < teamIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <t.Icon className="w-5 h-5 text-green-700 mb-4" />
                <h3 className="font-black text-gray-900 mb-2">{t.role}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.resp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management Functions */}
        <section
          ref={mgmtRef}
          className={`mb-20 transition-all duration-700 ${mgmtIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Leadership" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Key Management<br />
            <span className="text-green-700">Functions</span>
          </h2>
          <div className="border border-gray-200 divide-y divide-gray-100">
            {management.map((m, i) => (
              <div key={m.fn} className="flex gap-5 p-6 hover:bg-gray-50 transition-colors group">
                <div className="w-10 h-10 bg-gray-100 group-hover:bg-green-700 text-gray-500 group-hover:text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-1 text-sm">{m.fn}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing Plan */}
        <section
          ref={mktRef}
          className={`mb-20 transition-all duration-700 ${mktIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Go-To-Market" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-10">
            Marketing Plan
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 mb-6">
            <div className="bg-white p-8 border-l-4 border-l-green-700">
              <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-wider">Customer Awareness</h3>
              <ul className="space-y-3">
                {[
                  "Community Health Workers as trusted product advocates",
                  "Cooking demonstrations and free sampling events",
                  "Radio and community announcements in local areas",
                  "Partnerships with health centers and ECD programs",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 shrink-0 mt-0.5 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border-l-4 border-l-amber-500">
              <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-wider">Pricing Strategy</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Research confirmed optimal price: <strong>800–1,200 RWF per kg</strong> for soy flour.
              </p>
              <ul className="space-y-3">
                {[
                  "Priced within reach of low-income households (800–1,200 RWF/kg)",
                  "Free samples distributed at health center visits",
                  "Bulk discounts for institutional buyers (schools, ECDs)",
                  "Mobile money payments accepted",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {marketing.map((m) => (
              <div key={m.group} className="bg-white p-7 hover:bg-gray-50 transition-colors">
                <m.Icon className="w-5 h-5 text-green-700 mb-4" />
                <h3 className="font-black text-gray-900 mb-4">{m.group}</h3>
                <div className="mb-3">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1.5">Channels</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.channels}</p>
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1.5">Key Message</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.message}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section
          ref={partnerRef}
          className={`mb-16 transition-all duration-700 ${partnerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Eyebrow text="Supply Chain" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-8">
            Suppliers & Partners
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
            <div className="bg-white p-8">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.18em] mb-5">Suppliers</h3>
              <ul className="space-y-3">
                {[
                  "Smallholder soybean farmers in Ngororero and surrounding districts",
                  "Packaging materials and labeling suppliers",
                  "Equipment vendors for agro-processing machinery",
                ].map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-gray-600 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0 mt-2" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.18em] mb-5">Distribution Partners</h3>
              <ul className="space-y-3">
                {[
                  "Community Health Workers  ,  last-mile distribution and education",
                  "ECD centers and primary schools  ,  institutional bulk sales",
                  "Local retail shops and markets  ,  consumer access points",
                  "Health centers  ,  integrated product and nutrition outreach",
                ].map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-gray-600 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="relative bg-green-900 hero-grain overflow-hidden p-10 sm:p-14 text-center"
          style={{ backgroundImage: "url(/images/partner-cta-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-green-900/90" />
          <div className="relative z-10">
            <Leaf className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-3">Want to Partner or Supply With Us?</h3>
            <p className="text-green-300 text-sm mb-7 max-w-md mx-auto leading-relaxed">
              Reach out directly via WhatsApp to discuss farmer partnerships, distribution agreements, or institutional supply.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-800 hover:bg-amber-50 font-black transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
