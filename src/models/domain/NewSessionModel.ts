import { makeObservable, observable } from "mobx";
import Cookies from "universal-cookie";
import AuthenticationError from "../../utils/errors/AuthenticationError";
import AuthHelper from "../../helpers/AuthHelper";
import ISessionEntity from "../../@types/entities/ISessionEntity";
import SignupError from "../../utils/errors/SignupError";

export default class NewSessionModel {
  private static thisInstance: NewSessionModel;

  private readonly _cookies = new Cookies();
  private readonly _authHelper = new AuthHelper();

  private _isLoggingin = false;
  private _isLoggingout = false;
  private _errorMessages: string[] = [];

  public get session(): ISessionEntity | undefined {
    return this._cookies.get("session") ?? undefined;
  }

  private constructor() {
    makeObservable<NewSessionModel, "_errorMessages" | "_isLoggingin" | "_isLoggingout">(this, {
        _errorMessages: observable,
        _isLoggingin: observable,
        _isLoggingout: observable
      });
  }
  public static getInstance(): NewSessionModel {
    if (!NewSessionModel.thisInstance) {
        NewSessionModel.thisInstance = new NewSessionModel();
    }
    return NewSessionModel.thisInstance;
  }

  public get isLoggingin(): boolean {
    return this._isLoggingin;
  }
  private set isLoggingin(isLoggingin: boolean) {
    this._isLoggingin = isLoggingin;
  }

  public get isLoggingout(): boolean {
    return this._isLoggingout;
  }
  private set isLoggingout(isLoggingout: boolean) {
    this._isLoggingout = isLoggingout;
  }

  public get errorMessages(): string[] {
    return this._errorMessages;
  }
  private set errorMessages(value: string[]) {
    this._errorMessages = value;
  }

  public async loginAsync(email: string, password: string): Promise<void> {
    try {
      this.isLoggingin = true;
      this.errorMessages = [];

      const authResponse = await this._authHelper.authAsync(email, password);
      const session = {
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
      } as ISessionEntity;

      this._cookies.set('session', session, {
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

      throw err;
    } finally {
      this.isLoggingin = false;
    }
  }

  public async logoutAsync() {
    try {

      this.isLoggingout = true;
      //some async request to server ...
      this._cookies.remove("session");

    } catch (err) {

      //do nothing actually

    } finally {

      this.isLoggingout = false;

    }
  }

  public flushErrorMessages(index: number) {
    const errorMessagesTmp = [...this.errorMessages];
    errorMessagesTmp.splice(index, 1);
    this.errorMessages = errorMessagesTmp;
  }

  
}