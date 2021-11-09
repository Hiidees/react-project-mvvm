import { makeAutoObservable } from "mobx";
import { ISessionEntity } from "../../@types/entities/ISessionEntity";
import { IAuthEntity } from "../../@types/entities/IAuthEntity";
import { IUserEntity } from "../../@types/entities/IUserEntity";
import { AuthAdapter } from "../../adapters/AuthAdapter"; 
import UsersAdapter from "../../adapters/UsersAdapter";

export class AuthModel{
  private static instance: AuthModel;
  private adapter = new AuthAdapter();
  private adapterUser = new UsersAdapter();
  

  private isAuthenticated = false; 
  private user: IUserEntity | undefined;

  private constructor() {
    makeAutoObservable(this);
    
  }

  public static getInstance(): AuthModel { 
    if (!AuthModel.instance) {
        AuthModel.instance = new AuthModel();
    }

    return AuthModel.instance;
  }
  
  public get _user() {
    return this.user;
  }

  public get _isAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public async authenticationAsync(props:IAuthEntity): Promise<void> {
    console.log("authenticationAsync Model");
    this.isAuthenticated = await this.adapter.checkingUsersAsync(props);
    //disabilitare tasto login con isauthenticated
    console.log(this.isAuthenticated);
    if(this.isAuthenticated){
        this.user = await this.adapterUser.fetchUsersDetailsAsync(props.email);
    }

  }

}
