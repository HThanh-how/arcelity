import {
  Avatar,
  Card,
  Container,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useGetUserInfoApi from "../_api/useGetUserInfoApi";

export default function UserAvatar() {
  const [{ data, isLoading, isError }] = useGetUserInfoApi();

  return (
    <Card w={"fit-content"} bg={"none"}>
      <SimpleGrid columns={{ md: 1, lg: 3 }}>
        {/* account avatar */}
        <GridItem colSpan={1}>
          <Avatar
            h={150}
            w={150}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </GridItem>
        {/* account description */}
        <GridItem colSpan={2}>
          <Text
            my={5}
            fontSize={{ md: 20, lg: 30 }}
            ml={{ md: 0, lg: 10 }}
            textColor={"white"}
          >
            {data?.username}
          </Text>
          <HStack spacing={5} ml={{ md: 0, lg: 10 }}>
            {/* account point */}
            <Container p={0} m={0}>
              <Text
                fontSize={{ md: 15, lg: 20 }}
                textTransform={"uppercase"}
                textColor={"whiteAlpha.600"}
              >
                point
              </Text>
              <Text fontSize={{ md: 20, lg: 30 }} textColor={"white"}>
                1000
              </Text>
            </Container>
            {/* game bought */}
            <Container p={0} m={0}>
              <Text
                fontSize={{ md: 15, lg: 20 }}
                textTransform={"uppercase"}
                textColor={"whiteAlpha.600"}
              >
                game
              </Text>
              <Text fontSize={{ md: 20, lg: 30 }} textColor={"white"}>
                1000
              </Text>
            </Container>
            {/* account level */}
            <Container p={0} m={0}>
              <Text
                fontSize={{ md: 15, lg: 20 }}
                textTransform={"uppercase"}
                textColor={"whiteAlpha.600"}
              >
                level
              </Text>
              <Text fontSize={{ md: 20, lg: 30 }} textColor={"white"}>
                1000
              </Text>
            </Container>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
