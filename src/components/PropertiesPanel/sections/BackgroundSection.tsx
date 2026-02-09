import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { ColorPicker } from "@/components/controls/ColorPicker";

export function BackgroundSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as { backgroundColor: string };

  return (
    <SectionHeader title="Background">
      <ColorPicker
        value={props.backgroundColor}
        onChange={(v) => updateProperty("backgroundColor", v)}
      />
    </SectionHeader>
  );
}
