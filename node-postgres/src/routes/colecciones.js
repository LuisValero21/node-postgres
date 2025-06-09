const express = require('express');
const router = express.Router();
const coleccionesController = require('../controllers/coleccionesController');

// Formulario
router.get('/registrar', coleccionesController.renderRegistrar);

// Procesar formulario
router.post('/registrar', coleccionesController.crear);

// Listado
router.get('/', coleccionesController.listar);

module.exports = router;
