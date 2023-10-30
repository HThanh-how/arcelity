import { Card, Divider, Text } from "@chakra-ui/react";
import React from "react";

export default function CommentSection() {
  return (
    <>
      <Text justifyContent={"left"} w={"full"} fontWeight={"bold"} py={5}>
        Ratings & Reviews
      </Text>
      <Card p={10} w={"full"} bg={"whiteAlpha.300"} textColor={"white"}>
        <Text>Game Informer</Text>
        <Divider my={3} textColor={"whiteAlpha.600"} />
        <Text mb={3}>7.5/10</Text>
        <Text textColor={"whiteAlpha.600"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          adipisci at rem maiores natus a eos, magnam, ad repudiandae inventore
          aspernatur modi voluptates magni nemo eligendi? Totam maiores
          accusamus itaque.
        </Text>
      </Card>
    </>
  );
}
