import { Card, Col, Badge } from 'react-bootstrap';

const ProductCard = ({ img, title, price, isNew=false }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card className="h-100 rounded-3 overflow-hidden">
        <div className="border-bottom position-relative">
          <Card.Img 
            variant="top" 
            src={img} 
            alt={title} 
            style={{ height: '200px', width: '100%', objectFit: 'cover'}} 
          />
          {isNew && (<Badge bg="secondary" className="position-absolute top-0 end-0 m-2">New</Badge>)}
        </div>
        <Card.Body className="text-start">
          <Card.Title as="h3">{title}</Card.Title>
          <Card.Text as="h4">{price}€</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;