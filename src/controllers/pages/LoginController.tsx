import { observer } from "mobx-react-lite";
import { ILoginControllerProps } from "../../@types/props/controllers/ILoginControllerProps";
import Login from "../../views/Pages/Login/Login";
import { useHistory } from "react-router-dom";

export function LoginController(props: ILoginControllerProps) {
  const { LoginViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    try {
      await LoginViewModel.loginAsync(email, password);
      console.log("Controller", LoginViewModel.isLoggingin);
      history.push("/userslist");
    } catch (error) {
      history.push("/login");
    }
  }
  function onClickCloseAlert(index: number) {
    LoginViewModel.flushErrorMessages(index);
  }

  return (
    <div>
      <Login
        errorMessages={LoginViewModel.errorMessages}
        onSubmit={onSubmit}
        onClickCloseAlert={onClickCloseAlert}
        isLoggingin={LoginViewModel.isLoggingin}
      ></Login>
    </div>
  );
}

export default observer(LoginController);
