import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { SliderInput } from "@/components/controls/SliderInput";
import type { AppearanceProperties } from "@/lib";

export function AppearanceSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as AppearanceProperties;

  return (
    <SectionHeader title="Appearance">
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
