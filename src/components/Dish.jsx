import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProductCard = ({ img, title, price }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card className="h-100 rounded-3 overflow-hidden">
        <div className="text-center border-bottom">
          <Card.Img 
            variant="top" 
            src={img} 
            alt={title} 
            style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
          />
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