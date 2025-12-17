export type Locale = "en" | "es";

export const defaultLocale: Locale = "es";

export const locales: Locale[] = ["en", "es"];

export { LanguageProvider, useLanguage, useTranslation } from "./LanguageContext";
