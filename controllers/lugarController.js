const Lugar = require('../models/Lugar');

// Obtener todos los lugares
exports.obtenerTodosLosLugares = async (req, res) => {
  try {
    const lugares = await Lugar.find();
    res.json(lugares);
  } catch (error) {
    console.error('Error al obtener lugares:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un lugar por ID
exports.obtenerLugarPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const lugar = await Lugar.findById(id);
    if (!lugar) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    res.json(lugar);
  } catch (error) {
    console.error('Error al obtener lugar por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Crear un nuevo lugar
exports.crearLugar = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevoLugar = new Lugar({ nombre });
    await nuevoLugar.save();
    res.status(201).json(nuevoLugar);
  } catch (error) {
    console.error('Error al crear lugar:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un lugar por ID
exports.actualizarLugar = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const lugarActualizado = await Lugar.findByIdAndUpdate(
      id,
      { nombre },
      { new: true }
    );
    if (!lugarActualizado) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    res.json(lugarActualizado);
  } catch (error) {
    console.error('Error al actualizar lugar por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un lugar por ID
exports.eliminarLugar = async (req, res) => {
  const { id } = req.params;
  try {
    const lugarEliminado = await Lugar.findByIdAndRemove(id);
    if (!lugarEliminado) {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
    res.json({ mensaje: 'Lugar eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar lugar por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
