"use client";

import { Container, Flex, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import GameImages from "./_components/GameImages";
import BuyGame from "./_components/BuyGame";

export default function GamePage() {
  return (
    <Container maxW={"75%"} bgColor={"red.400"} my={10}>
      <Heading mb={5}>Grand Thief Auto VI</Heading>
      <Flex flexDirection={{ base: "column", md: "column", lg: "row" }}>
        <GameImages />
        <BuyGame />
      </Flex>
    </Container>
  );
}
