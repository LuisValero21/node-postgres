const express = require('express');
const path = require('path');
const router = express.Router();
const obrasController = require('../controllers/obrasController');

// Si usas EJS u otro motor de plantillas:
router.get('/registrar', obrasController.renderRegistrarObra);

// Si aún necesitas servir el HTML plano directamente:
router.get('/registrar-static', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/obras/registrar.html'));
});

// Insertar obra
router.post('/registrar', obrasController.crearObra);

// Colecciones (por ejemplo, para cargar opciones del formulario)
router.get('/colecciones', obrasController.renderColecciones);

module.exports = router;
