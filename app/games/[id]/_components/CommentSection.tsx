import { Card, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { IGameComment } from "../_interface/IGameComment";
import AddComment from "./AddComment";

export default function CommentSection({
  id,
  ratingStar,
  comment,
  ratingDateTIme,
  user,
}: IGameComment) {
  return (
    <Card p={10} w={"full"} bg={"whiteAlpha.300"} textColor={"white"} mb={5}>
      <Text>{user.username}</Text>
      <Divider my={3} textColor={"whiteAlpha.600"} />
      <Text mb={3}>{ratingStar}/5</Text>
      <Text textColor={"whiteAlpha.600"}>{comment}</Text>
    </Card>
  );
}
