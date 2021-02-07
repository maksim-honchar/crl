import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import Dashboard from "./Dashboard";

import Users from "./components/Users";
import MakeUser from "./components/MakeUser";
import CurrentUser from "./components/CurrentUser";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
