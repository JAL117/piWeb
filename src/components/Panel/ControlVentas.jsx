import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Panel.css";

function Panel({ icon, title, value }) {
  return (
    <Row className="panel">
      <Col className="panel-ro">
          <p>{icon}&nbsp;{title}:&nbsp;{value}</p>
      </Col>
    </Row>
  );
}

export default Panel;