const mongoose = require('mongoose');

const reservacionEsquema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  vuelo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vuelo',
  },
});

const Reservacion = mongoose.model('Reservacion', reservacionEsquema);

module.exports = Reservacion;
