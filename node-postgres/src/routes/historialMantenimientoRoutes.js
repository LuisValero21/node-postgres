const express = require('express');
const path = require('path');
const router = express.Router();
const historialMantenimientoController = require('../controllers/historialMantenimientoController');

router.get('/registrar', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/historiales-mantenimientos/registrar.html'));
});

module.exports = router;
