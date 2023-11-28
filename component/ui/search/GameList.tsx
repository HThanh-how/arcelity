import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import ShowMenu from "./ShowMenu";
import GameCard from "./GameCard";
import { searchResults } from "@/component/Layout/SearchBar";
import { IGameCard } from "../../interface/IGameCard";

export default function GameList() {


  const [data, setData]=useState(searchResults);

  setInterval(function () {
    setData(searchResults);
  }, 300);
  // useEffect(()=> {
  //   setData(searchResults);
  // }, []);


  const isLoading=false;
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
