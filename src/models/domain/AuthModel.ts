import { makeAutoObservable } from "mobx";
import  ISessionEntity  from "../../@types/entities/ISessionEntity";
import Cookies from 'universal-cookie';
import AuthHelper from "../../helpers/AuthHelper";
import AuthenticationError from "../../utils/errors/AuthenticationError";

export default class AuthModel{
  private static _instance: AuthModel;

  private readonly _cookies = new Cookies();
  private readonly _authHelper = new AuthHelper();
 
  private _errorMessages: string[] =[];
  private _isLoggingOut = false;
  private _isLoggingIn = false;
  private _session: ISessionEntity;

  private constructor() {
    makeAutoObservable(this);
    this._session = this._cookies.get("session") ?? {} as ISessionEntity
  }

  public static getInstance(): AuthModel { 
    if (!AuthModel._instance) {
        AuthModel._instance = new AuthModel();
    }

    return AuthModel._instance;
  }
  
  public get errorMessages(): string[] {
    return this._errorMessages;
  }
  private set errorMessages(value: string[]) {
    this._errorMessages = value;
  }


  public get session(): ISessionEntity {
    return this._session;
  }
  

  public set session(session: ISessionEntity) {
    this._session = session;
  }


  public get isLoggingIn(): boolean {
    return this._isLoggingIn;
  }
  private set isLoggingIn(isLoggingIn: boolean) {
    this._isLoggingIn = isLoggingIn;
  }



  public get isLoggingOut(): boolean {
    return this._isLoggingOut;
  }
  private set isLoggingOut(isLoggingOut: boolean) {
    this._isLoggingOut = isLoggingOut;
  }

  

  public async fetchSession(email: string, password: string) {
    try {
      this._isLoggingIn = true;
      this.errorMessages = [];

      const authResponse = await this._authHelper.authAsync(email, password);
      this.session = {
        accessToken: authResponse.data.accessToken,
        refreshToken: authResponse.data.refreshToken,
        user: {
          id: authResponse.data.user.id,
          email: authResponse.data.user.email,
          role: {
            id: authResponse.data.user.role.id,
            title: authResponse.data.user.role.title,
            description: authResponse.data.user.role.description
          }
        }
      };

      this._cookies.set('session', this.session, {
        path: '/',
        secure: true
      });
    } catch (err: unknown) {

      if (err instanceof AuthenticationError) {
        this.errorMessages = err.errorResponse.errors;
      } else if (err instanceof Error) {
        this.errorMessages = [err.message];
      } else {
        this.errorMessages = ["Unknown error"];
      }

      this.flushSession();

    } finally {

     // non funziona
      this._isLoggingIn = false;

    }
  }

  public flushSession(){
    try {
      this.isLoggingOut = true;
   
      this._cookies.remove("session");
    } catch (error) {
      
    } finally {
      this.isLoggingOut = false;
      this.session = {} as ISessionEntity;
      
    }
  }

  public flushErrorMessages() {
    this.errorMessages = [];
  }

}
