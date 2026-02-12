import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { Field } from "@/components/DesignPanel/controls/Field";
import { Input } from "@/components/ui/Input";
import { shallowEqualProps } from "@/lib/utils";
import type { ImageElementProperties, ElementPropertiesMap, ElementType } from "@/lib/types";

interface ImageSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const ImageSection = React.memo(function ImageSection({
  currentProperties,
  onPropertyChange,
}: ImageSectionProps) {
  const props = currentProperties as ImageElementProperties;

  return (
    <Section title='Properties'>
      <Field label='Alt Text'>
        <Input
          value={props.alt}
          onChange={(e) => onPropertyChange("alt", e.target.value)}
          className='h-8 text-xs'
          placeholder='Image description'
        />
      </Field>
    </Section>
  );
}, shallowEqualProps);
