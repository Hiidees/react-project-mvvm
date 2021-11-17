import ISessionEntity from "../@types/entities/ISessionEntity";
import { NewSessionModel } from "../models";

export class PageThemeViewModel {
  private readonly _newsessionmodel = NewSessionModel.getInstance();

  public get session(): ISessionEntity | undefined {
    return this._newsessionmodel.session;
  }

  public async flushSession() {
    await this._newsessionmodel.logoutAsync();
  }
}
