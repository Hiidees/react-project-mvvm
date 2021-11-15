import { default as RegisterController } from "../../controllers/pages/RegisterController";
import { LoginViewModel } from "../../view-models/LoginViewModel";
import { PageThemeController } from "../../controllers/theme/PageThemeController";

export default function RegisterProvider() {
  //const registerViewModel = new RegisterViewModel();
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <div>
      <PageThemeController LoginViewModel={loginViewModel}>
        <RegisterController LoginViewModel={loginViewModel} />
      </PageThemeController>
    </div>
  );
}
