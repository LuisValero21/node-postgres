const museoModel = require('../models/museoModel');

// Obtener todos los museos
exports.getAllMuseos = async (req, res) => {
  try {
    const museos = await museoModel.getAll();
    res.json(museos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los museos', error });
  }
};

// Obtener un museo por ID
exports.getMuseoById = async (req, res) => {
  try {
    const museo = await museoModel.getById(req.params.id);
    if (!museo) return res.status(404).json({ message: 'Museo no encontrado' });
    res.json(museo);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el museo', error });
  }
};

// Crear un nuevo museo
exports.createMuseo = async (req, res) => {
  try {
    const nuevoMuseo = await museoModel.create(req.body);
    res.status(201).json(nuevoMuseo);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el museo', error });
  }
};

// Actualizar un museo
exports.updateMuseo = async (req, res) => {
  try {
    const actualizado = await museoModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'Museo no encontrado' });
    res.json({ message: 'Museo actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el museo', error });
  }
};

// Eliminar un museo
exports.deleteMuseo = async (req, res) => {
  try {
    const eliminado = await museoModel.remove(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Museo no encontrado' });
    res.json({ message: 'Museo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el museo', error });
  }
};
