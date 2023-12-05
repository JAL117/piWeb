import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { IoMdChatboxes, IoMdSend } from "react-icons/io";
const apiUrl = import.meta.env.VITE_API_URL;

const Messages = () => {
  const [boton, setBoton] = useState(false);
  const [mensages, setMensajes] = useState([]);
  const [mensage, setMensaje] = useState("");
  const user = JSON.parse(localStorage.getItem("Usuario"));
  const socket = io(apiUrl);

  const displayBtn = () => {
    if (boton === true) {
      setBoton(false);
    } else {
      setBoton(true);
    }
  };

  const enviarMensage = (e) => {
    e.preventDefault();
    const usuario = JSON.parse(localStorage.getItem("Usuario"));
    socket.emit("mensaje", {
      mensaje: mensage,
      usuario: usuario.usuario,
    });
    setMensaje("")
  };
  
  useEffect(() => {
    socket.on("mensaje", estado);

    return () => {
      socket.off("mensaje", estado);
    };
  }, []);

  const estado = (mensaje) => setMensajes((state) => [...state, mensaje]);

  return (
    <div className="box">
      <button onClick={displayBtn}>
        <IoMdChatboxes size={45} />
      </button>
      {boton === true ? (
        <div className="chat">
          <form onSubmit={enviarMensage}>
            <input
              placeholder="mensaje"
              type="text"
              value={mensage}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button>
              {" "}
              <IoMdSend style={{ cursor: "pointer" }} size={32} />
            </button>
          </form>
          <ul>
            {Array.isArray(mensages) &&
              mensages.map((mens, i) => (
                <>
                  <li
                    key={i}
                    className={
                      user.usuario === mens.usuario ? "message" : "message2"
                    }>
                    {user.usuario === mens.usuario ? "Tú" : mens.usuario}:&nbsp;
                    {mens.mensaje}
                  </li>
                </>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Messages;
