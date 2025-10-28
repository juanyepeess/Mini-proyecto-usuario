const { validationResult } = require('express-validator');
const Usuario = require('../models/usuarioModel');

function registrarUsuario(req, res) {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre, correo, contraseña } = req.body;

  const nuevoUsuario = Usuario.agregarUsuario(nombre, correo, contraseña);
  res.status(201).json({ mensaje: 'Usuario registrado correctamente', usuario: nuevoUsuario });
}

function obtenerUsuarios(req, res) {
  try {
    const lista = Usuario.listarUsuarios();
    res.status(200).json(lista);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
  }
}

module.exports = { registrarUsuario, obtenerUsuarios };
