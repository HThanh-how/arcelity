import { Text, VStack } from "@chakra-ui/react";
import SysReq from "./SysReq";
import { IGameDescription } from "../_interface/IGameDescription";

export default function GameDescription({
  description,
  systemRequirements,
}: IGameDescription) {
  return (
    <VStack spacing={4} w={"full"}>
      <Text>{description}</Text>
      <Text justifyContent={"left"} w={"full"} fontWeight={"bold"}>
        System requirement
      </Text>
      <SysReq systemRequirements={systemRequirements} />
    </VStack>
  );
}
