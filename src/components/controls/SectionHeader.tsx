import * as React from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function SectionHeader({ title, defaultOpen = true, children }: SectionHeaderProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className='border-b border-border'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-4 py-2.5 hover:bg-accent/50 transition-colors'
      >
        <span className='text-xs font-medium tracking-wider uppercase'>{title}</span>
        <CaretDownIcon
          className={cn("size-3.5 transition-transform duration-200", !isOpen && "-rotate-90")}
        />
      </button>
      {isOpen && <div className='px-4 pt-1.5 pb-3 space-y-2.5'>{children}</div>}
    </div>
  );
}
