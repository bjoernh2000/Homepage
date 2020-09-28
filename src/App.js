import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { ErrorPage } from "./components/ErrorPage";
import { Projects } from "./components/Projects";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
            <Route
              path={process.env.PUBLIC_URL + "/projects"}
              component={Projects}
            />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
