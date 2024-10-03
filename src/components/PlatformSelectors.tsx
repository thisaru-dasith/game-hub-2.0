import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelectors() {
  const { data } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelectors;
