
import { IUserEntity } from "./IUserEntity";

export interface IDataEntity{
    user:IUserEntity
    accessToken: string
    refreshToken: string
}