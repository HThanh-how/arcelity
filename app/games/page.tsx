"use client";
import { Container, Flex, Spacer } from "@chakra-ui/react";

import FilterBar from "./_components/FilterBar";
import GameList from "./_components/GameList";
import { createContext, useState } from "react";

interface FilterContextProps {
  handleFilter: (name: string) => void;
}
// export const FilterContext = createContext<FilterContextProps>({
//   handleFilter: () => {},
// });

export default function AllGamePage() {
  const [filter, setFilter] = useState("");
  const handleFilter = (name: string) => {
    setFilter(name);
  };
  return (
    // <FilterContext.Provider value={{ handleFilter }}>
      <Container p={0} maxW={{ base: "90%", lg: "75%" }} my={10}>
        <Flex>
          <GameList filter={filter} />
          <FilterBar />
        </Flex>
      </Container>
    // </FilterContext.Provider>
  );
}
