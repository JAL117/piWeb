import React from 'react'
import '../styles/Login.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const { usuario, setUsuario } = useState("");
  const { pass, setPass } = useState("");

  const iniciarSecion = (e) => {
    e.preventDefault();

    axios
      .get("https://api-mongo-i3fo.onrender.com/usuario")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  };

  return (
    <div className="Container">
      <div className="Fondo-login"></div>
      <div className="Formulario">
        <div>
          <div className="container2">
            <h2 className="h2P">Bienvenido</h2>
            <form onSubmit={iniciarSecion}>
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                type="text"
                placeholder="Usuario"
              />
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Contraseña"
              />
              <button className="ini" type="submit">
                Iniciar sesión
              </button>
              <p></p>
            </form>
            <p>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
