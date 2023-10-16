import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import GameBuy from "./GameBuy";

export default function GameBuyList() {
  return (
    <VStack spacing={5} mt={20}>
      <GameBuy />
      <GameBuy />
    </VStack>
  );
}
