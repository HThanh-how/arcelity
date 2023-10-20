"use client";

import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ShowMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        h={"fit-content"}
        pt={1}
        bg={"none"}
        textColor={"white"}
      >
        All
      </MenuButton>
      <MenuList bg={"whiteAlpha.200"}>
        <MenuItem bg={"none"}>New Release</MenuItem>
        <MenuItem bg={"none"}>Coming Soon</MenuItem>
        <MenuItem bg={"none"}>Alphabetical</MenuItem>
        <MenuItem bg={"none"}>Price: High to Low</MenuItem>
        <MenuItem bg={"none"}>Price: Low to High</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ShowMenu;
