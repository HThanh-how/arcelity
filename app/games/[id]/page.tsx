"use client";

import {
  Container,
  Heading,
  SimpleGrid,
  GridItem,
  Skeleton,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { use } from "react";
import GameImages from "./_components/GameImages";
import BuyGame from "./_components/BuyGame";
import GameDescription from "./_components/GameDescription";
import useGameGetIdApi from "./_api/useGameIdApi";
import CommentSection from "./_components/CommentSection";
import AddComment from "./_components/AddComment";
import getFromLocalStorage from "@/app/_lib/getFromLocalStorage";
import useGetUserInfoApi from "@/app/user/_api/useGetUserInfoApi";

export default function GamePage({ params }: { params: { id: string } }) {
  const [show, setShow] = React.useState(false);
  const [number, setNumber] = React.useState(3);
  const [{ data, isLoading, isError }] = useGameGetIdApi(params.id);

  const handleShow = () => {
    setShow(!show);
    if (show) {
      setNumber(3);
    } else {
      setNumber(6);
    }
  };
  return (
    <>
      <title>{data?.name}</title>
      <meta name="description" content={data?.name}></meta>
      <Container p={0} maxW={"75%"} my={10}>
        {data != undefined && (
          <>
            <Skeleton isLoaded={!isLoading}>
              <Heading mb={5}>{data?.name}</Heading>
            </Skeleton>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 4 }} spacing={0}>
              <GridItem colSpan={3}>
                <Skeleton isLoaded={!isLoading}>
                  <GameImages id={params.id} />
                </Skeleton>
              </GridItem>
              <GridItem colSpan={1}>
                <Skeleton isLoaded={!isLoading}>
                  <BuyGame
                    price={data.price}
                    releaseDate={data.releaseDate}
                    developer={data.developer}
                    genres={data.genres}
                    saleDetails={data.saleDetails}
                  />
                </Skeleton>
              </GridItem>
              <GridItem colSpan={3}>
                <Skeleton isLoaded={!isLoading}>
                  <GameDescription
                    description={data.description}
                    systemRequirements={data.systemRequirements}
                  />
                </Skeleton>

                {/* Ratings & Reviews */}
                <Skeleton isLoaded={!isLoading}>
                  <Flex>
                    <Text
                      justifyContent={"left"}
                      w={"full"}
                      fontWeight={"bold"}
                      py={5}
                    >
                      Ratings & Reviews
                    </Text>
                    <Spacer />
                    <Text
                      align={"right"}
                      w={"full"}
                      fontWeight={"bold"}
                      py={5}
                      textColor={"whiteAlpha.600"}
                      _hover={{ textColor: "white" }}
                      onClick={handleShow}
                    >
                      {show ? "Show less" : "Show more"}
                    </Text>
                  </Flex>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
                    {data.ratings.slice(0, number).map((rating) => (
                      <CommentSection
                        key={rating.id}
                        id={rating.id}
                        comment={rating.comment}
                        ratingStar={rating.ratingStar}
                        ratingDateTIme={rating.ratingDateTIme}
                        user={rating.user}
                      />
                    ))}
                  </SimpleGrid>

                  {/* Add comment */}

                  {<AddComment gameId={data.id} />}
                </Skeleton>
              </GridItem>
            </SimpleGrid>
          </>
        )}
      </Container>
    </>
  );
}
