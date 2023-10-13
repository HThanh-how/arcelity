"use client";

import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
  imageAlt: "This is game",
  discount: "20%",
  initialPrice: 24000,
  oldPrice: 30000,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductAddToCart() {
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <Flex maxW="20vw" alignItems="left" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        cursor={"pointer"}
      >
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        {showIcon && (
          <Tooltip
            hasArrow
            label="Add to wishlist"
            bg="black"
            placement={"top"}
          >
            <Button
              bg={"transparent"}
              _hover={{ bg: "transperent" }}
              top={2}
              right={2}
              alignSelf={"right"}
              zIndex={4}
              position="absolute"
            >
              <Icon
                as={IoAddCircleOutline}
                h={7}
                w={7}
                alignSelf={"right"}
                zIndex={4}
                position="absolute"
              />
            </Button>
          </Tooltip>
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />


      </Box>
      {/* <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="orange">
                #Top 10
              </Badge>
            )}
          </Box>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              color={"white"}
            >
              {data.name}
            </Box>

          </Flex>

          <Flex justifyContent="space-between" alignContent="center">

            <VStack>

              <Box
                fontSize="2xl"
                color={useColorModeValue("white", "white")}
              >
                <Box as="span" color={"white"} fontSize="lg">
                  đ
                </Box>
                {data.initialPrice.toLocaleString("vi-VN")}
              </Box>
            </VStack>
          </Flex>
        </Box> */}
    </Flex>
  );
}

export default ProductAddToCart;
