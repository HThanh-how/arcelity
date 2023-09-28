import {
  Card,
  Container,
  Image,
  Center,
  Button,
  VStack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

export default function BuyGame() {
  return (
    <Container maxW={390} bgColor={"green.800"}>
      <Card bgColor={"none"}>
        <Center>
          <Image
            maxW={100}
            src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&quality=medium&resize=1&w=480"
            alt="logo"
            objectFit="cover"
          ></Image>
        </Center>
        {/* Price */}
        <Text color={"white"}>455.00d</Text>

        {/* Buttons */}
        <VStack gap={3}>
          <Button width={"full"} bgColor={"green.500"}>
            Buy Now
          </Button>
          <Button width={"full"} variant="outline" outlineColor={"white"}>
            Add to cart
          </Button>
          <Button width={"full"} variant="outline" outlineColor={"white"}>
            Add to wishlist
          </Button>
        </VStack>

        {/* Description */}
        <Flex>
          <Text color={"white"}>Developer</Text>
          <Spacer />
          <Text> lmao</Text>
        </Flex>
        <Flex>
          <Text color={"white"}>Publisher</Text>
          <Spacer />
          <Text> lmao</Text>
        </Flex>
        <Flex>
          <Text color={"white"}>Release Date</Text>
          <Spacer />
          <Text> lmao</Text>
        </Flex>
        <Flex>
          <Text color={"white"}>Platform</Text>
          <Spacer />
          <Text> lmao</Text>
        </Flex>
      </Card>
    </Container>
  );
}
