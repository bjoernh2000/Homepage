import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

export default function NavigationBar() {
  const Styles = styled.div`
    .navbar {
      background-color: #444;
      width: 100%;
    }
    a,
    .navbar-nav,
    .navbar-light .nav-link {
      color: #9eeecb;
      &:hover {
        color: white;
      }
    }
    .navbar-brand {
      font-size: 1.4em;
      padding: 10px 10px;
      display: flex;
    }
  `;
  return (
    <Styles>
      <Navbar className="navbar-brand">
        <Navbar.Brand href="/" style={{ color: "#9EEECB" }}>
          Homepage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Styles>
  );
}
