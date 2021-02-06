import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import Users from "./components/Users";
import MakeUser from "./components/MakeUser";
import CurrentUser from "./components/CurrentUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/users" component={Users} />
        <Route path="/makeuser" component={MakeUser} />
        <Route path="/currentUser/:userId" component={CurrentUser} />
        <Route path="/editUser/:userId" component={EditUser} />
      </Switch>
    </Router>
  );
}

export default App;
