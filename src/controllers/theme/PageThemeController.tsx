import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { IPageThemeControllerProps } from "../../@types/props/controllers/IPageThemeControllerProps";
import PageTheme from "../../views/Components/Theme/PageTheme";
import { ListItemButton, Typography } from "@mui/material";

export function PageThemeController(
  props: React.PropsWithChildren<IPageThemeControllerProps>
) {
  const { PageThemeViewModel } = props;

  const history = useHistory();

  async function onClickLogout() {
    PageThemeViewModel.flushSession();
    history.push("/");
  }
  function onClickLogin() {
    history.push("/login");
  }
  function onClickSignup() {
    history.push("/signup");
  }
  function onClickUserList() {
    history.push("/userslist");
  }

  function handleDrawerClick(text: string) {
    if (text === "Logout") {
      onClickLogout();
    }
    if (text === "User List") {
      onClickUserList();
    }
    //aggiungere user details
  }

  return (
    <PageTheme
      session={PageThemeViewModel.session}
      onClickLogout={onClickLogout}
      onClickLogin={onClickLogin}
      onClickSignup={onClickSignup}
      onClickUserList={onClickUserList}
      handleDrawerClick={handleDrawerClick}
    >
      {props.children}
    </PageTheme>
  );
}

export default observer(PageThemeController);
