import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ButtonGroup,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ItemDropdown() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor="whiteAlpha.600"
              _hover={{ textColor: "white" }}
            >
              Genre
            </Box>
            <AccordionIcon
              textColor={"whiteAlpha.600"}
              _hover={{ textColor: "white" }}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Action
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Adventure
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Casual
            </Button>
          </VStack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor="whiteAlpha.600"
              _hover={{ textColor: "white" }}
            >
              Genre
            </Box>
            <AccordionIcon
              textColor={"whiteAlpha.600"}
              _hover={{ textColor: "white" }}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Action
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Adventure
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Casual
            </Button>
          </VStack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor="whiteAlpha.600"
              _hover={{ textColor: "white" }}
            >
              Genre
            </Box>
            <AccordionIcon
              textColor={"whiteAlpha.600"}
              _hover={{ textColor: "white" }}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Action
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Adventure
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Casual
            </Button>
          </VStack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              textColor="whiteAlpha.600"
              _hover={{ textColor: "white" }}
            >
              Genre
            </Box>
            <AccordionIcon
              textColor={"whiteAlpha.600"}
              _hover={{ textColor: "white" }}
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Action
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Adventure
            </Button>
            <Button
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              Casual
            </Button>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
