import {
  Box,
  Button,
  Text,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";
import axios from "axios";
import getFromLocalStorage from "@/app/_lib/getFromLocalStorage";
import CommentSection from "./CommentSection";

export default function AddComment({ gameId, ...rest }: { gameId: number }) {
  const [isCommented, setIsCommented] = React.useState(false);
  const [ratingStarRef, setRatingStarRef] = React.useState(0);
  const [commentRef, setCommentRef] = React.useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsCommented(true);
    event.preventDefault();
    console.log("Submitted");
    const ratingStar = +(document.getElementById("rating") as HTMLInputElement)
      .value;
    const comment = (document.getElementById("comment") as HTMLInputElement)
      .value;
    setCommentRef(comment);
    setRatingStarRef(ratingStar);
    console.log(ratingStar, comment);
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
    <>
      {!isCommented && (
        <form onSubmit={handleSubmit}>
          <Box bg={"whiteAlpha.300"} p={10} borderRadius={5}>
            <FormControl isRequired>
              <FormLabel>Your comment</FormLabel>
              <Input
                type="text"
                id="comment"
                _focus={{ bg: "whiteAlpha.400" }}
              />
            </FormControl>
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
      )}
      {isCommented && (
        <CommentSection
          id={0}
          ratingStar={ratingStarRef}
          comment={commentRef}
          ratingDateTIme={""}
          user={{
            username: "My comment",
          }}
        />
      )}
    </>
  );
}