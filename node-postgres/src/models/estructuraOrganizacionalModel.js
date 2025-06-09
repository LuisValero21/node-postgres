const pool = require('../db');

const obtenerEstructurasOrganizacionales = async () => {
  const result = await pool.query('SELECT * FROM estructuras_organizacionales ORDER BY id');
  return result.rows;
};

const obtenerEstructuraOrganizacionalPorId = async (id) => {
  const result = await pool.query('SELECT * FROM estructuras_organizacionales WHERE id = $1', [id]);
  return result.rows[0];
};

const crearEstructuraOrganizacional = async ({ nombre, descripcion, dependencia }) => {
  const result = await pool.query(
    `INSERT INTO estructuras_organizacionales (nombre, descripcion, dependencia)
     VALUES ($1, $2, $3) RETURNING *`,
    [nombre, descripcion, dependencia]
  );
  return result.rows[0];
};

const actualizarEstructuraOrganizacional = async (id, { nombre, descripcion, dependencia }) => {
  const result = await pool.query(
    `UPDATE estructuras_organizacionales
     SET nombre = $1, descripcion = $2, dependencia = $3
     WHERE id = $4 RETURNING *`,
    [nombre, descripcion, dependencia, id]
  );
  return result.rows[0];
};

const eliminarEstructuraOrganizacional = async (id) => {
  const result = await pool.query('DELETE FROM estructuras_organizacionales WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  obtenerEstructurasOrganizacionales,
  obtenerEstructuraOrganizacionalPorId,
  crearEstructuraOrganizacional,
  actualizarEstructuraOrganizacional,
  eliminarEstructuraOrganizacional
};
