import { default as UsersListController } from "../../controllers/pages/UsersListController";
import { PageThemeController } from "../../controllers/theme/PageThemeController";
import { PageThemeViewModel } from "../../view-models/PageThemeViewModel";

export default function UsersListProvider() {
  const pageThemeViewModel = new PageThemeViewModel();

  return (
    <div>
      <PageThemeController PageThemeViewModel={pageThemeViewModel}>
        <UsersListController />
      </PageThemeController>
    </div>
  );
}
