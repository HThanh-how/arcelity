import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "http";
import { IGameCard } from "./interface/IGameCard";



const allGameDataAPI = () => {
  const url = "https://game-be-v2.vercel.app/games";
  const [allGameData, setAllGameData] = useState<IGameCard[]>([]);
  const [images, setImages] = useState<IGameCard[]>([]);


  useEffect(() => {
    const fetchData = async () => {
    
        try {
          const response = await axios.get(url)
          const gameData: IGameCard[] = response.data;
          setAllGameData(gameData);
          setImages(gameData.slice(0, 5))
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu từ API:', error);
        }
      };
      fetchData();
    }, []); 

    

  return [ allGameData, images ];
};

export default allGameDataAPI;
