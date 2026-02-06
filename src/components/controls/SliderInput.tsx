import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/Slider";
import { Input } from "@/components/ui/Input";

interface SliderInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  className?: string;
}

export function SliderInput({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  suffix,
  className,
}: SliderInputProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="flex-1"
      />
      <div className="flex items-center gap-1 shrink-0">
        <Input
          type="number"
          value={value}
          onChange={(e) => {
            const num = Number(e.target.value);
            if (!isNaN(num)) onChange(Math.min(max, Math.max(min, num)));
          }}
          min={min}
          max={max}
          step={step}
          className="h-7 w-14 text-xs text-center px-1"
        />
        {suffix && (
          <span className="text-xs text-muted-foreground">{suffix}</span>
        )}
      </div>
    </div>
  );
}
