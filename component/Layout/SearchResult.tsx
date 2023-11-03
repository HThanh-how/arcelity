
import allGameDataAPI, { Game } from "../AllGameAPI";

const searchGames = (query: string, allGameData: Game[]): Game[] => {

  const result: Game[] = [];

  for (const game of allGameData) {
    if (game.name.toLowerCase().includes(query.toLowerCase())) {
      result.push(game);
    }
  }

  return result;
}

export default searchGames;
