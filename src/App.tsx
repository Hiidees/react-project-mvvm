import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Pages/Login/Login";
import Header from "./views/Components/Header/Header";
import Footer from "./views/Components/Footer/Footer";
import Register from "./views/Pages/Register/Register";
import { LoginProvider, UsersListProvider } from "./providers";

//On App.tsx we create the link to the provider
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginProvider} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/userslist" component={UsersListProvider} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
