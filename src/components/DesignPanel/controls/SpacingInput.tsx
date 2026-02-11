import * as React from "react";
import type { SpacingValue } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SPACING_PRESETS } from "@/lib/constants";
import { ComboInput } from "@/components/DesignPanel/controls/ComboInput";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import {
  ArrowsOutCardinalIcon,
  CornersOutIcon,
  LockSimpleIcon,
} from "@phosphor-icons/react";
import { MarginIcon } from "@/components/DesignPanel/icons/MarginIcon";
import { MarginBlockIcon } from "@/components/DesignPanel/icons/MarginBlockIcon";

type SpacingMode = "xy" | "sides" | "single";

interface SpacingInputProps {
  value: SpacingValue;
  onChange: (side: keyof SpacingValue, value: string) => void;
  className?: string;
  SideIcon?: React.ComponentType<{ size?: number; className?: string }>;
  BlockIcon?: React.ComponentType<{ size?: number; className?: string }>;
}

const SINGLE_ICON = <ArrowsOutCardinalIcon size={16} />;

export function SpacingInput({
  value,
  onChange,
  className,
  SideIcon = MarginIcon,
  BlockIcon = MarginBlockIcon,
}: SpacingInputProps) {
  const [mode, setMode] = React.useState<SpacingMode>("xy");

  const blockIcons = React.useMemo(() => ({
    x: <BlockIcon size={16} />,
    y: <BlockIcon size={16} className="rotate-90" />,
  }), [BlockIcon]);

  const sideIcons = React.useMemo(() => ({
    top: <SideIcon size={16} />,
    right: <SideIcon size={16} className="rotate-90" />,
    bottom: <SideIcon size={16} className="rotate-180" />,
    left: <SideIcon size={16} className="-rotate-90" />,
  }), [SideIcon]);

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
              icon={blockIcons.x}
            />
            <ComboInput
              value={value.top}
              onChange={handleYChange}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={blockIcons.y}
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
              icon={sideIcons.top}
            />
            <ComboInput
              value={value.right}
              onChange={(v) => onChange("right", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={sideIcons.right}
            />
            <ComboInput
              value={value.bottom}
              onChange={(v) => onChange("bottom", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={sideIcons.bottom}
            />
            <ComboInput
              value={value.left}
              onChange={(v) => onChange("left", v)}
              presets={SPACING_PRESETS}
              placeholder='0'
              icon={sideIcons.left}
            />
          </div>
        )}

        {mode === "single" && (
          <ComboInput
            value={value.top}
            onChange={handleSingleChange}
            presets={SPACING_PRESETS}
            placeholder='0'
            icon={SINGLE_ICON}
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
