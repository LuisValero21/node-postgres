const express = require('express');
const path = require('path');
const router = express.Router();
const estructurasController = require('../controllers/estructurasController');

// Vistas para formularios
router.get('/fisicas', estructurasController.listarFisicas);
router.get('/organizacionales', estructurasController.listarOrganizacionales);

// APIs de backend si las usas por AJAX
router.get('/api/fisicas', estructurasController.getAllEstructuras);
router.get('/api/organizacionales', estructurasController.getAllEstructuras);

module.exports = router;
