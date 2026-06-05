const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },

  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: [true, 'El email ya está registrado']
  },

  telefono: {
    type: String,
    required: [true, 'El teléfono es obligatorio'],
    minlength: [9, 'El teléfono debe tener al menos 9 dígitos'],
    maxlength: [10, 'El teléfono no puede tener más de 10 dígitos']
  }
});

module.exports = mongoose.model('Cliente', clienteSchema);
