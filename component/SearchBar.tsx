import { Box, Flex, Input, Button, Stack, useColorModeValue, VStack } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <Flex bg="black" alignItems={"center"} justifyContent={"center"}  textColor={"white"} pt="6" pb="2">
    
    <Flex width="70vw"  alignItems={"center"}>
          <Input
          width="400px"
            type={'text'}
            placeholder={'Tìm kiếm'}
            color={useColorModeValue('gray.200', 'gray.700')}
            bg={useColorModeValue('#171717', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.800', 'gray.200'),
              outline: 'gray.200',
            }}
          /> 
      <Flex ml={4} _hover={{color: "blue.500"}} cursor={"pointer"} >Discover</Flex>
      <Flex ml={4} _hover={{color: "blue.500"}} cursor={"pointer"}  >Browser</Flex>
      <Flex ml={4} _hover={{color: "blue.500"}} cursor={"pointer"} >News</Flex>
    
      </Flex>
    </Flex>
  ); 
};

export default SearchBar;