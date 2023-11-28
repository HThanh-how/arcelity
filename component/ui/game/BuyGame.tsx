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
  Badge,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { IGameBuyDetail } from "../../interface/IGameBuyDetail";
import axios from 'axios';
import { IsLoginContext } from "@/component/Layout/Navbar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

async function postData(gameID: number, priceWithDiscount: number) {
  try {
    const access_token = localStorage.getItem("access_token");

    const data = {
      details: [
        {
          gameId: gameID,
          priceWithDiscount: priceWithDiscount,
        },
      ],
    };

    const response = await axios.post(
      "https://game-be-v2.vercel.app/billings/addBilling",
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    window.location.href = "/login";
  }
}

export default function BuyGame({
  price,
  releaseDate,
  developer,
  genres,
  saleDetails,
}: IGameBuyDetail) {
  const pathname = usePathname();

  useEffect(() => {
    localStorage.setItem("historyPathname", pathname);
  }, []);

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

        <Flex>
          {saleDetails && (
            <>
              <Badge
                textColor={"white"}
                borderRadius={5}
                bg={"red"}
                mr={3}
                h={"fit-content"}
                py={1}
                px={3}
              >
                {saleDetails[0].discountRate} %
              </Badge>
              <Text mr={3} as={"s"} mb={2} textColor={"whiteAlpha.600"}>
                {price} USD
              </Text>
            </>
          )}
          {saleDetails && (
            <Text>
              {price - (price * saleDetails[0].discountRate) / 100} USD
            </Text>
          )}
          {!saleDetails && <Text>{price} USD</Text>}
        </Flex>

        {/* Buttons */}
        <VStack gap={3}>
          <Button
            textColor={"white"}
            width={"full"}
            bgGradient="linear(to-r, red.400,pink.400)"
            _hover={{ bgColor: "blue.400" }}
            textTransform={"uppercase"}
            onClick={() => postData(developer.id, price)}
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
            <Text> {developer.name}</Text>
          </Flex>
          <Divider />
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Publisher</Text>
            <Spacer />
            <Text> {developer.name}</Text>
          </Flex>
          <Divider />
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Release Date</Text>
            <Spacer />
            <Text> {releaseDate}</Text>
          </Flex>
          <Divider />
          <Flex w={"full"}>
            <Text color={"whiteAlpha.600"}>Platform</Text>
            <Spacer />
            <Text> N/A</Text>
          </Flex>
        </VStack>
      </Card>
    </Container>
  );
}
