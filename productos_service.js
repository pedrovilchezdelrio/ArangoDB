'use strict';
const createRouter = require('@arangodb/foxx/router');
const db = require('@arangodb').db;

const router = createRouter();
module.context.use(router);

// Endpoint GET para obtener todos los productos
router.get('/productos', function (req, res) {
  const productos = db._collection('Productos'); // Obtén la colección "Productos"
  if (!productos) {
    res.throw(404, 'La colección Productos no existe.');
  }
  res.send(productos.all().toArray()); // Convierte los resultados a un array JSON
})
.response(['application/json'], 'Lista de productos.')
.summary('Obtener productos')
.description('Devuelve una lista de todos los productos disponibles en la colección.');

