import axios from "axios";
import { useEffect, useState } from "react";

interface IGame {
  gameId: string;
  gameName: string;
  description: string;
  releaseDate: string;
}

const useGameGetIdApi = (gameID: string) => {
  const url = "https://game-be-crud.vercel.app/game/get/game" + gameID;
  const [data, setData] = useState<IGame[]>([
    { gameId: "", gameName: "", description: "", releaseDate: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }];
};

export default useGameGetIdApi;
