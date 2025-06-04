const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');

// Venta de tickets
router.get('/ventas', ticketsController.renderVentaTicket);
router.post('/ventas', ticketsController.venderTicket);

// Tipos de ticket
router.get('/tipos', ticketsController.renderTiposTicket);
router.post('/tipos', ticketsController.crearTipoTicket);

module.exports = router;
