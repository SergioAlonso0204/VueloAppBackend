// vueloController.js

const Vuelo = require('../models/Vuelo');

// Función para calcular el precio del vuelo (aleatorio, múltiplo de 5, mínimo 30,000)
const calcularPrecio = () => {
  const precioBase = 30000; // Precio mínimo
  const precioAleatorio = Math.floor(Math.random() * 16) * 5000; // Aleatorio múltiplo de 5
  return precioBase + precioAleatorio;
};

// Controladores para Vuelos

// Crear un nuevo vuelo
exports.crearVuelo = async (req, res) => {
  try {
    const nuevoVuelo = new Vuelo(req.body);
    // Calcula el precio utilizando la función calcularPrecio
    nuevoVuelo.precio = calcularPrecio();
    await nuevoVuelo.save();
    res.status(201).json(nuevoVuelo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al crear el vuelo' });
  }
};

// Obtener todos los vuelos
exports.obtenerVuelos = async (req, res) => {
  try {
    const vuelos = await Vuelo.find();
    res.json(vuelos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los vuelos' });
  }
};

// Obtener un vuelo por su ID
exports.obtenerVueloPorId = async (req, res) => {
  try {
    const vuelo = await Vuelo.findById(req.params.id);
    if (!vuelo) {
      res.status(404).json({ error: 'Vuelo no encontrado' });
      return;
    }
    res.json(vuelo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el vuelo' });
  }
};

// Actualizar un vuelo por su ID
exports.actualizarVuelo = async (req, res) => {
  try {
    const vuelo = await Vuelo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vuelo) {
      res.status(404).json({ error: 'Vuelo no encontrado' });
      return;
    }
    res.json(vuelo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar el vuelo' });
  }
};

// Eliminar un vuelo por su ID
exports.eliminarVuelo = async (req, res) => {
  try {
    const vuelo = await Vuelo.findByIdAndRemove(req.params.id);
    if (!vuelo) {
      res.status(404).json({ error: 'Vuelo no encontrado' });
      return;
    }
    res.json({ mensaje: 'Vuelo eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el vuelo' });
  }
};
