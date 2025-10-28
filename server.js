// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', usuarioRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API REST de registro de usuarios con arquitectura MVC ✅');
});

// Manejo global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Error interno del servidor', error: err.message });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
