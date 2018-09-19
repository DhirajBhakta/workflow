import React from "react";
import "./navbar.css";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, Glyphicon, Button} from "react-bootstrap";

function Dropdown(){
  return <FormControl componentClass="select" placeholder="Category">
            <option value="select">Category</option>
            <option value="other">...</option>
         </FormControl>
}


export class NavBar extends React.Component{

  render(){
    return <Navbar  staticTop>
            <Navbar.Header>
                <Navbar.Brand><span id="green"><Glyphicon glyph="glyphicon glyphicon-forward" />Work</span>Flow</Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1}>
                <Dropdown></Dropdown>
              </NavItem>
              <NavItem eventKey={1}>
                <Dropdown></Dropdown>
              </NavItem>
              <NavItem eventKey={1}>
                <Dropdown></Dropdown>
              </NavItem>
              <NavItem>
                <Button bsStyle="primary">Go</Button>
              </NavItem>
            </Nav>

          </Navbar>;
  }
}
