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

const StyledNavItem = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
  color: #6532e6;
`;

class NavItem extends Component {
  render() {
    const projects = this.props.projects;
    const components = [];
    for (const item of projects) {
      components.push(
        <div>
          <StyledLink to={`${this.props.url}/${item.name}`}>
            {item.name}
          </StyledLink>
        </div>
      );
    }
    return <StyledNavItem>{components}</StyledNavItem>;
  }
}

export default SideBar;
