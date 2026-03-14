import { HStack, Icon } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaApple,
  FaLinux,
  FaWindows,
  FaXbox,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons/lib";
import type { Platform } from "@/hooks/usePlatform";

interface Props { // Capitalized to match standard convention
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: FaGamepad,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1} wrap="wrap">
      {platforms?.map((platform) => {
        const IconComponent = iconMap[platform.slug];

        // Prevents crash: Chakra v3 Icon 'as' prop cannot be undefined
        if (!IconComponent) return null;

        return (
          <Icon 
            key={platform.id} 
            as={IconComponent} 
            color="gray.500" 
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;