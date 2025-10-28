const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { registrarUsuario, obtenerUsuarios } = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/auth');

//  Ruta protegida: requiere autenticación
router.get('/usuarios', authMiddleware, obtenerUsuarios);

//  Ruta POST con validación de datos
router.post(
  '/usuarios',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('correo').isEmail().withMessage('Debe ingresar un correo válido'),
    body('contraseña').isLength({ min: 6 }).withMessage('La contraseña debe tener mínimo 6 caracteres'),
  ],
  registrarUsuario
);

module.exports = router;
