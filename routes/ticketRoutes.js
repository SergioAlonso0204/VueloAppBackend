// ticketRoutes.js

const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Rutas para los tickets
router.post('/tickets', ticketController.crearTicket);
router.get('/tickets', ticketController.obtenerTickets);
router.get('/tickets/:id', ticketController.obtenerTicketPorId);
router.put('/tickets/:id', ticketController.actualizarTicket);
router.delete('/tickets/:id', ticketController.eliminarTicket);

module.exports = router;
