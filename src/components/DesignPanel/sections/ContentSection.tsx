import { Section } from "@/components/DesignPanel/controls/Section";
import { Textarea } from "@/components/ui/Textarea";
import type { ElementType, ElementPropertiesMap, TextElementProperties, ButtonElementProperties } from "@/lib/types";

interface ContentSectionProps {
  selectedElementType: ElementType;
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export function ContentSection({ selectedElementType, currentProperties, onPropertyChange }: ContentSectionProps) {
  return (
    <Section title="Content">
      {selectedElementType === "text" && (
        <Textarea
          value={(currentProperties as TextElementProperties).content}
          onChange={(e) => onPropertyChange("content", e.target.value)}
          placeholder="Enter text..."
          className="min-h-16 text-xs"
        />
      )}
      {selectedElementType === "button" && (
        <Textarea
          value={(currentProperties as ButtonElementProperties).text}
          onChange={(e) => onPropertyChange("text", e.target.value)}
          placeholder="Button text..."
          className="min-h-16 text-xs"
        />
      )}
    </Section>
  );
}
