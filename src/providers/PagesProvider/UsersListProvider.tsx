import { default as UsersListController } from "../../controllers/pages/UsersListController";
import UsersViewModel from "../../view-models/UsersViewModel";
import { LoginViewModel } from "../../view-models/LoginViewModel";
import { PageThemeController } from "../../controllers/theme/PageThemeController";

export default function UsersListProvider() {
  const usersViewModel = new UsersViewModel();
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <div>
      {console.log("UserListProvider")}
      <PageThemeController LoginViewModel={loginViewModel}>
        <UsersListController usersViewModel={usersViewModel} />
      </PageThemeController>
    </div>
  );
}
