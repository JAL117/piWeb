import React, { Component } from 'react';
import {
  Container,
  Tab,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import tacomg from '../../img/IMG_0919.jpg'


class MenuDigital extends Component {
  constructor() {
    super();
    this.state = {
      tableNumber: '',
      orderNotes: '',
      itemsInCart: [],
    };
  }

  handleTableNumberChange = (event) => {
    this.setState({ tableNumber: event.target.value });
  };

  handleOrderNotesChange = (event) => {
    this.setState({ orderNotes: event.target.value });
  };

  addToCart = (item) => {
    Swal.fire({
      title: 'Cantidad',
      input: 'number',
      inputLabel: 'Ingrese la cantidad',
      inputAttributes: {
        min: 1,
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar al carrito',
    }).then((result) => {
      if (result.isConfirmed) {
        const quantity = result.value;
        const newItem = { ...item, quantity };
        this.setState((prevState) => ({
          itemsInCart: [...prevState.itemsInCart, newItem],
        }));
      }
    });
  };

  render() {
    const menuItems = [
      {
        id: 1,
        name: 'Taco de carne',
        price: 5.99,
        image: tacomg,
        category: 'Tacos',
      },
      {
        id: 1,
        name: 'Taco de carne',
        price: 5.99,
        image: tacomg,
        category: 'Tacos',
      },
      {
        id: 1,
        name: 'Taco de carne',
        price: 5.99,
        image: tacomg,
        category: 'Tacos',
      },
      {
        id: 1,
        name: 'Taco de carne',
        price: 5.99,
        image: tacomg,
        category: 'Tacos',
      },
      {
        id: 1,
        name: 'Taco de carne',
        price: 5.99,
        image: tacomg,
        category: 'Tacos',
      },
      {
        id: 2,
        name: 'Tlayuda de pollo',
        price: 7.99,
        description: 'Tlayuda rellena de pollo y quesillo.',
        image: 'URL de la imagen',
        category: 'Tlayudas',
      },
      {
        id: 3,
        name: 'Refresco de cola',
        price: 2.49,
        description: 'Refresco de cola frío.',
        image: 'URL de la imagen',
        category: 'Refrescos',
      },
      // Agrega más elementos aquí
    ];

    const categories = [...new Set(menuItems.map((item) => item.category))];

    return (
      <Container className="m-">
      <Tab.Container id="menu-tabs" defaultActiveKey={categories[0]}>
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column m-1">
              {categories.map((category) => (
                <Nav.Item key={category}>
                  <Nav.Link eventKey={category} >  
                    {category}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col md={6}>
            <Tab.Content>
              {categories.map((category) => (
                <Tab.Pane key={category} eventKey={category}>
                  <div className="d-flex flex-wrap">
                    {menuItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className='mb-3'>
                          <Card className='m-1'>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text>
                                Precio: ${item.price}
                              </Card.Text>
                              <Button onClick={() => this.addToCart(item)} className="btn-danger !important"> {/* Agrega !important para que los estilos personalizados tengan prioridad */}
                                Comprar
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
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
            <Alert variant="danger !important"> {/* Agrega !important para que los estilos personalizados tengan prioridad */}
              <Alert.Heading>Productos en el Carrito</Alert.Heading>
              <ul>
                {this.state.itemsInCart.map((item) => (
                  <li key={item.id}>
                    {item.name} - Cantidad: {item.quantity}
                  </li>
                ))}
              </ul>
            </Alert>
            <Button variant="danger !important"> {/* Agrega !important para que los estilos personalizados tengan prioridad */}
              Enviar Pedido
            </Button>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
    );
  }
}

export default MenuDigital;

