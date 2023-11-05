import {
    Box,
    Image,
    Flex,
    Button,
    useToast,
    VStack,
    HStack,
    Container,
    Heading,
    Text,
    Stack,
    AspectRatio,
    Icon,
    Tooltip,
  } from "@chakra-ui/react";
  import { useState, useEffect, SetStateAction } from "react";
  import { IoAddCircleOutline } from "react-icons/io5";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";
  import axios from "axios";
  import { useRouter } from "next/navigation";
  import allGameDataAPI from "../AllGameAPI";

  

  
  export interface Game {
    id: number;
    name: string;
    description: string;
    releaseDate: string;
    price: number;
    genres: Genre[];
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  
  const ImageCarousel = () => {
    const [ allGameData, images ]=allGameDataAPI()
    const router=useRouter()
    const [gameAPI, setGameAPI] = useState<Game[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const toast = useToast();
    
    // console.log(images[3]?.game)
  
    // const handleAutoSlide = () => {
    //   const nextIndex = (currentImageIndex + 1) % images.length;
    //   setCurrentImageIndex(nextIndex);
    // };
  
    
    // useEffect(() => {
    //   const timeout = setTimeout(handleAutoSlide, 10000);
    //   return () => clearTimeout(timeout);
    // }, [currentImageIndex]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const handleImageClick = (index: SetStateAction<number>) => {
      setCurrentImageIndex(index);
    };
    
    
    useEffect(() => {
      localStorage.setItem("historyPathname", "/");
    }, []);
  
  
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      dots: true,
      swipeToSlide: true,
      adaptiveHeight: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000}
  
    return (
      <>
        <Box
          alignSelf={"center"}
          justifyContent="center"
          bg={"black"}
          w="100%"
          display={{ base: "none", lg: "flex" }}
        >
          <Stack align={"center"}>
            <HStack width={"75vw"}>
              <Box mt={4} textAlign="center" width={"50vw"}>
                <AspectRatio maxW={"full"} ratio={16 / 9}>
                  <Box position="relative">
                    <Image
                      ml={0}
                      boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                      src={"img/11.webp"}
                      alt="Grand Theft Auto VI"
                      objectFit="cover"
                      rounded={10}
                    />
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      p={4}
                      width={"50vw"}
                      height={"full"}
                      bgGradient={"linear(to-tr, blackAlpha.800, transparent)"}
                      color="white"
                      borderRadius={10}
                    >
                      {" "}
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        p={10}
                        maxW={"30vw"}
                        borderRadius={10}
                      >
                        <Text
                          fontSize="3xl"
                          m={4}
                          color="white"
                          textAlign="left"
                          fontWeight={"800"}
                          textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}
                        >
                          {images[currentImageIndex]?.name}
                        </Text>
                        <Text
                          fontSize="sm"
                          m={4}
                          color="gray.200"
                          textAlign="left"
                        >
                          AVAILABLE NOW
                        </Text>
                        <Text fontSize={{base:"xs", lg:"lg"}} m={4} textAlign="left">
                          {images[currentImageIndex]?.description}
                        </Text>
                        <Text
                          fontSize="lg"
                          m={4}
                          color="gray.200"
                          textAlign="left"
                        >
                          Only ${images[currentImageIndex]?.price} 
                        </Text>
                        {/* <Text fontSize="lg">Alt: Grand Theft Auto VI cover image</Text> */}
                        <Flex>
                          <Button
                            borderColor={"transparent"}
                            colorScheme="white"
                            backgroundColor="white"
                            borderRadius={0}
                            borderWidth={2}
                            size="xl"
                            width={200}
                            textColor={"black"}
                            onClick={()=>router.push('games/' + images[currentImageIndex].id)}
                          >
                            GET NOW
                          </Button>
                          <Button
                            borderColor={"transparent"}
                            // textColor={'white'}
                            colorScheme="white"
                            backgroundColor="transparent"
                            borderRadius={0}
                            borderWidth={2}
                            size="md"
                            width={200}
                            _hover={{ backgroundColor: "blackAlpha.600" }}
                          >
                            ADD TO WISHLIST
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </AspectRatio>
              </Box>
              <VStack justify="space-between" flexWrap="wrap" spacing={3} mt={4} alignItems="flex-start">
                {images.map((image, index) => (
                  <Button
                    key={index}

                    variant="unstyled"
                    h={"5vw"}
                    ml={8}
                    opacity={index === currentImageIndex ? 1 : 0.5}
                    onClick={() => handleImageClick(index)}
                  >
                    <Flex>
                      <Image
                        src={"img/9.webp"}
                        h={"5vw"}
                        w={"4vw"}
                        objectFit="cover"
                        borderRadius="5px"
                        alt={image?.name}
                      />
  
                      <Text
                        textColor={"white"}
                        fontWeight={"300"}
                        fontSize={"xl"}
                        p={4}
                        style={{ overflowWrap: "break-word" }}
                      >
                        {image?.name}{" "}
                      </Text>
  
                      {/* <Text textColor={"gray.50"}>Intro</Text> */}
                    </Flex>
                  </Button>
                ))}
              </VStack>
            </HStack>
          </Stack>
        </Box>
  
        {/* Mobile Responsive */}
        <Box  display={{ base: "block", lg: "none" }}p={4}>
        <Slider {...settings}>
        {images.map((image, index) => (
       
          <AspectRatio m={4} ratio={3 / 4} >
    
            <Box position="relative">
            <Tooltip
                hasArrow
                label="Add to wishlist"
                bg="black"
                placement={"top"}
                zIndex={8}
              >
                <Button
                  bg={"transparent"}
                  _hover={{ bg: "transperent" }}
                  top={2}
                  right={2}
                  alignSelf={"right"}
             
                  position="absolute"
                >
                  <Icon
                    as={IoAddCircleOutline}
                    h={7}
                    w={7}
                    alignSelf={"right"}
                    color="white"
                    m={-1}
                    bg={"black"}          
                    rounded={"full"}
                    position="absolute"
                  />
                </Button>
              </Tooltip>
              <Image
                ml={0}
                boxSize={{ base: "100%", md: "100%", lg: "100%" }}
                src={"img/16.webp"}
                alt="Grand Theft Auto VI"
                objectFit="cover"
                rounded={10}
              >
                {/* <Icon
                    as={IoAddCircleOutline}
                    h={7}
                    w={7}
                    alignSelf={"right"}
                    color="white"
                    zIndex={8}
                    position="absolute"
                  /> */}
              </Image>
  
              <Box
                position="absolute"
                bottom={0}
                left={0}
                p={2}
                w="full"
                height={"full"}
                bgGradient={"linear(to-tr, blackAlpha.800, transparent)"}
                color="white"
                borderRadius={10}
              >
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  p={10}
                  maxW={"90vw"}
                  borderRadius={10}
                >
                  <Text
                    fontSize="2xl"
                    m={2}
                    color="white"
                    textAlign="left"
                    fontWeight={"800"}
                    textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}
                  >
                    {image.name}
                  </Text>
                  <Text fontSize="xs" m={2} color="gray.200" textAlign="left">
                    AVAILABLE NOW
                  </Text>
                  <Text fontSize="sm" m={2} textAlign="left">
                    {image.description}
                  </Text>
                  <Text fontSize="lg" m={2} color="gray.200" textAlign="left">
                  Only ${images[currentImageIndex]?.price} 
                  </Text>
  
                  <Flex>
                    <Button
                      borderColor={"transparent"}
                      colorScheme="white"
                      backgroundColor="white"
                      borderRadius={0}
                      borderWidth={2}
                      size="xl"
                      width={200}
                      h="40px"
                      textColor={"black"}
                      onClick={()=>router.push('games/' + images[currentImageIndex]?.id)}
                    >
                      GET NOW
                    </Button>
                    {/* <Button
                            borderColor={"transparent"}
                            // textColor={'white'}
                            colorScheme="white"
                            backgroundColor="transparent"
                            borderRadius={0}
                            borderWidth={2}
                            size="md"
                            width={200}
                            _hover={{ backgroundColor: "blackAlpha.600" }}
                          >
                            ADD TO WISHLIST
                          </Button> */}
                  </Flex>
                </Box>
              </Box>
            </Box>
          </AspectRatio>
          ))}
          </Slider>
        </Box>
      </>

    );
  };
  
  export default ImageCarousel;
  