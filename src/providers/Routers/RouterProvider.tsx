import { BrowserRouter, Route, Switch } from "react-router-dom";
import GuestRouter from "../../views/Routers/GuestRouter";
import { LoginViewModel } from "../../view-models/LoginViewModel";
import LoginProvider from "../PagesProvider/LoginProvider";
import RegisterProvider from "../PagesProvider/RegisterProvider";
import UsersListProvider from "../PagesProvider/UsersListProvider";
import RegisteredRouter from "../../views/Routers/RegisteredRouter";
import HomeProvider from "../PagesProvider/HomeProvider";

export default function RouterProvider() {
  const loginViewModel = LoginViewModel.getInstance();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeProvider} />

        <GuestRouter
          LoginViewModel={loginViewModel}
          path="/login"
          component={LoginProvider}
        />
        <GuestRouter
          LoginViewModel={loginViewModel}
          path="/signup"
          component={RegisterProvider}
        />
        <RegisteredRouter
          LoginViewModel={loginViewModel}
          path="/userslist"
          component={UsersListProvider}
        />
      </Switch>
    </BrowserRouter>
  );
}
