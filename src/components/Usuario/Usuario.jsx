import React from "react";
import "../../styles/Usuario.css";
import { Card, Row, Col } from "react-bootstrap";

function Usuario(){
return(
    <div>
        <Row >
          <Col  xs={12} sm={6} md={4} lg={11}>
            <Card style={{ margin: "200px" }} className="user-cards">
              <Card.Body className="user-card-body">
                <Card.Title>Usuario</Card.Title>
                <Card.Text>Nombre:</Card.Text>
                <Card.Text>Correo:</Card.Text>
                <Card.Text>Rol: </Card.Text>
                <Row className="justify-content-center">
                   <Col xs="auto">
                   </Col>
               
                </Row>
               
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>

  )

}

export default Usuario;
