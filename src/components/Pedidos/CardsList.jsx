import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCartCheckFill } from "react-icons/bs";

function CardList({ alimentos, categoriaActual }) {
  const alimentosFiltrados =
    categoriaActual !== "tlayudas"
      ? alimentos.filter((alimento) => alimento.categoria === categoriaActual)
      : alimentos;

  return (
    <Row className="g-3 p-2">
      {alimentosFiltrados.length > 0 ? (
        alimentosFiltrados.map((alimento) => (
          <Col key={alimento.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Body>
                <h5>{alimento.nombre}</h5>
                <Button variant="success">
                  <BsFillCartCheckFill size={20} /> Agregar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>No se encontraron alimentos en esta categoría.</p>
      )}
    </Row>
  );
}

export default CardList;