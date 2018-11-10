import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "./component/Auth/Auth";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Nav from "./component/Nav/Nav";
import Post from "./component/Post/Post";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" component={Auth} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/post/:postid" component={Post} exact />
          <Route path="/new" component={Form} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
