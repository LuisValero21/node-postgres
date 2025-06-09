const express = require('express');
const router = express.Router();
const artistasController = require('../controllers/artistasController');

router.get('/', artistasController.listarArtistas);
router.get('/registrar', artistasController.renderRegistrarArtista);
router.post('/registrar', artistasController.crearArtista);

module.exports = router;
