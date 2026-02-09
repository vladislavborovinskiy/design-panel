import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { ColorPicker } from "@/components/controls/ColorPicker";
import type { TextElementProperties } from "@/lib";

export function ColorSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as TextElementProperties;

  return (
    <SectionHeader title="Color">
      <ColorPicker
        value={props.color}
        onChange={(v) => updateProperty("color", v)}
      />
    </SectionHeader>
  );
}
