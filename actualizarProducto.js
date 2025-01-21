// actualizaProducto.js
const db = require("@arangodb").db;

db._executeTransaction({
  collections: {
    write: "Productos"
  },
  action: function() {
    const db = require("@arangodb").db;

    // Buscar el producto por nombre
    const producto = db.Productos.firstExample({ nombre: "Laptop Ultrabook" });

    // Verifica que el producto exista antes de actualizarlo
    if (!producto) {
      throw new Error("Producto no encontrado");
    }

    // Actualizar los valores del producto
    db.Productos.update(producto._key, {
      stock: producto.stock - 5,
      precio: producto.precio + 100
    });

    // Mensaje de éxito
    return { success: true, producto: producto._key };
  }
});
