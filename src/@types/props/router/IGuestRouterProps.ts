import { LoginViewModel } from "../../../view-models/LoginViewModel";

export default interface IGuestRouterProps {
  loginViewModel: LoginViewModel
  component: React.ComponentType<any>;
  path: string;
}