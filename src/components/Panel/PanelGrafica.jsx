import React from "react";

import GraficaPastel from "./GraficaPastel";
import Grafica from "./GraficaBarras";
import { Row, Col } from "react-bootstrap";

function PanelGrafica() {
  return (
    <div>
      <Row className="panel-grafica">
        <Col xs={12} md={6}>
          <Grafica />
        </Col>
        <Col xs={10} md={5}>
          <GraficaPastel />
        </Col>
      </Row>
    </div>
  );
}

export default PanelGrafica;
