import React from "react";
import Card from "./card.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardContainer = () => {
  const cards = [
    {
      title: "Tarjeta 1",
      description: "Esta es la descripción de la tarjeta 1",
      image: "/rigo-baby.jpg",
      link: "https://ejemplo.com/tarjeta1",
    },
    {
      title: "Tarjeta 2",
      description: "Esta es la descripción de la tarjeta 2",
      image: "/rigo-baby.jpg",
      link: "https://ejemplo.com/tarjeta2",
    },
    {
      title: "Tarjeta 3",
      description: "Esta es la descripción de la tarjeta 3",
      image: "/rigo-baby.jpg",
      link: "https://ejemplo.com/tarjeta3",
    },
    {
      title: "Tarjeta 4",
      description: "Esta es la descripción de la tarjeta 4",
      image: "/rigo-baby.jpg",
      link: "https://ejemplo.com/tarjeta4",
    },
    // Puedes agregar más objetos con diferentes valores para crear más tarjetas
  ];

  return (
    <Row className="justify-content-center">
      {cards.map((card, index) => (
        <Col key={index} md="auto">
          <Card
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        </Col>
      ))}
    </Row>
  );
};

export default CardContainer;
