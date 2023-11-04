export interface IGameReq {
  systemRequirements: {
    gameId: number;
    reqType: string;
    ram: number;
    os: string;
    gpu: string;
    cpu: string;
    minStorage: number;
  }[];
}
