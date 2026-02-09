import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { SliderInput } from "@/components/controls/SliderInput";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import { BORDER_RADIUS_PRESETS } from "@/lib";
import type { AppearanceProperties, CommonProperties } from "@/lib";
import { AngleIcon } from "@phosphor-icons/react";

export function AppearanceSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as AppearanceProperties & CommonProperties;

  return (
    <SectionHeader title="Appearance">
      <PropertyRow label="Radius">
        <Select
          value={props.borderRadius || "default"}
          onValueChange={(v) => updateProperty("borderRadius", v === "default" ? "" : v)}
        >
          <SelectTrigger size="sm" icon={<AngleIcon className="size-4" />} className={cn("w-full", !props.borderRadius && "text-muted-foreground")}>
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            {BORDER_RADIUS_PRESETS.map((preset) => (
              <SelectItem key={preset.value} value={preset.value}>
                {preset.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PropertyRow>

      <PropertyRow label="Opacity">
        <SliderInput
          value={props.opacity}
          onChange={(v) => updateProperty("opacity", v)}
          min={0}
          max={100}
          step={1}
          suffix="%"
        />
      </PropertyRow>
    </SectionHeader>
  );
}
