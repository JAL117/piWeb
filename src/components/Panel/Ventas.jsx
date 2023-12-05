import React, { useEffect, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Panel from "./ControlVentas";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function MyComponent() {
  const [ped, setPed] = useState([]);
  const [totalVenta, setTotalVenta] = useState(0);
  const [totalOrdenes, setTotalOrdenes] = useState(0);

  const pedidos = async () => {
    await axios
      .get(apiUrl+"pedidos/realizados")
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
    <div className="panel-container ms-2">
      <Row className="justify-content-center">
    
        <h1 className="text-center mb-2">Ventas del dia</h1>
        <Col xs={10} md={5}>
          <Panel
            icon={<RiEditBoxFill size={50} />}
            title="Ordenes"
            value={totalOrdenes}
          />
        </Col>
        <Col xs={10} md={5}>
          <Panel
            icon={<RiMoneyDollarCircleFill size={50} />}
            title="Ventas"
            value={"$" + totalVenta}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MyComponent;
