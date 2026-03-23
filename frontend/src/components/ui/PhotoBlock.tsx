interface PhotoBlockProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: "dark" | "green" | "amber" | "none";
  children?: React.ReactNode;
  position?: string;
}

const overlayClasses = {
  dark: "bg-gray-950/55",
  green: "bg-green-950/55",
  amber: "bg-amber-950/50",
  none: "",
};

// Fallback gradient per overlay type (shown when image is missing)
const fallbackClasses = {
  dark: "bg-gray-900",
  green: "bg-green-900",
  amber: "bg-amber-900",
  none: "bg-gray-200",
};

export default function PhotoBlock({
  src,
  alt,
  className = "",
  overlay = "none",
  children,
  position = "object-center",
}: PhotoBlockProps) {
  return (
    <div className={`relative overflow-hidden ${fallbackClasses[overlay]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover absolute inset-0 ${position}`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}
      {children && (
        <div className="relative z-10 h-full">{children}</div>
      )}
    </div>
  );
}
