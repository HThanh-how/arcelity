import {
  Card,
  CardHeader,
  Divider,
  GridItem,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGameSysReqGetIdApi from "../_api/useGameSysReqGetApi";

interface IGameSysReq {
  id: string;
}

export default function SysReq({ id }: IGameSysReq) {
  const [{ data, isLoading, isError }] = useGameSysReqGetIdApi(id);
  return (
    <Card p={10} w={"full"} bg={"whiteAlpha.300"} textColor={"white"}>
      <CardHeader w={"full"} p={0} justifyContent={"left"}>
        Windows
      </CardHeader>
      <Divider my={5} />
      <SimpleGrid columns={2} spacing={5}>
        <GridItem>
          <List spacing={5}>
            <ListItem textColor={"whiteAlpha.500"}>Minimum</ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows OS</Text>
              <Text>{data[0].os}</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Processor</Text>
              <Text>{data[0].cpu}</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Memory</Text>
              <Text>{data[0].ram}</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Storage</Text>
              <Text>{data[0].minStorage}</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Direct X</Text>
              <Text>
                DirectX: 12 Compatible video card or equivalent (feature level
                12_0)
              </Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Graphics</Text>
              <Text>
                NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB
              </Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Login Accounts Required</Text>
              <Text>EA app</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem>
          <List spacing={5}>
            <ListItem textColor={"whiteAlpha.500"}>Minimum</ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows OS</Text>
              <Text>Windows 10 64-bit</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Processor</Text>
              <Text>
                Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ
              </Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Memory</Text>
              <Text>8 GB</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Storage</Text>
              <Text>100 GB</Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Direct X</Text>
              <Text>
                DirectX: 12 Compatible video card or equivalent (feature level
                12_0)
              </Text>
            </ListItem>
            <ListItem>
              <Text textColor={"whiteAlpha.500"}>Windows Graphics</Text>
              <Text>
                NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB
              </Text>
            </ListItem>
          </List>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
