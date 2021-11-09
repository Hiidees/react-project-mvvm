import IPageThemeViewProps from "../../../@types/props/views/IPageThemeViewProps";
import Header from "../../Components/Header/Header";

export default function PageTheme(
  props: React.PropsWithChildren<IPageThemeViewProps>
) {
  const {
    session,
    onClickLogin,
    onClickLogout,
    onClickSignup,
    onClickUserList,
  } = props;

  return (
    <div>
      <Header
        session={session}
        onClickLogout={onClickLogout}
        onClickLogin={onClickLogin}
        onClickSignup={onClickSignup}
        onClickUserList={onClickUserList}
      />
      {props.children}
    </div>
  );
}
