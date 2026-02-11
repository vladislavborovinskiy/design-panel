import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatColorValue(value: string): string {
  if (!value) return "Default";
  const match = value.match(/^var\(--(.+)\)$/);
  return match ? match[1] : value;
}
