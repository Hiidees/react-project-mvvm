import { observer } from "mobx-react-lite";
import Register from "../../views/Pages/Register/Register";
import { useHistory } from "react-router-dom";
import { ISignupControllerProps } from "../../@types/props/controllers/ISignupControllerProps";

export function RegisterController(props: ISignupControllerProps) {
  const { SignupViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    try {
      await SignupViewModel.addUserAsync(email, password);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  function onClickCloseAlert(index: number) {
    SignupViewModel.flushErrorMessages(index);
  }

  return (
    <div>
      <div>
        <Register
          errorMessages={SignupViewModel.errorMessages}
          onSubmit={onSubmit}
          onClickCloseAlert={onClickCloseAlert}
          isAddingUser={SignupViewModel.isAddingUser}
        ></Register>
      </div>
    </div>
  );
}

export default observer(RegisterController);
