import React from "react";
import "../../styles/Panel.css";
import { RiEditBoxFill } from "react-icons/ri";
function PanelOrdenes() {
  return (
    <div>
      <div className="panel">
        <RiEditBoxFill size={50}  />
        <h1>Ordenes del dia</h1>
        <p>150</p>
      </div>
    </div>
  );
}

export default PanelOrdenes;
