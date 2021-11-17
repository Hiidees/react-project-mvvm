import { makeObservable, observable } from "mobx";
import UserHelper from "../../helpers/UserHelper";
import SignupError from "../../utils/errors/SignupError";
import { IUserEntity } from "../../@types/entities/IUserEntity";

export default class UserModel {
  private static thisInstance: UserModel;

  private readonly _userHelper = new UserHelper();

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

  public get isAddingUser(){
    return this._isAddingUser;
  }

  public set isAddingUser(value){
    this._isAddingUser = value;
  }
  //#endregion

  private constructor() {
    makeObservable<UserModel, "_errorMessages" | "_isGettingUser" | "_isAddingUser" | "_isDeletingUser" | "_isUpdatingUser">(this, {
      _errorMessages: observable,
      _isGettingUser: observable,
      _isAddingUser: observable,
      _isDeletingUser: observable,
      _isUpdatingUser: observable,
    });
  }
  public static getInstance(): UserModel {
    if (!UserModel.thisInstance) {
      UserModel.thisInstance = new UserModel();
    }
    return UserModel.thisInstance;
  }

  public async getUserAsync(userId: number): Promise<IUserEntity> {
    try {
      this.isGettingUser = true;
      this.errorMessages = [];

      const authResponse = await this._userHelper.getUserAsync(userId);
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
      if (err instanceof SignupError) {
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
    try{
      this.isAddingUser = true;
      this.errorMessages = [];
      
      

      const addUserResponse = await this._userHelper.signupAsync(email,password);
      const user = {
        id: addUserResponse.data.id,
        email: addUserResponse.data.email,
        role: {
          id: addUserResponse.data.role.id,
          title: addUserResponse.data.role.title,
          description: addUserResponse.data.role.description
        }
      };

     
      
    } catch (err: unknown){
      
      if (err instanceof SignupError) {
        this.errorMessages = err.errorResponse.errors;
      } else if (err instanceof Error) {
        this.errorMessages = [err.message];
      } else {
        this.errorMessages = ["Unknown error"];
      }
      throw err;

    } finally {

      this.isAddingUser = false;

    }
  }

  public flushErrorMessages(index: number) {
    const errorMessagesTmp = [...this.errorMessages];
    errorMessagesTmp.splice(index,1);
    this.errorMessages = errorMessagesTmp;
  }
}
