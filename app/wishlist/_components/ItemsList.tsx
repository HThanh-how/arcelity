import { VStack } from "@chakra-ui/react";
import Item from "./Item";
import { useState } from "react";

export default function ItemsList() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <VStack spacing={5}>
      <Item />
      <Item />
    </VStack>
  );
}
