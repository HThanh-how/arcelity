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
import NavigationTag from "@/component/NavigationTag";
import Slider from "react-slick";
import Collum from "./TopTableCollum";

export default function TopTable() {
  var settings = {
    style: { width: "70vw" },
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      alignSelf={"left"}
      bg={"black"}
      w="100%"
      justifyContent="left"
      alignItems={"left"}
    >
      {/* <NavigationTag name="Game on Sale" url="#" /> */}
      {/* <Flex width="70vw">
        <Button>Game on Sale</Button></Flex> */}
   
        <Slider {...settings}>
<Collum/><Collum/><Collum/>
        </Slider>
     
    </Box>
  );
}
