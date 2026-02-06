import { useDesign } from "@/app/providers/useDesign";
import { SectionHeader } from "@/components/controls/SectionHeader";
import { PropertyRow } from "@/components/controls/PropertyRow";
import { ComboInput } from "@/components/controls/ComboInput";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZE_PRESETS,
  LINE_HEIGHT_PRESETS,
  LETTER_SPACING_PRESETS,
  TEXT_ALIGN_OPTIONS,
} from "@/lib";
import type { TextElementProperties } from "@/lib";
import {
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  TextAlignJustify,
} from "@phosphor-icons/react";

const ALIGN_ICONS = {
  left: TextAlignLeft,
  center: TextAlignCenter,
  right: TextAlignRight,
  justify: TextAlignJustify,
} as const;

export function TypographySection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as TextElementProperties;

  return (
    <SectionHeader title="Typography">
      <PropertyRow label="Font">
        <Select
          value={props.fontFamily}
          onValueChange={(v) => updateProperty("fontFamily", v)}
        >
          <SelectTrigger size="sm" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {FONT_FAMILIES.map((font) => (
              <SelectItem key={font.value} value={font.value}>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PropertyRow>

      <PropertyRow label="Size">
        <ComboInput
          value={props.fontSize}
          onChange={(v) => updateProperty("fontSize", v)}
          presets={FONT_SIZE_PRESETS}
          placeholder="16"
        />
      </PropertyRow>

      <PropertyRow label="Weight">
        <Select
          value={String(props.fontWeight)}
          onValueChange={(v) => updateProperty("fontWeight", Number(v))}
        >
          <SelectTrigger size="sm" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {FONT_WEIGHTS.map((w) => (
              <SelectItem key={w} value={String(w)}>
                {w}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PropertyRow>

      <PropertyRow label="Line Height">
        <ComboInput
          value={props.lineHeight}
          onChange={(v) => updateProperty("lineHeight", v)}
          presets={LINE_HEIGHT_PRESETS}
          placeholder="1.5rem"
        />
      </PropertyRow>

      <PropertyRow label="Spacing">
        <ComboInput
          value={props.letterSpacing}
          onChange={(v) => updateProperty("letterSpacing", v)}
          presets={LETTER_SPACING_PRESETS}
          placeholder="0"
        />
      </PropertyRow>

      <PropertyRow label="Align">
        <ButtonGroup
          type="single"
          value={props.textAlign}
          onValueChange={(v) => {
            if (v) updateProperty("textAlign", v);
          }}
          className="w-full"
        >
          {TEXT_ALIGN_OPTIONS.map((align) => {
            const Icon = ALIGN_ICONS[align];
            return (
              <ButtonGroupItem
                key={align}
                value={align}
                className="flex-1"
              >
                <Icon className="size-4" />
              </ButtonGroupItem>
            );
          })}
        </ButtonGroup>
      </PropertyRow>
    </SectionHeader>
  );
}
