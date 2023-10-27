import { Card, Text } from "@chakra-ui/react";
import React from "react";

export default function CommentSection() {
  return (
    <>
      <Text justifyContent={"left"} w={"full"} fontWeight={"bold"} py={5}>
        Ratings & Reviews
      </Text>
      <Card p={10} w={"full"} bg={"whiteAlpha.300"} textColor={"white"}>
        <Text>Comments</Text>
      </Card>
    </>
  );
}
