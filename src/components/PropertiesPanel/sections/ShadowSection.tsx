import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import { SHADOW_PRESETS } from "@/lib";
import type { AppearanceProperties } from "@/lib";

export function ShadowSection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as AppearanceProperties;

  return (
    <SectionHeader title="Shadow">
      <Select
        value={props.boxShadow || "default"}
        onValueChange={(v) => updateProperty("boxShadow", v === "default" ? "" : v)}
      >
        <SelectTrigger size="sm" className={cn("w-full", !props.boxShadow && "text-muted-foreground")}>
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          {SHADOW_PRESETS.map((preset) => (
            <SelectItem key={preset.value} value={preset.value}>
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </SectionHeader>
  );
}
