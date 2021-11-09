import  ISessionEntity  from "../@types/entities/ISessionEntity";
import { AuthModel } from "../models";


export class LoginViewModel {
  
  private readonly _authmodel = AuthModel.instance;
  
  private static _instance: LoginViewModel;

  public get session(): ISessionEntity{
    return this._authmodel.session;
  }

  public get isAuthenticating(): boolean {
    return this._authmodel.isAuthenticating;
  }
 
  public async fetchSession(email: string, password: string){
    console.log("Login ViewModel");
    await this._authmodel.fetchSession(email, password);
  }

  public flushSession() {
    this._authmodel.flushSession();
  }

}