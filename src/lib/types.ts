export type ElementType = "text" | "button" | "image" | "div";

export interface CommonProperties {
  width: string;
  height: string;
  padding: SpacingValue;
  margin: SpacingValue;
  backgroundColor: string;
  borderRadius: string;
}

export interface SpacingValue {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface TextProperties {
  content: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  color: string;
  textAlign: "left" | "center" | "right" | "justify";
  textDecoration: "" | "italic" | "strikethrough" | "underline" | "overline" | "tabular-nums";
  lineHeight: string;
  letterSpacing: string;
}

export interface ButtonProperties {
  text: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  disabled: boolean;
}

export interface ImageProperties {
  src: string;
  alt: string;
  objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
  aspectRatio: string;
}

export interface BorderProperties {
  borderWidth: string;
  borderWidthTop: string;
  borderWidthRight: string;
  borderWidthBottom: string;
  borderWidthLeft: string;
  borderStyle: "" | "solid" | "dashed" | "dotted" | "none";
  borderColor: string;
}

export interface AppearanceProperties {
  opacity: number;
  boxShadow: string;
}

export type TextElementProperties = CommonProperties & TextProperties & BorderProperties & AppearanceProperties;
export type ButtonElementProperties = CommonProperties & ButtonProperties & TextProperties & BorderProperties & AppearanceProperties;
export type ImageElementProperties = CommonProperties & ImageProperties & BorderProperties & AppearanceProperties;
export type DivElementProperties = CommonProperties & BorderProperties & AppearanceProperties;

export interface ElementPropertiesMap {
  text: TextElementProperties;
  button: ButtonElementProperties;
  image: ImageElementProperties;
  div: DivElementProperties;
}
