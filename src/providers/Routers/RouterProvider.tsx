import { BrowserRouter, Route, Switch } from "react-router-dom";
import GuestRouter from "../../views/Routers/GuestRouter";
import LoginProvider from "../PagesProvider/LoginProvider";
import RegisterProvider from "../PagesProvider/RegisterProvider";
import UsersListProvider from "../PagesProvider/UsersListProvider";
import RegisteredRouter from "../../views/Routers/RegisteredRouter";
import HomeProvider from "../PagesProvider/HomeProvider";
import { PageThemeViewModel } from "../../view-models/PageThemeViewModel";

export default function RouterProvider() {
  const pageThemeViewModel = new PageThemeViewModel();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeProvider} />

        <GuestRouter
          PageThemeViewModel={pageThemeViewModel}
          path="/login"
          component={LoginProvider}
        />
        <GuestRouter
          PageThemeViewModel={pageThemeViewModel}
          path="/signup"
          component={RegisterProvider}
        />
        <RegisteredRouter
          PageThemeViewModel={pageThemeViewModel}
          path="/userslist"
          component={UsersListProvider}
        />
      </Switch>
    </BrowserRouter>
  );
}
