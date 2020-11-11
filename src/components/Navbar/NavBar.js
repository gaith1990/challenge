import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'

function NavBar(props) {
  function handelChange(e) {
    props.setSearch(e.target.value);
  }
  return (
    <Navbar  variant="dark">
      <Navbar.Brand href="#home">Nighttime Drinks</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/AboutUs">
          <Nav.Link href="#features">About Us</Nav.Link>
        </Link>
      </Nav>
      <Form inline>
        <FormControl
          onChange={handelChange}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavBar;
