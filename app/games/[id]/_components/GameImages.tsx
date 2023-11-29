import { AspectRatio, Container, Image } from "@chakra-ui/react";

// Note: GameImages Component
export default function GameImages( { id }: { id: string }) {
  return (
    <Container p={0} maxW={"full"}>
      <AspectRatio maxW={"full"} ratio={5 / 3}>
        <Image
          ml={0}
          boxSize={{ base: "100%", md: "100%", lg: "100%" }}
          src={`/img/${id}.webp`}
          alt="Grand Theft Auto VI"
          objectFit="cover"
        ></Image>
      </AspectRatio>
    </Container>
  );
}
