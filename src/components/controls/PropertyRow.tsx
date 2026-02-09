import { cn } from "@/lib/utils";

interface PropertyRowProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function PropertyRow({ label, children, className }: PropertyRowProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
