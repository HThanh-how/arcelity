"use client";

import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ItemsList from "../../component/ui/wishlist/ItemsList";
import { useContext } from "react";
import WishlistContext, {
  WishlistContextProvider,
} from "../../context/WishlistContext";
// import { useWishlistContext } from "../context/WishlistContext";

export default function WishlistPage() {
  // const favoriteCtx = useWishlistContext();
  const favoriteCtx = useContext(WishlistContext);

  return (
    // <WishlistContextProvider
    //   children={
        <Container p={0} maxW={"75%"} my={10}>
          <Heading mb={5}>Wishlist</Heading>
          {favoriteCtx.totalFavorites === 0 ? (
            <h2 className="text-[24px]">You have no game here. Adding something!</h2>
          ) : (
            <ItemsList list={favoriteCtx.favorites} isCart={false}/>
          )}
        </Container>
    //   }
    // />
  );
}
