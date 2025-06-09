const pool = require('../db');

const obtenerTiposTicket = async () => {
  const result = await pool.query('SELECT * FROM tipos_tickets ORDER BY tipo_tipo_ticket');
  return result.rows;
};

const crearTipoTicket = async ({ fecha_inicio, fecha_fin, tipo, precio, id_museo }) => {
  const result = await pool.query(
    `INSERT INTO tipos_tickets (fecha_inicio_tipo_ticket, fecha_fin_tipo_ticket, tipo_tipo_ticket, precio_tipo_ticket, id_museo_tipo_ticket)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [fecha_inicio, fecha_fin, tipo, precio, id_museo]
  );
  return result.rows[0];
};

const registrarVentaTicket = async ({ id_museo, tipo_entrada, monto }) => {
  const result = await pool.query(
    `INSERT INTO tickets (id_ticket, id_museo_ticket, fecha_hora_venta_ticket, tipo_entrada_ticket, monto_ticket)
     VALUES (DEFAULT, $1, NOW(), $2, $3) RETURNING *`,
    [id_museo, tipo_entrada, monto]
  );
  return result.rows[0];
};

module.exports = {
  obtenerTiposTicket,
  crearTipoTicket,
  registrarVentaTicket
};
