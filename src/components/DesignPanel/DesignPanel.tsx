import { ElementSelector } from "./ElementSelector";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { SectionScope } from "./controls/Section";
import { ContentSection } from "./sections/ContentSection";
import { TypographySection } from "./sections/TypographySection";
import { ColorSection } from "./sections/ColorSection";
import { BackgroundSection } from "./sections/BackgroundSection";
import { LayoutSection } from "./sections/LayoutSection";
import { BorderSection } from "./sections/BorderSection";
import { AppearanceSection } from "./sections/AppearanceSection";
import { ShadowSection } from "./sections/ShadowSection";
import { UploadSection } from "./sections/UploadSection";
import { SizeSection } from "./sections/SizeSection";
import { ImageSection } from "./sections/ImageSection";
import { ButtonSection } from "./sections/ButtonSection";
import type { ElementType, ElementPropertiesMap, SpacingValue } from "@/lib/types";

interface DesignPanelProps {
  selectedElementType: ElementType;
  onElementTypeChange: (type: ElementType) => void;
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
  onSpacingChange: (
    property: "padding" | "margin",
    side: keyof SpacingValue,
    value: string,
  ) => void;
}

export function DesignPanel({
  selectedElementType,
  onElementTypeChange,
  currentProperties,
  onPropertyChange,
  onSpacingChange,
}: DesignPanelProps) {
  const showContent = selectedElementType === "text" || selectedElementType === "button";
  const showTypography = selectedElementType === "text" || selectedElementType === "button";
  const showTextColor = selectedElementType === "text" || selectedElementType === "button";
  const showImage = selectedElementType === "image" || selectedElementType === "div";
  const showImageProperties = selectedElementType === "image";
  const showButton = selectedElementType === "button";

  return (
    <TooltipProvider>
      <div className='bg-background rounded-lg border border-border overflow-hidden shadow-sm'>
        <div className='p-3 border-b border-border'>
          <ElementSelector value={selectedElementType} onValueChange={onElementTypeChange} />
        </div>

        <ScrollArea className='h-[calc(100vh-8rem)]'>
          <SectionScope scopeKey={selectedElementType}>
          {showImage && (
            <UploadSection
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          {showContent && (
            <ContentSection
              selectedElementType={selectedElementType}
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          {showTypography && (
            <TypographySection
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          {showTextColor && (
            <ColorSection
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          <BackgroundSection
            currentProperties={currentProperties}
            onPropertyChange={onPropertyChange}
          />
          <LayoutSection currentProperties={currentProperties} onSpacingChange={onSpacingChange} />
          <BorderSection
            currentProperties={currentProperties}
            onPropertyChange={onPropertyChange}
          />
          <AppearanceSection
            currentProperties={currentProperties}
            onPropertyChange={onPropertyChange}
          />
          <ShadowSection
            currentProperties={currentProperties}
            onPropertyChange={onPropertyChange}
          />
          {showImageProperties && (
            <SizeSection
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          {showImageProperties && (
            <ImageSection
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          {showButton && (
            <ButtonSection
              currentProperties={currentProperties}
              onPropertyChange={onPropertyChange}
            />
          )}
          </SectionScope>
        </ScrollArea>
      </div>
    </TooltipProvider>
  );
}
