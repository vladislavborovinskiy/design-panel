import * as React from "react";
import type { ElementType, ElementPropertiesMap, CommonProperties, SpacingValue } from "@/lib";
import {
  DEFAULT_TEXT_PROPERTIES,
  DEFAULT_BUTTON_PROPERTIES,
  DEFAULT_IMAGE_PROPERTIES,
  DEFAULT_DIV_PROPERTIES,
} from "@/lib";
import { DesignContext } from "./useDesign";

const DEFAULT_PROPERTIES: ElementPropertiesMap = {
  text: DEFAULT_TEXT_PROPERTIES,
  button: DEFAULT_BUTTON_PROPERTIES,
  image: DEFAULT_IMAGE_PROPERTIES,
  div: DEFAULT_DIV_PROPERTIES,
};

export function DesignProvider({ children }: { children: React.ReactNode }) {
  const [selectedElementType, setSelectedElementType] =
    React.useState<ElementType>("text");
  const [properties, setProperties] =
    React.useState<ElementPropertiesMap>(DEFAULT_PROPERTIES);

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

  const contextValue = React.useMemo(
    () => ({
      selectedElementType,
      setSelectedElementType,
      properties,
      currentProperties,
      updateProperty,
      updateSpacingProperty,
    }),
    [selectedElementType, properties, currentProperties, updateProperty, updateSpacingProperty],
  );

  return (
    <DesignContext.Provider value={contextValue}>{children}</DesignContext.Provider>
  );
}
