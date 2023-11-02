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
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function Login() {
  const router = useRouter();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
    fullName: "",
  });

  const validateUsername = () => {
    
    if (username.length ==0) {
      setErrors((errors) => ({
        ...errors,
        username: "Vui lòng nhập tên người dùng",
      }));
    } else if (!/^[a-z0-9]+$/.test(username)) {
      setErrors((errors) => ({
        ...errors,
        username: "Tên người dùng chỉ chứa chữ thường và số",
      }));
    } else if (username.length < 8) {
      setErrors((errors) => ({
        ...errors,
        username: "Tên người dùng phải có ít nhất 8 ký tự",
      }));
    } else {
      setErrors((errors) => ({ ...errors, username: "" }));
    }
  };

  const existUsername =() =>{
    setErrors((errors) => ({
      ...errors,
      username: "Tên người dùng đã tồn tại",
    }));
  }

  const validateEmail = () => {
    if (!email) {
      setErrors((errors) => ({ ...errors, email: "Vui lòng nhập email" }));
    } else if (!/.+@.+\..+/.test(email)) {
      setErrors((errors) => ({ ...errors, email: "Email không hợp lệ" }));
    } else {
      setErrors((errors) => ({ ...errors, email: "" }));
    }
  };

  const validatePassword = () => {
    if (!password) {
      setErrors((errors) => ({
        ...errors,
        password: "Vui lòng nhập mật khẩu",
      }));
    } else if (password.length < 8) {
      setErrors((errors) => ({
        ...errors,
        password: "Mật khẩu phải có ít nhất 8 ký tự",
      }));
    } else {
      setErrors((errors) => ({ ...errors, password: "" }));
    }
  };

  const validateRetypePassword = () => {
    if (!retypePassword) {
      setErrors((errors) => ({
        ...errors,
        retypePassword: "Vui lòng nhập lại mật khẩu",
      }));
    } else if (retypePassword !== password) {
      setErrors((errors) => ({
        ...errors,
        retypePassword: "Mật khẩu phải khớp",
      }));
    } else {
      setErrors((errors) => ({ ...errors, retypePassword: "" }));
    }
  };

  const validateFullName = () => {
    if (!fullName) {
      setErrors((errors) => ({ ...errors, fullName: "Vui lòng nhập tên" }));
    } else if (!/^[^~`!@#$%^&*()_+={}[\]|;:'",.<>?]+$/u
    .test(fullName)) {
      setErrors((errors) => ({ ...errors, fullName: "Tên không hợp lệ" }));
    } else {
      setErrors((errors) => ({ ...errors, fullName: "" }));
    }
  };

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();
    validateRetypePassword();
    validateFullName();

    if (Object.values(errors).some((error) => error !== "")) {
      return;
    }

    try {
      setIsLoading(true);
      const data = { username, email, password, retypePassword, fullName };
      const response = await axios.post(
        "https://game-be-v2.vercel.app/users",
        data
      );
      console.log(response.data);
      toast({
        title: `Tạo tài khoản thành công.\n Vui lòng đăng nhập lại`,
        status: 'success',
        position: "top-right",
        isClosable: true,
      })
      // toast({
      //   title: `Vui lòng đăng nhập lại`,
      //   status: 'success',
      //   position: "top-right",
      //   isClosable: true,
      // })
      router.push("/login")
    } catch (error) {
      console.error(error);
      existUsername();
      toast({
        title: `Tạo tài khoản thất bại`,
        status: 'error',
        position: "top-right",
        isClosable: true,
      })

    } finally {
      setIsLoading(false);
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
              Register now!
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
   
          <Box as={"form"} mt={10} onSubmit={handleRegister}>
            <Stack spacing={4}>
            <FormControl isInvalid={!!errors.fullName}>
                <Input
                  placeholder="Full Name"
                  bg={"#0a0a0a"}
                  border={0}
                  color={"white"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={validateFullName}
                />
                <FormErrorMessage>{errors.fullName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.username}>
                <Input
                  placeholder="Username"
                  bg={"#0a0a0a"}
                  border={0}
                  color={"white"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={validateUsername}
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <Input
                  placeholder="Email"
                  bg={"#0a0a0a"}
                  border={0}
                  color={"white"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <Input
                  placeholder="Password"
                  bg={"#0a0a0a"}
                  border={0}
                  color={"white"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.retypePassword}>
                <Input
                  placeholder="Re-write Password"
                  bg={"#0a0a0a"}
                  border={0}
                  color={"white"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  type="password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  onBlur={validateRetypePassword}
                />
                <FormErrorMessage>{errors.retypePassword}</FormErrorMessage>
              </FormControl>



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
                onClick={handleRegister}
              >
                Register
              </Button>
              <Button
                fontFamily={"heading"}
                bg={"gray.200"}
                color={"gray.800"}
                mt={4}
                w={"full"}
                onClick={() => router.push("/login")}
              >
                Have an account? Log in now
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
