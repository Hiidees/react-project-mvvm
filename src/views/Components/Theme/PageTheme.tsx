import { Container } from "@mui/material";
import IPageThemeViewProps from "../../../@types/props/views/IPageThemeViewProps";
import NavBar from "../Header/NavBar";
import { ListItemButton, Typography } from "@mui/material";

export default function PageTheme(
  props: React.PropsWithChildren<IPageThemeViewProps>
) {
  const {
    session,
    onClickLogin,
    onClickLogout,
    onClickSignup,
    onClickUserList,
    handleDrawerClick,
  } = props;

  return (
    <div>
      <NavBar
        session={session}
        onClickLogout={onClickLogout}
        onClickLogin={onClickLogin}
        onClickSignup={onClickSignup}
        onClickUserList={onClickUserList}
        handleDrawerClick={handleDrawerClick}
      />

      <Container maxWidth="md" sx={{ bgcolor: "#fff4ff", boxShadow: 5 }}>
        {props.children}{" "}
      </Container>
    </div>
  );
}
