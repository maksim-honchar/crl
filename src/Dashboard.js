import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Users from "./components/Users";
import MakeUser from "./components/MakeUser";
import CurrentUser from "./components/CurrentUser";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavBar";
import TextPage from "./components/TextPage";

export default function Dashboard() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/dashboard/users" component={Users} />
        <Route path="/dashboard/makeuser" component={MakeUser} />
        <Route path="/dashboard/currentUser/:userId" component={CurrentUser} />
        <Route path="/dashboard/editUser/:userId" component={EditUser} />
        <Route path="/dashboard/textPage" component={TextPage} />
      </Switch>
    </Router>
  );
}
