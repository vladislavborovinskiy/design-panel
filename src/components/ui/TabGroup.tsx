import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface TabGroupProps {
  tabs: ReadonlyArray<{ readonly value: string; readonly label: string }>;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function TabGroup({ tabs, value, onValueChange, className }: TabGroupProps) {
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });

  React.useEffect(() => {
    const currentIndex = tabs.findIndex((tab) => tab.value === value);

    const activeTab = tabRefs.current[currentIndex];
    const container = containerRef.current;

    if (activeTab && container) {
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [value, tabs]);

  return (
    <TabsPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      className={cn("w-full", className)}
    >
      <div ref={containerRef} className='relative bg-muted rounded-lg p-1'>
        <div
          className='absolute inset-y-1 bg-background rounded-md shadow-sm transition-all duration-200 ease-out'
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />

        {/* Tabs */}
        <TabsPrimitive.List className='relative flex w-full'>
          {tabs.map((tab, index) => (
            <TabsPrimitive.Trigger
              key={tab.value}
              value={tab.value}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className={cn(
                "relative flex-1 inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                value === tab.value
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
      </div>
    </TabsPrimitive.Root>
  );
}
