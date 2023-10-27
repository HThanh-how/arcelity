import axios from "axios";
import { useEffect, useState } from "react";

interface IGameComment {
  commentId: string;
  gameId: string;
}

interface IComment {
  commentId: string;
  content: string;
  cmtDateTime: string;
  userId: string;
}

const useGameCommentIdApi = (gameID: string) => {
  const url = "https://game-be-crud.vercel.app/comment_game/get/game" + gameID;
  const [commendIdData, setCommendIdData] = useState<IGameComment[]>([
    { commentId: "", gameId: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCommendIdData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ commendIdData, isLoading, isError }];
};

const useGameCommentApi = (gameID: string) => {
  const [{ commendIdData }] = useGameCommentIdApi(gameID);
  const url =
    "https://game-be-crud.vercel.app/comment/get/" + commendIdData[0].commentId;
  const [data, setData] = useState<IComment[]>([
    { commentId: "", content: "", cmtDateTime: "", userId: "" },
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

export default useGameCommentApi;
