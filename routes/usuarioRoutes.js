// usuarios.js (Rutas de usuarios)

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

// Ruta para el inicio de sesión
router.post('/login', authController.loginUsuario);

// Ruta para crear un nuevo usuario
router.post('/', usuarioController.crearUsuario);

// Ruta para obtener todos los usuarios
router.get('/', usuarioController.obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', usuarioController.obtenerUsuarioPorId);

// Ruta para actualizar un usuario por su ID
router.put('/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
