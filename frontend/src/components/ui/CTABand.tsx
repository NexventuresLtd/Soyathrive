import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTABandProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  primaryLabel: string;
  primaryTo?: string;
  primaryHref?: string;
  primaryAmber?: boolean;
  secondaryLabel?: string;
  secondaryTo?: string;
  secondaryHref?: string;
}

export default function CTABand({
  eyebrow,
  headline,
  body,
  primaryLabel,
  primaryTo,
  primaryHref,
  primaryAmber = true,
  secondaryLabel,
  secondaryTo,
  secondaryHref,
}: CTABandProps) {
  const PrimaryBtn = () =>
    primaryTo ? (
      <Link
        to={primaryTo}
        className={`inline-flex items-center gap-2 px-6 py-2.5 font-bold text-sm text-white transition-colors shrink-0 ${
          primaryAmber ? "bg-amber-500 hover:bg-amber-400" : "bg-green-800 hover:bg-green-900"
        }`}
      >
        {primaryLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    ) : (
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-2.5 font-bold text-sm text-white transition-colors shrink-0 ${
          primaryAmber ? "bg-amber-500 hover:bg-amber-400" : "bg-green-800 hover:bg-green-900"
        }`}
      >
        {primaryLabel} <ArrowRight className="w-4 h-4" />
      </a>
    );

  const SecondaryBtn = () => {
    if (!secondaryLabel) return null;
    const cls =
      "inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-colors shrink-0";
    if (secondaryTo) return <Link to={secondaryTo} className={cls}>{secondaryLabel}</Link>;
    if (secondaryHref)
      return (
        <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className={cls}>
          <MessageCircle className="w-4 h-4" /> {secondaryLabel}
        </a>
      );
    return null;
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="max-w-xl">
          {eyebrow && (
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3">{eyebrow}</p>
          )}
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">{headline}</h2>
          {body && <p className="text-gray-400 text-sm leading-relaxed">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryBtn />
          <SecondaryBtn />
        </div>
      </div>
    </section>
  );
}
