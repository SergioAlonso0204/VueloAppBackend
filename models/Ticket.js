// ticket.js (modelo del Ticket)

const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  vuelo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vuelo',
    required: true,
  },
  persona: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona', // Si tienes un modelo de Persona
    required: true,
  },
  // Otros campos relevantes para el ticket (puedes agregar más según tus necesidades)
  fechaCompra: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
