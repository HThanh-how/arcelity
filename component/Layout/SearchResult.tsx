
import allGameDataAPI, { Game } from "../AllGameAPI";
import { IGameCard } from "@/app/games/_interface/IGameCard";
import useGetAllGameApi from "@/app/games/_api/useGetAllGameApi";

const searchGames = (query: string, allGameData: IGameCard[]): IGameCard[] => {
  
  if (query===null) return allGameData;
  const result: IGameCard[] = [];
  
  const filteredQuery = query.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  for (const game of allGameData) {
    const gameName = game.name.toLowerCase().replace(/\s+/g, "");
    
    if (gameName.includes(filteredQuery)) {
      result.push(game);
    }
  }
  
  return result;
}

export default searchGames;
