import * as React from "react";
import { cn, formatColorValue } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/Popover";
import { TabGroup } from "@/components/ui/TabGroup";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { SYSTEM_COLORS, TAILWIND_COLORS } from "@/lib/constants";
import { CaretDownIcon, CursorClickIcon } from "@phosphor-icons/react";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const COLOR_TABS = [
  { value: "system", label: "System" },
  { value: "tailwind", label: "Tailwind" },
  { value: "custom", label: "Custom" },
] as const;

function getSwatchProps(value: string): { style?: React.CSSProperties; className?: string } {
  if (value.startsWith("var(")) return { style: { backgroundColor: value } };
  if (value.startsWith("#") || value === "transparent")
    return { style: { backgroundColor: value } };
  return { className: `bg-${value}` };
}

export function ColorPicker({ value: valueProp, onChange, className }: ColorPickerProps) {
  const value = valueProp ?? "";
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState("system");
  const [search, setSearch] = React.useState("");

  const colorInputRef = React.useRef<HTMLInputElement>(null);
  const hexInputRef = React.useRef<HTMLInputElement>(null);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  React.useEffect(() => {
    if (value.startsWith("#")) {
      if (colorInputRef.current) colorInputRef.current.value = value;
      if (hexInputRef.current) hexInputRef.current.value = value;
    }
  }, [value]);

  React.useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleNativeColor = (newColor: string) => {
    if (hexInputRef.current) hexInputRef.current.value = newColor;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onChange(newColor);
    }, 50);
  };

  const selectColor = (color: string) => {
    onChange(color);
    setOpen(false);
  };

  const filteredSystemColors = React.useMemo(
    () =>
      search
        ? SYSTEM_COLORS.filter((c) => c.toLowerCase().includes(search.toLowerCase()))
        : [...SYSTEM_COLORS],
    [search],
  );

  const filteredTailwindColors = React.useMemo(
    () =>
      search
        ? TAILWIND_COLORS.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
        : [...TAILWIND_COLORS],
    [search],
  );

  const swatchProps = getSwatchProps(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex h-8 w-full items-center gap-2 rounded-md border border-input bg-transparent px-2 text-sm transition-colors hover:bg-accent/50",
            className,
          )}
        >
          {value ? (
            <div
              className={cn(
                "size-5 shrink-0 rounded border border-input/50",
                swatchProps.className,
              )}
              style={swatchProps.style}
            />
          ) : (
            <div className='size-5 shrink-0 rounded border border-input/50 bg-transparent' />
          )}
          <span
            className={cn(
              "truncate flex-1 text-left text-sm",
              value ? "font-mono" : "text-muted-foreground",
            )}
          >
            {formatColorValue(value)}
          </span>
          <CaretDownIcon className='size-4 shrink-0 opacity-50' />
        </button>
      </PopoverTrigger>
      <PopoverContent className='w-72 p-0' align='start'>
        <div className='p-2 pb-0'>
          <TabGroup tabs={COLOR_TABS} value={tab} onValueChange={setTab} />
        </div>

        {tab !== "custom" && (
          <div className='px-2 pt-2'>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search colors...'
              className='h-7 text-xs'
            />
          </div>
        )}

        <div className='p-2'>
          {tab === "system" && (
            <ScrollArea className='h-48'>
              <div className='space-y-0.5'>
                {filteredSystemColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => selectColor(`var(--${color})`)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors hover:bg-accent/50",
                      value === `var(--${color})` && "bg-accent",
                    )}
                  >
                    <div
                      className='size-4 shrink-0 rounded border border-input/50'
                      style={{ backgroundColor: `var(--${color})` }}
                    />
                    <span className='truncate'>{color}</span>
                  </button>
                ))}
                {filteredSystemColors.length === 0 && (
                  <p className='py-4 text-center text-xs text-muted-foreground'>No colors found</p>
                )}
              </div>
            </ScrollArea>
          )}

          {tab === "tailwind" && (
            <ScrollArea className='h-48'>
              <div className='space-y-0.5'>
                {filteredTailwindColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => selectColor(color.name)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors hover:bg-accent/50",
                      value === color.name && "bg-accent",
                    )}
                  >
                    <div
                      className={cn(
                        "size-4 shrink-0 rounded border border-input/50",
                        color.className,
                      )}
                    />
                    <span className='truncate'>{color.name}</span>
                  </button>
                ))}
                {filteredTailwindColors.length === 0 && (
                  <p className='py-4 text-center text-xs text-muted-foreground'>No colors found</p>
                )}
              </div>
            </ScrollArea>
          )}

          {tab === "custom" && (
            <div className='space-y-3'>
              <div className='relative'>
                <input
                  ref={colorInputRef}
                  type='color'
                  defaultValue={value.startsWith("#") ? value : "#000000"}
                  onChange={(e) => handleNativeColor(e.target.value)}
                  className='h-24 w-full cursor-pointer rounded-md border border-input p-1'
                />
                <div className='absolute bg-white p-1.5 rounded-full border shadow-md bottom-4 right-4 pointer-events-none'>
                  <CursorClickIcon weight='fill' className='size-4 pointer-events-none' />
                </div>
              </div>
              <input
                ref={hexInputRef}
                defaultValue={value.startsWith("#") ? value : "#000000"}
                onChange={(e) => onChange(e.target.value)}
                placeholder='#000000'
                className='flex h-7 w-full rounded-md border border-input bg-transparent px-3 py-1 text-xs font-mono transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              />
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
