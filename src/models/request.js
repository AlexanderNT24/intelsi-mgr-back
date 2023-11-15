const pool = require('../db'); // Asumiendo que 'pool' es la instancia de conexión a la base de datos

class Request {
  static async getAllRequests() {
    const query = 'SELECT * FROM request';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createRequest(request) {
    const { dateRequest, dateShipment, requestStatus, price, idProducto, supervisorStatus, supervisor_id } = request;
    const query = 'INSERT INTO request (dateRequest, dateShipment, requestStatus, price, idProducto, supervisorStatus, supervisor_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const values = [dateRequest, dateShipment, requestStatus, price, idProducto, supervisorStatus, supervisor_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async getRequestsBySupervisor(supervisor_id) {
    const query = `
      SELECT request.*, products.*
      FROM request
      JOIN products ON request.idproducto = products.product_id
      WHERE request.supervisor_id = $1;
    `;
    const values = [supervisor_id];
    const { rows } = await pool.query(query, values);
    return rows;
  }
  
  

  static async updateRequest(request) {
    const { request_id, dateRequest, dateShipment, requestStatus, price, idProducto, supervisorStatus, supervisor_id } = request;
    const query = 'UPDATE request SET dateRequest = $2, dateShipment = $3, requestStatus = $4, price = $5, idProducto = $6, supervisorStatus = $7, supervisor_id = $8 WHERE id = $1 RETURNING *';
    const values = [request_id, dateRequest, dateShipment, requestStatus, price, idProducto, supervisorStatus, supervisor_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async updateRequestStatus(requestId, requestName) { // Cambia 'requestStatus' a 'requestName'
    const query = 'UPDATE request SET requestStatus = $2 WHERE id = $1 RETURNING *'; // Cambia 'requestStatus' a 'requestName'
    const values = [requestId, requestName]; // Cambia 'requestStatus' a 'requestName'
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteRequest(request_id) {
    const query = 'DELETE FROM request WHERE id = $1';
    const values = [request_id];
    await pool.query(query, values);
    return true; 
  }
  
}

module.exports = Request;
