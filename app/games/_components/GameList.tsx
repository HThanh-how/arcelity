import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./MobileNav";
import ShowMenu from "./ShowMenu";

export default function GameList() {
  return (
    <Box w={"full"} p={0} mr={{ base: 0, lg: 10 }}>
      {/*header*/}
      <Flex>
        <Text textColor={"whiteAlpha.600"}>Show:</Text>
        <ShowMenu />
        <Spacer />
        <MobileNav display={{ base: "block", lg: "none" }} />
      </Flex>

      {/*content*/}
    </Box>
  );
}
