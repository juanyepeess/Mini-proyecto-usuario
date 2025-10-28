function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensaje: 'Acceso denegado: no se encontró el encabezado de autenticación' });
  }

  const [type, credentials] = authHeader.split(' ');

  if (type !== 'Basic') {
    return res.status(400).json({ mensaje: 'Formato de autenticación inválido' });
  }

  const [usuario, contraseña] = Buffer.from(credentials, 'base64').toString().split(':');

  // Usuario y contraseña “simulados”
  if (usuario === 'admin' && contraseña === '1234') {
    next(); // pasa al siguiente middleware o controlador
  } else {
    return res.status(403).json({ mensaje: 'Credenciales inválidas' });
  }
}

module.exports = authMiddleware;
