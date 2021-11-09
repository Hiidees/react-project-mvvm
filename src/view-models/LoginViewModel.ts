import { IAuthEntity } from "../@types/entities/IAuthEntity";
import { IUserEntity } from "../@types/entities/IUserEntity";
import { AuthModel } from "../models";
import { useHistory } from "react-router-dom";



export class LoginViewModel {
  
  private authmodel = AuthModel.getInstance();

  public get _user(): IUserEntity | undefined {
    return this.authmodel._user;
  }

  public get _isAuthenticated(): boolean {
    return this.authmodel._isAuthenticated;
  }
 
  public async authenticationAsync(props:IAuthEntity): Promise<void> {
    await this.authmodel.authenticationAsync(props);
    console.log("authenticationAsync ViewModel");
    
    
    
  }
  
}