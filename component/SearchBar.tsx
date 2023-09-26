import { Box, Flex, Input, Button, Stack, useColorModeValue } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <Flex bg="black" alignItems={"center"}  justify={'center'} textColor={"white"} >
    <Flex  p={4} align="center">
    <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Input
            type={'text'}
            placeholder={'Tìm kiếm'}
            color={useColorModeValue('gray.200', 'gray.700')}
            bg={useColorModeValue('gray.900', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.800', 'gray.200'),
              outline: 'gray.200',
            }}
          /> 
          </Stack>
      <Flex ml={4} _hover={{color: "blue.500"}} cursor={"pointer"} >Discover</Flex>
      <Flex ml={4} _hover={{color: "blue.500"}} cursor={"pointer"}  >Browser</Flex>
      <Flex ml={4} _hover={{color: "blue.500"}} cursor={"pointer"} >News</Flex>
    </Flex>
    </Flex>
  );
};

export default SearchBar;