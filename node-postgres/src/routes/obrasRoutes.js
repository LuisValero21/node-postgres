const express = require('express');
const router = express.Router();
const obrasController = require('../controllers/obrasController');

// Ruta para mostrar el formulario de registro de obra
router.get('/registrar', obrasController.renderRegistrarObra);

// Ruta para manejar el registro de una nueva obra
router.post('/registrar', obrasController.crearObra);

// Ruta para listar las obras existentes
router.get('/listar', obrasController.listarObras);

// Ruta para ver colecciones
router.get('/colecciones', obrasController.renderColecciones);

module.exports = router;
