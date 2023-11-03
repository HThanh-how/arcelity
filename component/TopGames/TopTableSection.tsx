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
import Collum from "./TopTableCollum";

export default function TopTable() {
  var settings = {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
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

    <Box display="flex" justifyContent="center" alignItems="center" pt={4}>
    <Box alignSelf="center" w={{base:"100vw", lg:"70vw"}} justifyContent="space-between" pl={8}>

   
        <Slider {...settings}>
<Collum/><Collum/><Collum/>

        </Slider>
     
    </Box>  </Box>
  );
}
