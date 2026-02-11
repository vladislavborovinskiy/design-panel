import type { ElementType } from "@/lib/types";
import { TabGroup } from "@/components/ui/TabGroup";

const ELEMENT_TABS = [
  { value: "text", label: "Text" },
  { value: "button", label: "Button" },
  { value: "image", label: "Image" },
  { value: "div", label: "Div" },
] as const;

interface ElementSelectorProps {
  value: ElementType;
  onValueChange: (type: ElementType) => void;
}

export function ElementSelector({ value, onValueChange }: ElementSelectorProps) {
  return (
    <TabGroup
      tabs={ELEMENT_TABS}
      value={value}
      onValueChange={(v) => onValueChange(v as ElementType)}
    />
  );
}
