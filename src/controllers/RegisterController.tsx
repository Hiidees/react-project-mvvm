import { observer } from "mobx-react-lite";
import { ILoginControllerProps } from "../@types/props/controllers/ILoginControllerProps";
import Register from "../views/Pages/Register/Register";
import { useHistory } from "react-router-dom";

export function RegisterController() {
  /*  const { RegisterViewModel } = props;
  const history = useHistory();

  async function onSubmit(email: string, password: string) {
    console.log("Register Controller");
    await RegisterViewModel.fetchSession(email, password);

    if (RegisterViewModel.session.token) {
      history.push("/userslist");
    } else {
      history.push("/");
    }
  } */

  return (
    <div>
      <Register></Register>
    </div>
  );
}

export default observer(RegisterController);
