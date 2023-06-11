import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const FixedNav = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
      className="px-2"
    >
      <Container fluid>
        <Navbar.Brand href="/">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle
          onClick={toggleNavbar}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FixedNav;

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";

// function FixedNav() {
//   return (
//     <>
//       <Navbar Navbar-Collapse bg="dark" variant="dark">
//         <Container fluid>
//           <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
//           <Nav>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#service">Service</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default FixedNav;
