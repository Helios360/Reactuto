import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Col, Badge, Button } from "react-bootstrap";
import "../assets/styles/Dish.scss";

const Dish = ({ img, title, price, isNew }) => {
  const { dispatch } = useContext(CartContext); // Utilisation directe de useContext
  
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card>
        <Card.Img src={img} className="w-100 h-200" />
        {isNew && <Badge bg="secondary" className="position-absolute top-0 end-0 m-2">New</Badge>}
        <Card.Body className="text-start">
          <Card.Title as="h3">{title}</Card.Title>
          <Card.Text as="h4">{price}€</Card.Text>
          <Button variant="secondary" onClick={() => dispatch({type:"increment"})}>Ajouter au panier</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dish;