"use client";

import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar } from "react-icons/fi";
import { IconType } from "react-icons";
import SidebarContent from "./SidebarContent";

// const LinkItems: Array<LinkItemProps> = [
//   { name: "GENRE", icon: FiHome },
//   { name: "FEATURES", icon: FiTrendingUp },
//   { name: "TYPE", icon: FiCompass },
//   { name: "PLATFORM", icon: FiStar },
// ];

export default function FilterBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w={300} display={{ base: "none", lg: "block" }}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
      />
    </Box>
  );
}
