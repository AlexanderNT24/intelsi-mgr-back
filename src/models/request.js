const pool = require('../db'); // Asumiendo que 'pool' es la instancia de conexión a la base de datos

class Request {
  static async getAllRequests() {
    const query = 'SELECT * FROM request';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createRequest(request) {
    const { dateRequest, dateShipment, requestStatus, price, idProducto } = request;
    const query = 'INSERT INTO request (dateRequest, dateShipment, requestStatus, price, idProducto) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [dateRequest, dateShipment, requestStatus, price, idProducto];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
  static async updateRequest(request) {
    const { request_id, date_request, date_shipment, request_status, price, id_producto } = request;
    const query = 'UPDATE request SET date_request = $2, date_shipment = $3, request_status = $4, price = $5, id_producto = $6 WHERE request_id = $1 RETURNING *';
    const values = [request_id, date_request, date_shipment, request_status, price, id_producto];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteRequest(request_id) {
    const query = 'DELETE FROM request WHERE request_id = $1';
    const values = [request_id];
    await pool.query(query, values);
    return true; 
  }
}

module.exports = Request;
