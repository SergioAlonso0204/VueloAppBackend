const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el inicio de sesión
router.post('/login', authController.loginUsuario);

// Otras rutas de usuario, como registro, perfil, etc.
// Ejemplo:
// router.post('/registro', authController.registroUsuario);
// router.get('/perfil', authController.obtenerPerfilUsuario);

module.exports = router;
