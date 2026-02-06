import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ColorPicker } from "@/components/controls/ColorPicker";

export function BackgroundSection() {
  const { currentProperties, updateProperty } = useDesign();

  return (
    <SectionHeader title="Background">
      <PropertyRow label="Color">
        <ColorPicker
          value={currentProperties.backgroundColor}
          onChange={(v) => updateProperty("backgroundColor", v)}
        />
      </PropertyRow>
    </SectionHeader>
  );
}
