import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSideBar = styled.div`
  position: absolute;
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
  color: darkgreen;
`;

class NavItem extends Component {
  render() {
    const projects = this.props.projects;
    const components = [];
    for (const item of projects) {
      components.push(
        <StyledNavItem>
          <StyledLink to={`${this.props.url}/${item.name}`}>
            {item.name}
          </StyledLink>
        </StyledNavItem>
      );
    }
    return <div>{components}</div>;
  }
}

export default SideBar;
