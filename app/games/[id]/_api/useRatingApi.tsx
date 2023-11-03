import axios from "axios";
import { useEffect, useState } from "react";
import getFromLocalStorage from "@/app/_lib/getFromLocalStorage";

export default function RatingApi({
  gameId,
  ratingStar,
  comment,
}: {
  gameId: number;
  ratingStar: number;
  comment: String;
}) {
  const url = `https://game-be-v2.vercel.app/ratings/${gameId}`;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const data = {
          ratingStar: ratingStar,
          comment: comment,
        };
        axios
          .request({
            headers: {
              Authorization: `Bearer ${getFromLocalStorage("access_token")}`,
            },
            method: "POST",
            data: data,
            url: url,
          })
          .then((response) => {
            setData(response.data);
          });
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return [{ data, isLoading, isError }];
}
