import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "http";



export interface Game {
    id: number;
    name: string;
    description: string;
    releaseDate: string;
    price: number;
    genres: Genre[];
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  



const allGameDataAPI = () => {
  const url = "https://game-be-v2.vercel.app/games";
  const [allGameData, setAllGameData] = useState<Game[]>([]);
  const [images, setImages] = useState<Game[]>([]);


  useEffect(() => {
    const fetchData = async () => {
    
        try {
          const response = await axios.get(url)
          const gameData: Game[] = response.data;
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
