
import allGameDataAPI, { Game } from "../AllGameAPI";
import { IGameCard } from "@/app/games/_interface/IGameCard";
import useGetAllGameApi from "@/app/games/_api/useGetAllGameApi";

const searchGames = (query: string, allGameData: IGameCard[]): IGameCard[] => {

  const result: IGameCard[] = [];

  for (const game of allGameData) {
    if (game.name.toLowerCase().includes(query.toLowerCase())) {
      result.push(game);
    }
  }

  return result;
}

export default searchGames;
