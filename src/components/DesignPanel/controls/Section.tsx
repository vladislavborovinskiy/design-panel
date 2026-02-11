import * as React from "react";
import { CaretRightIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface SectionContextValue {
  scopeKey: string;
  states: Map<string, boolean>;
}

const SectionContext = React.createContext<SectionContextValue>({ scopeKey: "", states: new Map() });

export function SectionScope({ scopeKey, children }: { scopeKey: string; children: React.ReactNode }) {
  const [states] = React.useState(() => new Map<string, boolean>());
  const value = React.useMemo(() => ({ scopeKey, states }), [scopeKey, states]);
  return <SectionContext value={value}>{children}</SectionContext>;
}

interface SectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function Section({ title, defaultOpen = true, children }: SectionProps) {
  const { scopeKey, states } = React.useContext(SectionContext);
  const key = `${scopeKey}:${title}`;
  const isOpen = states.get(key) ?? defaultOpen;
  const [, setTick] = React.useState(0);
  const setIsOpen = (open: boolean) => {
    states.set(key, open);
    setTick((t) => t + 1);
  };

  return (
    <div className='border-b border-border'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='relative flex w-full items-center px-4 py-2.5 hover:bg-accent/50 transition-colors'
      >
        <CaretRightIcon
          className={cn(
            "absolute left-1 size-2 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        />
        <span
          className={cn(
            "text-xs font-medium tracking-wider uppercase transition-colors",
            !isOpen && "text-muted-foreground",
          )}
        >
          {title}
        </span>
      </button>
      {isOpen && <div className='px-4 pt-1.5 pb-3 space-y-2.5'>{children}</div>}
    </div>
  );
}
