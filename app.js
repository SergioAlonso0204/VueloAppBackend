const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/AppVuelosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importa las rutas de cada modelo
/*const lugarRoutes = require('./routes/lugarRoutes');
const precioRoutes = require('./routes/precioRoutes');
const reservacionRoutes = require('./routes/reservacionRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const vueloRoutes = require('./routes/vueloRoutes');
*/

// Importa el controlador de autenticación
const authController = require('./controllers/authController');

// Ruta de la API para Login
app.post('/api/usuarios/login', authController.loginUsuario);

// Usa las rutas
//app.use('/api', lugarRoutes);
//app.use('/api', precioRoutes);
//app.use('/api', reservacionRoutes);
//app.use('/api', usuarioRoutes);
//app.use('/api', vueloRoutes);

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
