import { IUserEntity } from "../entities/IUserEntity";

export interface IUsersListProps {
  isFetchingData: boolean,
  users: IUserEntity[],
  onRefreshUserlist: any
}