import  ISessionEntity  from "../../entities/ISessionEntity";

export default interface IPageThemeViewProps{
    session: ISessionEntity | undefined
    onClickLogout: Function
    onClickLogin: Function
    onClickSignup: Function
    onClickUserList: Function
}