import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footerview() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-center text-white">
        <p>CopyRight 2023</p>
        </Container>
      </Navbar>
    </>
  );
}

export default Footerview;