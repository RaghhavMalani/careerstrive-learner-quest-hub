
import * as React from "react";
import { cn } from "@/lib/utils";

interface ElegantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "highlight" | "shine";
  hoverEffect?: boolean;
}

const ElegantCard = React.forwardRef<HTMLDivElement, ElegantCardProps>(
  ({ className, variant = "default", hoverEffect = true, children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-white border border-border shadow-elegant",
      glass: "glass-card",
      highlight: "card-highlight",
      shine: "card-highlight card-shine"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6",
          variantClasses[variant],
          hoverEffect && "transition-all duration-300 hover:shadow-elegant-hover hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ElegantCard.displayName = "ElegantCard";

const ElegantCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
));

ElegantCardHeader.displayName = "ElegantCardHeader";

const ElegantCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-display tracking-tight leading-none",
      className
    )}
    {...props}
  />
));

ElegantCardTitle.displayName = "ElegantCardTitle";

const ElegantCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

ElegantCardDescription.displayName = "ElegantCardDescription";

const ElegantCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));

ElegantCardContent.displayName = "ElegantCardContent";

const ElegantCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 border-t", className)}
    {...props}
  />
));

ElegantCardFooter.displayName = "ElegantCardFooter";

export {
  ElegantCard,
  ElegantCardHeader,
  ElegantCardFooter,
  ElegantCardTitle,
  ElegantCardDescription,
  ElegantCardContent
};
