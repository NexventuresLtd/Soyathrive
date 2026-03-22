import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
