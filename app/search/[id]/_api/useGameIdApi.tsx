import axios from "axios";
import { useEffect, useState } from "react";
import { IGameInfo } from "../../../../component/interface/IGameInfo";

const useGameGetIdApi = (gameID: string) => {
  const url = "https://game-be-v2.vercel.app/games/getGameInfo/" + gameID;
  const [data, setData] = useState<IGameInfo>();
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
