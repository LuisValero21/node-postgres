const express = require('express');
const router = express.Router();
const museosController = require('../controllers/museosController');

// Listar todos los museos
router.get('/', museosController.getAllMuseos);

// Obtener un museo por ID
router.get('/:id', museosController.getMuseoById);

// Crear un nuevo museo
router.post('/', museosController.createMuseo);

// Actualizar un museo existente
router.put('/:id', museosController.updateMuseo);

// Eliminar un museo
router.delete('/:id', museosController.deleteMuseo);

module.exports = router;
