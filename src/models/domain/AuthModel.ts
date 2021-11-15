import { makeAutoObservable } from "mobx";
import  ISessionEntity  from "../../@types/entities/ISessionEntity";
import Cookies from 'universal-cookie';
import  AuthAdapter  from "../../adapters/AuthAdapter"; 
import AuthError from "../errors/AuthError";

export default class AuthModel{
  private static _instance: AuthModel;

  private readonly _cookies = new Cookies();
  private readonly _adapter = new AuthAdapter();
 
  private _errorMessage = '';
  private _isAuthenticating = false; 
  private _isLoggingOut = false;
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
  
  public get errorMessage(): string {
    return this._errorMessage;
  }
  private set errorMessage(value: string) {
    this._errorMessage = value;
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

  public get isLoggingOut(): boolean {
    return this._isLoggingOut;
  }
  private set isLoggingOut(isLoggingOut: boolean) {
    this._isLoggingOut = isLoggingOut;
  }

  

  public async fetchSession(email: string, password: string) {
    try {
      this.errorMessage = "";
      this.isAuthenticating = true;
      console.log(AuthModel._instance)
      console.log(" model ", this.isAuthenticating)
      this.session = await this._adapter.fetchSession(email, password);

      this._cookies.set('session', this.session, {path: '/', secure: false});
      
    } catch (err: unknown) {
      
      if (err instanceof Error) {
        this.errorMessage = err.message;
      } else if (err instanceof AuthError) {
        this.errorMessage = err.message;
      } else {
        this.errorMessage = "Unknown error";
      }

      this.flushSession();
    } finally {
      this.isAuthenticating = false;
    }
  }

  public flushSession(){
    try {
      this.isLoggingOut = true;
      //some async request to server ...
      this._cookies.remove("session");
    } catch (error) {
      //do nothing
    } finally {
      this.isLoggingOut = false;
      this.session = {} as ISessionEntity;
      
    }
  }
}
