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
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { cn } from "@/lib/utils";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZE_PRESETS,
  LINE_HEIGHT_PRESETS,
  LETTER_SPACING_PRESETS,
  TEXT_ALIGN_OPTIONS,
  TEXT_DECORATION_OPTIONS,
} from "@/lib";
import type { TextElementProperties } from "@/lib";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  TextAlignJustifyIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
  NumberZeroIcon,
} from "@phosphor-icons/react";

const ALIGN_TABS = TEXT_ALIGN_OPTIONS.map((align) => ({
  value: align,
  tooltip: { left: "Align Left", center: "Align Center", right: "Align Right", justify: "Justify" }[align],
  icon: {
    left: <TextAlignLeftIcon className='size-5' />,
    center: <TextAlignCenterIcon className='size-5' />,
    right: <TextAlignRightIcon className='size-5' />,
    justify: <TextAlignJustifyIcon className='size-5' />,
  }[align],
}));

const DECORATION_TABS = TEXT_DECORATION_OPTIONS.map((dec) => ({
  value: dec,
  tooltip: { italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", overline: "Overline", "tabular-nums": "Tabular Numbers" }[dec],
  icon: {
    italic: <TextItalicIcon className='size-5' />,
    strikethrough: <TextStrikethroughIcon className='size-5' />,
    underline: <TextUnderlineIcon className='size-5' />,
    overline: <TextUnderlineIcon className='size-4 rotate-180' />,
    "tabular-nums": <NumberZeroIcon className='size-5' />,
  }[dec],
}));

export function TypographySection() {
  const { currentProperties, updateProperty } = useDesign();
  const props = currentProperties as TextElementProperties;

  return (
    <SectionHeader title='Typography'>
      <Select value={props.fontFamily || "default"} onValueChange={(v) => updateProperty("fontFamily", v === "default" ? "" : v)}>
        <SelectTrigger size='sm' className={cn('w-full', !props.fontFamily && 'text-muted-foreground')}>
          <SelectValue placeholder='Default' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='default'>Default</SelectItem>
          {FONT_FAMILIES.map((font) => (
            <SelectItem key={font.value} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className='grid grid-cols-2 gap-2'>
        <Select
          value={props.fontSize || "default"}
          onValueChange={(v) => updateProperty("fontSize", v === "default" ? "" : v)}
        >
          <SelectTrigger size='sm' className={cn('w-full', !props.fontSize && 'text-muted-foreground')}>
            <SelectValue placeholder='Default' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='default'>Default</SelectItem>
            {FONT_SIZE_PRESETS.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={props.fontWeight ? String(props.fontWeight) : "default"}
          onValueChange={(v) => updateProperty("fontWeight", v === "default" ? 0 : Number(v))}
        >
          <SelectTrigger size='sm' className={cn('w-full', !props.fontWeight && 'text-muted-foreground')}>
            <SelectValue placeholder='Default' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='default'>Default</SelectItem>
            {FONT_WEIGHTS.map((w) => (
              <SelectItem key={w.value} value={String(w.value)}>
                {w.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <PropertyRow label='Line Height'>
          <ComboInput
            value={props.lineHeight}
            onChange={(v) => updateProperty("lineHeight", v)}
            presets={LINE_HEIGHT_PRESETS}
            placeholder='1.5rem'
          />
        </PropertyRow>
        <PropertyRow label='Letter Spacing'>
          <ComboInput
            value={props.letterSpacing}
            onChange={(v) => updateProperty("letterSpacing", v)}
            presets={LETTER_SPACING_PRESETS}
            placeholder='0'
          />
        </PropertyRow>
        <PropertyRow label='Align'>
          <ButtonGroup
            options={ALIGN_TABS}
            value={props.textAlign}
            onValueChange={(v) => updateProperty("textAlign", v)}
          />
        </PropertyRow>
        <PropertyRow label='Decoration'>
          <ButtonGroup
            options={DECORATION_TABS}
            value={props.textDecoration}
            onValueChange={(v) => updateProperty("textDecoration", v)}
          />
        </PropertyRow>
      </div>
    </SectionHeader>
  );
}
