import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface I_SplitProps {
  services: string,
  itemsPerColumn: number
}


export function splitServicesIntoColumns({services, itemsPerColumn = 4}: I_SplitProps) {
  const columns = []
  for (let i = 0; i < services.length; i += itemsPerColumn) {
    columns.push(services.slice(i, i + itemsPerColumn))
  }
  return columns;
}