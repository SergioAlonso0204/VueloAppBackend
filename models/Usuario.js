const mongoose = require('mongoose');

const usuarioEsquema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  tipoDocumento: {
    type: String,
    enum: ['CC', 'Tarjeta de Identidad'],
    required: true,
  },
  numeroDocumento: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ['usuario', 'administrador'],
    default: 'usuario',
  },
  // Referencia a la tabla de reservaciones
  reservaciones: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservacion',
  }],
});

const Usuario = mongoose.model('Usuario', usuarioEsquema);

module.exports = Usuario;