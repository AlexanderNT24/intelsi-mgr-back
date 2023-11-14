const pool = require('../db'); // Asumiendo que 'pool' es la instancia de conexión a la base de datos

class User {
  static async getAllUsers() {
    const query = 'SELECT * FROM user_intelsi';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getUserById(userId) {
    const query = 'SELECT * FROM user_intelsi WHERE id = $1';
    const values = [userId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async createUser(user) {
    const { name, first_name, last_name, email, password, enabled, rol } = user; 
    const query = 'INSERT INTO user_intelsi (name, first_name, last_name, email, password, enabled, rol) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'; 
    const values = [name, first_name, last_name, email, password, enabled, rol]; 
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async updateUser(user) {
    const { user_id, name, first_name, last_name, email, password, enabled, rol } = user; 
    const query = 'UPDATE user_intelsi SET name = $2, first_name = $3, last_name = $4, email = $5, password = $6, enabled = $7, rol = $8 WHERE id = $1 RETURNING *'; // Cambiamos 'roles' por 'rol'
    const values = [user_id, name, first_name, last_name, email, password, enabled, rol]; 
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteUser(user_id) {
    const query = 'DELETE FROM user_intelsi WHERE id = $1';
    const values = [user_id];
    await pool.query(query, values);
    return true; 
  }
}

module.exports = User;
