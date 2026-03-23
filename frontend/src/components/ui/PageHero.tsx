interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
  // legacy props  ,  accepted but unused
  color?: string;
  image?: string;
}

export default function PageHero({ badge, title, highlight, subtitle }: PageHeroProps) {
  return (
    <div className="bg-gray-950 border-b border-white/[0.07]">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-22">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-6 animate-fade-in">
          {badge}
        </p>
        <h1 className="text-display text-white max-w-2xl mb-5 animate-fade-up delay-100">
          {title}{" "}
          {highlight && <span className="text-amber-400">{highlight}</span>}
        </h1>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl animate-fade-up delay-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
