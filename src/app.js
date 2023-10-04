require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.SERVER_PORT || 3001; // Usar SERVER_PORT de .env o 3000 por defecto

app.use(bodyParser.json());

// Rutas de productos
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
