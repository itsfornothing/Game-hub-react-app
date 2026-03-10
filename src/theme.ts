import { createSystem, defaultConfig } from "@chakra-ui/react";

const config = {
  ...defaultConfig,
  initialColorMode: "dark" as const, 
  useSystemColorMode: false,
};

export const system = createSystem(config);

const theme = {
  ...system,
};

export default theme;