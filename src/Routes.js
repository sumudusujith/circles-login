import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import  Login  from "./components/pages/Login";
import { Dashboard } from "./components/pages/Dashboard";
import { routesClass } from "./routesClass";
import reduxLogin from "./components/pages/reduxLogin";


export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={routesClass.routeToLogin} component={reduxLogin} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
    </div>
  );
};
