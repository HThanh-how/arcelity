import { VStack } from "@chakra-ui/react";
import Item from "./Item";

export default function ItemsList() {
  return (
    <VStack spacing={5}>
      <Item />
      <Item />
    </VStack>
  );
}
