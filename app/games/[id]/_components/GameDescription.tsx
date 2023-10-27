import { Text, VStack } from "@chakra-ui/react";
import SysReq from "./SysReq";

interface IGameDescription {
  paramId: string;
  description: string;
}

export default function GameDescription({
  description,
  paramId,
}: IGameDescription) {
  return (
    <VStack spacing={4} w={"full"}>
      <Text>{description}</Text>
      <Text justifyContent={"left"} w={"full"} fontWeight={"bold"}>
        System requirement
      </Text>
      <SysReq id={paramId} />
    </VStack>
  );
}
