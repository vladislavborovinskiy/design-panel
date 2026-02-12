import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { cn, shallowEqualProps } from "@/lib/utils";
import { SHADOW_PRESETS } from "@/lib/constants";
import type { AppearanceProperties, ElementPropertiesMap, ElementType } from "@/lib/types";
import { SubtractSquareIcon } from "@phosphor-icons/react";

interface ShadowSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const ShadowSection = React.memo(function ShadowSection({ currentProperties, onPropertyChange }: ShadowSectionProps) {
  const props = currentProperties as AppearanceProperties;

  return (
    <Section title='Shadow'>
      <Select
        value={props.boxShadow || "default"}
        onValueChange={(v) => onPropertyChange("boxShadow", v === "default" ? "" : v)}
      >
        <SelectTrigger
          size='sm'
          icon={<SubtractSquareIcon className='size-4.5' weight='fill' />}
          className={cn("w-full", !props.boxShadow && "text-muted-foreground")}
        >
          <SelectValue placeholder='Default' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='default'>Default</SelectItem>
          {SHADOW_PRESETS.map((preset) => (
            <SelectItem key={preset.value} value={preset.value}>
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Section>
  );
}, shallowEqualProps);
