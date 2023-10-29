import React, { Component } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

class MenuItem extends Component {
  render() {
    const { item, addToCart } = this.props;
    return (
      <Col key={item.id} xs={12} sm={6} md={4} lg={3} className='mb-3'>
        <Card className='m-1'>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <Button onClick={() => addToCart(item)} className="btn-danger !important">
              Comprar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MenuItem;
