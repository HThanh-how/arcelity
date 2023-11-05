import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MobileNav from "./MobileNav";
import ShowMenu from "./ShowMenu";
import GameCard from "@/app/games/_components/GameCard";
import useGetAllGameApi from "../_api/useGetAllGameApi";
import { IGameCard } from "../_interface/IGameCard";

interface GameListProps {
  filter: string;
}

export default function GameList({ filter }: GameListProps) {
  const [{ data, isLoading, isError }] = useGetAllGameApi();
  console.log(filter);
  return (
    <Box w={"full"} p={0} mr={{ base: 0, lg: 10 }}>
      {/*header*/}
      <Flex>
        <Text textColor={"whiteAlpha.600"}>Show:</Text>
        <ShowMenu />
        <Spacer />
        <MobileNav display={{ base: "block", lg: "none" }} />
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={5}>
        {data
          ?.filter((game) => {
            if (filter == "") {
              return true;
            }
            if (game.genres?.some((genre) => genre.name == filter)) {
              return true;
            } else {
              return false;
            }
          })
          .map((game) => (
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
