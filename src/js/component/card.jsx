import React from "react";
import Card from "react-bootstrap/Card";

const myCard = (props) => {
  return (
    <div className="d-flex col-3 justify-content-center">
      <Card>
        <Card.Img variant="top" src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Title>
            <h2>{props.title}</h2>
          </Card.Title>
          <Card.Text>
            <p>{props.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <a class="btn btn-primary" href={props.link} role="button">
            Find out more!
          </a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default myCard;
