import { default as RegisterController } from "../controllers/RegisterController";
import UsersViewModel from "../view-models/UsersViewModel";
import { LoginViewModel } from "../view-models/LoginViewModel";
import { PageThemeController } from "../controllers/PageThemeController";

export default function RegisterProvider() {
  //const registerViewModel = new RegisterViewModel();
  const loginViewModel = new LoginViewModel();

  return (
    <div>
      <PageThemeController LoginViewModel={loginViewModel}>
        <RegisterController />
      </PageThemeController>
    </div>
  );
}
