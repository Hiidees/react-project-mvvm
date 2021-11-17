import { observer } from "mobx-react-lite";
import { default as UsersListView } from "../../views/Pages/UserList/UsersList";

function UsersListController() {
  return (
    <div>
      <UsersListView />
    </div>
  );
}

export default observer(UsersListController);
