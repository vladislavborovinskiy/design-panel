import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup";
import { SHADOW_PRESETS } from "@/lib";
import type { AppearanceProperties } from "@/lib";

const SHADOW_KEYS = Object.keys(SHADOW_PRESETS) as (keyof typeof SHADOW_PRESETS)[];

export function ShadowSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as AppearanceProperties;

  const currentKey =
    SHADOW_KEYS.find((key) => SHADOW_PRESETS[key] === props.boxShadow) ?? "none";

  return (
    <SectionHeader title="Shadow">
      <PropertyRow label="Shadow">
        <ButtonGroup
          type="single"
          value={currentKey}
          onValueChange={(v) => {
            if (v) updateProperty("boxShadow", SHADOW_PRESETS[v as keyof typeof SHADOW_PRESETS]);
          }}
          className="w-full"
        >
          {SHADOW_KEYS.map((key) => (
            <ButtonGroupItem key={key} value={key} className="flex-1 text-xs">
              {key}
            </ButtonGroupItem>
          ))}
        </ButtonGroup>
      </PropertyRow>
    </SectionHeader>
  );
}
