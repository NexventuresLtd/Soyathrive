import { useInView } from "../../hooks/useInView";

interface BarChartItem {
  label: string;
  pct: number;
}

interface BarChartProps {
  data: BarChartItem[];
  source?: string;
  color?: "green" | "amber";
}

export default function BarChart({ data, source, color = "green" }: BarChartProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const barColor = color === "amber" ? "bg-amber-600" : "bg-green-800";
  const textColor = color === "amber" ? "text-amber-600" : "text-green-800";

  return (
    <div ref={ref} className="space-y-5">
      {data.map((d) => (
        <div key={d.label}>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm font-medium text-gray-700">{d.label}</span>
            <span className={`text-sm font-black [font-variant-numeric:tabular-nums] ${textColor}`}>
              {d.pct}%
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 overflow-hidden">
            {inView && (
              <div
                className={`h-full animate-bar-fill ${barColor}`}
                style={{ "--target-width": `${d.pct}%` } as React.CSSProperties}
              />
            )}
          </div>
        </div>
      ))}
      {source && (
        <p className="text-[11px] text-gray-400 pt-1">{source}</p>
      )}
    </div>
  );
}
