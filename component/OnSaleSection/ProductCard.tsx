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
  AspectRatio,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

// interface RatingProps {
//   rating: number;
//   numReviews: number;
// }

interface GameSale {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  price: number;
  saleDetails: SaleDetail[];
}

interface SaleDetail {
  saleId: number;
  gameId: number;
  discountRate: number;
  salePromotion: SalePromotion;
}

interface SalePromotion {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
}

function ProductAddToCart(gameSale: GameSale) {
  const router = useRouter();
  const [showIcon, setShowIcon] = useState(false);
  const discountedPrice = Math.round(
    (gameSale.price * (100 - gameSale.saleDetails[0].discountRate)) / 100
  );
  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <Flex
      // maxW={{ base: "200px", md: "400px" }}
      alignItems="center"
      justifyContent="center"

      // maxH="800px"
    >
      <Box
        bg={"white"}
        rounded="lg"
        shadow="lg"
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        cursor={"pointer"}
        w={{ base: "80vw", sm: "35vw", lg: "20vw" }}
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
            transition={"all 0.3s"}
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
                color={"black"}
                position="absolute"
              />
            </Button>
          </Tooltip>
        )}
        <AspectRatio maxW={"full"} ratio={4 / 3}>
          <Image
            src={
              "img/7.webp"
            }
            alt={`Picture of ${gameSale.name}`}
            roundedTop="lg"
            opacity={0.8}
            _hover={{ opacity: 1 }}
            objectFit={"cover"}
          />
        </AspectRatio>
        <Box
          p="6"
          onClick={() => router.push("games/" + gameSale.id)}
          w={{ base: "80vw", md: "35vw", lg: "20vw" }}
        >
          <Box display="flex" alignItems="baseline">
            <Badge
              rounded="full"
              px="2"
              fontSize={{ base: "0.6em", md: "0.8em" }}
              colorScheme="green"
            >
              DISCOUNT NOW
            </Badge>
          </Box>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              textColor={"black"}
              // isTruncated
            >
              {gameSale.name}
            </Box>

            {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} /> */}
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box
              fontSize={{ base: "sm", md: "xl" }}
              color={"red.400"}
              pt={{ base: 0, md: 5 }}
            >
              <Icon as={TriangleDownIcon} h={8} />{" "}
              {gameSale.saleDetails[0].discountRate} %
            </Box>
            <VStack>
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
              <Box
                fontSize={{ base: "sm", md: "xl" }}
                color={useColorModeValue("gray.400", "white")}
                style={{ textDecoration: "line-through" }}
              >
                <Box as="span" color={"gray.400"} fontSize="lg">
                  $ {gameSale.price}
                </Box>
              </Box>
              <Box
                fontSize={{ base: "xl", md: "2xl" }}
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {discountedPrice}
              </Box>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
