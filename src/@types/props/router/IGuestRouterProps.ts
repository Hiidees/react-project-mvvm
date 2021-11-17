import { PageThemeViewModel } from "../../../view-models/PageThemeViewModel";


export default interface IGuestRouterProps {
  PageThemeViewModel: PageThemeViewModel
  component: React.ComponentType<any>;
  path: string;
}