import { observer } from "mobx-react-lite";
import { ILoginControllerProps } from "../@types/props/controllers/ILoginControllerProps";
import Login from "../views/Pages/Login/Login";
import { useHistory } from "react-router-dom";

export function LoginController(props: ILoginControllerProps) {
  const { LoginViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    await LoginViewModel.fetchSession(email, password);
    console.log(LoginViewModel.isAuthenticating);

    if (LoginViewModel.session.accessToken) {
      history.push("/userslist");
    } else {
      history.push("/");
    }
  }

  return (
    <div>
      <Login
        errorMessage={LoginViewModel.errorMessage}
        onSubmit={onSubmit}
        isAuthenticating={LoginViewModel.isAuthenticating}
      ></Login>
    </div>
  );
}

export default observer(LoginController);
