import { PageThemeController } from "../../controllers/theme/PageThemeController";
import { PageThemeViewModel } from "../../view-models/PageThemeViewModel";

export default function HomeProvider() {
  const pageThemeViewModel = new PageThemeViewModel();

  return (
    <div>
      <PageThemeController
        PageThemeViewModel={pageThemeViewModel}
      ></PageThemeController>
    </div>
  );
}
