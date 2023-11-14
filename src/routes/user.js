const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Asegúrate de importar el modelo correcto

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Obtener un usuario por ID
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.getUserById(userId);
    res.json(user);
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    res.status(500).json({ error: 'Error al obtener usuario por ID' });
  }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await User.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Actualizar un usuario por ID
router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;
  try {
    const updatedUser = await User.updateUser({ user_id: userId, ...updatedUserData });
    res.json(updatedUser);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

// Eliminar un usuario por ID
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    await User.deleteUser(userId);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
});

module.exports = router;
