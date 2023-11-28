import { AspectRatio, Container, Image } from "@chakra-ui/react";

// Note: GameImages Component
export default function GameImages() {
  return (
    <Container p={0} maxW={"full"}>
      <AspectRatio maxW={"full"} ratio={5 / 3}>
        <Image
          ml={0}
          boxSize={{ base: "100%", md: "100%", lg: "100%" }}
          src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
          alt="Grand Theft Auto VI"
          objectFit="cover"
        ></Image>
      </AspectRatio>
    </Container>
  );
}
