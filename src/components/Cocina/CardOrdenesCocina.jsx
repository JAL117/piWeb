import React from "react";
import Table from "react-bootstrap/Table";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/Cocina.css"
import { FaEdit } from "react-icons/fa";

function CardOrdenesCocina() {
    const menuItems = [
        {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        },
        {
          mesa: "2",
          orden: "13",
          cantidad: "5",
          producto: "Tacos de pastor",
          producto: 'Tacos de asada',
          total: "60",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        }, {
          mesa: "3",
          orden: "12",
          cantidad: "3",
          producto: "Tacos de pastor",
          total: "36",
        },
      ];
  return (
    <Row>
    {menuItems.map((item, index) => (
    <Card style={{ width: '35rem' }} className="card">
      <Card.Body>
        <div className="head">
        <Card.Title style={{fontSize: "25px"}}>Mesa# {item.mesa}</Card.Title>
        <Card.Title style={{fontSize: "18px"}}>Orden# {item.orden}</Card.Title>
        </div>
        <Card.Subtitle className="mb-2 text-muted">___________________________________________________________________________</Card.Subtitle>
        <Card.Text>
        <Table striped bordered hover className="tabla">
        <>
        <thead>
          <tr>
            <th></th>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>  
            <td></td>
            <td>{item.cantidad}</td>
            <td>{item.producto}</td>
            <td>{item.total}</td>
          </tr>
        </tbody>
        </>
      </Table>
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">___________________________________________________________________________</Card.Subtitle>
        <div className="botones">        
        <Button variant="primary" className="boton"> <FaEdit size={25}/>&nbsp;&nbsp; Agregar comentario</Button>
        <Button variant="primary" className="boton">Pagar</Button>
        </div>
      </Card.Body>
    </Card>

    ))}
    </Row>
  );
}

export default CardOrdenesCocina;