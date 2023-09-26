import { Box, Image, Flex, Button, useToast, VStack, HStack, Container, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect, SetStateAction } from "react";

const images = [
  "https://picsum.photos/id/92/4000/4000.jpg",
  "https://picsum.photos/id/925/4000/4000.jpg",
  "https://picsum.photos/id/935/4000/4000.jpg"
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const toast = useToast();

  // Hàm xử lý chuyển đổi ảnh tự động sau 10 giây
  const handleAutoSlide = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  // Cập nhật chỉ số ảnh mỗi khi currentImageIndex thay đổi
  useEffect(() => {
    // Đặt timeout để chuyển đổi ảnh sau 10 giây
    const timeout = setTimeout(handleAutoSlide, 10000);

    // Xóa timeout khi component unmount hoặc chỉ số ảnh thay đổi
    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  const handleImageClick = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box justifyItems={"center"} bg={"black"}>
    <Container maxW="70%" px={8}>
    <HStack>
     

      <Box mt={4} textAlign="center">
        <Image src={images[currentImageIndex]} width={"8xl"} h={"60vh"} objectFit="cover" mx="auto" borderRadius='20px'/>

        {/* <Button onClick={handleAutoSlide} mt={4}>Chuyển</Button> */}
      </Box>
      <VStack justify="center">
        {images.map((image, index) => (
           
          <Button
            key={index}
            variant="unstyled"
            p={4}
            my={8}
            opacity={index === currentImageIndex ? 1 : 0.5}
            onClick={() => handleImageClick(index)}
          >
            <Flex> 
                
            <Image src={image} boxSize="80px" objectFit="cover" borderRadius='5px'  />
            <VStack p={2}>
                <Heading textColor={"white"}>Tên game</Heading> 
                <Text textColor={"gray.50"}>Intro</Text>
                </VStack>
            </Flex>
          </Button>
         
        ))}
      </VStack>
      </HStack>
    </Container>
    </Box>
  );
};

export default ImageCarousel;
