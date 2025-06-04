const express = require('express');
const router = express.Router();
const estructurasController = require('../controllers/estructurasController');

router.get('/fisicas', estructurasController.listarFisicas);
router.get('/organizacionales', estructurasController.listarOrganizacionales);

module.exports = router;
