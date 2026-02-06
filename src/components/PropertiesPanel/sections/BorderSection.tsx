import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ComboInput } from "@/components/controls/ComboInput";
import { ColorPicker } from "@/components/controls/ColorPicker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { BORDER_STYLES, BORDER_WIDTH_PRESETS, BORDER_RADIUS_PRESETS } from "@/lib";
import type { BorderProperties } from "@/lib";

export function BorderSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as BorderProperties & { borderRadius: string };

  return (
    <SectionHeader title="Border">
      <PropertyRow label="Width">
        <ComboInput
          value={props.borderWidth}
          onChange={(v) => updateProperty("borderWidth", v)}
          presets={BORDER_WIDTH_PRESETS}
          placeholder="0"
        />
      </PropertyRow>

      <PropertyRow label="Style">
        <Select
          value={props.borderStyle}
          onValueChange={(v) => updateProperty("borderStyle", v)}
        >
          <SelectTrigger size="sm" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {BORDER_STYLES.map((style) => (
              <SelectItem key={style} value={style}>
                {style}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PropertyRow>

      <PropertyRow label="Color">
        <ColorPicker
          value={props.borderColor}
          onChange={(v) => updateProperty("borderColor", v)}
        />
      </PropertyRow>

      <PropertyRow label="Radius">
        <ComboInput
          value={props.borderRadius}
          onChange={(v) => updateProperty("borderRadius", v)}
          presets={BORDER_RADIUS_PRESETS}
          placeholder="0"
        />
      </PropertyRow>
    </SectionHeader>
  );
}
