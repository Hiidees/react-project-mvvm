import { useEffect } from "react";
import IPageThemeViewProps from "../../../@types/props/views/IPageThemeViewProps";

export default function Header(props: IPageThemeViewProps) {
  const {
    session,
    onClickLogin,
    onClickLogout,
    onClickSignup,
    onClickUserList,
  } = props;

  useEffect(() => {}, [session.token]);

  console.log(session.token);
  console.log(!session.token);
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid">
        {!session.token ? (
          <div className="hstack gap-3 ms-auto">
            <button
              type="button"
              onClick={() => onClickSignup()}
              className="btn btn-outline-danger"
            >
              Register
            </button>
            <div className="vr"></div>
            <button
              type="button"
              onClick={() => onClickLogin()}
              className="btn btn-outline-success"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="hstack gap-3 ms-auto">
            <button
              type="button"
              onClick={() => onClickLogout()}
              className="btn btn-outline-warning"
            >
              Logout
            </button>

            <div className="vr"></div>
            <button
              type="button"
              onClick={() => onClickUserList()}
              className="btn btn-outline-primary"
            >
              UserList
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
