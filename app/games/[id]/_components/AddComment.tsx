import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";
import axios from "axios";
import getFromLocalStorage from "@/app/_lib/getFromLocalStorage";

export default function AddComment({ gameId, ...rest }: { gameId: number }) {
  const [ratingStar, setRatingStar] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
    setRatingStar(
      +(document.getElementById("rating") as HTMLInputElement).value
    );
    setComment((document.getElementById("comment") as HTMLInputElement).value);

    try {
      const data = { ratingStar, comment };
      const response = await axios.request({
        headers: {
          Authorization: `Bearer ${getFromLocalStorage("access_token")}`,
        },
        method: "POST",
        data: data,
        url: `https://game-be-v2.vercel.app/ratings/${gameId}`,
      });
      console.log("submitted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box bg={"whiteAlpha.300"} p={10} borderRadius={5}>
        <FormLabel>Your comment</FormLabel>
        <Input type="text" id="comment" _focus={{ bg: "whiteAlpha.400" }} />
        <Rating
          size={30}
          icon="star"
          scale={5}
          fillColor="whiteAlpha.600"
          strokeColor="grey"
        />
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
}
