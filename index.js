require('dotenv').config();
const express = require('express');
require('./config/connectiondb');
const Cliente = require('./models/cliente.model');
const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicio.controller');
const productoController = require('./controllers/producto.controller');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/clientes', clienteController.consultar);
app.get('/clientes/:id', clienteController.consultarPorId);
app.post('/clientes', clienteController.crear);
app.put('/clientes/:id', clienteController.actualizar);
app.delete('/clientes/:id', clienteController.eliminar);

app.get('/servicios', servicioController.consultar);
app.get('/servicios/:id', servicioController.consultarPorId);
app.post('/servicios', servicioController.crear);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.get('/productos', productoController.consultar);
app.get('/productos/:id', productoController.consultarPorId);
app.post('/productos', productoController.crear);
app.put('/productos/:id', productoController.actualizar);
app.delete('/productos/:id', productoController.eliminar);

// Página principal vacía
app.get('/', (req, res) => {
  res.render('pages/index-simple');
});

// Listar clientes
// Listar clientes
app.get('/listar-clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.render('pages/listar-clientes', { clientes: clientes });
  } catch (error) {
    console.error('Error:', error);
    res.send('<h1>Error al cargar clientes</h1>');
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en http://localhost:${PORT}/clientes`);
});
