import  ISessionEntity  from "../@types/entities/ISessionEntity";
import {  UserModel } from "../models";


export class SignupViewModel {
  
  private readonly _userModel = UserModel.getInstance();
  /* private static thisInstance: SignupViewModel;

  public static getInstance(): SignupViewModel {
    if (!SignupViewModel.thisInstance) {
      SignupViewModel.thisInstance = new SignupViewModel();
    }
    return SignupViewModel.thisInstance;
  } */

  public get isAddingUser(){
    return this._userModel.isAddingUser
  }

  public get errorMessages() : string[] {
    return this._userModel.errorMessages
  }

  public async addUserAsync(email: string, password: string){
   
    await this._userModel.addUserAsync(email, password);

  }
  
  public flushErrorMessages(index: number) {
    this._userModel.flushErrorMessages(index);
  }
  
 
}