const mongoose = require('mongoose');

const precioEsquema = new mongoose.Schema({
  lugar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lugar',
  },
  precio: Number,
});

const Precio = mongoose.model('Precio', precioEsquema);

module.exports = Precio;

