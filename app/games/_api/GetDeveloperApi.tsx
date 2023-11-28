import axios from "axios";
import { useEffect, useState } from "react";
import { IGenre, IGenreList } from "../_interface/IGenre";

const GetDevelopersApi = () => {
  const url = "https://game-be-crud.vercel.app/developer/getall";
  const [developersData, setDevelopersData] = useState<IGenre[]>([]);
  const [isDevelopersLoading, setDevelopersIsLoading] = useState(false);
  const [isDevelopersError, setDevelopersIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setDevelopersIsError(false);
      setDevelopersIsLoading(true);

      try {
        const result = await axios(url);

        setDevelopersData(result.data);
      } catch (error) {
        setDevelopersIsError(true);
      }
      setDevelopersIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ developersData, isDevelopersLoading, isDevelopersError }];
};

export default GetDevelopersApi;
