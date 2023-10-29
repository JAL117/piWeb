import React, { Component } from 'react';
import { Col, Form, Alert, Button } from 'react-bootstrap';

class Card extends Component {
  render() {
    const { itemsInCart } = this.props;
    return (
      <Col className='mt-5 mb-5' md={3}>
        <h3>Resumen del Pedido</h3>
        <Form>
          <Form.Group>
            <Form.Label>Número de Mesa:</Form.Label>
            <Form.Control
              type="text"
              value={this.state.tableNumber}
              onChange={this.handleTableNumberChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Notas del Pedido:</Form.Label>
            <Form.Control
              as="textarea"
              value={this.state.orderNotes}
              onChange={this.handleOrderNotesChange}
            />
          </Form.Group>
        </Form>
        <Alert variant="danger !important">
          <Alert.Heading>Productos en el Carrito</Alert.Heading>
          <ul>
            {itemsInCart.map((item) => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.quantity}
              </li>
            ))}
          </ul>
        </Alert>
        <Button variant="danger !important">
          Enviar Pedido
        </Button>
      </Col>
    );
  }
}

export default Card;
