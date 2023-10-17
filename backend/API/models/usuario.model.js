const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSquema = new Schema({
  nombre: { type: String, require: true },
  rol: { type: String, require: true },
  telefono: { type: Number, require: true },
  contraseña: { type: String, require: true },
  usuario: { type: String, require: true },
});

module.exports = mongoose.model("usuarios", usuarioSquema);
