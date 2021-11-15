import  ISessionEntity  from "../../entities/ISessionEntity";

export default interface INavbarViewProps{
    session: ISessionEntity
    onClickLogout: Function
    onClickLogin: Function
    onClickSignup: Function
    onClickUserList: Function
}