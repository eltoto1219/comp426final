import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lobby from "./lobby";
import Room from "./room";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/chat" component={Room} />
        <Route path="/" component={Lobby} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
