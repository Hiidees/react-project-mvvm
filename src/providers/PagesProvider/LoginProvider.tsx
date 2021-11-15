import { LoginController } from "../../controllers/pages/LoginController";
import { LoginViewModel } from "../../view-models/LoginViewModel";
import { PageThemeController } from "../../controllers/theme/PageThemeController";

export default function LoginProvider() {
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <div>
      <PageThemeController LoginViewModel={loginViewModel}>
        <LoginController LoginViewModel={loginViewModel}></LoginController>
      </PageThemeController>
    </div>
  );
}
