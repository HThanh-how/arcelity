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
    // style: { justifyContent: "space-between"},
    // dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4,
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
        breakpoint: 1600,
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
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           dots: true, 
           arrow: false,
           centerMode: true,

        },
      },
    ],
  };
  
    return ( 

      <Box display="flex" justifyContent="center" alignItems="center" >
  <Box alignSelf="center" width="100%" maxWidth={{base:"full", lg:"70vw"}} justifyContent="space-between" pl={8}>
        <NavigationTag name="Game on Sale" url="#" />
        {/* <Flex width="70vw">
        <Button>Game on Sale</Button></Flex> */}
       
          <Slider {...settings} >
                <Product/><Product/><Product/><Product/><Product/><Product/><Product/>
              </Slider>
         
              </Box></Box>
    );
  }    
  
