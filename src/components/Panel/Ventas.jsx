import React from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Panel from "./ControlVentas";


function MyComponent() {
  return (
    <div className="panel-container">
      <Panel
        icon={<RiEditBoxFill size={50} />}
        title="Ordenes del dia"
        value="150"
      />

      <Panel
        icon={<RiMoneyDollarCircleFill size={50} />}
        title="Ventas del dia"
        value="$120.00"
      />
    </div>
  );
}

export default MyComponent;