//Adjunto la clase del 5 de octubre del 2023

//Necesitamos el controlador de la BD
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
//Crear una función que regrese un cliente conectado a MongoDB
async function conectar(url){
//Creamos una instancia de cliente para MongoDB
const cliente = new MongoClient(url);
try {
//Probamos la conexión
const conexion = await cliente.connect();
if(conexion){
console.log("Conexión exitosa")
}
//Regresamos el cliente con conexión
return cliente;
//Mensaje de error
} catch (error) {
console.log("No se pudo conectar");
}
}
//Función asíncrona para insertar, requiere datos de la BD, y el documento a insertar
async function insertarDocumento(documento,BD){
//Conectacmos la instancia cliente a la BD de la URL
const cliente = await conectar(url);
//Seleccionamos la base de datos a usar
const bd = cliente.db(BD.nombreBD);
//Seleccionamos la colección a usar
const coleccion = bd.collection(BD.coleccion);
try{
//insertamos el documento
let insertarDocumento = await coleccion.insertOne(documento);
//Mensaje de éxito
console.log("Se insertó el documento: ",insertarDocumento.insertedId);
}catch(error){
//Mensaje de error
console.log("No se pudo insertar")
}finally{
//luego de usar la conexión, la cerramos
cliente.close();
}
}

//Prueba de la inserción
//Datos de para la conexión
const BD = {
nombreBD: "famyliTrips",
coleccion: "trips"
};
//Documento a insertar
documento = {nombre: "Rodrigo", apellido: "García"};
//llamamos la función para insertar en la BD
//insertarDocumento(documento,BD);
conectar();