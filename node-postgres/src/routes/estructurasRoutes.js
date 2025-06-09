const express = require('express');
const path = require('path');
const router = express.Router();
const estructurasController = require('../controllers/estructurasController');

router.get('/fisicas', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/estructuras/fisicas.html'));
});

router.get('/organizacionales', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/estructuras/organizacionales.html'));
});

module.exports = router;
