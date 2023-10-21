import axios from "axios";
import { useEffect, useState } from "react";

interface IGame {
  gameId: string;
  reqType: string;
  ram: string;
  os: string;
  gpu: string;
  cpu: string;
  minStorage: string;
}

const useGameSysReqGetIdApi = (gameID: string) => {
  const url = "https://game-be-crud.vercel.app/game_sys_req/get/game" + gameID;
  const [data, setData] = useState<IGame[]>([
    {
      gameId: "",
      reqType: "",
      ram: "",
      os: "",
      gpu: "",
      cpu: "",
      minStorage: "",
    },
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

export default useGameSysReqGetIdApi;
