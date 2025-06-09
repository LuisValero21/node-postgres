const historialMantenimientoModel = require('../models/historialmantenimientoModel');

// Registrar historial
const registrarHistorialMantenimiento = async (req, res) => {
  try {
    const resultado = await historialMantenimientoModel.registrarHistorialMantenimiento(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    console.error('Error al registrar historial:', error);
    res.status(500).json({ error: 'Error al registrar historial de mantenimiento' });
  }
};

// Obtener todos los historiales
const obtenerHistorialMantenimientos = async (req, res) => {
  try {
    const resultado = await historialMantenimientoModel.obtenerHistorialMantenimientos();
    res.status(200).json(resultado);
  } catch (error) {
    console.error('Error al obtener historiales:', error);
    res.status(500).json({ error: 'Error al obtener historial de mantenimientos' });
  }
};

module.exports = {
  registrarHistorialMantenimiento,
  obtenerHistorialMantenimientos
};
