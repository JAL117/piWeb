import React from "react";
import GraficaBarras from "./GraficaBarras";
import GraficaPastel from "./GraficaPastel";
import { Row, Col } from "react-bootstrap";

function PanelGrafica() {
  return (
    <div>
      <Row className="panel-grafica">
        <Col xs={12} md={6}>
          <GraficaBarras/>
        </Col>
        <Col xs={10} md={5}>
          <GraficaPastel />
        </Col>
      </Row>
    </div>
  );
}

export default PanelGrafica;