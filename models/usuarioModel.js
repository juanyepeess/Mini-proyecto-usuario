// models/usuarioModel.js

let usuarios = [];

function agregarUsuario(nombre, correo, contraseña) {
  const nuevoUsuario = { id: usuarios.length + 1, nombre, correo, contraseña };
  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

function listarUsuarios() {
  return usuarios;
}

module.exports = { agregarUsuario, listarUsuarios };
