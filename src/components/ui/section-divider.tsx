
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "line" | "dots" | "ornate";
}

export function SectionDivider({
  className,
  variant = "line",
}: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center py-8", className)}>
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/80"></div>
        </div>
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className={cn("flex items-center justify-center py-8", className)}>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="mx-4 text-primary/60">⦿</div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    );
  }

  // Default: line
  return (
    <div className={cn("py-8", className)}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </div>
  );
}
