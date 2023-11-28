export interface IGameBuyDetail {
  price: number;
  releaseDate: string;
  developer: {
    id: number;
    name: string;
    country: string;
  };
  genres: {
    id: number;
    name: string;
  }[];
  saleDetails?: {
    discountRate: number;
    salePromotion: {
      startDate: string;
      endDate: string;
    };
  }[];
}
