import {
  Avatar,
  Card,
  Container,
  Flex,
  GridItem,
  HStack,
  Icon,
  IconButton,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useDisclosure,
  Popover,
  FormControl,
  FormLabel,
  Input,
  Stack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import useGetUserInfoApi from "../../../app/user/_api/useGetUserInfoApi";
import UpdateProfileApi from "../../../app/user/_api/updateProfileApi";

export default function UserAvatar() {
  const [{ data, isLoading, isError }] = useGetUserInfoApi();

  return (
    <Card w={"fit-content"} bg={"none"}>
      <SimpleGrid columns={{ md: 1, lg: 3 }}>
        {/* account avatar */}
        <GridItem colSpan={1}>
          <Avatar
            h={150}
            w={150}
            name="David Brown"
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </GridItem>
        {/* account description */}
        <GridItem colSpan={2} ml={10}>
          {/* <UpdateProfileApi /> */}
          <Text fontSize={40} color={'#ffffff'} fontWeight={"bold"} mb={10}>David Brown</Text>
          <HStack spacing={5} >
            {/* account point */}
            <Container p={0} m={0}>
              <Text
                fontSize={{ md: 15, lg: 20 }}
                textTransform={"uppercase"}
                textColor={"whiteAlpha.600"}
              >
                point
              </Text>
              <Text fontSize={{ md: 20, lg: 30 }} textColor={"white"}>
                1000
              </Text>
            </Container>
            {/* game bought */}
            <Container p={0} m={0}>
              <Text
                fontSize={{ md: 15, lg: 20 }}
                textTransform={"uppercase"}
                textColor={"whiteAlpha.600"}
              >
                game
              </Text>
              <Text fontSize={{ md: 20, lg: 30 }} textColor={"white"}>
                1000
              </Text>
            </Container>
            {/* account level */}
            <Container p={0} m={0}>
              <Text
                fontSize={{ md: 15, lg: 20 }}
                textTransform={"uppercase"}
                textColor={"whiteAlpha.600"}
              >
                level
              </Text>
              <Text fontSize={{ md: 20, lg: 30 }} textColor={"white"}>
                1000
              </Text>
            </Container>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
