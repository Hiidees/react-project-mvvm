import { IRoleEntity } from "../../../entities/IRoleEntity";

export default interface ISignupPostResponse{
    headers:{}
    data: {
        id: number,
        email: string,
        role : IRoleEntity
    }
}