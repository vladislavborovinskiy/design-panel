import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { ComboInput } from "@/components/DesignPanel/controls/ComboInput";
import { ColorPicker } from "@/components/DesignPanel/controls/ColorPicker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { cn, shallowEqualProps } from "@/lib/utils";
import { BORDER_STYLES, BORDER_WIDTH_PRESETS } from "@/lib/constants";
import type { BorderProperties, ElementPropertiesMap, ElementType } from "@/lib/types";
import { CornersOutIcon } from "@phosphor-icons/react";
import { BorderIcon } from "@/components/DesignPanel/icons/BorderIcon";
import { BorderBlockIcon } from "@/components/DesignPanel/icons/BorderBlockIcon";

const BLOCK_ICON = <BorderBlockIcon size={16} />;
const SIDE_ICONS = {
  top: <BorderIcon size={16} />,
  right: <BorderIcon size={16} className="rotate-90" />,
  bottom: <BorderIcon size={16} className="rotate-180" />,
  left: <BorderIcon size={16} className="-rotate-90" />,
};

interface BorderSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const BorderSection = React.memo(function BorderSection({ currentProperties, onPropertyChange }: BorderSectionProps) {
  const props = currentProperties as BorderProperties & { borderRadius: string };
  const [showAllSides, setShowAllSides] = React.useState(false);

  const handleWidthChange = (v: string) => {
    onPropertyChange("borderWidth", v);
    onPropertyChange("borderWidthTop", v);
    onPropertyChange("borderWidthRight", v);
    onPropertyChange("borderWidthBottom", v);
    onPropertyChange("borderWidthLeft", v);
  };

  return (
    <Section title='Border'>
      <div className='grid grid-cols-[1fr_auto] gap-1'>
        <ColorPicker value={props.borderColor} onChange={(v) => onPropertyChange("borderColor", v)} />
        <Select
          value={props.borderStyle || "default"}
          onValueChange={(v) => onPropertyChange("borderStyle", v === "default" ? "" : v)}
        >
          <SelectTrigger
            size='sm'
            className={cn("w-full", !props.borderStyle && "text-muted-foreground")}
          >
            <SelectValue placeholder='Default' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='default'>Default</SelectItem>
            {BORDER_STYLES.map((style) => (
              <SelectItem key={style} value={style}>
                {style}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='flex items-start gap-1'>
        <div className='flex-1 min-w-0'>
          {!showAllSides ? (
            <ComboInput
              value={props.borderWidth}
              onChange={handleWidthChange}
              presets={BORDER_WIDTH_PRESETS}
              placeholder='0px'
              icon={BLOCK_ICON}
            />
          ) : (
            <div className='grid grid-cols-2 gap-1'>
              <ComboInput
                value={props.borderWidthTop}
                onChange={(v) => onPropertyChange("borderWidthTop", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={SIDE_ICONS.top}
              />
              <ComboInput
                value={props.borderWidthRight}
                onChange={(v) => onPropertyChange("borderWidthRight", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={SIDE_ICONS.right}
              />
              <ComboInput
                value={props.borderWidthBottom}
                onChange={(v) => onPropertyChange("borderWidthBottom", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={SIDE_ICONS.bottom}
              />
              <ComboInput
                value={props.borderWidthLeft}
                onChange={(v) => onPropertyChange("borderWidthLeft", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={SIDE_ICONS.left}
              />
            </div>
          )}
        </div>

        <div className='pt-0.5'>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type='button'
                onClick={() => setShowAllSides(!showAllSides)}
                className={cn(
                  "flex items-center justify-center size-7 rounded text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                  showAllSides && "bg-accent text-accent-foreground",
                )}
              >
                <CornersOutIcon size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent side='top'>Toggle all sides</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </Section>
  );
}, shallowEqualProps);
