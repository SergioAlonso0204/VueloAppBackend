// vueloRoutes.js

const express = require('express');
const router = express.Router();
const vueloController = require('../controllers/vueloController');

// Rutas para Vuelos
router.post('/vuelos', vueloController.crearVuelo);
router.get('/vuelos', vueloController.obtenerVuelos);
router.get('/vuelos/:id', vueloController.obtenerVueloPorId);
router.put('/vuelos/:id', vueloController.actualizarVuelo);
router.delete('/vuelos/:id', vueloController.eliminarVuelo);

module.exports = router;
