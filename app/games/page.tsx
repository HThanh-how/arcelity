"use client";
import { Container, Flex, Spacer, filter } from "@chakra-ui/react";

// import FilterBar from "./_components/FilterBar";
// import GameList from "./_components/GameList";
import { createContext, useContext, useEffect, useState } from "react";
import FilterBar from "@/component/ui/search/FilterBar";
import GameList2 from "@/component/ui/search/GameList2";
import WishlistContext from "@/context/WishlistContext";

export default function AllGamePage() {
  const filterCtx = useContext(WishlistContext);
  const [keyword, setKeyword] = useState<String>("");
  useEffect(() => {
    setKeyword(filterCtx.filter);
  }, [filterCtx.filter]);
  return (
    <Container p={0} maxW={{ base: "90%", lg: "75%" }} my={10}>
      <Flex>
        {/* <GameList2 {...filterGenre}/> */}
        <GameList2 filterText={keyword} />
        <FilterBar />
      </Flex>
    </Container>
  );
}
