import {
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
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IGameCard } from "../_interface/IGameCard";
import Link from "next/link";

export default function GameCard({
  id,
  name,
  description,
  price,
  releaseDate,
  genres,
}: IGameCard) {
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <Link href={`/games/${id}`}>
      <Card
        key={id}
        w={"fit-content"}
        maxW={200}
        bg={"none"}
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        cursor={"pointer"}
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
              bg={"transparent"}
              _hover={{ bg: "transperent" }}
              top={2}
              right={2}
              alignSelf={"right"}
              zIndex={4}
              position="absolute"
            >
              <Icon
                as={IoAddCircleOutline}
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
        <CardBody p={0}>
          <Image
            alt="The last of my pizza"
            src={`/img/${id}.webp`}
            borderRadius="lg"
            opacity={0.8}
            _hover={{ opacity: 1 }}
          />
        </CardBody>
        <CardFooter p={0} mt={2}>
          <Stack spacing={1}>
            <Text textColor={"whiteAlpha.600"}>Base Game</Text>
            <Text textColor={"white"}>{name}</Text>
            <Text textColor={"white"}>${price}</Text>
          </Stack>
        </CardFooter>
      </Card>
    </Link>
  );
}
