import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ItemDropdown from "./ItemDropdown";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box bg={"black"} w={60} h="full" {...rest} m={0}>
      <Flex h="fit-content" alignItems="center" justifyContent="space-between">
        <Text fontSize="md">Filters</Text>
        <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      </Flex>
      <ItemDropdown />
    </Box>
  );
};
export default SidebarContent;
