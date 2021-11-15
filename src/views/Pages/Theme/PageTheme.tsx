import { Container } from "@mui/material";
import IPageThemeViewProps from "../../../@types/props/views/IPageThemeViewProps";
import NavBar from "../../Components/Header/NavBar";

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
      <NavBar
        session={session}
        onClickLogout={onClickLogout}
        onClickLogin={onClickLogin}
        onClickSignup={onClickSignup}
        onClickUserList={onClickUserList}
      />

      <Container maxWidth="md">{props.children} </Container>
    </div>
  );
}
