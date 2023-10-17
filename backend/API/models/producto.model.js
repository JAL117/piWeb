const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSquema = new Schema({
  nombre: { type: String, require: true },
  precio: { type: Number, require: true },
  descripcion: { type: String, require: true },
});

module.exports = mongoose.model("productos", productoSquema);
