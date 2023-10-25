const pool = require('../db'); // Asumiendo que 'pool' es la instancia de conexión a la base de datos

class Project {
  static async getAllProjects() {
    const query = 'SELECT * FROM projects';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createProject(project) {
    const { name, execution_time } = project;
    const code = 'CODE_' + Math.random().toString(36).substr(2, 9); // Generar un código único
    const query = 'INSERT INTO projects (name, code, execution_time) VALUES ($1, $2, $3) RETURNING *';
    console.log(query)
    const values = [name, code, execution_time];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async updateProject(project) {
    const { project_id, name, execution_time } = project;
    const query = 'UPDATE projects SET name = $2, execution_time = $3 WHERE id = $1 RETURNING *';
    const values = [project_id, name, execution_time];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteProject(project_id) {
    const query = 'DELETE FROM projects WHERE id = $1';
    const values = [project_id];
    await pool.query(query, values);
    return true; // Puedes devolver un valor booleano u otra información según tus necesidades
  }
}

module.exports = Project;
