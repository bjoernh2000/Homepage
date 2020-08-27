import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import projList from "./Projects/projList.json";

/* This defines the actual bar going down the screen */
const StyledSideBar = styled.div`
  position: fixed;
  height: 100%;
  width: fit-content;
  background-color: #aaa;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
`;

export class SideBar extends Component {
  render() {
    return (
      <StyledSideBar>
        <NavItem projects={this.props.projects} url={this.props.match.url} />
      </StyledSideBar>
    );
  }
}

const StyledNavItem = styled.div`
  hover {
    color: "green";
  }
`;

class NavItem extends Component {
  render() {
    return (
      <StyledNavItem>
        <Link
          to={`${this.props.url}/${this.props.projects.name}`}
          style={{ maxWidth: "80px" }}
        >
          {this.props.projects.name}
        </Link>
      </StyledNavItem>
    );
  }
}

export default SideBar;
