require('dotenv').config();
const mongoose = require('mongoose');
const Cliente = require('./models/cliente.model');
const Servicio = require('./models/servicio.model');
const Producto = require('./models/producto.model');

const clientesIniciales = [
  { nombre: 'María González', email: 'maria@email.com', telefono: '612345678' },
  { nombre: 'Carlos Rodríguez', email: 'carlos@email.com', telefono: '623456789' },
  { nombre: 'Ana Martínez', email: 'ana@email.com', telefono: '634567890' },
  { nombre: 'Luis Hernández', email: 'luis@email.com', telefono: '645678901' },
  { nombre: 'Elena Sánchez', email: 'elena@email.com', telefono: '656789012' }
];

const serviciosIniciales = [
  {
    nombre: 'Corte de pelo mujer',
    descripcion: 'Corte, lavado y peinado completo para mujer',
    duracionMinutos: 60,
    precio: 35.0,
    categoria: 'corte',
    activo: true,
    imagen: 'corte-mujer.jpg'
  },
  {
    nombre: 'Tintura completa',
    descripcion: 'Aplicación de tintura en todo el cabello con productos premium',
    duracionMinutos: 120,
    precio: 65.0,
    categoria: 'tintura',
    activo: true,
    imagen: 'tintura-completa.jpg'
  },
  {
    nombre: 'Afeitado clásico',
    descripcion: 'Afeitado tradicional con toalla caliente y navaja',
    duracionMinutos: 45,
    precio: 25.0,
    categoria: 'barberia',
    activo: true,
    imagen: 'afeitado-clasico.jpg'
  },
  {
    nombre: 'Tratamiento hidratante',
    descripcion: 'Hidratación profunda con keratina y aceites naturales',
    duracionMinutos: 90,
    precio: 55.0,
    categoria: 'tratamiento',
    activo: true,
    imagen: 'tratamiento-hidratante.jpg'
  },
  {
    nombre: 'Peinado evento',
    descripcion: 'Peinado elegante para bodas, fiestas y eventos especiales',
    duracionMinutos: 75,
    precio: 50.0,
    categoria: 'peinado',
    activo: true,
    imagen: 'peinado-evento.jpg'
  }
];

const productosIniciales = [
  { nombre: 'Camiseta básica algodón', precio: 331360, stock: 10 },
  { nombre: 'Camiseta polo manga corta', precio: 309593, stock: 10 },
  { nombre: 'Camisa formal manga larga', precio: 311300, stock: 10 },
  { nombre: 'Camisa oxford casual', precio: 135316, stock: 10 },
  { nombre: 'Pantalón jean clásico', precio: 211350, stock: 10 },
  { nombre: 'Pantalón chino slim fit', precio: 292722, stock: 10 },
  { nombre: 'Pantalón de vestir', precio: 288396, stock: 10 },
  { nombre: 'Short deportivo', precio: 330436, stock: 10 },
  { nombre: 'Bermuda de lino', precio: 92165, stock: 10 },
  { nombre: 'Chaqueta denim', precio: 51664, stock: 10 },
  { nombre: 'Chaqueta bomber', precio: 128899, stock: 10 },
  { nombre: 'Suéter tejido cuello V', precio: 74649, stock: 10 },
  { nombre: 'Hoodie con capucha', precio: 344091, stock: 10 },
  { nombre: 'Chaleco acolchado', precio: 29446, stock: 10 },
  { nombre: 'Vestido casual verano', precio: 172656, stock: 10 },
  { nombre: 'Vestido de noche elegante', precio: 216967, stock: 10 },
  { nombre: 'Falda plisada midi', precio: 45327, stock: 10 },
  { nombre: 'Blusa seda estampada', precio: 210861, stock: 10 },
  { nombre: 'Overol denim', precio: 323771, stock: 10 },
  { nombre: 'Traje de baño una pieza', precio: 217155, stock: 10 }
];

async function seed() {
  try {
    const uri = process.env.MONGOURI;
    if (!uri) {
      throw new Error('MONGOURI no está definido en .env');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const clientesCount = await Cliente.countDocuments();
    if (clientesCount === 0) await Cliente.insertMany(clientesIniciales);

    const serviciosCount = await Servicio.countDocuments();
    if (serviciosCount === 0) await Servicio.insertMany(serviciosIniciales);

    const productosCount = await Producto.countDocuments();
    if (productosCount === 0) await Producto.insertMany(productosIniciales);

    console.log('Datos de ejemplo insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos iniciales:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
