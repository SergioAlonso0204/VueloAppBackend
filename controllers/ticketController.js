// ticketController.js

const Ticket = require('../models/Ticket');

// Crear un nuevo ticket
exports.crearTicket = async (req, res) => {
  try {
    const nuevoTicket = new Ticket(req.body);
    await nuevoTicket.save();
    res.status(201).json(nuevoTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al crear el ticket' });
  }
};

// Obtener todos los tickets
exports.obtenerTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los tickets' });
  }
};

// Obtener un ticket por su ID
exports.obtenerTicketPorId = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      res.status(404).json({ error: 'Ticket no encontrado' });
      return;
    }
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el ticket' });
  }
};

// Actualizar un ticket por su ID
exports.actualizarTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) {
      res.status(404).json({ error: 'Ticket no encontrado' });
      return;
    }
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar el ticket' });
  }
};

// Eliminar un ticket por su ID
exports.eliminarTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndRemove(req.params.id);
    if (!ticket) {
      res.status(404).json({ error: 'Ticket no encontrado' });
      return;
    }
    res.json({ mensaje: 'Ticket eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el ticket' });
  }
};
