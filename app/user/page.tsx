"use client";

import React, { useContext, useState, useEffect } from "react";
import Avatar from "../../component/ui/user/UserAvatar";
import { Container, Text } from "@chakra-ui/react";
import GameBuyList from "../../component/ui/user/GameBuyList";
import getFromLocalStorage from "../_lib/getFromLocalStorage";
import WishlistContext from "@/context/WishlistContext";
import { IGame } from "@/context/WislistContextType";
export default function UserPage() {
  const buyCtx = useContext(WishlistContext);
  const [gameList, setGameList] = useState<IGame[]>([]);

  useEffect(() => {
    let storage: IGame[] = JSON.parse(localStorage.getItem("gameBuy")!);
    // const listID: number[] = Array.from(
    //   new Set(storage.map((item) => item.id))
    // );
    let tmp: IGame[] = [];
    storage.map((item) => {
      let i: number;
      let flag: boolean = true;
      for (i = 0; i < tmp.length; i++) {
        if (tmp[i].id === item.id) {
          flag = false;
        }
      }
      if (flag) tmp = [...tmp, item];
    });
    // console.log(JSON.stringify(tmp));
    setGameList(tmp);
    localStorage.setItem("gameBuy", JSON.stringify(tmp))
    // console.log(JSON.stringify(gameList));
  }, []);

  return (
    <Container p={0} maxW={"75%"} my={10}>
      <Avatar />
      <GameBuyList gamelist={gameList} />
    </Container>
  );
}
