import React, { Component } from 'react';
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


/* This defines the actual bar going down the screen */
const StyledSideBar = styled.div`
position: fixed;
height: 100%;
width: fit-content;
background-color: #AAA;
padding-top: 10px;
padding-right: 10px;
padding-left: 10px;
`;

export class SideBar extends Component {
      render() {
        return (
          <StyledSideBar>
              <NavItem name={this.props.name} url={this.props.match.url}/>
          </StyledSideBar>
        );
      }
}

const StyledNavItem =styled.div`
max-width: 100px;
`

class NavItem extends Component {
    render() {
        
      return (
          <StyledNavItem>
            <Link to={`${this.props.url}/exampleTopic`}>
                {this.props.name}
            </Link>
          </StyledNavItem>
      );
    }
  }

export default SideBar
