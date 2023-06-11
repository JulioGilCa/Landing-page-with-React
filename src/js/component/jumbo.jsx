import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Jumboview() {
  return (
    <>
      <Container className="bg-light p-4 my-2">
        <h1 className="fs-1">A Warm Welcome!!!</h1>
        <p className="text-align-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          velit vel ut tempora accusantium voluptas ipsa tempore quasi natus.
          Reprehenderit beatae, placeat facere commodi eveniet quaerat quia quod
          earum et!
        </p>
        <Button variant="primary">Call to Action</Button>
      </Container>
    </>
  );
}

export default Jumboview;