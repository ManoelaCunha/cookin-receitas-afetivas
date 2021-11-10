import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' >
        <Welcome />
      </Route>
      <Route exact path='/login' >
        <Login />
      </Route>
      <Route exact path='/signup' >
        <SignUp />
      </Route>
      <Route exact path='/dashboard' >
        <Dashboard />
      </Route>
    </Switch>
  );
};
