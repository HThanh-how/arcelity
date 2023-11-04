export interface IGameInfo {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  price: number;
  developer: {
    id: number;
    name: string;
    country: string;
  };
  genres: {
    id: number;
    name: string;
  }[];
  ratings: {
    id: number;
    ratingStar: number;
    comment: string;
    ratingDateTIme: string;
    user: {
      username: string;
    };
  }[];
  systemRequirements: {
    gameId: number;
    reqType: string;
    ram: number;
    os: string;
    gpu: string;
    cpu: string;
    minStorage: number;
  }[];
  saleDetails: {
    discountRate: number;
    salePromotion: {
      startDate: string;
      endDate: string;
    };
  }[];
}
