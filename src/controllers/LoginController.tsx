import { observer } from "mobx-react-lite";
import { ILoginControllerProps } from "../@types/props/controllers/ILoginControllerProps";
import Login from "../views/Pages/Login/Login";
import { useHistory } from "react-router-dom";

export function LoginController(props: ILoginControllerProps) {
  const { LoginViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    console.log("Login Controller");
    await LoginViewModel.fetchSession(email, password);

    if (LoginViewModel.session.token) {
      history.push("/userslist");
    } else {
      history.push("/");
    }
  }

  return (
    <div>
      <Login
        onSubmit={onSubmit}
        isAuthenticating={LoginViewModel.isAuthenticating}
      ></Login>
    </div>
  );
}

export default observer(LoginController);
