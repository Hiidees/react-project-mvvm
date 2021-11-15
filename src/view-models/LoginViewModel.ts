import  ISessionEntity  from "../@types/entities/ISessionEntity";
import { AuthModel } from "../models";


export class LoginViewModel {
  
  private readonly _authmodel = AuthModel.getInstance();
  private static thisInstance: LoginViewModel;

  public static getInstance(): LoginViewModel {
    if (!LoginViewModel.thisInstance) {
      LoginViewModel.thisInstance = new LoginViewModel();
    }
    return LoginViewModel.thisInstance;
  }

  public get session(): ISessionEntity{
    return this._authmodel.session;
  }

  public get isLogginIn(): boolean {
    console.log("VM Loggingin ",this._authmodel.isLoggingIn)
    return this._authmodel.isLoggingOut;

  }

  public get errorMessages(): string[] {
    return this._authmodel.errorMessages;
  }

  public async fetchSession(email: string, password: string){
    await this._authmodel.fetchSession(email, password);
    
  }

  public async flushSession() {
    await this._authmodel.flushSession();
  }

  public flushErrorMessages() {
    this._authmodel.flushErrorMessages();
  }
  
}