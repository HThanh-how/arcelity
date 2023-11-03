import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Button,
  Stack,
  useColorModeValue,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import allGameDataAPI from "../AllGameAPI";
import searchGames from "./SearchResult";
import {Game} from "../AllGameAPI";


let searchResults: Game[] = [];

const SearchBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [search, openSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResults] = useState<Game[]>([]);
  const [allGameData, images] = allGameDataAPI();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    const results = searchGames(newQuery, allGameData);
    setSearchResults(results);
    searchResults = results;
    // console.log(results);
  };

  const router = useRouter();

  return (
    <>
      <Flex
        bg="black"
        alignItems={"center"}
        justifyContent={"center"}
        textColor={"white"}
        pt="6"
        pb="2"
        display={{ base: "none", md: "flex" }}
      >
        <Flex width="70vw" alignItems={"center"}>
          <Input
            width="400px"
            type={"text"}
            placeholder={"Tìm kiếm"}
            color={useColorModeValue("gray.200", "gray.700")}
            bg={useColorModeValue("#171717", "gray.600")}
            rounded={"full"}
            border={0}
            value={query}
            onChange={handleInputChange}
            _focus={{
              bg: useColorModeValue("gray.800", "gray.200"),
              outline: "gray.200",
            }}
          />
          <Flex ml={4} _hover={{ color: "blue.500" }} cursor={"pointer"}>
            Discover
          </Flex>
          <Flex ml={4} _hover={{ color: "blue.500" }} cursor={"pointer"}>
            Browser
          </Flex>
          <Flex ml={4} _hover={{ color: "blue.500" }} cursor={"pointer"}>
            News
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none" }}
      >
        <Icon
          m={4}
          as={SearchIcon}
          onClick={() => openSearch(true)}
          display={search ? "none" : "flex"}
          transition={"all .25s ease-in-out"}
        />
        <Input
          m={4}
          onClick={() => openSearch(true)}
          display={search ? "flex" : "none"}
          transition={"all .25s ease-in-out"}
          width="50vw"
          type={"text"}
          placeholder={"Tìm kiếm"}
          color={useColorModeValue("gray.200", "gray.700")}
          bg={useColorModeValue("#171717", "gray.600")}
          rounded={"full"}
          border={0}
          _focus={{
            bg: useColorModeValue("gray.800", "gray.200"),
            outline: "gray.200",
          }}
        />
        <Menu variant={"black"}>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"black"}
            cursor={"pointer"}
            onClick={onToggle}
            minW={0}
          >
            Discover
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          </MenuButton>
          <MenuList bg={"black"} border={"none"}>
            <MenuItem bg={"black"}>Discover</MenuItem>
            <MenuItem bg={"black"}>Browser</MenuItem>
            {/* <MenuItem bg={"black"}>Browser</MenuItem> */}
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default SearchBar;
export {  searchResults };