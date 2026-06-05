require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.MONGOURI || '';

const conexion = mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

conexion
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Error en conexión MongoDB:', err.message));

module.exports = conexion;
