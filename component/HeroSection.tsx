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
}[] = [
  {
    imgUrl: "https://picsum.photos/id/92/4000/4000.jpg",
    imgAlt: "alt1",
    description: "description1",
    price: 10,
    status: true,
  },
  {
    imgUrl: "https://picsum.photos/id/925/4000/4000.jpg",
    imgAlt: "alt2",
    description: "description2",
    price: 20,
    status: false,
  },
  {
    imgUrl: "https://picsum.photos/id/935/4000/4000.jpg",
    imgAlt: "alt3",
    description: "description3",
    price: 30,
    status: true,
  },
  {
    imgUrl: "https://picsum.photos/id/915/4000/4000.jpg",
    imgAlt: "alt4",
    description: "description4",
    price: 40,
    status: false,
  },
  {
    imgUrl: "https://picsum.photos/id/945/4000/4000.jpg",
    imgAlt: "alt4",
    description: "description4",
    price: 40,
    status: false,
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
   
    <Text fontSize="3xl" m={4} color="white"  textAlign="left" fontWeight={"800"} textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}>Grand Theft Auto VI</Text>
    <Text fontSize="sm"  m={4} color="gray.200" textAlign="left">AVAILABLE NOW</Text>
    <Text fontSize="lg" m={4}  textAlign="left">component with its corresponding image and text is displayed in a wrapped manner, preventing them from overlapping each other.</Text>
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
                     Bằng cách thêm thuộc tính </Text>
                    
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
