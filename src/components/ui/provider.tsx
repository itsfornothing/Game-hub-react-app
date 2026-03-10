"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import theme from "../../theme"; //
import type { ReactNode } from "react";

export function Provider({
  children,
  ...props
}: ColorModeProviderProps & { children: ReactNode }) {
  return (
    <ColorModeProvider
      attribute="class"
      defaultTheme="dark" // Ensures initial load matches your theme config
      disableTransitionOnChange
      {...props}
    >
      <ChakraProvider value={theme}> 
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  );
}