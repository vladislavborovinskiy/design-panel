import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import type { TextElementProperties, ButtonElementProperties } from "@/lib";

export function ContentSection() {
  const { selectedElementType, currentProperties, updateProperty } = useDesign();

  return (
    <SectionHeader title="Content">
      {selectedElementType === "text" && (
        <Textarea
          value={(currentProperties as TextElementProperties).content}
          onChange={(e) => updateProperty("content", e.target.value)}
          placeholder="Enter text..."
          className="min-h-16 text-xs"
        />
      )}
      {selectedElementType === "button" && (
        <Input
          value={(currentProperties as ButtonElementProperties).text}
          onChange={(e) => updateProperty("text", e.target.value)}
          placeholder="Button text..."
          className="h-8 text-xs"
        />
      )}
    </SectionHeader>
  );
}
