import { PageThemeController } from "../../controllers/theme/PageThemeController";
import { PageThemeViewModel } from "../../view-models/PageThemeViewModel";

export default function HomeProvider() {
  const pageThemeViewModel = PageThemeViewModel.getInstance();

  return (
    <div>
      <PageThemeController
        PageThemeViewModel={pageThemeViewModel}
      ></PageThemeController>
    </div>
  );
}
