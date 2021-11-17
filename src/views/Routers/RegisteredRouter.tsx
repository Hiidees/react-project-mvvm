import { Route, Redirect } from "react-router-dom";
import IGuestRouterProps from "../../@types/props/router/IGuestRouterProps";

export default function RegisteredRouter(props: IGuestRouterProps) {
  const { PageThemeViewModel, component, path } = props;
  const session = PageThemeViewModel.session;

  return session ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect from={path} to="/" />
  );
}
