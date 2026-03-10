"use client";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useColorMode } from "./color-mode-hooks";
import { LuMoon, LuSun } from "react-icons/lu";

// Resolved ESLint error by using a type alias instead of an empty interface
export type ColorModeProviderProps = ThemeProviderProps;

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}