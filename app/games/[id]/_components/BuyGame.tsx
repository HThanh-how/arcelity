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
  Divider,
} from "@chakra-ui/react";
import React from "react";

export default function BuyGame() {
  return (
    <Container p={0} ml={{ lg: 10 }}>
      <Card border={"none"} bg={"none"} textColor={"white"}>
        <Center p={4}>
          <Image
            maxW={150}
            src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&quality=medium&resize=1&w=480"
            alt="logo"
            objectFit="cover"
          ></Image>
        </Center>
        {/* Price */}
        <Text mb={2}>455.00d</Text>

        {/* Buttons */}
        <VStack gap={3}>
          <Button
            textColor={"white"}
            width={"full"}
            bgColor={"blue.500"}
            _hover={{ bgColor: "blue.400" }}
            textTransform={"uppercase"}
          >
            Buy Now
          </Button>
          <Button
            textColor={"white"}
            width={"full"}
            variant="outline"
            textTransform={"uppercase"}
            _hover={{ bgColor: "whiteAlpha.300" }}
          >
            Add to cart
          </Button>
          <Button
            textColor={"white"}
            width={"full"}
            variant="outline"
            textTransform={"uppercase"}
            _hover={{ bgColor: "whiteAlpha.300" }}
          >
            Add to wishlist
          </Button>
        </VStack>

        {/* Description */}
        <VStack my={3}>
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Developer</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
          <Divider />
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Publisher</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
          <Divider />
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Release Date</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
          <Divider />
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Platform</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
        </VStack>
      </Card>
    </Container>
  );
}
