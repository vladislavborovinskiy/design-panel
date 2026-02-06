import { cn } from "@/lib/utils";

interface PropertyRowProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function PropertyRow({ label, children, className }: PropertyRowProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-xs text-muted-foreground w-20 shrink-0">
        {label}
      </span>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
