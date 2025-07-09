import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { i18n } from "@/i18n/i18n-config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to format date
export function formatDate(dateString?: string) {
	if (!dateString) return "";
	return new Date(dateString).toLocaleDateString(i18n.defaultLocale, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}