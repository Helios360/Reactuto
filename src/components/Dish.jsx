import { Card, Col, Badge, Button } from 'react-bootstrap';
import "../assets/styles/Dish.scss"
const ProductCard = ({ img, title, price, isNew=false }) => {
  const hmm = (title) => {
    alert(`Yipiiiiii! You added ${title} to the cart.`);
  }
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card>
          <Card.Img src={img} className="w-100 h-200" />
          {isNew && (<Badge bg="secondary" className="position-absolute top-0 end-0 m-2">New</Badge>)}
        <Card.Body className="text-start">
          <Card.Title as="h3">{title}</Card.Title>
          <Card.Text as="h4">{price}€</Card.Text>
          <Button variant="secondary" onClick={() => hmm(title)}>Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;