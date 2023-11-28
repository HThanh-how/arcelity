"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState, createContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
}

export const IsLoginContext = createContext<boolean | null>(null);
const Links = ["STORE", "SUPPORT", "CONTACT"];

const NavLink = (props: Props) => {
  const router = useRouter();
  const { children } = props;

  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.800", "gray.700"),
      }}
      onClick={() => router.push("/")}
      cursor={"pointer"}
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const [lastTimeAccess, setLastTimeAccess] = useState("2020");
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const createdAt = new Date().toISOString();

  useEffect(() => {
    const lastAccess = localStorage.getItem("createdAt");
    if (lastAccess === null) {
      setIsLogin(false);
    } else setLastTimeAccess(lastAccess);
  }, []);
  useEffect(() => {
    if (Date.now() - new Date(lastTimeAccess).getTime() > 1800000) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [lastTimeAccess, pathname]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isLogin) {
      intervalId = setInterval(() => {
        fetch("https://game-be-v2.vercel.app/auth/refreshToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: localStorage.getItem("id"),
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const { access_token } = data;
            localStorage.setItem("access_token", access_token);
            console.log(access_token);
            const createdAt = new Date().toISOString();
            localStorage.setItem("createdAt", createdAt);
          })
          .catch((error) => {
            console.error("Lỗi:", error);
          });
      }, 1500000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLogin]);

  useEffect(() => {
    if (
      (pathname === "/login" && isLogin) ||
      (pathname === "/register" && isLogin)
    ) {
      router.replace("/");
    }
  }, [pathname, isLogin]);

  function handleLogout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("createdAt");
    setIsLogin(false);
  }

  return (
    <IsLoginContext.Provider value={isLogin}>
      <Box
        bg={useColorModeValue("#171717", "gray.900")}
        px={4}
        textColor={"white"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box onClick={() => router.push("/")} cursor={"pointer"}>
              Arcelity
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.800", "gray.700"),
                }}
                onClick={() => router.push("/cart")}
                cursor={"pointer"}
              >
                CART
              </Box>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.800", "gray.700"),
                }}
                onClick={() => router.push("/wishlist")}
                cursor={"pointer"}
              >
                WISHLIST
              </Box>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.800", "gray.700"),
                }}
                onClick={() => router.push("/games")}
                cursor={"pointer"}
              >
                GAMES
              </Box>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.800", "gray.700"),
                }}
                cursor={"pointer"}
              >
                <Link href={`https://forms.gle/ThkMbDncWqYHADmN7`}>
                  FEEDBACK
                </Link>
              </Box>
            </HStack>
          </HStack>

          <Flex alignItems={"center"} color="#171717">
            {isLogin ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => router.push("/user")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/user")}>
                    Order
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/user")}>
                    Wishlist
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/user")}>
                    Payment
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => handleLogout()}>Log out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                color="blue"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </Button>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </IsLoginContext.Provider>
  );
}
