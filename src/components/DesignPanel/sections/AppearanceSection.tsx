import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { Field } from "@/components/DesignPanel/controls/Field";
import { SliderInput } from "@/components/DesignPanel/controls/SliderInput";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { cn, shallowEqualProps } from "@/lib/utils";
import { BORDER_RADIUS_PRESETS } from "@/lib/constants";
import type { AppearanceProperties, CommonProperties, ElementPropertiesMap, ElementType } from "@/lib/types";
import { AngleIcon } from "@phosphor-icons/react";

interface AppearanceSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const AppearanceSection = React.memo(function AppearanceSection({ currentProperties, onPropertyChange }: AppearanceSectionProps) {
  const props = currentProperties as AppearanceProperties & CommonProperties;

  return (
    <Section title='Appearance'>
      <Field label='Radius'>
        <Select
          value={props.borderRadius || "default"}
          onValueChange={(v) => onPropertyChange("borderRadius", v === "default" ? "" : v)}
        >
          <SelectTrigger
            size='sm'
            icon={<AngleIcon className='size-4.5' weight='bold' />}
            className={cn("w-full", !props.borderRadius && "text-muted-foreground")}
          >
            <SelectValue placeholder='Default' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='default'>Default</SelectItem>
            {BORDER_RADIUS_PRESETS.map((preset) => (
              <SelectItem key={preset.value} value={preset.value}>
                {preset.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label='Opacity'>
        <SliderInput
          value={props.opacity}
          onChange={(v) => onPropertyChange("opacity", v)}
          min={0}
          max={100}
          step={1}
          suffix='%'
          trackClassName='opacity-track h-3'
          showRange={false}
        />
      </Field>
    </Section>
  );
}, shallowEqualProps);
