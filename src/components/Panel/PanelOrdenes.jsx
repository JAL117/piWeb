import React from "react";
import "../styles/Panel.css";
import { RiEditBoxFill } from "react-icons/ri";
function PanelOrdenes() {
  return (
    <div>
      <div className="panel">
        <RiEditBoxFill />
        <h1>Ordenes del dia</h1>
      </div>
    </div>
  );
}

export default PanelOrdenes;
