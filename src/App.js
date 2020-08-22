import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/Home';
import {About} from './components/About';
import {ErrorPage} from './components/ErrorPage';
import {Projects} from './components/Projects';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
