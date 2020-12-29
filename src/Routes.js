import React from "react";
import { Switch, Route } from "react-router-dom";
import Tags from "./feature/Tags/Tags";
import Page from "./feature/Home/Page";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routers = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Page} exact={true} />
      <Route path="/tags" component={Tags} exact={true} />
    </Switch>
  </main>
);

export default Routers;
