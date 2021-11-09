import { observer } from "mobx-react-lite";
import { default as UsersListView } from "../views/Pages/UserList/UsersList";
import { IUsersListControllerProps } from "../@types/props/controllers/IUsersListControllerProps";

function UsersListController(props: IUsersListControllerProps) {
  const { usersViewModel } = props;

  function onRefreshUserlist() {
    usersViewModel.refreshDataAsync();
  }

  return (
    <div>
      <UsersListView
        users={usersViewModel.users}
        isFetchingData={usersViewModel._isFetchingData}
        onRefreshUserlist={onRefreshUserlist}
      />
    </div>
  );
}

export default observer(UsersListController);
