"use client";

import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ItemsList from "./_components/ItemsList";
import CartDetail from "./_components/CartDetail";

export default function page() {
  return (
    <Container p={0} maxW={"75%"} my={10}>
      <Heading mb={5}>My Cart</Heading>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 4 }} spacing={0}>
        <GridItem colSpan={3}>
          <ItemsList />
        </GridItem>
        <GridItem colSpan={1}>
          <CartDetail />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
