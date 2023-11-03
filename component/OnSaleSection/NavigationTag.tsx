import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Button,
  Stack,
  useColorModeValue,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface link {
  name: string;
  url: string;
}

const NavigationTag = ({ name, url }: link) => {
  const router = useRouter();
  return (
    <Flex
      bg="black"
      alignItems={"center"}
      justifyContent={"center"}
      textColor={"white"}
      pt={8}
    >
      <Flex width="71vw" alignItems={"center"}>
        <Flex
          ml={4}
          _hover={{ color: "blue.500", transform: "translateX(10px)" }}
          cursor={"pointer"}
          fontWeight="800"
          onClick={() => router.push(url ? url : "")}
          transition={"all .3s ease"}
        >
          {name} <Icon w={5} h={5} as={ChevronRightIcon} />
         
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavigationTag;
