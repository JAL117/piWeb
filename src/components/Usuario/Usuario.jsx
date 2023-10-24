import React from "react";
import "../../styles/Usuario.css";
import { Card, Row, Col } from "react-bootstrap";

function Usuario(){
  const menuItems = [
    {
      nombre: "Jose Saul Gomez Caballero",
      correo: "prueba123@gmail.com",
      rol: "Mesero",
    },
  ];
return(
    <div>
        <Row className="user-cards">
        {menuItems.map((item, index) => (
          <Col  xs={12} sm={6} md={4} lg={11}>
            <Card style={{ margin: "20px", color: "rgb(255, 255, 255)"}} className="card-style" >
              <Card.Body  className="user-card-body">
                <Card.Title className="titulo">Usuario</Card.Title>
                <Card.Text>Nombre: {item.nombre}</Card.Text>
                <Card.Text>Correo: {item.correo}</Card.Text>
                <Card.Text>Rol: {item.rol} </Card.Text>
                <Row className="justify-content-center">
                   <Col xs="auto">
                   </Col>
               
                </Row>
               
              </Card.Body>
            </Card>
          </Col>
          ))}
      </Row>
    </div>

  )

}

export default Usuario;
