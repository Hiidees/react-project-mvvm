import { IRoleEntity } from "./IRoleEntity";
export interface IUserEntity {
  id: number;
  email: string;
  role: IRoleEntity
}