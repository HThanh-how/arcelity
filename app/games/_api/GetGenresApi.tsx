import axios from "axios";
import { useEffect, useState } from "react";
import { IGenre, IGenreList } from "../_interface/IGenre";

const GetGenresApi = () => {
  const url = "https://game-be-crud.vercel.app/genre/getall";
  const [genresData, setGenresData] = useState<IGenre[]>([]);
  const [isGenresLoading, setGenresIsLoading] = useState(false);
  const [isGenresError, setGenresIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setGenresIsError(false);
      setGenresIsLoading(true);

      try {
        const result = await axios(url);

        setGenresData(result.data);
      } catch (error) {
        setGenresIsError(true);
      }
      setGenresIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ genresData, isGenresLoading, isGenresError }];
};

export default GetGenresApi;
