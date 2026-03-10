import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode-hooks";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack gap={2}>
      <Switch
        colorPalette="blue"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;