import React from "react";
import LoginPage from "./../components/LoginPage";
import ToDoApp from "../components/ToDoApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/todo" component={ToDoApp} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
