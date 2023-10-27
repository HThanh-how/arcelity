import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./MobileNav";
import ShowMenu from "./ShowMenu";
import ProductAddToCart from "@/component/ProductCard";

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

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={5}>
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
        <ProductAddToCart />
      </SimpleGrid>
      {/*content*/}
    </Box>
  );
}
