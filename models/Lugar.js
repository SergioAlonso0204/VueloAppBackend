const mongoose = require('mongoose');

const lugarEsquema = new mongoose.Schema({
  nombre: String,
});

const Lugar = mongoose.model('Lugar', lugarEsquema);

module.exports = Lugar;
