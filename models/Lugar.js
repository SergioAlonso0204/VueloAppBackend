const mongoose = require('mongoose');

const lugarEsquema = new mongoose.Schema({
  nombre: String,
  tipo: {
    type: String,
    enum: ['aeropuerto', 'ciudad', 'otro'],
    default: 'otro',
  },
});

const Lugar = mongoose.model('Lugar', lugarEsquema);

module.exports = Lugar;
