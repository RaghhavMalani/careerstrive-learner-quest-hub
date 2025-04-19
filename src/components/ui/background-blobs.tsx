
import { cn } from "@/lib/utils";

interface BackgroundBlobsProps {
  className?: string;
  variant?: "default" | "subtle" | "vibrant";
}

export function BackgroundBlobs({
  className,
  variant = "default",
}: BackgroundBlobsProps) {
  const colors = {
    default: {
      blob1: "rgba(255, 200, 200, 0.3)",
      blob2: "rgba(200, 200, 255, 0.3)",
      blob3: "rgba(255, 255, 200, 0.2)"
    },
    subtle: {
      blob1: "rgba(255, 200, 200, 0.15)",
      blob2: "rgba(200, 200, 255, 0.15)",
      blob3: "rgba(255, 255, 200, 0.1)"
    },
    vibrant: {
      blob1: "rgba(255, 150, 150, 0.4)",
      blob2: "rgba(150, 150, 255, 0.4)",
      blob3: "rgba(255, 255, 150, 0.3)"
    }
  };

  const selectedColors = colors[variant];

  return (
    <div className={cn("blob-bg", className)}>
      <div 
        className="blob blob-1" 
        style={{ background: selectedColors.blob1 }}
      />
      <div 
        className="blob blob-2" 
        style={{ background: selectedColors.blob2 }}
      />
      <div 
        className="blob blob-3" 
        style={{ background: selectedColors.blob3 }}
      />
    </div>
  );
}
