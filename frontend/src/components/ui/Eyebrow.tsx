interface EyebrowProps {
  text: string;
  amber?: boolean;
  light?: boolean;
}

export default function Eyebrow({ text, amber, light }: EyebrowProps) {
  const color = light ? "text-amber-400" : amber ? "text-amber-600" : "text-green-800";
  const line = light ? "bg-amber-400" : amber ? "bg-amber-600" : "bg-green-800";
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className={`block w-5 h-px ${line}`} />
      <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${color}`}>{text}</span>
    </div>
  );
}
