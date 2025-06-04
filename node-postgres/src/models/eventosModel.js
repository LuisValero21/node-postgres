const pool = require('../db');

const obtenerEventos = async () => {
  const result = await pool.query('SELECT * FROM eventos ORDER BY fecha_inicio DESC');
  return result.rows;
};

const obtenerEventoPorId = async (id) => {
  const result = await pool.query('SELECT * FROM eventos WHERE id = $1', [id]);
  return result.rows[0];
};

const crearEvento = async ({ nombre, descripcion, fecha_inicio, fecha_fin, tipo_evento }) => {
  const result = await pool.query(
    `INSERT INTO eventos (nombre, descripcion, fecha_inicio, fecha_fin, tipo_evento)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [nombre, descripcion, fecha_inicio, fecha_fin, tipo_evento]
  );
  return result.rows[0];
};

const actualizarEvento = async (id, { nombre, descripcion, fecha_inicio, fecha_fin, tipo_evento }) => {
  const result = await pool.query(
    `UPDATE eventos
     SET nombre = $1, descripcion = $2, fecha_inicio = $3, fecha_fin = $4, tipo_evento = $5
     WHERE id = $6 RETURNING *`,
    [nombre, descripcion, fecha_inicio, fecha_fin, tipo_evento, id]
  );
  return result.rows[0];
};

const eliminarEvento = async (id) => {
  const result = await pool.query('DELETE FROM eventos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  obtenerEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento
};
