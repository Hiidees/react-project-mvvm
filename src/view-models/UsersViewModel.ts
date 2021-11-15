import { IUserEntity } from "../@types/entities/IUserEntity";
import { UsersModel } from "../models";

export default class UsersViewModel {
  private usersModel = UsersModel.getInstance();

  public get users(): IUserEntity[] {
    return this.usersModel._users;
  }

  public get _isFetchingData(): boolean {
    return this.usersModel._isFetchingData;
    
  }

  public async refreshDataAsync(): Promise<void> {
    await this.usersModel.fetchDataAsync();
  }
}