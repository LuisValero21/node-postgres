const express = require('express');
const router = express.Router();
const controller = require('../controllers/empleadosProfesionalesController');

// Listar todos los empleados profesionales
router.get('/', controller.listarEmpleadosProfesionales);

// Mostrar formulario para crear un nuevo empleado profesional
router.get('/crear', controller.formCrearEmpleadoProfesional);

// Procesar la creación de un nuevo empleado profesional
router.post('/registrar', controller.crearEmpleadoProfesional);

// Mostrar formulario para editar un empleado profesional
router.get('/editar/:id', controller.formEditarEmpleadoProfesional);

// Procesar la edición del empleado profesional
router.post('/editar/:id', controller.editarEmpleadoProfesional);

// Eliminar un empleado profesional
router.post('/eliminar/:id', controller.eliminarEmpleadoProfesional);

module.exports = router;
