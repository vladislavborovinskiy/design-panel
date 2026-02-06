export const FONT_FAMILIES = [
  { value: "system-ui", label: "System UI" },
  { value: "arial", label: "Arial" },
  { value: "helvetica", label: "Helvetica" },
  { value: "georgia", label: "Georgia" },
  { value: "times", label: "Times New Roman" },
  { value: "courier", label: "Courier New" },
  { value: "verdana", label: "Verdana" },
  { value: "monospace", label: "Monospace" },
];

export const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export const SHADOW_PRESETS = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
} as const;

export const BORDER_STYLES = ["solid", "dashed", "dotted", "none"] as const;

export const ELEMENT_TYPES = ["text", "button", "image", "div"] as const;

export const LINE_HEIGHT_PRESETS = [
  { value: "0.75rem", label: "0.75rem" },
  { value: "1rem", label: "1rem" },
  { value: "1.25rem", label: "1.25rem" },
  { value: "1.5rem", label: "1.5rem" },
  { value: "1.75rem", label: "1.75rem" },
  { value: "2rem", label: "2rem" },
  { value: "2.25rem", label: "2.25rem" },
  { value: "2.5rem", label: "2.5rem" },
];

export const LETTER_SPACING_PRESETS = [
  { value: "-0.05em", label: "-0.05em" },
  { value: "-0.025em", label: "-0.025em" },
  { value: "0", label: "0" },
  { value: "0.025em", label: "0.025em" },
  { value: "0.05em", label: "0.05em" },
  { value: "0.1em", label: "0.1em" },
];

export const SPACING_PRESETS = [
  { value: "0", label: "0" },
  { value: "0.25rem", label: "0.25rem" },
  { value: "0.5rem", label: "0.5rem" },
  { value: "0.75rem", label: "0.75rem" },
  { value: "1rem", label: "1rem" },
  { value: "1.5rem", label: "1.5rem" },
  { value: "2rem", label: "2rem" },
  { value: "2.5rem", label: "2.5rem" },
  { value: "3rem", label: "3rem" },
  { value: "4rem", label: "4rem" },
];

export const BORDER_RADIUS_PRESETS = [
  { value: "0", label: "0" },
  { value: "0.125rem", label: "0.125rem" },
  { value: "0.25rem", label: "0.25rem" },
  { value: "0.375rem", label: "0.375rem" },
  { value: "0.5rem", label: "0.5rem" },
  { value: "0.75rem", label: "0.75rem" },
  { value: "1rem", label: "1rem" },
  { value: "9999px", label: "Full" },
];

export const FONT_SIZE_PRESETS = [
  { value: "12", label: "12" },
  { value: "14", label: "14" },
  { value: "16", label: "16" },
  { value: "18", label: "18" },
  { value: "20", label: "20" },
  { value: "24", label: "24" },
  { value: "30", label: "30" },
  { value: "36", label: "36" },
  { value: "48", label: "48" },
  { value: "60", label: "60" },
];

export const BORDER_WIDTH_PRESETS = [
  { value: "0", label: "0" },
  { value: "1px", label: "1px" },
  { value: "2px", label: "2px" },
  { value: "4px", label: "4px" },
  { value: "8px", label: "8px" },
];

export const SIZE_PRESETS = [
  { value: "auto", label: "Auto" },
  { value: "100%", label: "100%" },
  { value: "fit-content", label: "Fit" },
  { value: "50%", label: "50%" },
  { value: "200px", label: "200px" },
  { value: "300px", label: "300px" },
  { value: "400px", label: "400px" },
];

export const ASPECT_RATIO_PRESETS = [
  { value: "auto", label: "Auto" },
  { value: "1/1", label: "1:1" },
  { value: "4/3", label: "4:3" },
  { value: "16/9", label: "16:9" },
  { value: "3/2", label: "3:2" },
  { value: "2/1", label: "2:1" },
];

export const TAG_OPTIONS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"] as const;
export const OBJECT_FIT_OPTIONS = ["contain", "cover", "fill", "none", "scale-down"] as const;
export const BUTTON_VARIANTS = ["primary", "secondary", "outline", "ghost"] as const;
export const BUTTON_SIZES = ["sm", "md", "lg"] as const;
export const TEXT_ALIGN_OPTIONS = ["left", "center", "right", "justify"] as const;

// Default property values per element type
import type {
  TextElementProperties,
  ButtonElementProperties,
  ImageElementProperties,
  DivElementProperties,
} from "./types";

const DEFAULT_SPACING = { top: "0", right: "0", bottom: "0", left: "0" };

export const DEFAULT_TEXT_PROPERTIES: TextElementProperties = {
  width: "auto",
  height: "auto",
  padding: { ...DEFAULT_SPACING },
  margin: { ...DEFAULT_SPACING },
  backgroundColor: "transparent",
  borderRadius: "0",
  content: "Hello World",
  tag: "p",
  fontFamily: "system-ui",
  fontSize: "16",
  fontWeight: 400,
  color: "#000000",
  textAlign: "left",
  lineHeight: "1.5rem",
  letterSpacing: "0",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "#000000",
  opacity: 100,
  boxShadow: "none",
};

export const DEFAULT_BUTTON_PROPERTIES: ButtonElementProperties = {
  width: "auto",
  height: "auto",
  padding: { top: "0.5rem", right: "1rem", bottom: "0.5rem", left: "1rem" },
  margin: { ...DEFAULT_SPACING },
  backgroundColor: "#000000",
  borderRadius: "0.375rem",
  text: "Click me",
  variant: "primary",
  size: "md",
  disabled: false,
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "#000000",
  opacity: 100,
  boxShadow: "none",
};

export const DEFAULT_IMAGE_PROPERTIES: ImageElementProperties = {
  width: "300px",
  height: "auto",
  padding: { ...DEFAULT_SPACING },
  margin: { ...DEFAULT_SPACING },
  backgroundColor: "transparent",
  borderRadius: "0",
  src: "",
  alt: "",
  objectFit: "cover",
  aspectRatio: "auto",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "#000000",
  opacity: 100,
  boxShadow: "none",
};

export const DEFAULT_DIV_PROPERTIES: DivElementProperties = {
  width: "auto",
  height: "auto",
  padding: { ...DEFAULT_SPACING },
  margin: { ...DEFAULT_SPACING },
  backgroundColor: "transparent",
  borderRadius: "0",
  borderWidth: "0",
  borderStyle: "none",
  borderColor: "#000000",
  opacity: 100,
  boxShadow: "none",
};
