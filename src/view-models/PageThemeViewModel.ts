import  ISessionEntity  from "../@types/entities/ISessionEntity";
import { NewSessionModel } from "../models";


export class PageThemeViewModel {
  
  private readonly _newsessionmodel = NewSessionModel.getInstance();
  /* private static thisInstance: PageThemeViewModel;

  public static getInstance(): PageThemeViewModel {
    if (!PageThemeViewModel.thisInstance) {
        PageThemeViewModel.thisInstance = new PageThemeViewModel();
    }
    return PageThemeViewModel.thisInstance;
  } */

  public get session(): ISessionEntity | undefined{
    return this._newsessionmodel.session;
  }


  public async flushSession() {
    await this._newsessionmodel.logoutAsync();
  }


  
}