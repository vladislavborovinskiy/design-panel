import * as React from "react";
import {
  ImageSquareIcon as ImageIcon,
  UploadSimpleIcon,
  ArrowCounterClockwiseIcon,
} from "@phosphor-icons/react";
import { Section } from "@/components/DesignPanel/controls/Section";
import { Button } from "@/components/ui/Button";
import { shallowEqualProps } from "@/lib/utils";
import type { ImageElementProperties, ElementPropertiesMap, ElementType } from "@/lib/types";

interface UploadSectionProps {
  currentProperties: ElementPropertiesMap[ElementType];
  onPropertyChange: (key: string, value: unknown) => void;
}

export const UploadSection = React.memo(function UploadSection({
  currentProperties,
  onPropertyChange,
}: UploadSectionProps) {
  const props = currentProperties as ImageElementProperties;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const dragCounter = React.useRef(0);

  const readFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onPropertyChange("src", reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
    e.target.value = "";
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current++;
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) readFile(file);
  };

  const handleReset = () => {
    onPropertyChange("src", "");
  };

  return (
    <Section title='Upload Image'>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
      />

      {props.src ? (
        <div className='space-y-2'>
          <img
            src={props.src}
            alt='Preview'
            className='w-full max-h-80 rounded-md object-contain bg-muted border'
          />
          <Button
            variant='outline'
            size='sm'
            className='flex gap-2 w-full text-xs'
            onClick={handleReset}
          >
            <ArrowCounterClockwiseIcon weight='bold' />
            Reset
          </Button>
        </div>
      ) : (
        <Button
          variant='outline'
          onClick={() => inputRef.current?.click()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className={`group relative flex w-full items-center justify-center h-auto border-dashed py-6 text-xs text-muted-foreground font-normal hover:text-muted-foreground overflow-hidden transition-colors hover:border-foreground/40 hover:bg-accent/50 ${dragging ? "border-foreground/40 bg-accent/50" : ""}`}
        >
          <span
            className={`flex items-center justify-center size-10 rounded-md bg-muted border [&_svg]:size-5 transition-transform group-hover:-translate-y-2.5 ${dragging ? "-translate-y-2.5" : ""}`}
          >
            <ImageIcon
              className={`absolute transition-all duration-200 ${dragging ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100 group-hover:-translate-y-2 group-hover:opacity-0"}`}
            />
            <UploadSimpleIcon
              className={`absolute transition-all duration-200 ${dragging ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}
            />
          </span>
          <span
            className={`absolute bottom-3 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 ${dragging ? "opacity-100 translate-y-0" : "opacity-0"}`}
          >
            {dragging ? "Drop image here" : "Click to upload"}
          </span>
        </Button>
      )}
    </Section>
  );
}, shallowEqualProps);
