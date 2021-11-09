import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid">
        <div className="hstack gap-3 ms-auto">
          <button
            type="button"
            onClick={() => {
              history.push("/signup");
            }}
            className="btn btn-outline-danger"
          >
            Register
          </button>
          <div className="vr"></div>
          <button
            type="button"
            onClick={() => {
              history.push("/");
            }}
            className="btn btn-outline-success"
          >
            Login
          </button>
          <div className="vr"></div>
          <button
            type="button"
            onClick={() => {
              history.push("/userslist");
            }}
            className="btn btn-outline-primary"
          >
            UserList
          </button>
        </div>
      </div>
    </nav>
  );
}
