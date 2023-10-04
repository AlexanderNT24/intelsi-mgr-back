const pool = require('../db');

class Product {
  static async getAllProducts() {
    const query = 'SELECT * FROM products';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createProduct(product) {
    const { product_code, quantity, size_unit, comment, image, location, category_id, brand_id } = product;
    const query = 'INSERT INTO products (product_code, quantity, size_unit, comment, image, location, category_id, brand_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const values = [product_code, quantity, size_unit, comment, image, location, category_id, brand_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

module.exports = Product;
