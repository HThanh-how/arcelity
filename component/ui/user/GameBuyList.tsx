import { Container, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import GameBuy from "./GameBuy";
import useGetPurchasedGameApi from "../../../app/user/_api/useGetPurchasedGameApi";
import WishlistContext from "@/context/WishlistContext";
import { IGame } from "@/context/WislistContextType";

interface GameBuyListPropsType {
  gamelist: IGame[];
}

export default function GameBuyList({ gamelist }: GameBuyListPropsType) {
  // const [{ data, isLoading, isError }] = useGetPurchasedGameApi();
  // const [data, setData] = useState<IGame[]>(buyCtx.buy);
  console.log(gamelist);

  return (
    <VStack spacing={5} mt={20}>
      {gamelist.length > 0 ? (
        gamelist.map((game) => <GameBuy key={game.id} gameInfo={game} />)
      ) : (
        <Text fontSize={32} fontWeight={"bold"} color={"#ffffff"}>
          You haven't bought any game yet. Explore the web now!
        </Text>
      )}
    </VStack>
  );
}
