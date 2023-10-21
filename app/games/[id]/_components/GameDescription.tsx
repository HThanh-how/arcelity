import { Text, VStack } from "@chakra-ui/react";
import SysReq from "./SysReq";

interface IGameDescription {
  description: string;
}

export default function GameDescription(description: IGameDescription) {
  return (
    <VStack spacing={4} w={"full"}>
      <Text>{description.description}</Text>
      <Text justifyContent={"left"} w={"full"} fontWeight={"bold"}>
        System requirement
      </Text>
      <SysReq />
    </VStack>
  );
}
