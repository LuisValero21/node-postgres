const express = require('express');
const path = require('path');
const router = express.Router();

// Enviar cada formulario como HTML estático
router.get('/resumen-museo', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/formularios/resumen-museo.html'));
});

router.get('/empleado-nuevo', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/formularios/empleado-nuevo.html'));
});

router.get('/pintura-nueva', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/formularios/pintura-nueva.html'));
});

router.get('/escultura-nueva', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/formularios/escultura-nueva.html'));
});

module.exports = router;
