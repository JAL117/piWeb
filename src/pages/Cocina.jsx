import React from "react";
import Orden from "../components/Cocina/Ordenes";
import Animaciones from "../components/utils/Animaciones";
import Messages from "../components/Domicilio/Chat/Messages";
import "../styles/Chat.css";

function Cocina() {
  return (
    <Animaciones>
      <Messages />
      <Orden />
    </Animaciones>
  );
}

export default Cocina;
