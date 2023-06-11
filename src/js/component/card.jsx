import React from "react";
import Card from "react-bootstrap/Card";


const MyCard = (props) => {
  return (
    <Card className="m-2" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title className="text-center">
          <h2>{props.title}</h2>
        </Card.Title>
        <Card.Text>
          <p>{props.description}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <a className="btn btn-primary" href={props.link} role="button">
          Find out more!
        </a>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;
