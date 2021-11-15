import { LoginViewModel } from "../../view-models/LoginViewModel";
import { PageThemeController } from "../../controllers/theme/PageThemeController";

export default function HomeProvider() {
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <div>
      <PageThemeController
        LoginViewModel={loginViewModel}
      ></PageThemeController>
    </div>
  );
}
