const express = require('express');
const router = express.Router();
const estructurasController = require('../controllers/estructurasController');

// Obtener todas las estructuras
router.get('/', estructurasController.getAllEstructuras);

// Obtener una estructura por ID
router.get('/:id', estructurasController.getEstructuraById);

// Crear una nueva estructura
router.post('/', estructurasController.createEstructura);

// Actualizar una estructura existente
router.put('/:id', estructurasController.updateEstructura);

// Eliminar una estructura
router.delete('/:id', estructurasController.deleteEstructura);

module.exports = router;
