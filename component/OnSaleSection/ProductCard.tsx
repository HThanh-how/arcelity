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




// function Rating({ rating, numReviews }: RatingProps) {
//   return (
//     <Box display="flex" alignItems="center">
//       {Array(5)
//         .fill("")
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2;
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: "1" }}
//                 color={i < rating ? "teal.500" : "gray.300"}
//               />
//             );
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
//           }
//           return <BsStar key={i} style={{ marginLeft: "1" }} />;
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && "s"}
//       </Box>
//     </Box>
//   );
// }

function ProductAddToCart(gameSale:GameSale) {
  const router=useRouter()
  const [showIcon, setShowIcon] = useState(false);
  const discountedPrice = Math.round(gameSale.price * (100 - gameSale.saleDetails[0].discountRate) / 100);
  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <Flex
      maxW={{ base: "200px", md: "400px" }}
      alignItems="center"
      justifyContent="center"
      onClick={()=>router.push('games/' + gameSale.id)}
    >
      <Box
        bg={"white"}
        // maxW="xs"
        // borderWidth="1px"
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
                color={"white"}
                position="absolute"
              />
            </Button>
          </Tooltip>
        )}

        <Image
          src={"https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"}
          alt={`Picture of ${gameSale.name}`}
          roundedTop="lg"
        />

        <Box p="6">
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
              isTruncated
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
              <Icon as={TriangleDownIcon} h={8} /> {gameSale.saleDetails[0].discountRate} %
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
