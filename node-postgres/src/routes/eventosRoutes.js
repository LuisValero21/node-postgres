const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

// Ruta para mostrar el formulario de registro de eventos
router.get('/registrar', eventosController.renderRegistrarEvento);

// Ruta para procesar el formulario de registro de eventos
router.post('/registrar', eventosController.crearEvento);

// Ruta para listar todos los eventos
router.get('/historial', eventosController.historialEventos);

module.exports = router;
