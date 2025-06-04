const estructurasModel = require('../models/estructurasModel');

exports.getAllEstructuras = async (req, res) => {
  try {
    const estructuras = await estructurasModel.getAll();
    res.json(estructuras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estructuras' });
  }
};

exports.getEstructuraById = async (req, res) => {
  try {
    const estructura = await estructurasModel.getById(req.params.id);
    if (!estructura) {
      return res.status(404).json({ error: 'Estructura no encontrada' });
    }
    res.json(estructura);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la estructura' });
  }
};

exports.createEstructura = async (req, res) => {
  try {
    const nueva = await estructurasModel.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la estructura' });
  }
};

exports.updateEstructura = async (req, res) => {
  try {
    const actualizada = await estructurasModel.update(req.params.id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la estructura' });
  }
};

exports.deleteEstructura = async (req, res) => {
  try {
    await estructurasModel.delete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la estructura' });
  }
};
