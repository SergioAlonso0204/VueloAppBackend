const express = require('express');
const router = express.Router();
const lugarController = require('../controllers/lugarController'); // Importa el controlador de Lugar

// Rutas para Lugar
router.get('/lugares', lugarController.getAllLugares);
router.get('/lugares/:id', lugarController.getLugarById);
router.post('/lugares', lugarController.createLugar);
router.put('/lugares/:id', lugarController.updateLugar);
router.delete('/lugares/:id', lugarController.deleteLugar);

module.exports = router;