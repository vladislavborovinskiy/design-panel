import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { ColorPicker } from "@/components/DesignPanel/controls/ColorPicker";
import { shallowEqualProps } from "@/lib/utils";
import type { ElementPropertiesMap, ElementType, TextElementProperties } from "@/lib/types";

interface ColorSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const ColorSection = React.memo(function ColorSection({ currentProperties, onPropertyChange }: ColorSectionProps) {
  const props = currentProperties as TextElementProperties;

  return (
    <Section title="Color">
      <ColorPicker
        value={props.color}
        onChange={(v) => onPropertyChange("color", v)}
      />
    </Section>
  );
}, shallowEqualProps);
