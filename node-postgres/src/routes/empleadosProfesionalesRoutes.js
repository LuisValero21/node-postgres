const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/empleadosProfesionalesController');

// Mostrar lista de empleados
router.get('/listar', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/empleados-profesionales/listar.html'));
});

// Mostrar formulario de creación
router.get('/crear', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/empleados-profesionales/crear.html'));
});

// Ruta POST para registrar un nuevo empleado profesional
router.post('/', (req, res) => {
  const nuevoEmpleado = req.body;
  // Aquí deberías insertar a la base de datos, por ejemplo:
  // await db.query('INSERT INTO empleados ...', [valores])
  console.log('Empleado recibido:', nuevoEmpleado);

  res.status(201).json({ message: 'Empleado registrado exitosamente' });
});

module.exports = router;
