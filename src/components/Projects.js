import React, { Component } from "react";
import styled from "styled-components";
import { SideBar } from "./SideBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

const StyledProj = styled.div`
  padding-left: 80px;
`;

export const Projects = ({ match }) => (
  <div>
    <SideBar name="TestProj" match={match} />
    <StyledProj>
      <Switch>
        <Route path={`${match.path}/:topicId`} component={Project} />
      </Switch>
    </StyledProj>
  </div>
);

const Project = () => (
  <div>
    <h1>Example Proj</h1>
  </div>
);
