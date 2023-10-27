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
        bg={"black"}
        textColor={"white"}
      >
        All
      </MenuButton>
      <MenuList bg={"whiteAlpha.200"}>
        <MenuItem bg={"black"}>New Release</MenuItem>
        <MenuItem bg={"black"}>Coming Soon</MenuItem>
        <MenuItem bg={"black"}>Alphabetical</MenuItem>
        <MenuItem bg={"black"}>Price: High to Low</MenuItem>
        <MenuItem bg={"black"}>Price: Low to High</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ShowMenu;
