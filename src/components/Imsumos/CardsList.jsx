import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCartCheckFill } from "react-icons/bs";

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
            <Card style={{backgroundColor:'rgba(209, 35, 35, 0.1)'}}>
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>{alimento.nombre}</Card.Title>
                <div className="card-footer">
                  <button className="btn btn-primary">Editar</button>
                  <button className="btn btn-success m-1">Eliminar</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
     ) : null}
    </Row>
  );
}

export default CardList;
