import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import rigoImage from "../../img/rigo-baby.jpg";

function Cardsview() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between my-3">
          <Card className="text-center">
            <Card.Header className="bg-white">
              <Card.Img variant="top" src={rigoImage} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                sapiente adipisci nihil voluptatum praesentium beatae corporis
                delectus architecto dolorem quidem necessitatibus suscipit totam
                quaerat, porro, facere, reprehenderit rerum vel rem.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary">Find out More!</Button>
            </Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Header className="bg-white">
              <Card.Img variant="top" src={rigoImage} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                sapiente adipisci nihil voluptatum praesentium beatae corporis
                delectus architecto dolorem quidem necessitatibus suscipit totam
                quaerat, porro, facere, reprehenderit rerum vel rem.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary">Find out More!</Button>
            </Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Header className="bg-white">
              <Card.Img variant="top" src={rigoImage} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                sapiente adipisci nihil voluptatum praesentium beatae corporis
                delectus architecto dolorem quidem necessitatibus suscipit totam
                quaerat, porro, facere, reprehenderit rerum vel rem.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary">Find out More!</Button>
            </Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Header className="bg-white">
              <Card.Img variant="top" src={rigoImage} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                sapiente adipisci nihil voluptatum praesentium beatae corporis
                delectus architecto dolorem quidem necessitatibus suscipit totam
                quaerat, porro, facere, reprehenderit rerum vel rem.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary">Find out More!</Button>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Cardsview;