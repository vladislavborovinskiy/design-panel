import type { SpacingValue } from "@/lib";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";

interface SpacingControlProps {
  value: SpacingValue;
  onChange: (side: keyof SpacingValue, value: string) => void;
  label?: string;
  className?: string;
}

export function SpacingControl({
  value,
  onChange,
  label,
  className,
}: SpacingControlProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-1 items-center", className)}>
      {/* Row 1: top */}
      <div />
      <Input
        value={value.top}
        onChange={(e) => onChange("top", e.target.value)}
        className="h-7 text-xs text-center px-1"
        placeholder="0"
      />
      <div />

      {/* Row 2: left, label, right */}
      <Input
        value={value.left}
        onChange={(e) => onChange("left", e.target.value)}
        className="h-7 text-xs text-center px-1"
        placeholder="0"
      />
      <div className="flex items-center justify-center">
        <span className="text-[10px] text-muted-foreground font-medium uppercase">
          {label}
        </span>
      </div>
      <Input
        value={value.right}
        onChange={(e) => onChange("right", e.target.value)}
        className="h-7 text-xs text-center px-1"
        placeholder="0"
      />

      {/* Row 3: bottom */}
      <div />
      <Input
        value={value.bottom}
        onChange={(e) => onChange("bottom", e.target.value)}
        className="h-7 text-xs text-center px-1"
        placeholder="0"
      />
      <div />
    </div>
  );
}
