import usePlatform from "@/hooks/usePlatforms";
import { Menu, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Platform <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {data.map((platform) => (
          <Menu.Item key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default PlatformSelector;
