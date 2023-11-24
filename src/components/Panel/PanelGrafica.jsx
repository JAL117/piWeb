import React from "react";

import GraficaPastel from "./GraficaPastel";
import Grafica from "./GraficaBarras";
import { Row, Col } from "react-bootstrap";

function PanelGrafica() {
  return (
    <div >
      <h1 className="text-center mb-5">Graficas de Ventas</h1>
      <Row className="panel-grafica justify-content-center">
       
        <Col xs={12} md={6}> <h3>Ventas por dia</h3>
          <Grafica />
        </Col>
        <Col xs={10} md={5} className="ms-5">
        <h3>Productos vendidos</h3>
          <GraficaPastel />
        </Col>
      </Row>
    </div>
  );
}

export default PanelGrafica;
