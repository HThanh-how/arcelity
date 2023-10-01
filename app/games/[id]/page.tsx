"use client";

import { Container, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import React from "react";
import GameImages from "./_components/GameImages";
import BuyGame from "./_components/BuyGame";
import GameDescription from "./_components/GameDescription";

export default function GamePage() {
  return (
    <Container p={0} maxW={"75%"} my={10}>
      <Heading mb={5}>Grand Thief Auto VI</Heading>
      <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }} spacing={0}>
        <GridItem colSpan={3}>
          <GameImages />
        </GridItem>
        <GridItem colSpan={1}>
          <BuyGame />
        </GridItem>
        <GridItem colSpan={3} pr={10}>
          <GameDescription />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
