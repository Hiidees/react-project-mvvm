import { IUserEntity } from "../../../@types/entities/IUserEntity";
import { IUsersListProps } from "../../../@types/props/views/IUsersListProps";

export default function UsersList(props: IUsersListProps) {
  const { isFetchingData, users, onRefreshUserlist } = props;
  {
    console.log("UserView");
  }
  return (
    <div>
      <div className="container-lg my-5 p-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 d-none d-md-block">
            <img src="/bird.png" alt="not-found" className="img-fluid " />
          </div>
          <div className="col-md-4 text-md-start ms-5">
            <button
              className="btn btn-primary"
              type="button"
              onClick={onRefreshUserlist}
              disabled={isFetchingData}
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Refresh
            </button>

            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                {users.map((user) => (
                  <UserlistRow key={user.id} user={user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IUserlistRowProps {
  user: IUserEntity;
}

function UserlistRow(props: IUserlistRowProps) {
  const { user } = props;

  return <div className="col-12">{user.email}</div>;
}
