import { Section } from "@/components/DesignPanel/controls/Section";
import { Field } from "@/components/DesignPanel/controls/Field";
import { ComboInput } from "@/components/DesignPanel/controls/ComboInput";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { OBJECT_FIT_OPTIONS, ASPECT_RATIO_PRESETS } from "@/lib/constants";
import type { ImageElementProperties, ElementPropertiesMap, ElementType } from "@/lib/types";

interface ImageSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export function ImageSection({ currentProperties, onPropertyChange }: ImageSectionProps) {
  const props = currentProperties as ImageElementProperties;

  return (
    <Section title='Properties'>
      <Field label='Source'>
        <Input
          value={props.src}
          onChange={(e) => onPropertyChange("src", e.target.value)}
          className='h-8 text-xs'
          placeholder='https://...'
        />
      </Field>

      <Field label='Alt Text'>
        <Input
          value={props.alt}
          onChange={(e) => onPropertyChange("alt", e.target.value)}
          className='h-8 text-xs'
          placeholder='Image description'
        />
      </Field>

      <div className='grid grid-cols-2 gap-2'>
        <Field label='Fit'>
          <Select value={props.objectFit} onValueChange={(v) => onPropertyChange("objectFit", v)}>
            <SelectTrigger size='sm' className='w-full'>
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
        </Field>

        <Field label='Ratio'>
          <ComboInput
            value={props.aspectRatio}
            onChange={(v) => onPropertyChange("aspectRatio", v)}
            presets={ASPECT_RATIO_PRESETS}
            placeholder='auto'
          />
        </Field>
      </div>
    </Section>
  );
}
