import { Route, Redirect } from "react-router-dom";
import IGuestRouterProps from "../../@types/props/router/IGuestRouterProps";

export default function RegisteredRouter(props: IGuestRouterProps) {
  const { LoginViewModel, component, path } = props;
  const token = LoginViewModel.session.accessToken;
  console.log(LoginViewModel.session.accessToken);
  return token ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect from={path} to="/" />
  );
}
