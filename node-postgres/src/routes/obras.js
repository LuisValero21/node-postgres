const express = require('express');
const router = express.Router();
const obrasController = require('../controllers/obrasController');

router.get('/registrar', obrasController.formularioRegistro);
router.post('/registrar', obrasController.registrarObra);

router.get('/colecciones', obrasController.listarColecciones);

module.exports = router;
