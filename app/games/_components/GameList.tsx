import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./MobileNav";

export default function GameList() {
  return (
    <Box w={"full"} bg={"blue"} p={0} mr={{ base: 0, lg: 10 }}>
      {/*header*/}
      <Flex>
        <Text>Show: New Release</Text>
        <Spacer />
        <MobileNav display={{ base: "block", lg: "none" }} />
      </Flex>

      {/*content*/}
    </Box>
  );
}
