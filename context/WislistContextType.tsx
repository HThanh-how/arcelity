
export interface IGame {
  id: number;
  name: string;
  price: number;
}

export type WishlistContextType = {
  favorites: IGame[];
  totalFavorites: number;
  addFavorite: (favoriteGame: IGame) => void;
  removeFavorite: (favoriteId: number) => void;
  carts: IGame[];
  totalCarts: number;
  addCart: (favoriteGame: IGame) => void;
  removeCart: (favoriteId: number) => void;
  filter: string,
  handleFilter: (keyword: string) => void;
  buy: IGame[];
  addBuy: (favoriteGame: IGame) => void;
};
