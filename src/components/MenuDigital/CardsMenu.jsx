import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/MenuDigital.css";
import {FaCartArrowDown} from "react-icons/fa";

class MenuCard extends React.Component {
  mostrarAlerta = (nombre, descripcion, precio) => {
    const mensaje = `Nombre: ${nombre}\nDescripción: ${descripcion}\nPrecio: ${precio}`;
    alert(mensaje);
  };

  render() {
    const menuItems = [
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
      {
        imagen: "../src/img/Fondo-Login.png",
        nombre: "Producto ",
        descripcion: "Descripción del producto 1",
        precio: "$10.00",
      },
    ];

    return (
      <Row className="menu-cards">
        {menuItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: "10px" }}>
              <Card.Img
                variant="top"
                src={item.imagen}
                alt={`Imagen de ${item.nombre}`}
              />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text>Precio: {item.precio}</Card.Text>
                <Row className="justify-content-center">
                   <Col xs="auto">
                        <Button
                  variant="danger"
                  ls="lg"
                  onClick={() =>
                    this.mostrarAlerta(
                      item.nombre,
                      item.descripcion,
                      item.precio
                    )
                  }
                >
                  <FaCartArrowDown/>
                </Button>
                   </Col>
               
                </Row>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default MenuCard;
