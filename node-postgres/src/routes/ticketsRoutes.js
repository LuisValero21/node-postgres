const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');

// Formulario de venta
router.get('/venta', ticketsController.renderVentaTicket);
router.post('/venta', ticketsController.venderTicket);

// Formulario de tipos de tickets
router.get('/tipos', ticketsController.renderTiposTicket);
router.post('/tipos', ticketsController.crearTipoTicket);

router.get('/historial', ticketsController.renderHistorialTickets);

module.exports = router;
