//updateOne
//Actualiza un campo de un objeto
//Usando modificador/agregación $set para cambiar el valor de un campo
db.coleccion.updateOne({ _id: id }, { $set: { nombre: "Juan" } });

//updateMany
// Incrementa el campo "vecesVisto" en todos los documentos
//Usando modificador/agregación $inc para incrementar una variable en 1
db.coleccion.updateMany({}, { $inc: { vecesVisto: 1 } });

// Establece el campo "enPromocion" como true en los documentos con precio menor a 5
//Usando el modificador $lt que en realidad es un comparador "less than" o "menor qué"
db.coleccion.updateMany(
  { precio: { $lt: 5 } },
  { $set: { enPromocion: true } }
);

//replaceMany
// Reemplaza completamente el documento con _id = 10
db.coleccion.replaceOne({ _id: 10 }, { nombre: "Juan", edad: 35 });

//replaceOne
// Reemplaza completamente el documento con _id = 10
db.coleccion.replaceOne({ _id: 10 }, { nombre: "Juan", edad: 35 });

//findOneAndUpdate
// Busca un documento, incrementa el campo "ventas" y devuelve el documento actualizado
//Usando modificador/agregación $inc para incrementar una variable en 1
db.coleccion.findOneAndUpdate(
  { _id: 12 },
  { $inc: { ventas: 1 } },
  { returnDocument: "after" }
);

//deleteOne
//Para borrar el primer elemento coincidente con el criterio
db.coleccion.deleteOne({ name: "Juan" });

//deleteMany
//Para borrar el primer elemento coincidente con el criterio
db.coleccion.deleteMany({ name: "Juan" });

//Para borrar todos los elementos de una colección
db.coleccion.deleteMany({});
