import React, { Component } from "react";
import styled from "styled-components";
import { SideBar } from "./SideBar";
import { Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

import { SeeAndSay } from "./Projects/SeeAndSay";
import { Default } from "./Projects/Default";
import { SortingAlgos } from "./Projects/SortingAlgos";
import projList from "./Projects/projList.json";

const StyledProj = styled.div`
  padding-left: 100px;
  padding-top: 1em;
`;

const Components = {
  Default: Default,
  SeeAndSay: SeeAndSay,
  SortingAlgos: SortingAlgos
};

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projects: projList
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading, projects } = this.state;
    const routes = [];
    for (const item of projects) {
      routes.push(
        <Route
          path={`${this.props.match.path}/${item.name}`}
          component={Components[item.name]}
        />
      );
    }
    if (loading) {
      return <p>loading...</p>;
    } else {
      return (
        <div>
          <SideBar projects={projects} match={this.props.match} />
          <StyledProj>
            <Switch>
              <Route
                exact
                path={`${this.props.match.path}/`}
                component={Default}
              />
              {routes}
            </Switch>
          </StyledProj>
        </div>
      );
    }
  }
}

export default Projects;
