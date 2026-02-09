import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { SpacingControl } from "@/components/controls/SpacingControl";
import type { CommonProperties } from "@/lib";

export function LayoutSection() {
  const { currentProperties, updateSpacingProperty } = useDesign();
  const props = currentProperties as CommonProperties;

  return (
    <SectionHeader title="Layout">
      <PropertyRow label="Padding">
        <SpacingControl
          value={props.padding}
          onChange={(side, value) => updateSpacingProperty("padding", side, value)}
        />
      </PropertyRow>

      <PropertyRow label="Margin">
        <SpacingControl
          value={props.margin}
          onChange={(side, value) => updateSpacingProperty("margin", side, value)}
        />
      </PropertyRow>
    </SectionHeader>
  );
}
