"use client";

import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

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
