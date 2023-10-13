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
  Button,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationTag from "@/component/NavigationTag"
import Slider from "react-slick";


export default function SimpleThreeColumns() {
  var settings = {
    style: { width: '70vw', justifyContent: "space-between"},
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 4,
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

      <Box alignSelf={"center"} bg={"black"} w="100%" justifyContent="center" alignItems={"center"}   >
        <NavigationTag name="Game on Sale" url="#" />
        {/* <Flex width="70vw">
        <Button>Game on Sale</Button></Flex> */}
        <Flex justify={'center'} py={4}>
          <Slider {...settings} >
                <Product/><Product/><Product/><Product/><Product/><Product/><Product/>
              </Slider>
              </Flex>
      </Box>
    );
  }    
  