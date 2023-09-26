import Product from "./ProductCard";
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
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";


export default function SimpleThreeColumns() {

  
    return (
      <Box
        // backgroundImage="url('/static/Product/Background.webp')"
        bgSize="cover"
        bgPos="center"
        position="relative"
        bgAttachment={"fixed"}
        id={"Product"}
        bg="black"
      >
        <Box p={4}  pb={15}>

          <Container maxW={"8xl"}>
            <SimpleGrid
              autoRows={{ base: "auto", md: "auto" }}
              columns={{ base: 1, md: 2, lg: 4 }}
            >
             <Product/><Product/><Product/><Product/><Product/><Product/>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    );
  }