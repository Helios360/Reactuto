import { Card, Col, Badge } from 'react-bootstrap';

const ProductCard = ({ img, title, price, isNew=false }) => {
  return (
    <Col xs={12} sm={6} md={4} mb-4>
      <Card>
          <Card.Img src={img} className="w-100 h-200" />
          {isNew && (<Badge bg="secondary" className="position-absolute top-0 end-0 m-2">New</Badge>)}
        <Card.Body text-start>
          <Card.Title as="h3">{title}</Card.Title>
          <Card.Text as="h4">{price}€</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;