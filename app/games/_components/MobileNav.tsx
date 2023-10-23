"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SidebarContent from "./SidebarContent";

const MobileNav = ({ ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={true}
        onOverlayClick={onClose}
      >
        <DrawerContent bg={"green"} maxW={0}>
          <SidebarContent
            onClose={onClose}
            display={{ base: "block", lg: "none" }}
          />
        </DrawerContent>
      </Drawer>
      <Flex
        height="fix-content"
        alignItems="right"
        bg={"none"}
        justifyContent="flex-end"
        {...rest}
      >
        <Button
          onClick={onOpen}
          bg={"none"}
          _hover={{ textColor: "white" }}
          p={0}
          transition={"all .3s ease"}
          textColor={"white"}
        >
          Filters
        </Button>
      </Flex>
    </Box>
  );
};

export default MobileNav;
