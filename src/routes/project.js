const express = require('express');
const router = express.Router();
const Project = require('../models/project'); // Asegúrate de importar el modelo correcto
const pool = require('../db'); // Importa tu pool de base de datos

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.getAllProjects();
    res.json(projects);
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

// Crear un nuevo proyecto
router.post('/', async (req, res) => {
  const projectData = req.body;
  try {
    const newProject = await Project.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error al crear proyecto:', error);
    res.status(500).json({ error: 'Error al crear proyecto' });
  }
});

// Actualizar un proyecto por ID
router.put('/:projectId', async (req, res) => {
  const projectId = req.params.projectId;
  const updatedProjectData = req.body;
  try {
    const updatedProject = await Project.updateProject(projectId, updatedProjectData);
    res.json(updatedProject);
  } catch (error) {
    console.error('Error al actualizar proyecto:', error);
    res.status(500).json({ error: 'Error al actualizar proyecto' });
  }
});

// Eliminar un proyecto por ID
router.delete('/:projectId', async (req, res) => {
  const projectId = req.params.projectId;
  try {
    await Project.deleteProject(projectId);
    res.json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar proyecto:', error);
    res.status(500).json({ error: 'Error al eliminar proyecto' });
  }
});

module.exports = router;
