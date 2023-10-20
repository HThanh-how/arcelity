"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import SidebarContent from "./SidebarContent";

const MobileNav = ({ ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
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
    </>
  );
};

export default MobileNav;
