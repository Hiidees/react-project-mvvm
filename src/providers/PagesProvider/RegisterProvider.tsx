import { default as RegisterController } from "../../controllers/pages/RegisterController";
import { PageThemeController } from "../../controllers/theme/PageThemeController";
import { PageThemeViewModel } from "../../view-models/PageThemeViewModel";
import { SignupViewModel } from "../../view-models/SignupViewModel";

export default function RegisterProvider() {
  const pageThemeViewModel = new PageThemeViewModel();
  const signupViewModel = new SignupViewModel();

  return (
    <div>
      <PageThemeController PageThemeViewModel={pageThemeViewModel}>
        <RegisterController SignupViewModel={signupViewModel} />
      </PageThemeController>
    </div>
  );
}
