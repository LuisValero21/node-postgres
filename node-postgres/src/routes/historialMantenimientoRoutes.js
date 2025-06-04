const express = require('express');
const router = express.Router();
const historialMantenimientoController = require('../controllers/historialMantenimientoController');

// Registrar historial de mantenimiento
router.post('/historiales-mantenimientos', historialMantenimientoController.registrarHistorialMantenimiento);

// Obtener historial completo de mantenimientos
router.get('/historiales-mantenimientos', historialMantenimientoController.obtenerHistorialMantenimientos);

module.exports = router;
