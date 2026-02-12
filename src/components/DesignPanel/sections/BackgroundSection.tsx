import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { ColorPicker } from "@/components/DesignPanel/controls/ColorPicker";
import { shallowEqualProps } from "@/lib/utils";
import type { ElementPropertiesMap, ElementType } from "@/lib/types";

interface BackgroundSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const BackgroundSection = React.memo(function BackgroundSection({ currentProperties, onPropertyChange }: BackgroundSectionProps) {
  const props = currentProperties as { backgroundColor: string };

  return (
    <Section title="Background">
      <ColorPicker
        value={props.backgroundColor}
        onChange={(v) => onPropertyChange("backgroundColor", v)}
      />
    </Section>
  );
}, shallowEqualProps);
