import {
  Card,
  CardHeader,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function Item() {
  return (
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
              src="https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S2_1200x1600-e147110cf8dd1bc8c96810a5867b3475?h=480&quality=medium&resize=1&w=360"
              alt="FFVII"
              w={100}
              borderRadius={5}
            />
            <CardHeader p={0} pl={5} fontSize={20}>
              Final Fantasy VII Remake
            </CardHeader>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} mt={{ sm: 5, md: 0 }}>
          <Text align={"right"}>455.00d</Text>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
