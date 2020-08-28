import React, { Component } from "react";
import styled from "styled-components";
import { SideBar } from "./SideBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

import { SeeAndSay } from "./Projects/SeeAndSay";
import { Default } from "./Projects/Default";

const StyledProj = styled.div`
  padding-left: 80px;
  padding-top: 1em;
`;

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      projects: [
        {
          id: 12,
          name: "SeeAndSay"
        },
        { id: 15, name: "Proj2" }
      ]
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading, projects } = this.state;
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
              <Route
                path={`${this.props.match.path}/:topicId`}
                component={SeeAndSay}
              />
            </Switch>
          </StyledProj>
        </div>
      );
    }
  }
}

export default Projects;
