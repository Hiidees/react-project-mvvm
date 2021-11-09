import { observer } from "mobx-react-lite";
import ILoginForm from "../@types/forms/ILoginForm";
import { ILoginControllerProps } from "../@types/props/ILoginControllerProps";
import Login from "../views/Pages/Login/Login";
import { useHistory } from "react-router-dom";

export function LoginController(props: ILoginControllerProps) {
  const { LoginViewModel } = props;
  const history = useHistory();

  async function onSubmit(props: ILoginForm): Promise<void> {
    await LoginViewModel.authenticationAsync(props);
    console.log(props);
    if (LoginViewModel._isAuthenticated) {
      history.push("/userslist"); //una prova
    } else {
      history.push("/");
    }
  }

  return (
    <div>
      <Login onSubmit={onSubmit}></Login>
    </div>
  );
}

export default observer(LoginController);
