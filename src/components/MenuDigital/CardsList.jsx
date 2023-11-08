import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCartCheckFill } from 'react-icons/bs';



function CardList({ alimentos, categoriaActual }) {
  const alimentosFiltrados =
    categoriaActual !== "todos"
      ? alimentos.filter((alimento) => alimento.categoria === categoriaActual)
      : alimentos;

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {alimentosFiltrados.length > 0 ? (
        alimentosFiltrados.map((alimento) => (
          <Col key={alimento.id}>
            <Card>
              <Card.Img variant="top" src={alimento.imagenUrl} />
              <Card.Body>
                <Card.Title>{alimento.nombre}</Card.Title>
                <Button variant="danger" className="ms-5"><BsFillCartCheckFill size={20}/> Agregar</Button>
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