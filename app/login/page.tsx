"use client";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'



export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()

const handleLogin = async () => {

  

  try {
    const response = await axios.post("https://game-be-v2.vercel.app/auth/login", {
      username,
      password,
    }
    , {
      headers: {
        "Content-Type": "application/json",
      },
    }
    );
    const { access_token,  id} = response.data;
    localStorage.setItem("access_token", access_token);
    const historyPathname = localStorage.getItem("historyPathname");
    localStorage.setItem("id_token", id);
    const createdAt = new Date().toISOString();
    localStorage.setItem('createdAt', createdAt);
    document.cookie = `access_token=${access_token}; expires=Thu, 01 Jan 2022 00:00:00 UTC; path=/`;
    window.location.href = historyPathname?? '/'

  } catch (error) {
    toast({
      title: `Username or Password incorrect`,
      status: 'error',
      position: "top-right",
      isClosable: true,
    })
  }
};

  return (
    <Box position={"relative"} bg="black">
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 20 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Many game waiting you{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Join now
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}></Stack>
        </Stack>
        <Stack
          bg={"#171717"}
          rounded={"sm"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"white"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Login now
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}></Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Username"
                bg={"#0a0a0a"}
                border={0}
                color={"white"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Password"
                bg={"#0a0a0a"}
                type="password"
                border={0}
                color={"white"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Text
                color={"gray.200"}
                _hover={{ textDecoration: "underscore" }}
                cursor={"pointer"}
              >
                Forgot your Password
              </Text>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              onClick={handleLogin}
            >
              Log in
            </Button>
            <Button
              fontFamily={"heading"}
              bg={"gray.200"}
              color={"gray.800"}
              mt={4}
              w={"full"}
              onClick={() => router.push("/register")}
            >
              First time? Register now!
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
