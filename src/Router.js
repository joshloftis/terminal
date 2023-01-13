import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import TerminalApp from "./pages/TerminalApp";
import NotFound from "./pages/NotFound";

export default () => (
  <>
    <BrowserRouter basename="/terminal">
      <Switch>
        <Route exact path="/">
          {window.innerWidth < 600 ? <Redirect to="/home" /> : <TerminalApp />}
        </Route>
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
);
