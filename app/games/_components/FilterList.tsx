import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { IGenreList } from "../_interface/IGenre";
import { FilterContext } from "./_context/FilterContext";

export default function FilterList({ genres, name }: IGenreList) {
  let { handleFilter } = useContext(FilterContext);
  return (
    <AccordionItem py={2}>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            textColor="whiteAlpha.600"
            _hover={{ textColor: "white" }}
            textTransform={"uppercase"}
            fontSize={"sm"}
          >
            {name}
          </Box>
          <AccordionIcon
            textColor={"whiteAlpha.600"}
            _hover={{ textColor: "white" }}
          />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <VStack>
          {genres?.map((genre) => (
            <Button
              key={genre.id}
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
              onClick={() => handleFilter(genre.name)}
            >
              {genre.name}
            </Button>
          ))}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
