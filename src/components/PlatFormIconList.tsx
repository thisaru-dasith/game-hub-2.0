import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

function PlatFormIconList({ platforms }: Props) {
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            color={"gray.50"}
            key={platform.id}
          ></Icon>
        ))}
      </HStack>
    </>
  );
}
export default PlatFormIconList;
