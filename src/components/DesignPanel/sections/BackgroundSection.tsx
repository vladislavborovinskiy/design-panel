import { Section } from "@/components/DesignPanel/controls/Section";
import { ColorPicker } from "@/components/DesignPanel/controls/ColorPicker";
import type { ElementPropertiesMap, ElementType } from "@/lib/types";

interface BackgroundSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export function BackgroundSection({ currentProperties, onPropertyChange }: BackgroundSectionProps) {
  const props = currentProperties as { backgroundColor: string };

  return (
    <Section title="Background">
      <ColorPicker
        value={props.backgroundColor}
        onChange={(v) => onPropertyChange("backgroundColor", v)}
      />
    </Section>
  );
}
