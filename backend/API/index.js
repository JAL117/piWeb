const express = require("express");
const mongoose = require("mongoose");
const rutaProductos = require("./routes/producto.route")
const rutasUsuarios = require("./routes/usuario.route");
const rutaCliente = require("./routes/cliente.route");
const app = express();
app.use(express.json());
require("dotenv").config();
mongoose.set("strictQuery", false);

let port = 3006;

//Rutas 
app.use("/usuario", rutasUsuarios);
app.use("/cliente", rutaCliente);
app.use("/producto", rutaProductos);

app.listen(port, () => console.log("Escuchando en el puerto ", port));

//conexion
mongoose
  .connect(process.env.URL_conect)
  .then(() => console.log("conectado"))
  .catch(() => console.log("Error"));

module.exports = app;
