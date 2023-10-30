import axios from "axios";
import { useEffect, useState } from "react";
import { IGameInfo } from "../_interface/IGameInfo";

const useGameGetIdApi = (gameID: string) => {
  const url = "https://game-be-v2.vercel.app/games/getGameInfo/" + gameID;
  const [data, setData] = useState<IGameInfo>({
    id: 0,
    name: "",
    description: "",
    releaseDate: "",
    price: 0,
    developer: {
      id: 0,
      name: "",
      country: "",
    },
    genres: [
      {
        id: 0,
        name: "",
      },
    ],
    ratings: [
      {
        id: 0,
        ratingStar: 0,
        comment: "",
        ratingDateTIme: "",
        userId: 0,
        gameId: 0,
      },
    ],
    systemRequirements: [
      {
        gameId: 0,
        reqType: "",
        ram: 0,
        os: "",
        gpu: "",
        cpu: "",
        minStorage: 0,
      },
    ],
    saleDetails: [
      {
        discountRate: 0,
        salePromotion: {
          startDate: "",
          endDate: "",
        },
      },
    ],
  });
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
