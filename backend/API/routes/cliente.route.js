const routerCliente = require("express").Router();
const Cliente = require("../models/cliente.model");

routerCliente.get("/", async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.json(cliente);
    console.log(cliente);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

routerCliente.post("/clientes", async (req, res) => {
  try {
    const newCliente = await Cliente.create(req.body);
    res.json(newCliente);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

routerCliente.put("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, telefono, referencia } = req.body;
    Cliente.updateMany(
      {
        Cliente_id: id,
      },
      {
        $set: {
          nombre: nombre,
          telefono: telefono,
          referencia: referencia,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});
routerCliente.delete("/clientes/:clienteId", async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.clienteId);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

module.exports = routerCliente;
