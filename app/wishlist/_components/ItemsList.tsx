import { VStack } from "@chakra-ui/react";
import Item from "./Item";
import { useState } from "react";

export default function ItemsList() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <VStack spacing={5}>
      <Item />
      <Item />
      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundColor: "blue",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </VStack>
  );
}
