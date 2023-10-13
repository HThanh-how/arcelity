import { Text, VStack } from "@chakra-ui/react";
import SysReq from "./SysReq";

export default function GameDescription() {
  return (
    <VStack spacing={4} w={"full"}>
      <Text>
        Phantom Liberty is a spy-thriller expansion for the open-world
        action-adventure RPG Cyberpunk 2077. As cyber-enhanced mercenary V, join
        secret agent Solomon Reed to unravel a web of shattered loyalties and
        sinister political machinations.
      </Text>
      <Text justifyContent={"left"} w={"full"} fontWeight={"bold"}>
        System requirement
      </Text>
      <SysReq />
    </VStack>
  );
}
