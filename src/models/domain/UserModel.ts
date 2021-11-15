import { makeAutoObservable } from "mobx";
import UsersHelper from "../../helpers/UserHelper";
import AuthenticationError from "../../utils/errors/AuthenticationError";
import ISessionEntity from "../../@types/entities/ISessionEntity";
import { IUserEntity } from "../../@types/entities/IUserEntity";

export default class UsersModel {
  private static thisInstance: UsersModel;

  private readonly _usersHelper = new UsersHelper();

  private _errorMessages: string[] = [];
  private _isGettingUser = false;
  private _isAddingUser = false;
  private _isDeletingUser = false;
  private _isUpdatingUser = false;

  //#region getter & setters
  public get errorMessages(): string[] {
    return this._errorMessages;
  }
  public set errorMessages(value: string[]) {
    this._errorMessages = value;
  }
  public get isGettingUser() {
    return this._isGettingUser;
  }
  public set isGettingUser(value) {
    this._isGettingUser = value;
  }
  //#endregion

  private constructor() {
    makeAutoObservable(this);
  }
  public static getInstance(): UsersModel {
    if (!UsersModel.thisInstance) {
      UsersModel.thisInstance = new UsersModel();
    }
    return UsersModel.thisInstance;
  }

  public async getUserAsync(userId: number): Promise<IUserEntity> {
    try {
      this.isGettingUser = true;
      this.errorMessages = [];

      const authResponse = await this._usersHelper.getUserAsync(userId);
      const user = {
        id: authResponse.data.id,
        email: authResponse.data.email,
        role: {
          id: authResponse.data.role.id,
          title: authResponse.data.role.title,
          description: authResponse.data.role.description
        }
      };

      return user;
    } catch (err: unknown) {
      if (err instanceof AuthenticationError) {
        this.errorMessages = err.errorResponse.errors;
      } else if (err instanceof Error) {
        this.errorMessages = [err.message];
      } else {
        this.errorMessages = ["Unknown error"];
      }

      throw err;
    } finally {
      this.isGettingUser = false;
    }
  }

  public async addUserAsync(email:string, password:string): Promise<void>{
    //addare user
  }

  public flushErrorMessages() {
    this.errorMessages = [];
  }
}
