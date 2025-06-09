const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/salasExposicionesController');

router.get('/registrar', controller.renderRegistroSala);
router.post('/registrar', controller.registrarSala);
router.get('/listar', controller.listarSalas);

module.exports = router;
