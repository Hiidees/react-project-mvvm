import { Route, Redirect } from "react-router-dom";
import IGuestRouterProps from "../../@types/props/router/IGuestRouterProps";

export default function GuestRouter(props: IGuestRouterProps) {
  const { loginViewModel, component, path } = props;
  const token = loginViewModel.session.accessToken;

  return !token ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect from={path} to="/" />
  );
}
