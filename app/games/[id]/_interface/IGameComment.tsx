export interface IGameComment {
  id: number;
  ratingStar: number;
  comment: string;
  ratingDateTIme: string;
  user: {
    username: string;
  };
}
