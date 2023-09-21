const mongoose = require('mongoose');

const vueloEsquema = new mongoose.Schema({
  numeroDeVuelo: {
    type: String,
    required: true,
    unique: true,
  },
  aerolinea: String,
  origen: String,
  destino: String,
});

const Vuelo = mongoose.model('Vuelo', vueloEsquema);

module.exports = Vuelo;
