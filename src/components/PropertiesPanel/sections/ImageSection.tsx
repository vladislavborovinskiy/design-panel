import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ComboInput } from "@/components/controls/ComboInput";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { OBJECT_FIT_OPTIONS, ASPECT_RATIO_PRESETS } from "@/lib";
import type { ImageElementProperties } from "@/lib";

export function ImageSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as ImageElementProperties;

  return (
    <SectionHeader title="Image">
      <PropertyRow label="Source">
        <Input
          value={props.src}
          onChange={(e) => updateProperty("src", e.target.value)}
          className="h-8 text-xs"
          placeholder="https://..."
        />
      </PropertyRow>

      <PropertyRow label="Alt Text">
        <Input
          value={props.alt}
          onChange={(e) => updateProperty("alt", e.target.value)}
          className="h-8 text-xs"
          placeholder="Image description"
        />
      </PropertyRow>

      <PropertyRow label="Fit">
        <Select
          value={props.objectFit}
          onValueChange={(v) => updateProperty("objectFit", v)}
        >
          <SelectTrigger size="sm" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {OBJECT_FIT_OPTIONS.map((fit) => (
              <SelectItem key={fit} value={fit}>
                {fit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PropertyRow>

      <PropertyRow label="Ratio">
        <ComboInput
          value={props.aspectRatio}
          onChange={(v) => updateProperty("aspectRatio", v)}
          presets={ASPECT_RATIO_PRESETS}
          placeholder="auto"
        />
      </PropertyRow>
    </SectionHeader>
  );
}
