import { LoginController } from "../../controllers/pages/LoginController";
import { PageThemeController } from "../../controllers/theme/PageThemeController";
import { PageThemeViewModel } from "../../view-models/PageThemeViewModel";
import LoginViewModel from "../../view-models/LoginViewModel";

export default function LoginProvider() {
  const pageThemeViewModel = PageThemeViewModel.getInstance();
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <div>
      <PageThemeController PageThemeViewModel={pageThemeViewModel}>
        <LoginController LoginViewModel={loginViewModel}></LoginController>
      </PageThemeController>
    </div>
  );
}
