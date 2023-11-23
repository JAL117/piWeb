import React, { useEffect, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Panel from "./ControlVentas";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

function MyComponent() {
  const [ped, setPed] = useState([]);
  const [totalVenta, setTotalVenta] = useState(0);
  const [totalOrdenes, setTotalOrdenes] = useState(0);

  const pedidos = async () => {
    await axios
      .get("http://localhost:3006/pedidos/realizados")
      .then((result) => {
        setPed(result.data);
        setTotalOrdenes(result.data.length);
      });
  };
  const Ventas = () => {
    const suma = ped.reduce((suma, pedido) => suma + pedido.total, 0);
    setTotalVenta(suma);
  };
  useEffect(() => {
    pedidos();
  }, []);
  useEffect(() => {
    Ventas();
  }, [ped]);

  return (
    <div className="panel-container ms-5">
      <Row>
        <Col xs={12} md={6}>
          <Panel
            icon={<RiEditBoxFill size={50} />}
            title="Ordenes del día"
            value={totalOrdenes}
          />
        </Col>
        <Col xs={12} md={6}>
          <Panel
            icon={<RiMoneyDollarCircleFill size={50} />}
            title="Ventas del día"
            value={"$" + totalVenta}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MyComponent;
