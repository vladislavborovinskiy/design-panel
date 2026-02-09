import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/lib";
import type { ButtonElementProperties } from "@/lib";

const VARIANT_TABS = BUTTON_VARIANTS.map((v) => ({ value: v, label: v }));
const SIZE_TABS = BUTTON_SIZES.map((s) => ({ value: s, label: s.toUpperCase() }));
const DISABLED_TABS = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
] as const;

export function ButtonSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as ButtonElementProperties;

  return (
    <SectionHeader title="Button">
      <PropertyRow label="Variant">
        <ButtonGroup
          options={VARIANT_TABS}
          value={props.variant}
          onValueChange={(v) => updateProperty("variant", v)}
        />
      </PropertyRow>

      <PropertyRow label="Size">
        <ButtonGroup
          options={SIZE_TABS}
          value={props.size}
          onValueChange={(v) => updateProperty("size", v)}
        />
      </PropertyRow>

      <PropertyRow label="Disabled">
        <ButtonGroup
          options={DISABLED_TABS}
          value={props.disabled ? "yes" : "no"}
          onValueChange={(v) => updateProperty("disabled", v === "yes")}
        />
      </PropertyRow>
    </SectionHeader>
  );
}
