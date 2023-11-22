import React from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Panel from "./ControlVentas";
import { Col, Row } from "react-bootstrap";

function MyComponent() {
  return (
    <div className="panel-container ms-5">
      <Row>
        <Col xs={12} md={6}>
          <Panel
            icon={<RiEditBoxFill size={50} />}
            title="Ordenes del dia"
            value="150"
          />
        </Col>
        <Col xs={12} md={6}>
          <Panel
            icon={<RiMoneyDollarCircleFill size={50} />}
            title="Ventas del dia"
            value="$120.00"
          />
        </Col>
      </Row>
    </div>
  );
}

export default MyComponent;
