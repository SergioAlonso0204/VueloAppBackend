const Usuario = require('../models/Usuario'); // Importa el modelo de Usuario
const jwt = require('jsonwebtoken'); // Importa la biblioteca jsonwebtoken para tokens JWT

exports.loginUsuario = async (req, res) => {
  try {
    console.log('Inicio de la función loginUsuario');
    const { correoElectronico, contraseña } = req.body; 

    // Busca al usuario por su correo electrónico
    const usuario = await Usuario.findOne({ correoElectronico });

    if (!usuario) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Verifica la contraseña en texto plano
    if (contraseña !== usuario.contraseña) {
      console.log('Contraseña incorrecta');
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Genera y envía el token de autenticación
    const token = jwt.sign({ usuarioId: usuario._id }, 'tu_secreto_secreto', {
      expiresIn: '1h',
    });

    // Si la autenticación es exitosa, envía el token en la respuesta
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error en loginUsuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
