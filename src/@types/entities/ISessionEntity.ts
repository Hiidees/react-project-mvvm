import { IUserEntity } from "./IUserEntity";

export default interface ISessionEntity {
    user: IUserEntity;
    accessToken: string;
    refreshToken: string
  }