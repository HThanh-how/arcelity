import {
  Button,
  Card,
  Flex,
  GridItem,
  SimpleGrid,
  Image,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IGamePurchased } from "../../interface/IGamePurchased";
import { IGame } from "@/context/WislistContextType";

interface GameBuyType {
  gameInfo: IGame;
}

export default function GameBuy({ gameInfo }: GameBuyType) {
  return (
    //     <Card
    //       w={"full"}
    //       p={5}
    //       display={"inline-flex"}
    //       bg={"whiteAlpha.200"}
    //       textColor={"white"}
    //     >
    //       <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }}>
    //         <GridItem colSpan={3}>
    //           <Flex>
    //             <Image
    // src={`/img/${game.id}.webp`}
    // alt={game.name}
    //               w={100}
    //               borderRadius={5}
    //             />
    //             <CardHeader p={0} pl={5} fontSize={20}>
    //               {name}
    //             </CardHeader>
    //           </Flex>
    //         </GridItem>

    //         {/* Game price and button area*/}
    //         <GridItem colSpan={1} mt={{ sm: 5, md: 0 }}>
    //           <Text pb={5}>${price}</Text>
    //           <Button
    //             bg={"none"}
    //             textColor={"whiteAlpha.600"}
    //             p={0}
    //             _hover={{ textColor: "white" }}
    //             pr={{ sm: 5, lg: 0 }}
    //           >
    //             <Text textDecor={"underline"}>Remove</Text>
    //           </Button>
    //         </GridItem>
    //       </SimpleGrid>
    //     </Card>
    <Card
      w={"full"}
      p={5}
      display={"inline-flex"}
      bg={"whiteAlpha.200"}
      textColor={"white"}
    >
      <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }}>
        <GridItem colSpan={3}>
          <Flex>
            <Image
              src={`/img/${gameInfo.id}.webp`}
              alt={`${gameInfo.name}`}
              w={200}
              borderRadius={5}
              aspectRatio={3 / 2}
            />
            <CardHeader p={0} pl={5} fontSize={20}>
              {gameInfo.name}
            </CardHeader>
          </Flex>
        </GridItem>

        {/* Game price and button area*/}
        <GridItem colSpan={1} mt={{ sm: 5, md: 0 }}>
          <Text pb={5}>${gameInfo.price}</Text>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
