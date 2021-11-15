import  ISessionEntity  from "../@types/entities/ISessionEntity";
import { AuthModel } from "../models";


export class LoginViewModel {
  
  private readonly _authmodel = AuthModel.instance;


  
  private static _instance: LoginViewModel;

  public static getInstance(): LoginViewModel {
    if (!LoginViewModel._instance) {
      LoginViewModel._instance = new LoginViewModel();
    }
    return LoginViewModel._instance;
  }

  public get session(): ISessionEntity{
    return this._authmodel.session;
  }

  public get isAuthenticating(): boolean {
    
    return this._authmodel.isAuthenticating;
  }
  public get errorMessage(): string {
    return this._authmodel.errorMessage;
  }

  public async fetchSession(email: string, password: string){
    await this._authmodel.fetchSession(email, password);
    console.log("viewmodel", this._authmodel.isAuthenticating)
  }

  public flushSession() {
    this._authmodel.flushSession();
  }

  
}