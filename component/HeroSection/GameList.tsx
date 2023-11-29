import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MobileNav from "../ui/search/MobileNav";
import ShowMenu from "../ui/search/ShowMenu";
import GameCard from "../ui/search/GameCard";
import useGetAllGameApi from "@/app/games/_api/useGetAllGameApi";


export default function GameList() {
  const [{ data, isLoading, isError }] = useGetAllGameApi();

  return (
    <Box w={"full"} p={0} mr={{ base: 0, lg: 10 }}>
      {/*header*/}
      <Flex mb={5}>
        <Text textColor={"whiteAlpha.600"}>Show:</Text>
        <ShowMenu />
        <Spacer />
        <MobileNav display={{ base: "block", lg: "none" }} />
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={5}>
        {data?.map((game) => (
          <Skeleton key={game.id} isLoaded={!isLoading}>
            <GameCard
              id={game.id}
              name={game.name}
              description={game.description}
              price={game.price}
              releaseDate={game.releaseDate}
              genres={game.genres}
            />
          </Skeleton>
        ))}
      </SimpleGrid>
      {/*content*/}
    </Box>
  );
}
