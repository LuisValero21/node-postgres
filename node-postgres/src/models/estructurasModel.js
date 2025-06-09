const pool = require('../db'); // Asumiendo que tienes pool configurado

exports.getAll = async () => {
  const result = await pool.query('SELECT * FROM estructuras');
  return result.rows;
};

exports.getById = async (id) => {
  const result = await pool.query('SELECT * FROM estructuras WHERE id = $1', [id]);
  return result.rows[0];
};

exports.create = async (data) => {
  const { nombre, tipo, ubicacion } = data;
  const result = await pool.query(
    'INSERT INTO estructuras (nombre, tipo, ubicacion) VALUES ($1, $2, $3) RETURNING *',
    [nombre, tipo, ubicacion]
  );
  return result.rows[0];
};

exports.update = async (id, data) => {
  const { nombre, tipo, ubicacion } = data;
  const result = await pool.query(
    'UPDATE estructuras SET nombre = $1, tipo = $2, ubicacion = $3 WHERE id = $4 RETURNING *',
    [nombre, tipo, ubicacion, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query('DELETE FROM estructuras WHERE id = $1', [id]);
};
