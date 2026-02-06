import * as React from "react";
import type { ElementType, ElementPropertiesMap, SpacingValue } from "@/lib";

export interface DesignContextValue {
  selectedElementType: ElementType;
  setSelectedElementType: (type: ElementType) => void;
  properties: ElementPropertiesMap;
  currentProperties: ElementPropertiesMap[ElementType];
  updateProperty: (key: string, value: unknown) => void;
  updateSpacingProperty: (
    property: "padding" | "margin",
    side: keyof SpacingValue,
    value: string,
  ) => void;
}

export const DesignContext = React.createContext<DesignContextValue | undefined>(
  undefined,
);

export function useDesign() {
  const context = React.useContext(DesignContext);
  if (!context) {
    throw new Error("useDesign must be used within DesignProvider");
  }
  return context;
}
