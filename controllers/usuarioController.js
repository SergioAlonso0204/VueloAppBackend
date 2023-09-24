// usuarioController.js (Controlador de usuarios)

const Usuario = require('../models/Usuario'); // Importa el modelo de Usuario

// Controlador para crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
  try {
    // Obtén los datos del nuevo usuario desde el cuerpo de la solicitud
    const { nombre, apellido, tipoDocumento, numeroDocumento, telefono, correoElectronico, contraseña, rol } = req.body;

    // Verifica si el usuario ya existe en la base de datos
    const usuarioExistente = await Usuario.findOne({ correoElectronico });

    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Crea un nuevo usuario
    const nuevoUsuario = new Usuario({
      nombre,
      apellido,
      tipoDocumento,
      numeroDocumento,
      telefono,
      correoElectronico,
      contraseña, 
      rol,
    });

    // Guarda el nuevo usuario en la base de datos
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario creado con éxito' });
  } catch (error) {
    console.error('Error al crear un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    // Busca todos los usuarios en la base de datos
    const usuarios = await Usuario.find();

    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para obtener un usuario por su ID
exports.obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca un usuario por su ID en la base de datos
    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener un usuario por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para actualizar un usuario por su ID
exports.actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;

    // Busca y actualiza un usuario por su ID en la base de datos
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, datosActualizados, { new: true });

    if (!usuarioActualizado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error('Error al actualizar un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para eliminar un usuario por su ID
exports.eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca y elimina un usuario por su ID en la base de datos
    const usuarioEliminado = await Usuario.findByIdAndRemove(id);

    if (!usuarioEliminado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error al eliminar un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
