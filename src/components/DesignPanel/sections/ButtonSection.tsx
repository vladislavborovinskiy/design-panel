import { Section } from "@/components/DesignPanel/controls/Section";
import { Field } from "@/components/DesignPanel/controls/Field";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/lib/constants";
import type { ButtonElementProperties, ElementPropertiesMap, ElementType } from "@/lib/types";

const VARIANT_TABS = BUTTON_VARIANTS.map((v) => ({ value: v, label: v }));
const SIZE_TABS = BUTTON_SIZES.map((s) => ({ value: s, label: s }));
const DISABLED_TABS = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
] as const;

interface ButtonSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export function ButtonSection({ currentProperties, onPropertyChange }: ButtonSectionProps) {
  const props = currentProperties as ButtonElementProperties;

  return (
    <Section title='Properties'>
      <ButtonGroup
        options={VARIANT_TABS}
        value={props.variant}
        onValueChange={(v) => onPropertyChange("variant", v)}
      />

      <div className='grid grid-cols-2 gap-2'>
        <Field label='Size'>
          <ButtonGroup
            options={SIZE_TABS}
            value={props.size}
            onValueChange={(v) => onPropertyChange("size", v)}
          />
        </Field>

        <Field label='Disabled'>
          <ButtonGroup
            options={DISABLED_TABS}
            value={props.disabled ? "yes" : "no"}
            onValueChange={(v) => onPropertyChange("disabled", v === "yes")}
          />
        </Field>
      </div>
    </Section>
  );
}
