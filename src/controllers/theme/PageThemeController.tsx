import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { IPageThemeControllerProps } from "../../@types/props/controllers/IPageThemeControllerProps";
import PageTheme from "../../views/Components/Theme/PageTheme";

export function PageThemeController(
  props: React.PropsWithChildren<IPageThemeControllerProps>
) {
  const { PageThemeViewModel } = props;

  const history = useHistory();

  async function onClickLogout() {
    PageThemeViewModel.flushSession();
    history.push("/");
  }
  async function onClickLogin() {
    history.push("/login");
  }
  async function onClickSignup() {
    history.push("/signup");
  }
  async function onClickUserList() {
    history.push("/userslist");
  }

  return (
    <PageTheme
      session={PageThemeViewModel.session}
      onClickLogout={onClickLogout}
      onClickLogin={onClickLogin}
      onClickSignup={onClickSignup}
      onClickUserList={onClickUserList}
    >
      {props.children}
    </PageTheme>
  );
}

export default observer(PageThemeController);
