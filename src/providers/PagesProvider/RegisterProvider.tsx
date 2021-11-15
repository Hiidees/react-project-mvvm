import { default as RegisterController } from "../../controllers/pages/RegisterController";
import UsersViewModel from "../../view-models/UsersViewModel";
import { LoginViewModel } from "../../view-models/LoginViewModel";
import { PageThemeController } from "../../controllers/theme/PageThemeController";

export default function RegisterProvider() {
  //const registerViewModel = new RegisterViewModel();
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <div>
      <PageThemeController LoginViewModel={loginViewModel}>
        <RegisterController />
      </PageThemeController>
    </div>
  );
}
