const Usuario = require('../models/Usuario'); // Importa el modelo de Usuario
const bcrypt = require('bcrypt'); // Importa la biblioteca bcrypt para el hash de contraseñas
const jwt = require('jsonwebtoken'); // Importa la biblioteca jsonwebtoken para tokens JWT

exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body; 

    // Busca al usuario por su correo electrónico
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Verifica la contraseña
    const coincidenciaContrasena = await bcrypt.compare(password, usuario.password);

    if (!coincidenciaContrasena) {
      // Si la contraseña no coincide, devuelve un error
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Genera y envía el token de autenticación
    const token = jwt.sign({ usuarioId: usuario._id }, 'tu_secreto_secreto', {
      expiresIn: '1h',
    });

    // Si la autenticación es exitosa, envía el token en la respuesta
    res.status(200).json({ token });
  } catch (error) {
    // Si ocurre algún error, devuelve un error genérico
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};
