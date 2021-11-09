import { default as UsersListController } from '../controllers/UsersListController';
import UsersViewModel from '../view-models/UsersViewModel';


export default function UsersListProvider() {
  const usersViewModel = new UsersViewModel();

  return (
    <div>
      <UsersListController usersViewModel={usersViewModel}></UsersListController>
    </div>
  );
}
