const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  const product = req.body;
  try {
    const newProduct = await Product.createProduct(product);
    console.log(newProduct)
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

// Actualizar un producto por ID
router.put('/:productId', async (req, res) => {
  const productId = req.params.productId;
  const updatedProductData = req.body;
  try {
    const updatedProduct = await Product.updateProduct(productId, updatedProductData);
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// Eliminar un producto por ID
router.delete('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    await Product.deleteProduct(productId);
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

module.exports = router;
