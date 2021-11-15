import { observer } from "mobx-react-lite";
import { ILoginControllerProps } from "../../@types/props/controllers/ILoginControllerProps";
import Login from "../../views/Pages/Login/Login";
import { useHistory } from "react-router-dom";

export function LoginController(props: ILoginControllerProps) {
  const { LoginViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    await LoginViewModel.fetchSession(email, password);
    console.log("Controller", LoginViewModel.isLogginIn);

    if (LoginViewModel.session.accessToken) {
      history.push("/userslist");
    } else {
      history.push("/login");
    }
  }
  function onClickCloseAlert() {
    LoginViewModel.flushErrorMessages();
  }

  return (
    <div>
      <Login
        errorMessages={LoginViewModel.errorMessages}
        onSubmit={onSubmit}
        onClickCloseAlert={onClickCloseAlert}
        isLogginIn={LoginViewModel.isLogginIn}
      ></Login>
    </div>
  );
}

export default observer(LoginController);
