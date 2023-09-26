const mongoose = require('mongoose');

const vueloEsquema = new mongoose.Schema({
  numeroDeVuelo: {
    type: String,
    required: true,
    unique: true,
  },
  aerolinea: String,
  origen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lugar',
  },
  destino: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lugar',
  },

  precio: Number,
});

const Vuelo = mongoose.model('Vuelo', vueloEsquema);

module.exports = Vuelo;
