"use client";

import { Container, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import React, { use } from "react";
import GameImages from "./_components/GameImages";
import BuyGame from "./_components/BuyGame";
import GameDescription from "./_components/GameDescription";
import useGameGetIdApi from "./_api/useGameIdApi";
import CommentSection from "./_components/CommentSection";

export default function GamePage({ params }: { params: { id: string } }) {
  const [{ data, isLoading, isError }] = useGameGetIdApi(params.id);
  return (
    <Container p={0} maxW={"75%"} my={10}>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Heading mb={5}>{data[0].gameName}</Heading>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 4 }} spacing={0}>
            <GridItem colSpan={3}>
              <GameImages />
            </GridItem>
            <GridItem colSpan={1}>
              <BuyGame />
            </GridItem>
            <GridItem colSpan={3}>
              <GameDescription
                description={data[0].description}
                paramId={params.id}
              />
              <CommentSection />
            </GridItem>
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}
