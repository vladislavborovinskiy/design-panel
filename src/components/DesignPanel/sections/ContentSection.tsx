import * as React from "react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { Textarea } from "@/components/ui/Textarea";
import { shallowEqualProps } from "@/lib/utils";
import type { ElementType, ElementPropertiesMap, TextElementProperties, ButtonElementProperties } from "@/lib/types";

interface DebouncedTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

function DebouncedTextarea({ value, onChange, placeholder }: DebouncedTextareaProps) {
  const [local, setLocal] = React.useState(value);
  const focusedRef = React.useRef(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  React.useEffect(() => {
    if (!focusedRef.current) setLocal(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    setLocal(v);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => onChange(v), 150);
  };

  const handleBlur = () => {
    focusedRef.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      onChange(local);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Textarea
      value={local}
      onChange={handleChange}
      onFocus={() => { focusedRef.current = true; }}
      onBlur={handleBlur}
      placeholder={placeholder}
      className="min-h-16 text-xs"
    />
  );
}

interface ContentSectionProps {
  selectedElementType: ElementType;
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const ContentSection = React.memo(function ContentSection({ selectedElementType, currentProperties, onPropertyChange }: ContentSectionProps) {
  return (
    <Section title="Content">
      {selectedElementType === "text" && (
        <DebouncedTextarea
          value={(currentProperties as TextElementProperties).content}
          onChange={(v) => onPropertyChange("content", v)}
          placeholder="Enter text..."
        />
      )}
      {selectedElementType === "button" && (
        <DebouncedTextarea
          value={(currentProperties as ButtonElementProperties).text}
          onChange={(v) => onPropertyChange("text", v)}
          placeholder="Button text..."
        />
      )}
    </Section>
  );
}, shallowEqualProps);
