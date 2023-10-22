import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/Cocina.css";
import { FaTrashAlt } from "react-icons/fa";

function CardCocina() {
  const menuItems = [
    {
      producto: "Quesadillas",
      opciones: "4",
    },
    {
      producto: "Tacos",
      opciones: "4",
    },
    {
      producto: "Tlayudas",
      opciones: "4",
    },

  ];
  return (
    <Row>
      {menuItems.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "47%", backgroundColor:"rgba(211, 35, 35, 0.3)"}} className="card">
          <Card.Body>
            <div className="">
              <Card.Title style={{ fontSize: "25px" }}>
                {item.producto}
              </Card.Title>
            </div>
            <Card.Subtitle style={{marginTop:"10px"}}>Opciones: &nbsp;&nbsp;{item.opciones}</Card.Subtitle>
            <div className="botones">
              <Button variant="danger" style={{marginTop:"20px"}}>
                <FaTrashAlt size={25} />
              </Button>
            </div>
          </Card.Body>
        </Card>
        </Col>
      ))}
      <Col>
      <Card style={{width: "110px", height:"110px", textAlign:"center", backgroundColor:"rgba(211, 15, 35, 0.85)"}}>
        <Card.Body>
          <Button variant="danger" style={{ fontSize: "45px", width:"80px"  }}>
            +
          </Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
  );
}

export default CardCocina;
