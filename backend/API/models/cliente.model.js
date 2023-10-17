const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clienteSquema = new Schema({
    Cliente_id: { type: Number, require: true },
    nombre: { type: String, require: true },
    telefono: { type: Number, require: true },
    referencia: { type: String, require: true }
  });
  
  module.exports = mongoose.model("clientes", clienteSquema);