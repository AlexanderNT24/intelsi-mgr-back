const express = require('express');
const router = express.Router();
const Request = require('../models/request'); // Asegúrate de importar el modelo correcto
const pool = require('../db'); // Importa tu pool de base de datos

// Obtener todas las solicitudes
router.get('/', async (req, res) => {
  try {
    const requests = await Request.getAllRequests();
    res.json(requests);
  } catch (error) {
    console.error('Error al obtener solicitudes:', error);
    res.status(500).json({ error: 'Error al obtener solicitudes' });
  }
});

// Crear una nueva solicitud
router.post('/', async (req, res) => {
  const requestData = req.body;
  try {
    const newRequest = await Request.createRequest(requestData);
    res.status(201).json(newRequest);
  } catch (error) {
    console.error('Error al crear solicitud:', error);
    res.status(500).json({ error: 'Error al crear solicitud' });
  }
});

// Actualizar una solicitud por ID
router.put('/:requestId', async (req, res) => {
  const requestId = req.params.requestId;
  const updatedRequestData = req.body;
  try {
    const updatedRequest = await Request.updateRequest( requestId, updatedRequestData);
    res.json(updatedRequest);
  } catch (error) {
    console.error('Error al actualizar solicitud:', error);
    res.status(500).json({ error: 'Error al actualizar solicitud' });
  }
});

// Eliminar una solicitud por ID
router.delete('/:requestId', async (req, res) => {
  const requestId = req.params.requestId;
  try {
    await Request.deleteRequest( requestId);
    res.json({ message: 'Solicitud eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar solicitud:', error);
    res.status(500).json({ error: 'Error al eliminar solicitud' });
  }
});

module.exports = router;