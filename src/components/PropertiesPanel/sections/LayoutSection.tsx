import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ComboInput } from "@/components/controls/ComboInput";
import { SpacingControl } from "@/components/controls/SpacingControl";
import { SIZE_PRESETS } from "@/lib";

export function LayoutSection() {
  const { currentProperties, updateProperty, updateSpacingProperty } = useDesign();

  return (
    <SectionHeader title="Layout">
      <PropertyRow label="Width">
        <ComboInput
          value={currentProperties.width}
          onChange={(v) => updateProperty("width", v)}
          presets={SIZE_PRESETS}
          placeholder="auto"
        />
      </PropertyRow>

      <PropertyRow label="Height">
        <ComboInput
          value={currentProperties.height}
          onChange={(v) => updateProperty("height", v)}
          presets={SIZE_PRESETS}
          placeholder="auto"
        />
      </PropertyRow>

      <div className="space-y-2 pt-1">
        <span className="text-xs text-muted-foreground">Padding</span>
        <SpacingControl
          value={currentProperties.padding}
          onChange={(side, value) => updateSpacingProperty("padding", side, value)}
          label="P"
        />
      </div>

      <div className="space-y-2 pt-1">
        <span className="text-xs text-muted-foreground">Margin</span>
        <SpacingControl
          value={currentProperties.margin}
          onChange={(side, value) => updateSpacingProperty("margin", side, value)}
          label="M"
        />
      </div>
    </SectionHeader>
  );
}
