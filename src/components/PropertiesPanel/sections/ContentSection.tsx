import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { TAG_OPTIONS } from "@/lib";
import type { TextElementProperties, ButtonElementProperties } from "@/lib";

export function ContentSection() {
  const { selectedElementType, currentProperties, updateProperty } = useDesign();

  return (
    <SectionHeader title="Content">
      {selectedElementType === "text" && (
        <>
          <PropertyRow label="Text">
            <Textarea
              value={(currentProperties as TextElementProperties).content}
              onChange={(e) => updateProperty("content", e.target.value)}
              className="min-h-16 text-xs"
            />
          </PropertyRow>
          <PropertyRow label="Tag">
            <Select
              value={(currentProperties as TextElementProperties).tag}
              onValueChange={(v) => updateProperty("tag", v)}
            >
              <SelectTrigger size="sm" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TAG_OPTIONS.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </PropertyRow>
        </>
      )}
      {selectedElementType === "button" && (
        <PropertyRow label="Text">
          <Input
            value={(currentProperties as ButtonElementProperties).text}
            onChange={(e) => updateProperty("text", e.target.value)}
            className="h-8 text-xs"
          />
        </PropertyRow>
      )}
    </SectionHeader>
  );
}
