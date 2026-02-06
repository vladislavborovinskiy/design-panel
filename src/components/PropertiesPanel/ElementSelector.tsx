import { useDesign } from "@/app/providers/useDesign";
import type { ElementType } from "@/lib";
import { TabGroup } from "@/components/ui/TabGroup";

const ELEMENT_TABS = [
  { value: "text", label: "Text" },
  { value: "button", label: "Button" },
  { value: "image", label: "Image" },
  { value: "div", label: "Div" },
] as const;

export function ElementSelector() {
  const { selectedElementType, setSelectedElementType } = useDesign();

  return (
    <TabGroup
      tabs={ELEMENT_TABS}
      value={selectedElementType}
      onValueChange={(value) => setSelectedElementType(value as ElementType)}
    />
  );
}
