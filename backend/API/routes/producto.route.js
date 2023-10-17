const routeProducto = require("express").Router();
const Producto = require("../models/producto.model");

routeProducto.get("/", async (req, res) => {
  try {
    const producto = await Producto.find();
    res.json(producto);
    console.log(producto);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

routeProducto.post("/productos", async (req, res) => {
  try {
    const newProducto = await Producto.create(req.body);
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

routeProducto.put("/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    Cliente.updateMany(
      {
        _id: id,
      },
      {
        $set: {
          nombre: nombre,
          precio: precio,
          descripcion: descripcion,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});
                                            
routeProducto.delete("/producto/:productoId", async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.productoId);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

module.exports = routeProducto;
