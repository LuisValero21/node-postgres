const path = require('path');
const db = require('../db');

module.exports = {
  async listarObras(req, res) {
    try {
      const result = await db.query('SELECT * FROM obras');
      res.json(result.rows);
    } catch (err) {
      console.error('Error al listar obras:', err);
      res.status(500).send('Error al obtener obras.');
    }
  },

  async renderRegistrarObra(req, res) {
    res.render('obras/registrar');
  },

  async crearObra(req, res) {
  const {
    nombre_obra,
    fecha_elaboracion_obra,
    dimensiones_obra,
    tipo_obra,
    caracteristicas_estilo_movimiento_obra,
    caracteristicas_tecnicas_manteriales_obra
  } = req.body;

  try {
    await db.query(
      `INSERT INTO obras (
        nombre_obra,
        fecha_elaboracion_obra,
        dimensiones_obra,
        tipo_obra,
        caracteristicas_estilo_movimiento_obra,
        caracteristicas_tecnicas_manteriales_obra
      ) VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        nombre_obra,
        fecha_elaboracion_obra,
        dimensiones_obra,
        tipo_obra,
        caracteristicas_estilo_movimiento_obra,
        caracteristicas_tecnicas_manteriales_obra
      ]
    );
    res.status(201).send('Obra registrada correctamente.');
  } catch (err) {
    console.error('Error al registrar obra:', err);
    res.status(500).send('Error al registrar obra.');
    }
  },

  async renderColecciones(req, res) {
    try {
      const result = await db.query('SELECT * FROM colecciones');
      res.render('obras/colecciones', { colecciones: result.rows });
    } catch (err) {
      console.error('Error al obtener colecciones:', err);
      res.status(500).send('Error al obtener colecciones.');
    }
  }
};
