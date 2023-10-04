const pool = require('../db');

class Product {
  static async getAllProducts() {
    const query = 'SELECT * FROM products';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createProduct(product) {
    const { product_code, quantity, size_unit, comment, image, location, category_id, brand_id, state } = product; // Agregar el nuevo campo "new_field"
    const query = 'INSERT INTO products (product_code, quantity, size_unit, comment, image, location, category_id, brand_id, state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *'; // Incluir el nuevo campo en la consulta
    const values = [product_code, quantity, size_unit, comment, image, location, category_id, brand_id, state]; // Agregar el nuevo campo a los valores
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async updateProduct(product) {
    const { product_id, product_code, quantity, size_unit, comment, image, location, category_id, brand_id, state } = product;
    const query = 'UPDATE products SET product_code = $2, quantity = $3, size_unit = $4, comment = $5, image = $6, location = $7, category_id = $8, brand_id = $9, state = $10 WHERE product_id = $1 RETURNING *';
    const values = [product_id, product_code, quantity, size_unit, comment, image, location, category_id, brand_id, state];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteProduct(product_id) {
    console.log(product_id)
    const query = 'DELETE FROM products WHERE product_id = $1';
    const values = [product_id];
    await pool.query(query, values);
    return true; // Puedes devolver un valor booleano u otra información según tus necesidades
  }
}

module.exports = Product;
