import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shallowEqualProps<T extends Record<string, unknown>>(prev: T, next: T): boolean {
  const keys = Object.keys(next);
  if (Object.keys(prev).length !== keys.length) return false;
  for (const key of keys) {
    const pv = prev[key];
    const nv = next[key];
    if (pv === nv) continue;
    if (typeof pv === "object" && typeof nv === "object" && pv && nv && !Array.isArray(pv)) {
      const pk = Object.keys(pv as Record<string, unknown>);
      const nk = Object.keys(nv as Record<string, unknown>);
      if (pk.length !== nk.length) return false;
      for (const k of pk) {
        if ((pv as Record<string, unknown>)[k] !== (nv as Record<string, unknown>)[k]) return false;
      }
      continue;
    }
    return false;
  }
  return true;
}

export function formatColorValue(value: string): string {
  if (!value) return "Default";
  const match = value.match(/^var\(--(.+)\)$/);
  return match ? match[1] : value;
}
