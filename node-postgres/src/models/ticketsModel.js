const pool = require('../db');

const obtenerTiposTicket = async () => {
  const result = await pool.query('SELECT * FROM tipos_tickets ORDER BY nombre');
  return result.rows;
};

const crearTipoTicket = async ({ nombre, precio }) => {
  const result = await pool.query(
    `INSERT INTO tipos_tickets (nombre, precio)
     VALUES ($1, $2) RETURNING *`,
    [nombre, precio]
  );
  return result.rows[0];
};

const actualizarTipoTicket = async (id, { nombre, precio }) => {
  const result = await pool.query(
    `UPDATE tipos_tickets
     SET nombre = $1, precio = $2
     WHERE id = $3 RETURNING *`,
    [nombre, precio, id]
  );
  return result.rows[0];
};

const eliminarTipoTicket = async (id) => {
  const result = await pool.query('DELETE FROM tipos_tickets WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

const registrarVentaTicket = async ({ id_tipo_ticket, cantidad, fecha_venta }) => {
  const result = await pool.query(
    `INSERT INTO ventas_tickets (id_tipo_ticket, cantidad, fecha_venta)
     VALUES ($1, $2, $3) RETURNING *`,
    [id_tipo_ticket, cantidad, fecha_venta]
  );
  return result.rows[0];
};

const obtenerHistorialVentas = async () => {
  const result = await pool.query(
    `SELECT v.id, t.nombre AS tipo_ticket, v.cantidad, v.fecha_venta, t.precio,
            (v.cantidad * t.precio) AS total
     FROM ventas_tickets v
     JOIN tipos_ticket t ON v.id_tipo_ticket = t.id
     ORDER BY v.fecha_venta DESC`
  );
  return result.rows;
};

module.exports = {
  obtenerTiposTicket,
  crearTipoTicket,
  actualizarTipoTicket,
  eliminarTipoTicket,
  registrarVentaTicket,
  obtenerHistorialVentas
};
