import React from "react";

import GraficaPastel from "./GraficaPastel";
import { Row, Col } from "react-bootstrap";

function PanelGrafica() {
  return (
    <div>
      <Row className="panel-grafica" style={{width:'40%', marginLeft:"25%"}}>
       
          <GraficaPastel />
     
      </Row>
    </div>
  );
}

export default PanelGrafica;