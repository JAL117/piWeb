const mongoose = require("mongoose");
const Cliente = require("../models/cliente.model");
const Producto = require("../models/producto.model")
 
const url ='mongodb://127.0.0.1/Cenaduria-Ardon';
 const prueba1 = async () => {
  await mongoose.connect(url);

  const newCliente = await Cliente.create({
    Cliente_id: 9612231234,
    nombre: "Juan Jose",
    telefono: 9612231234,
    referencia: "1234sadsad5678"
  });

  console.log(newCliente);
}
const prueba2 = async () => {
  await mongoose.connect(url);

  const newProducto = await Producto.create({
    nombre: "taco de pastor",
    precio: 15.50,
    descripcion: "Tortilla de maiz amarillo con carne de pastor y verdura"
  });

  console.log(newProducto);
}

const prueba3 = async () => {
  await mongoose.connect(url);

  const newProducto = await Producto.create({
    nombre: "taco deasada",
    precio: 12.2,
    descripcion: "Tortilla con carne asada y verdura"
  });

  console.log(newProducto);
}

 prueba2();