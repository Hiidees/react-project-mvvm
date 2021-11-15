import { observer } from "mobx-react-lite";
import { ILoginControllerProps } from "../../@types/props/controllers/ILoginControllerProps";
import Register from "../../views/Pages/Register/Register";
import { useHistory } from "react-router-dom";
import { ISignupControllerProps } from "../../@types/props/controllers/ISignupControllerProps";

export function RegisterController(props: ISignupControllerProps) {
  const { LoginViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    await LoginViewModel.fetchSession(email, password);

    if (LoginViewModel.session.accessToken) {
      history.push("/userslist");
    } else {
      history.push("/signup");
    }
  }
  function onClickCloseAlert() {
    LoginViewModel.flushErrorMessages();
  }

  return (
    <div>
      <div>
        <Register></Register>
      </div>
    </div>
  );
}

export default observer(RegisterController);
