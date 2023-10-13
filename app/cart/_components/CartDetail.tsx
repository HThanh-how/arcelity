import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function CartDetail() {
  return (
    <Card ml={{ sm: 0, lg: 10 }} bg={"none"} textColor={"white"} minW={250}>
      <CardHeader fontSize={25}> Games and Apps Summary</CardHeader>
      <CardBody>
        <VStack spacing={3}>
          <Flex w={"full"}>
            <Text>Price</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Discount</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Tax</Text>
            <Spacer />
            <Text> lmao</Text>
          </Flex>
        </VStack>
        <Divider my={5} />
        <Flex w={"full"}>
          <Text fontWeight={"bold"}>Subtotal</Text>
          <Spacer />
          <Text> lmao</Text>
        </Flex>
        <Button
          mt={5}
          bg={"blue.500"}
          _hover={{ bg: "blue.400" }}
          textTransform={"uppercase"}
          w={"full"}
          textColor={"white"}
        >
          {" "}
          check out
        </Button>
      </CardBody>
    </Card>
  );
}
