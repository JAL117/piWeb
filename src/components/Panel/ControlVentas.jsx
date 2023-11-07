import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Panel.css";

function Panel({ icon, title, value }) {
  return (
    <div className="panel">
      <Row className="panel-row">
          <p>{icon}&nbsp;{title}:&nbsp;{value}</p>
      </Row>
    </div>
  );
}

export default Panel;