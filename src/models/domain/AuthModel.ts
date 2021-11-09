import { makeAutoObservable } from "mobx";
import  ISessionEntity  from "../../@types/entities/ISessionEntity";
import Cookies from 'universal-cookie';
import  AuthAdapter  from "../../adapters/AuthAdapter"; 


export default class AuthModel{
  private static _instance: AuthModel;

  private readonly _cookies = new Cookies();
  private readonly _adapter = new AuthAdapter();
 
  private _isAuthenticating = false; 
  private _session = (this._cookies.get("session") ?? {}) as ISessionEntity;


  private constructor() {
    makeAutoObservable(this);
  }

  public static get instance(): AuthModel { 
    if (!AuthModel._instance) {
        AuthModel._instance = new AuthModel();
    }

    return AuthModel._instance;
  }
  
  public set isAuthenticating(isFetchingSession: boolean) {
    this._isAuthenticating = isFetchingSession;
  }

  public get isAuthenticating(): boolean {
    return this._isAuthenticating;
  }

  public get session(): ISessionEntity {
    return this._session;
  }

  public set session(session: ISessionEntity) {
    this._session = session;
  }

  public async fetchSession(email: string, password: string) {
    try {
      console.log("Auth Model");
      this.isAuthenticating = true;
      this.session = await this._adapter.fetchSession(email, password);
      this._cookies.set('session', this.session, {path: '/'});

    } catch (error) {
      this.session = {} as ISessionEntity;
    } finally {
      this.isAuthenticating = false;
    }
  }

  public flushSession(){
    this._cookies.remove("session");
    this.session = {} as ISessionEntity;
  }

}
