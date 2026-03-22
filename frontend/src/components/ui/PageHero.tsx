interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
  color?: "green" | "amber" | "dark";
}

export default function PageHero({ badge, title, highlight, subtitle, color = "green" }: PageHeroProps) {
  const bgColors = {
    green: "bg-green-700",
    amber: "bg-amber-700",
    dark: "bg-gray-900",
  };

  const badgeStyles = {
    green: "bg-green-800 text-green-100 border-green-500",
    amber: "bg-amber-800 text-amber-100 border-amber-500",
    dark: "bg-gray-800 text-gray-100 border-gray-600",
  };

  return (
    <div className={`${bgColors[color]} py-20 px-6 text-center`}>
      <div className="max-w-3xl mx-auto">
        <span className={`inline-block text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full mb-5 ${badgeStyles[color]}`}>
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          {title} {highlight && <span className="text-amber-400">{highlight}</span>}
        </h1>
        <p className="text-lg text-white/75 max-w-xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
