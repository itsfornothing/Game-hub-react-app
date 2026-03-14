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

// Move this OUTSIDE the component so it's not recreated 20+ times per render
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

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1} wrap="wrap">
      {platforms?.map((platform) => {
        const IconComponent = iconMap[platform.slug];
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