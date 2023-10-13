"use client";

import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ItemsList from "./_components/ItemsList";

export default function page() {
  return (
    <Container p={0} maxW={"75%"} my={10}>
      <Heading mb={5}>Wishlist</Heading>
      <ItemsList />
    </Container>
  );
}
