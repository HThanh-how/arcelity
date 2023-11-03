import Product from "./ProductCardTable";
import { ReactElement, useState } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
  Container,
  Heading,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationTag from "@/component/OnSaleSection/NavigationTag";
import Slider from "react-slick";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function Collum() {
  const router = useRouter();
  return (
  

      <VStack alignItems={"flex-start"}>
        <Flex
          ml={4}
          _hover={{ color: "blue.500", transform: "translateX(10px)" }}
          cursor={"pointer"}
          fontWeight="800"
          onClick={() => router.push("#")}
          transition={"all .3s ease"}
          color={"white"}
          align={"left"}
        >
          {"Top 10"} <Icon w={5} h={5} as={ChevronRightIcon} />
         
        </Flex>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </VStack>
   
  );
}
