"use client";

import { useTheme } from "next-themes"; // ← remove ThemeProvider import (unused)

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = (forcedTheme || resolvedTheme) as ColorMode;

  const toggleColorMode = () => {
    setTheme(colorMode === "dark" ? "light" : "dark");
  };

  return {
    colorMode,
    setColorMode: setTheme as (mode: ColorMode) => void,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

// Remove or comment if unused — suppresses empty interface lint
// export interface ColorModeProviderProps extends ThemeProviderProps {}