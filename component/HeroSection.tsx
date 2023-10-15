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
} from "@chakra-ui/react";
import { useState, useEffect, SetStateAction } from "react";

const images = [
  "https://picsum.photos/id/92/4000/4000.jpg",
  "https://picsum.photos/id/925/4000/4000.jpg",
  "https://picsum.photos/id/935/4000/4000.jpg",
];

let HeroSectionAPI: {
  imgUrl: string;
  imgAlt: string;
  description: string;
  price: number;
  status: boolean;
  name: string;
}[] = [
  {
    imgUrl: "https://www.apple.com/newsroom/videos/iphone-15-pro-action-button/posters/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg.large_2x.jpg",
    imgAlt: "alt1",
    description: "Featuring a strong and lightweight titanium design with new contoured edges, a new Action button, powerful camera upgrades, and A17 Pro for next-level performance and mobile gaming",
    price: 10,
    status: true,
    name: "Iphone 15 Pro Max"
  },
  {
    imgUrl: "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
    imgAlt: "alt2",
    description: "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever.",
    price: 20,
    status: false,
    name: ' Macbook 16 Pro'
  },
  {
    imgUrl: "https://images.macrumors.com/t/7hZCaaMo4T4JV6eLoJX2ou4lyqI=/1600x0/article-new/2021/05/ipad-pro-m1-feature.jpg",
    imgAlt: "alt3",
    description: "Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS. The ultimate iPad experience.",
    price: 30,
    status: true,
    name: "Ipad Pro M1"
  },
  {
    imgUrl: "https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-S8-2up-hero-220907.jpg.og.jpg?202308290434",
    imgAlt: "alt4",
    description: "The new dual-core CPU has 5.6 billion transistors — 60 percent more than the S8 chip. A new four-core Neural Engine processes machine learning tasks up to two times faster",
    price: 40,
    status: false,
    name: "Apple Watch 6"
  },
  {
    imgUrl: "https://www.apple.com/v/airpods-pro/h/images/meta/og__eui2mpgzwyaa_overview.png?202309210612",
    imgAlt: "alt4",
    description: "All-new Adaptive Audio intelligently tailors noise control to your environment.",
    price: 40,
    status: false,
    name: "Airpods Pro"
  },
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState(HeroSectionAPI);
  const toast = useToast();

  // Hàm xử lý chuyển đổi ảnh tự động sau 10 giây
  const handleAutoSlide = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  // Cập nhật chỉ số ảnh mỗi khi currentImageIndex thay đổi
  useEffect(() => {
    const timeout = setTimeout(handleAutoSlide, 10000);

    // Xóa timeout khi component unmount hoặc chỉ số ảnh thay đổi
    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  const handleImageClick = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box alignSelf={"center"} bg={"black"} w="100%" >
      <Stack align={"center"}>
        <HStack width={"70vw"}>
          <Box mt={4} textAlign="center" width={"50vw"}>
            <AspectRatio maxW={"full"} ratio={16 / 9}>
            <Box position="relative">
  <Image
    ml={0}
    boxSize={{ base: "100%", md: "100%", lg: "100%" }}
    src={images[currentImageIndex].imgUrl}
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
    bgGradient={'linear(to-tr, blackAlpha.800, transparent)'}
    color="white"
    borderRadius={10}
  > <Box
  position="absolute"
  bottom={0}
  left={0}
  p={10}
  maxW={"30vw"}
  borderRadius={10}

>
   
    <Text fontSize="3xl" m={4} color="white"  textAlign="left" fontWeight={"800"} textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}>{images[currentImageIndex].name}</Text>
    <Text fontSize="sm"  m={4} color="gray.200" textAlign="left">AVAILABLE NOW</Text>
    <Text fontSize="lg" m={4}  textAlign="left">{images[currentImageIndex].description}</Text>
    <Text fontSize="lg"   m={4} color="gray.200" textAlign="left">Only $19.99</Text>
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
     
    >
      GET NOW
    </Button>
    <Button
      borderColor={"transparent"}
      // textColor={'white'}
      colorScheme='white'
      backgroundColor="transparent"
      borderRadius={0}
      borderWidth={2}
      size="md"
      width={200}
      _hover={{backgroundColor: "blackAlpha.600"}}
    >
      ADD TO WISHLIST
    </Button>
    </Flex>
  </Box>
  </Box></Box>

            </AspectRatio>
          </Box>
          <VStack justify="space-between" flexWrap="wrap" spacing={3} mt={4}>
            {images.map((image, index) => (
              <Button
                key={index}
                variant="unstyled"
                h={"5vw"}
                 ml={8}
                opacity={index === currentImageIndex ? 1 : 0.5}
                onClick={() => handleImageClick(index)}
              
              >
                <Flex >
                 <Image
                    src={image.imgUrl}
                    h={"5vw"}
                    w={"4vw"}
                    objectFit="cover"
                    borderRadius="5px"
                  />

                    <Text
                      textColor={"white"}
                      fontWeight={"300"}
                      fontSize={"xl"}
                      p={4}
                      style={{ overflowWrap: "break-word" }}
                    >
                     {image.name} </Text>
                    
                    {/* <Text textColor={"gray.50"}>Intro</Text> */}
   
                </Flex>
              </Button>
            ))}
          </VStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ImageCarousel;
