import * as React from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/Tooltip";

interface ButtonGroupProps {
  options: ReadonlyArray<{
    readonly value: string;
    readonly label?: string;
    readonly icon?: React.ReactNode;
    readonly tooltip?: string;
  }>;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function ButtonGroup({ options, value, onValueChange, className }: ButtonGroupProps) {
  return (
    <TooltipProvider delayDuration={400}>
      <div
        className={cn(
          "flex gap-px w-full bg-background rounded-lg border border-border p-0.5",
          className,
        )}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          const btn = (
            <button
              key={option.value}
              type='button'
              onClick={() => onValueChange(isActive ? "" : option.value)}
              className={cn(
                "relative flex-1 inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/90",
              )}
            >
              {option.icon}
              {option.label}
            </button>
          );

          if (option.tooltip) {
            return (
              <Tooltip key={option.value}>
                <TooltipTrigger asChild>{btn}</TooltipTrigger>
                <TooltipContent>{option.tooltip}</TooltipContent>
              </Tooltip>
            );
          }

          return btn;
        })}
      </div>
    </TooltipProvider>
  );
}
