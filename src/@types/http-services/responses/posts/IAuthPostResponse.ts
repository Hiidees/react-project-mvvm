import { IUserEntity } from "../../../entities/IUserEntity";


export default interface IAuthPostResponse {
    header: {},
    data: {
        user: IUserEntity
        accessToken: string;
        refreshToken: string;
      }
}