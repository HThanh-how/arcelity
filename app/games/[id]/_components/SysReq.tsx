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
import { IGameReq } from "../_interface/IGameReq";

export default function SysReq(systemRequirements: IGameReq) {
  return (
    <Card p={10} w={"full"} bg={"whiteAlpha.300"} textColor={"white"}>
      <CardHeader w={"full"} p={0} justifyContent={"left"}>
        Windows
      </CardHeader>
      <Divider my={5} />
      <SimpleGrid columns={2} spacing={5}>
        {systemRequirements.systemRequirements.map((sysReq) => (
          <GridItem key={sysReq.reqType}>
            <List spacing={5}>
              <ListItem textColor={"whiteAlpha.500"}>
                {sysReq.reqType === "MIN" ? "Minimum" : "Recommend"}
              </ListItem>
              <ListItem>
                <Text textColor={"whiteAlpha.500"}>Windows OS</Text>
                <Text>{sysReq.os}</Text>
              </ListItem>
              <ListItem>
                <Text textColor={"whiteAlpha.500"}>Windows Processor</Text>
                <Text>{sysReq.cpu}</Text>
              </ListItem>
              <ListItem>
                <Text textColor={"whiteAlpha.500"}>Windows Memory</Text>
                <Text>{sysReq.ram} GB</Text>
              </ListItem>
              <ListItem>
                <Text textColor={"whiteAlpha.500"}>Windows Storage</Text>
                <Text>{sysReq.minStorage} GB</Text>
              </ListItem>
              <ListItem>
                <Text textColor={"whiteAlpha.500"}>Windows Graphics</Text>
                <Text>{sysReq.gpu}</Text>
              </ListItem>
            </List>
          </GridItem>
        ))}
      </SimpleGrid>
    </Card>
  );
}
