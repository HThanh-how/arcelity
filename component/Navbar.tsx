'use client'

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
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

const Links = ['STORE', 'SUPPORT', 'CONTACT']

const NavLink = (props: Props) => {
  const router=useRouter()
  const { children } = props

  return (
    <Box
     px={2}
      py={1} 
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.800', 'gray.700'),
      }}
      onClick={()=>router.push("/")} cursor={"pointer"}
      >
      {children}
    </Box>
  )
}

export default function Simple() {
  const router=useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    
      <Box bg={useColorModeValue('#171717', 'gray.900')} px={4} textColor={"white"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box onClick={()=>router.push("/")} cursor={"pointer"}>Arcelity</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Box
     px={2}
      py={1} 
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.800', 'gray.700'),
      }}
      onClick={()=>router.push("/card")} cursor={"pointer"}
      >
      CARD
    </Box>
    <Box
     px={2}
      py={1} 
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.800', 'gray.700'),
      }}
      onClick={()=>router.push("/wishlist")} cursor={"pointer"}
      >
      WISHLIST
    </Box>
    <Box
     px={2}
      py={1} 
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.800', 'gray.700'),
      }}
      onClick={()=>router.push("/games")} cursor={"pointer"}
      >
      GAMES
    </Box>
            </HStack>
          </HStack>
          <Flex alignItems={'center'} color="#171717">
            <Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList >
                <MenuItem onClick={()=>router.push("/user")}>Profile</MenuItem>
                <MenuItem onClick={()=>router.push("/user")}>Order</MenuItem>
                <MenuItem onClick={()=>router.push("/user")}>Wishlist</MenuItem>
                <MenuItem onClick={()=>router.push("/user")}>Payment</MenuItem>
                <MenuDivider />
                <MenuItem onClick={()=>router.push("/login")}>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    
  )
}