import * as React from "react";
import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { ComboInput } from "@/components/controls/ComboInput";
import { ColorPicker } from "@/components/controls/ColorPicker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import { BORDER_STYLES, BORDER_WIDTH_PRESETS } from "@/lib";
import type { BorderProperties } from "@/lib";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CornersOutIcon,
  EqualsIcon,
} from "@phosphor-icons/react";

export function BorderSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as BorderProperties & { borderRadius: string };
  const [showAllSides, setShowAllSides] = React.useState(false);

  const handleWidthChange = (v: string) => {
    updateProperty("borderWidth", v);
    updateProperty("borderWidthTop", v);
    updateProperty("borderWidthRight", v);
    updateProperty("borderWidthBottom", v);
    updateProperty("borderWidthLeft", v);
  };

  return (
    <SectionHeader title='Border'>
      <div className='grid grid-cols-[1fr_auto] gap-1'>
        <ColorPicker value={props.borderColor} onChange={(v) => updateProperty("borderColor", v)} />
        <Select value={props.borderStyle || "default"} onValueChange={(v) => updateProperty("borderStyle", v === "default" ? "" : v)}>
          <SelectTrigger size='sm' className={cn('w-full', !props.borderStyle && 'text-muted-foreground')}>
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
              icon={<EqualsIcon size={14} />}
            />
          ) : (
            <div className='grid grid-cols-2 gap-1'>
              <ComboInput
                value={props.borderWidthTop}
                onChange={(v) => updateProperty("borderWidthTop", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={<ArrowUpIcon size={14} />}
              />
              <ComboInput
                value={props.borderWidthRight}
                onChange={(v) => updateProperty("borderWidthRight", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={<ArrowRightIcon size={14} />}
              />
              <ComboInput
                value={props.borderWidthBottom}
                onChange={(v) => updateProperty("borderWidthBottom", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={<ArrowDownIcon size={14} />}
              />
              <ComboInput
                value={props.borderWidthLeft}
                onChange={(v) => updateProperty("borderWidthLeft", v)}
                presets={BORDER_WIDTH_PRESETS}
                placeholder='0'
                icon={<ArrowLeftIcon size={14} />}
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
    </SectionHeader>
  );
}
