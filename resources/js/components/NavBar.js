import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "tomato",
            textDecoration: "none",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          LARAVEL REACT CRUD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/"
              style={{
                marginRight: 10,
                color: "goldenrod",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              HOME
            </Link>
            <Link
              to="/"
              style={{
                marginRight: 10,
                color: "goldenrod",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              HOME
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
