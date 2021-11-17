import { NewSessionModel } from "../models";

export default class LoginViewModel {
  private static thisInstance: LoginViewModel;

  private readonly _newsessionModel = NewSessionModel.getInstance();

  private constructor() {
    //do nothing
  }
  public static getInstance(): LoginViewModel {
    if (!LoginViewModel.thisInstance) {
      LoginViewModel.thisInstance = new LoginViewModel();
    }
    return LoginViewModel.thisInstance;
  }

  public get errorMessages(): string[] {
    return this._newsessionModel.errorMessages;
  }
  public get isLoggingin(): boolean {
    return this._newsessionModel.isLoggingin;
  }

  public flushErrorMessages(index: number) {
    this._newsessionModel.flushErrorMessages(index);
  }

  public async loginAsync(email: string, password: string) {
    await this._newsessionModel.loginAsync(email, password);
  }

}