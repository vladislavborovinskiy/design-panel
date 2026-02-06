import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
  const colorInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <label
        className="relative shrink-0 cursor-pointer"
        onClick={() => colorInputRef.current?.click()}
      >
        <div
          className="size-8 rounded-md border border-input shadow-xs"
          style={{ backgroundColor: value }}
        />
        <input
          ref={colorInputRef}
          type="color"
          value={value === "transparent" ? "#ffffff" : value}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
        />
      </label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 text-xs font-mono"
      />
    </div>
  );
}
