import Product from "./ProductCard";
import { ReactElement, useEffect, useState } from "react";
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
import NavigationTag from "@/component/OnSaleSection/NavigationTag";
import Slider from "react-slick";
import axios from "axios";

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

export default function SimpleThreeColumns() {
  const [gameSale, setGameSale] = useState<GameSale[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://game-be-v2.vercel.app/games/gamesOnSale"
        );
        const gameData: GameSale[] = response.data;
        setGameSale(gameData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(gameSale)

  var settings = {
    style: { justifyContent: "space-between"},
    // dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
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
        breakpoint: 1600,
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
          // dots: true,
          // arrow: false,
          // centerMode: true,
        },
      },
    ],
  };

  return (
    <Container p={0} maxW={{ base: "85%", lg: "80%" }} my={10}>
      {/* <Box alignSelf="center" width="100%" maxWidth={{base:"95vw", lg:"75vw"}}  pl={8}> */}
      <NavigationTag name="Game on Sale" url="#" />
     
  

      <Slider {...settings}>
        {gameSale.map((product) => (

            <Product key={product.id} {...product} />
            
    
        ))} 
      </Slider>


      {/* </Box> */}
    </Container>
  );
}
