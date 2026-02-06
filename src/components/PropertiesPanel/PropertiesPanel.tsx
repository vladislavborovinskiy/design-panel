import { useDesign } from "@/app/providers/useDesign";
import { ElementSelector } from "./ElementSelector";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { ContentSection } from "./sections/ContentSection";
import { TypographySection } from "./sections/TypographySection";
import { ColorSection } from "./sections/ColorSection";
import { BackgroundSection } from "./sections/BackgroundSection";
import { LayoutSection } from "./sections/LayoutSection";
import { BorderSection } from "./sections/BorderSection";
import { AppearanceSection } from "./sections/AppearanceSection";
import { ShadowSection } from "./sections/ShadowSection";
import { ImageSection } from "./sections/ImageSection";
import { ButtonSection } from "./sections/ButtonSection";

export function PropertiesPanel() {
  const { selectedElementType } = useDesign();

  const showContent = selectedElementType === "text" || selectedElementType === "button";
  const showTypography = selectedElementType === "text" || selectedElementType === "button";
  const showTextColor = selectedElementType === "text" || selectedElementType === "button";
  const showImage = selectedElementType === "image";
  const showButton = selectedElementType === "button";

  return (
    <div className="bg-background rounded-lg border border-border overflow-hidden shadow-sm">
      <div className="p-3 border-b border-border">
        <ElementSelector />
      </div>

      <ScrollArea className="h-[calc(100vh-8rem)]">
        {showContent && <ContentSection />}
        {showTypography && <TypographySection />}
        {showTextColor && <ColorSection />}
        <BackgroundSection />
        <LayoutSection />
        <BorderSection />
        <AppearanceSection />
        <ShadowSection />
        {showImage && <ImageSection />}
        {showButton && <ButtonSection />}
      </ScrollArea>
    </div>
  );
}
