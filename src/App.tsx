import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainTheme from "./views/Components/@theme/MainTheme";
import { ThemeProvider } from "@mui/material/styles";
import {
  LoginProvider,
  UsersListProvider,
  RegisterProvider,
} from "./providers";

//On App.tsx we create the link to the provider
function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginProvider} />
          <Route exact path="/signup" component={RegisterProvider} />
          <Route exact path="/userslist" component={UsersListProvider} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
