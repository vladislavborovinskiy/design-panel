import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export interface PresetOption {
  value: string;
  label: string;
}

export interface ComboInputProps {
  value: string;
  onChange: (value: string) => void;
  presets?: PresetOption[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function ComboInput({
  value,
  onChange,
  presets = [],
  placeholder,
  className,
  disabled,
  icon,
}: ComboInputProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (presetValue: string) => {
    onChange(presetValue);
    setIsOpen(false);
  };

  if (!presets.length) {
    return (
      <div className={cn("relative w-full", className)}>
        {icon && (
          <div className='absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none'>
            {icon}
          </div>
        )}
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn("h-8 text-sm", icon && "pl-7")}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {icon && (
        <div className='absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10'>
          {icon}
        </div>
      )}
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn("h-8 text-sm", icon && "pl-7")}
      />

      {isOpen && (
        <div className='absolute z-50 w-full mt-1 bg-popover rounded-md border shadow-md max-h-60 overflow-auto p-1 animate-in fade-in-0 zoom-in-95'>
          {presets.map((preset) => (
            <Button
              key={preset.value}
              type='button'
              variant='ghost'
              onClick={() => handleSelect(preset.value)}
              className={cn(
                "w-full justify-start px-3 h-8 font-normal hover:bg-accent",
                value === preset.value && "bg-accent/50",
              )}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
