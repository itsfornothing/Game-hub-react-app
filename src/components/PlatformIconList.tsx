import { HStack, Icon } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaApple,
  FaLinux,
  FaWindows,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons/lib";
import type { Platform } from "@/hooks/usePlatform";

interface props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: props) => {
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
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
