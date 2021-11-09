import { LoginController } from "../controllers/LoginController";
import { LoginViewModel } from "../view-models/LoginViewModel";
import { PageThemeController } from "../controllers/PageThemeController";

export default function LoginProvider() {
  const loginViewModel = new LoginViewModel();

  return (
    <div>
      <PageThemeController LoginViewModel={loginViewModel}>
        <LoginController LoginViewModel={loginViewModel}></LoginController>
      </PageThemeController>
    </div>
  );
}
