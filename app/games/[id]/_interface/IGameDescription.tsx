import { IGameReq } from "./IGameReq";

export interface IGameDescription {
  description: string;
  systemRequirements: IGameReq["systemRequirements"];
}
