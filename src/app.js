require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const projectRoutes = require('./routes/project');
const requestRoutes = require('./routes/request');
const userRoutes = require('./routes/user');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = process.env.SERVER_PORT || 3001; // Usar SERVER_PORT de .env o 3001 por defecto

app.use(cors()); // Habilita CORS

app.use(bodyParser.json());
// Rutas de productos
app.use('/products', productRoutes);
app.use('/project', projectRoutes);
app.use('/request', requestRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
