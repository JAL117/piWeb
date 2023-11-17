import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCartCheckFill } from "react-icons/bs";
import Animaciones from "../utils/Animaciones";

function CardList({ alimentos, categoriaActual }) {
  const alimentosFiltrados =
    categoriaActual !== "todos"
      ? alimentos.filter((alimento) => alimento.categoria === categoriaActual)
      : alimentos;

  return (
    <Row className="g-2 p-2 mt-2">
      {alimentosFiltrados.length > 0 ? (
        alimentosFiltrados.map((alimento) => (
          <Col key={alimento.id} xs={12} sm={6} md={4} lg={4}>
            <Animaciones>
              <Card style={{ backgroundColor: "rgba(209, 35, 35, 0.1)",  boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)" }}>
                {alimento.imagen && (
                  <Card.Img variant="top" src={alimento.imagen} />
                )}
                <Card.Body className="d-flex justify-content-around">
                  <div>
                    <Card.Title>{alimento.nombre}</Card.Title>
                  </div>
                  <Button
                    variant="success"
                    className="ms-2 mt-2"
                    style={{ height: "50%" }}
                  >
                    <BsFillCartCheckFill size={20} />
                  </Button>
                </Card.Body>
              </Card>
            </Animaciones>
          </Col>
        ))
      ) : (
        <h3>No hay platillos registrados.</h3>
      )}
    </Row>
  );
}

export default CardList;
