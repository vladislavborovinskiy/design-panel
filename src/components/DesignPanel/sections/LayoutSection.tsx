import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { Field } from "@/components/DesignPanel/controls/Field";
import { SpacingInput } from "@/components/DesignPanel/controls/SpacingInput";
import { PaddingIcon } from "@/components/DesignPanel/icons/PaddingIcon";
import { PaddingBlockIcon } from "@/components/DesignPanel/icons/PaddingBlockIcon";
import { MarginIcon } from "@/components/DesignPanel/icons/MarginIcon";
import { MarginBlockIcon } from "@/components/DesignPanel/icons/MarginBlockIcon";
import { shallowEqualProps } from "@/lib/utils";
import type { CommonProperties, ElementPropertiesMap, ElementType, SpacingValue } from "@/lib/types";

interface LayoutSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onSpacingChange: (property: "padding" | "margin", side: keyof SpacingValue, value: string) => void;
}

export const LayoutSection = React.memo(function LayoutSection({ currentProperties, onSpacingChange }: LayoutSectionProps) {
  const props = currentProperties as CommonProperties;

  return (
    <Section title="Layout">
      <Field label="Padding">
        <SpacingInput
          value={props.padding}
          onChange={(side, value) => onSpacingChange("padding", side, value)}
          SideIcon={PaddingIcon}
          BlockIcon={PaddingBlockIcon}
        />
      </Field>

      <Field label="Margin">
        <SpacingInput
          value={props.margin}
          onChange={(side, value) => onSpacingChange("margin", side, value)}
          SideIcon={MarginIcon}
          BlockIcon={MarginBlockIcon}
        />
      </Field>
    </Section>
  );
}, shallowEqualProps);
