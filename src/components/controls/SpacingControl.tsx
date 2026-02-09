import * as React from "react";
import type { SpacingValue } from "@/lib";
import { cn } from "@/lib/utils";
import { SPACING_PRESETS } from "@/lib";
import { ComboInput } from "@/components/controls/ComboInput";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import {
  ArrowsHorizontalIcon,
  ArrowsVerticalIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsOutCardinalIcon,
  CornersOutIcon,
  LockSimpleIcon,
} from "@phosphor-icons/react";

type SpacingMode = "xy" | "sides" | "single";

interface SpacingControlProps {
  value: SpacingValue;
  onChange: (side: keyof SpacingValue, value: string) => void;
  className?: string;
}

export function SpacingControl({ value, onChange, className }: SpacingControlProps) {
  const [mode, setMode] = React.useState<SpacingMode>("xy");

  const handleSingleChange = (v: string) => {
    onChange("top", v);
    onChange("right", v);
    onChange("bottom", v);
    onChange("left", v);
  };

  const handleXChange = (v: string) => {
    onChange("left", v);
    onChange("right", v);
  };

  const handleYChange = (v: string) => {
    onChange("top", v);
    onChange("bottom", v);
  };

  return (
    <div className={cn("flex items-start gap-1", className)}>
      <div className='flex-1 min-w-0'>
        {mode === "xy" && (
          <div className='grid grid-cols-2 gap-1'>
            <ComboInput
              value={value.left}
              onChange={handleXChange}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={<ArrowsHorizontalIcon size={14} />}
            />
            <ComboInput
              value={value.top}
              onChange={handleYChange}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={<ArrowsVerticalIcon size={14} />}
            />
          </div>
        )}

        {mode === "sides" && (
          <div className='grid grid-cols-2 gap-1'>
            <ComboInput
              value={value.top}
              onChange={(v) => onChange("top", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={<ArrowUpIcon size={14} />}
            />
            <ComboInput
              value={value.right}
              onChange={(v) => onChange("right", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={<ArrowRightIcon size={14} />}
            />
            <ComboInput
              value={value.bottom}
              onChange={(v) => onChange("bottom", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={<ArrowDownIcon size={14} />}
            />
            <ComboInput
              value={value.left}
              onChange={(v) => onChange("left", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={<ArrowLeftIcon size={14} />}
            />
          </div>
        )}

        {mode === "single" && (
          <ComboInput
            value={value.top}
            onChange={handleSingleChange}
            presets={SPACING_PRESETS}
            placeholder='0'
            icon={<ArrowsOutCardinalIcon size={14} />}
          />
        )}
      </div>

      <div className='flex items-center gap-0.5 pt-0.5'>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type='button'
              onClick={() => setMode(mode === "sides" ? "xy" : "sides")}
              className={cn(
                "flex items-center justify-center size-7 rounded text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                mode === "sides" && "bg-accent text-accent-foreground",
              )}
            >
              <CornersOutIcon size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side='top'>Toggle all sides</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type='button'
              onClick={() => setMode(mode === "single" ? "xy" : "single")}
              className={cn(
                "flex items-center justify-center size-7 rounded text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                mode === "single" && "bg-accent text-accent-foreground",
              )}
            >
              <LockSimpleIcon size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side='top'>{mode === "single" ? "Unlock" : "Lock"}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
