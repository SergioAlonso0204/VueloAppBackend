const express = require('express');
const router = express.Router();
const lugarController = require('../controllers/lugarController');

// Ruta para obtener todos los lugares
router.get('/', lugarController.obtenerTodosLosLugares);

// Ruta para obtener un lugar por ID
router.get('/:id', lugarController.obtenerLugarPorId);

// Ruta para crear un nuevo lugar
router.post('/', lugarController.crearLugar);

// Ruta para actualizar un lugar por ID
router.put('/:id', lugarController.actualizarLugar);

// Ruta para eliminar un lugar por ID
router.delete('/:id', lugarController.eliminarLugar);

module.exports = router;
