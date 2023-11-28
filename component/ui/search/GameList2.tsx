import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import useGetAllGameApi from "../../../app/games/_api/useGetAllGameApi";
import { IGameCard } from "@/component/interface/IGameCard";
import axios from "axios";
import GameCard from "./GameCard";
import ShowMenu from "./ShowMenu";
import MobileNav from "./MobileNav";

interface GameListProps {
  filterText: String;
}

const GameList2 = (props:GameListProps) => {
  const [{data, isLoading, isError}] = useGetAllGameApi();
  // const [data, setData] = useState<IGameCard[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);

  // const getData = () => {
  //   console.log( "Step 1")
  //   const [{ data, isLoading, isError }] = useGetAllGameApi();
  //   setData(data)
  //   setIsLoading(isLoading)
  //   setIsError(isError)
  // };

  // getData();
  
  // const url = "https://game-be-v2.vercel.app/games";
  // const [data, setData] = useState<IGameCard[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(true);

  //     try {
  //       const result = await axios(url);

  //       setData(result.data);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, [url]);


  // console.log(filter);
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
        {data
          ?.filter((game: IGameCard) => {
            if (props.filterText === "") {
              return true;
            }
            if (game.genres?.some((genre) => genre.name === props.filterText)) {
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


export default GameList2