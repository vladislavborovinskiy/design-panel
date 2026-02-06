import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/lib";
import type { ButtonElementProperties } from "@/lib";

export function ButtonSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as ButtonElementProperties;

  return (
    <SectionHeader title="Button">
      <PropertyRow label="Variant">
        <ButtonGroup
          type="single"
          value={props.variant}
          onValueChange={(v) => {
            if (v) updateProperty("variant", v);
          }}
          className="w-full"
        >
          {BUTTON_VARIANTS.map((variant) => (
            <ButtonGroupItem key={variant} value={variant} className="flex-1 text-xs capitalize">
              {variant}
            </ButtonGroupItem>
          ))}
        </ButtonGroup>
      </PropertyRow>

      <PropertyRow label="Size">
        <ButtonGroup
          type="single"
          value={props.size}
          onValueChange={(v) => {
            if (v) updateProperty("size", v);
          }}
          className="w-full"
        >
          {BUTTON_SIZES.map((size) => (
            <ButtonGroupItem key={size} value={size} className="flex-1 text-xs uppercase">
              {size}
            </ButtonGroupItem>
          ))}
        </ButtonGroup>
      </PropertyRow>

      <PropertyRow label="Disabled">
        <ButtonGroup
          type="single"
          value={props.disabled ? "yes" : "no"}
          onValueChange={(v) => {
            if (v) updateProperty("disabled", v === "yes");
          }}
          className="w-full"
        >
          <ButtonGroupItem value="no" className="flex-1 text-xs">
            No
          </ButtonGroupItem>
          <ButtonGroupItem value="yes" className="flex-1 text-xs">
            Yes
          </ButtonGroupItem>
        </ButtonGroup>
      </PropertyRow>
    </SectionHeader>
  );
}
