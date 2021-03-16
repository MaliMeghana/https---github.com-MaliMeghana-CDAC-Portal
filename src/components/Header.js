// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../logo.png";

// function Header() {
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <img alt="" src={logo} className="d-inline-block align-top" />
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav.Link href="/">User</Nav.Link>
//           <Nav.Link href="/admin">Admin</Nav.Link>
//           <Nav.Link href="/supadmin">Super Admin</Nav.Link>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;

import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <img alt="" src={logo} className="d-inline-block align-top" />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <Nav.Link href="/">User</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/supadmin">Super Admin</Nav.Link> */}
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="student">Student</NavDropdown.Item>
              <NavDropdown.Item href="admin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="supadmin">SuperAdmin</NavDropdown.Item>
            </NavDropdown>
            <Button href="/" className="" variant="secondary">
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
