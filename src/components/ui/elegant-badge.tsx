
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const elegantBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        default: "bg-primary/5 text-primary ring-primary/20",
        secondary: "bg-secondary/40 text-secondary-foreground ring-secondary/30",
        destructive: "bg-destructive/10 text-destructive ring-destructive/20",
        success: "bg-green-50 text-green-700 ring-green-600/20",
        warning: "bg-yellow-50 text-yellow-800 ring-yellow-600/20",
        info: "bg-blue-50 text-blue-700 ring-blue-700/20",
        outline: "text-foreground ring-border",
        gold: "bg-gold-light text-gold-dark ring-gold/30",
        silver: "bg-silver-light text-silver-dark ring-silver/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ElegantBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof elegantBadgeVariants> {}

function ElegantBadge({
  className,
  variant,
  ...props
}: ElegantBadgeProps) {
  return (
    <div
      className={cn(elegantBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { ElegantBadge, elegantBadgeVariants };
