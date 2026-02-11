import * as React from "react";
import { DesignPanel } from "@/components/DesignPanel/DesignPanel";
import type {
  ElementType,
  ElementPropertiesMap,
  CommonProperties,
  SpacingValue,
} from "@/lib/types";
import {
  DEFAULT_TEXT_PROPERTIES,
  DEFAULT_BUTTON_PROPERTIES,
  DEFAULT_IMAGE_PROPERTIES,
  DEFAULT_DIV_PROPERTIES,
} from "@/lib/constants";

const DEFAULT_PROPERTIES: ElementPropertiesMap = {
  text: DEFAULT_TEXT_PROPERTIES,
  button: DEFAULT_BUTTON_PROPERTIES,
  image: DEFAULT_IMAGE_PROPERTIES,
  div: DEFAULT_DIV_PROPERTIES,
};

function App() {
  const [selectedElementType, setSelectedElementType] = React.useState<ElementType>("text");
  const [properties, setProperties] = React.useState<ElementPropertiesMap>(DEFAULT_PROPERTIES);

  const currentProperties = properties[selectedElementType];

  const updateProperty = React.useCallback(
    (key: string, value: unknown) => {
      setProperties((prev) => ({
        ...prev,
        [selectedElementType]: {
          ...prev[selectedElementType],
          [key]: value,
        },
      }));
    },
    [selectedElementType],
  );

  const updateSpacingProperty = React.useCallback(
    (property: "padding" | "margin", side: keyof SpacingValue, value: string) => {
      setProperties((prev) => ({
        ...prev,
        [selectedElementType]: {
          ...prev[selectedElementType],
          [property]: {
            ...(prev[selectedElementType] as CommonProperties)[property],
            [side]: value,
          },
        },
      }));
    },
    [selectedElementType],
  );

  return (
    <div className='h-screen bg-muted/50 flex items-start justify-center p-8'>
      <div className='w-full max-w-lg'>
        <DesignPanel
          selectedElementType={selectedElementType}
          onElementTypeChange={setSelectedElementType}
          currentProperties={currentProperties}
          onPropertyChange={updateProperty}
          onSpacingChange={updateSpacingProperty}
        />

      </div>
    </div>
  );
}

export default App;
