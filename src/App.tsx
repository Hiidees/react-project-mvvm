import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Footer from "./views/Components/Footer/Footer";

import {
  LoginProvider,
  UsersListProvider,
  RegisterProvider,
} from "./providers";

//On App.tsx we create the link to the provider
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginProvider} />
          <Route exact path="/signup" component={RegisterProvider} />
          <Route exact path="/userslist" component={UsersListProvider} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
