import * as React from "react";
import {
  ArrowsHorizontalIcon,
  ArrowsVerticalIcon,
  ArrowsOutCardinalIcon,
  LockSimpleIcon,
} from "@phosphor-icons/react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { ComboInput } from "@/components/DesignPanel/controls/ComboInput";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import { shallowEqualProps } from "@/lib/utils";
import { SIZE_PRESETS } from "@/lib/constants";
import type { ElementPropertiesMap, ElementType, CommonProperties } from "@/lib/types";

const WIDTH_ICON = <ArrowsHorizontalIcon size={16} />;
const HEIGHT_ICON = <ArrowsVerticalIcon size={16} />;
const LOCK_ICON = <ArrowsOutCardinalIcon size={16} />;

interface SizeSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const SizeSection = React.memo(function SizeSection({
  currentProperties,
  onPropertyChange,
}: SizeSectionProps) {
  const props = currentProperties as CommonProperties;
  const [locked, setLocked] = React.useState(false);

  const handleWidthChange = (v: string) => {
    onPropertyChange("width", v);
    if (locked) onPropertyChange("height", v);
  };

  const handleHeightChange = (v: string) => {
    onPropertyChange("height", v);
    if (locked) onPropertyChange("width", v);
  };

  const handleLockedChange = (v: string) => {
    onPropertyChange("width", v);
    onPropertyChange("height", v);
  };

  return (
    <Section title='Size'>
      <div className='flex items-start gap-1'>
        <div className='flex-1 min-w-0'>
          {locked ? (
            <ComboInput
              value={props.width}
              onChange={handleLockedChange}
              presets={SIZE_PRESETS}
              placeholder='auto'
              icon={LOCK_ICON}
            />
          ) : (
            <div className='grid grid-cols-2 gap-1'>
              <ComboInput
                value={props.width}
                onChange={handleWidthChange}
                presets={SIZE_PRESETS}
                placeholder='auto'
                icon={WIDTH_ICON}
              />
              <ComboInput
                value={props.height}
                onChange={handleHeightChange}
                presets={SIZE_PRESETS}
                placeholder='auto'
                icon={HEIGHT_ICON}
              />
            </div>
          )}
        </div>

        <div className='pt-0.5'>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type='button'
                onClick={() => setLocked(!locked)}
                className={cn(
                  "flex items-center justify-center size-7 rounded text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                  locked && "bg-accent text-accent-foreground",
                )}
              >
                <LockSimpleIcon size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent side='top'>{locked ? "Unlock" : "Lock"}</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </Section>
  );
}, shallowEqualProps);
