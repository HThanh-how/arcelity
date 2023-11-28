import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  CardFooter,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { IoAddCircleOutline, IoHeart } from "react-icons/io5";
import { IGameCard } from "../../interface/IGameCard";
import Link from "next/link";
import WishlistContext from "@/context/WishlistContext";
// import WishlistContext from "@/app/games/_components/_context/WishlistContext";

export default function GameCard({
  id,
  name,
  description,
  price,
  releaseDate,
  genres,
}: IGameCard) {
  // const wishlistCtx = useWishlistContext();
  const wishlistCtx = useContext(WishlistContext);

  const itemIsFavoriteHandler = (favoriteId: number) => {
    return wishlistCtx.favorites.some((game) => game.id === favoriteId);
  };

  const [gameInWishlist, setGameInWishlist] = useState(
    itemIsFavoriteHandler(id)
  );

  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  const toggleFavoriteStatusHandler = () => {
    console.log(gameInWishlist);
    if (gameInWishlist) {
      wishlistCtx.removeFavorite(id);
    } else {
      console.log(`Add game ${id}`);
      wishlistCtx.addFavorite({
        id: id,
        name: name,
        price: price,
      });
      console.log(wishlistCtx.favorites);
      console.log(gameInWishlist);
    }
    setGameInWishlist(itemIsFavoriteHandler(id));
  };
  return (
    <Card
      // key={id}
      // w={"fit-content"}
      maxW={200}
      bg={"none"}
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      cursor={"pointer"}
      className="w-full"
    >
      {showIcon && (
        <Tooltip
          hasArrow
          label="Add to wishlist"
          bg="black"
          placement={"top"}
          transition={"all 0.3s"}
        >
          <Button
            onClick={toggleFavoriteStatusHandler}
            bg={"transparent"}
            _hover={{ bg: "transperent" }}
            top={2}
            right={2}
            alignSelf={"right"}
            zIndex={4}
            position="absolute"
          >
            {/* {gameInWishlist ? "Yes" : "NO"} */}

            <Icon
              as={!gameInWishlist ? IoAddCircleOutline : IoHeart}
              h={7}
              w={7}
              alignSelf={"right"}
              zIndex={4}
              color={"white"}
              position="absolute"
            />
          </Button>
        </Tooltip>
      )}
      <Link href={`/games/${id}`}>
        <CardBody p={0} className="w-full">
          <AspectRatio ratio={3 / 2}>
            <Image
              alt="The last of my pizza"
              src={`/img/${id}.webp`}
              borderRadius="lg"
              opacity={0.8}
              _hover={{ opacity: 1 }}
              className="w-full aspect-[3/2]"
            />
          </AspectRatio>
        </CardBody>
        <CardFooter p={0} mt={2}>
          <Stack spacing={1}>
            <Text textColor={"whiteAlpha.600"}>Base Game</Text>
            <Text textColor={"white"} className="font-bold">
              {name}
            </Text>
            <Text textColor={"white"}>${price}</Text>
          </Stack>
        </CardFooter>
      </Link>
    </Card>
  );
}
