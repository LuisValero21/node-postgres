const pool = require('../db');

const obtenerEstructurasFisicas = async () => {
  const result = await pool.query('SELECT * FROM estructuras_fisicas ORDER BY id');
  return result.rows;
};

const obtenerEstructuraFisicaPorId = async (id) => {
  const result = await pool.query('SELECT * FROM estructuras_fisicas WHERE id = $1', [id]);
  return result.rows[0];
};

const crearEstructuraFisica = async ({ nombre, descripcion, ubicacion, tipo }) => {
  const result = await pool.query(
    `INSERT INTO estructuras_fisicas (nombre, descripcion, ubicacion, tipo)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [nombre, descripcion, ubicacion, tipo]
  );
  return result.rows[0];
};

const actualizarEstructuraFisica = async (id, { nombre, descripcion, ubicacion, tipo }) => {
  const result = await pool.query(
    `UPDATE estructuras_fisicas
     SET nombre = $1, descripcion = $2, ubicacion = $3, tipo = $4
     WHERE id = $5 RETURNING *`,
    [nombre, descripcion, ubicacion, tipo, id]
  );
  return result.rows[0];
};

const eliminarEstructuraFisica = async (id) => {
  const result = await pool.query('DELETE FROM estructuras_fisicas WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  obtenerEstructurasFisicas,
  obtenerEstructuraFisicaPorId,
  crearEstructuraFisica,
  actualizarEstructuraFisica,
  eliminarEstructuraFisica
};
