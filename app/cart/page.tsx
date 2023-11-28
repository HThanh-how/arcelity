// "use client";

// import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
// import ItemsList from "../../component/ui/cart/ItemsList";
// import CartDetail from "../../component/ui/cart/CartDetail";
// import { useContext } from "react";
// import WishlistContext from "@/context/WishlistContext";

"use client";

import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ItemsList from "../../component/ui/wishlist/ItemsList";
import { useContext } from "react";
import WishlistContext, {
  WishlistContextProvider,
} from "../../context/WishlistContext";
import CartDetail from "@/component/ui/cart/CartDetail";

export default function CartPage() {
  const favoriteCtx = useContext(WishlistContext);

  return (
    <Container p={0} maxW={"75%"} my={10}>
      <Heading mb={5}>My Cart</Heading>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 4 }} spacing={0}>
        <GridItem colSpan={3}>
          {favoriteCtx.totalCarts === 0 ? (
            <h2 className="text-[24px]">
              You have no game here. Adding something!
            </h2>
          ) : (
            <ItemsList list={favoriteCtx.carts} isCart={true}/>
          )}{" "}
        </GridItem>
        <GridItem colSpan={1}>
          <CartDetail list={favoriteCtx.carts} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
