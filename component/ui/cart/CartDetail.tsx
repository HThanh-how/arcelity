import getStripe from "@/app/_lib/getStripe";
import WishlistContext from "@/context/WishlistContext";
import { IGame } from "@/context/WislistContextType";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Spacer,
  Text,
  Toast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

interface CartDetailType {
  list: IGame[];
}

export default function CartDetail({ list }: CartDetailType) {
  const buyCtx = useContext(WishlistContext);
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  // const [tax, setTax] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const p = list
      .map((item) => item.price)
      .reduce((sum, current) => sum + current, 0);
    const tt = p;
    setPrice(p);
    setTotal(tt);
  }, list);

  const handleStripe = async () => {
    // console.log(cartItems);
    // console.log('22222');
    // update context

    // const stripe = await getStripe();
    const { data } = await axios.post(
      "/api/getStripe",
      {
        gameList: list,
        price: total,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    window.location.assign(data);
  };

  const handleCheckout = () => {
    let oldData:IGame[] = JSON.parse(localStorage.getItem('gameBuy')!);
    console.log(JSON.stringify(oldData));
    let storage:IGame[];
    if(oldData) storage = oldData.concat(list);
    else storage = list;

    let tmp: IGame[] = [];
    storage.map((item) => {
      let i: number;
      let flag: boolean = true;
      for (i = 0; i < tmp.length; i++) {
        if (tmp[i].id === item.id) {
          flag = false;
          break;
        }
      }
      if (flag) tmp = [...tmp, item];
    });
    // console.log(JSON.stringify(tmp));
    localStorage.setItem("gameBuy", JSON.stringify(tmp))
    
    localStorage.setItem('gameBuy', JSON.stringify(storage));
    console.log(JSON.stringify(storage));
    setTimeout(() => {
      handleStripe();
    }, 3000);
  };

  return (
    <Card ml={{ sm: 0, lg: 10 }} bg={"none"} textColor={"white"} minW={250}>
      <CardHeader fontSize={25}> Games and Apps Summary</CardHeader>
      <CardBody>
        <VStack spacing={3}>
          <Flex w={"full"}>
            <Text>Price</Text>
            <Spacer />
            <Text>${price}</Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Discount</Text>
            <Spacer />
            <Text>${discount}</Text>
          </Flex>
        </VStack>
        <Divider my={5} />
        <Flex w={"full"}>
          <Text fontWeight={"bold"}>Subtotal</Text>
          <Spacer />
          <Text>${total}</Text>
        </Flex>
        <Button
          mt={5}
          bgGradient="linear(to-r, red.400,pink.400)"
          _hover={{ bg: "blue.400" }}
          textTransform={"uppercase"}
          w={"full"}
          textColor={"white"}
          onClick={handleCheckout}
        >
          check out
        </Button>
      </CardBody>
    </Card>
  );
}
