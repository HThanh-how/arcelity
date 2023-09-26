import { ReactElement, useState } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
  Container,
  Heading,
  HStack,
  TagLabel,
  Tag,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

export default function SimpleThreeColumns() {
  return (

    <Container maxW="7xl" bgColor={"gray.50"} py={4} my={3} borderRadius='full'>
  
<HStack spacing={8}  alignItems='right' justifyContent='space-between'>
<Heading size={"md"} justifySelf={'flex-start'}> Apple Iphone</Heading>
    <Flex justifySelf={'flex-end'} gap="20px">
    <Tag
      size={'lg'}
      colorScheme='green'
      borderRadius='full'
      // variant='solid'
      
    >
      <TagLabel>Iphone 15</TagLabel>

    </Tag>
    <Tag
      size={'lg'}

      borderRadius='full'
      // variant='solid'
      colorScheme='red'
    >
      <TagLabel>Iphone 15 Pro</TagLabel>

    </Tag>
    <Tag
      size={'lg'}

      borderRadius='full'
      // variant='solid'
      colorScheme='red'
    >
      <TagLabel>Iphone 15 Plus</TagLabel>

    </Tag>

    <Tag
    
      size={'lg'}

      borderRadius='full'
      // variant='solid'
      colorScheme='red'
    >
      <TagLabel>Iphone 15 Pro Max</TagLabel>

    </Tag>
    </Flex>
</HStack></Container>
  );
}
