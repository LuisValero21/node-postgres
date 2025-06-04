const pool = require('../db');

// Mostrar formulario de venta de tickets
exports.renderVentaTicket = async (req, res) => {
  try {
    const tipos = await pool.query('SELECT * FROM tipos_tickets');
    res.render('tickets/venta', { tipos: tipos.rows });
  } catch (err) {
    console.error('Error al cargar formulario de venta:', err);
    res.status(500).send('Error interno del servidor');
  }
};

// Registrar venta de ticket
exports.venderTicket = async (req, res) => {
  const { tipo_id, cantidad, comprador } = req.body;
  try {
    await pool.query(
      `INSERT INTO ventas_ticket (tipo_id, cantidad, comprador, fecha_venta)
       VALUES ($1, $2, $3, NOW())`,
      [tipo_id, cantidad, comprador]
    );
    res.redirect('/tickets/venta');
  } catch (err) {
    console.error('Error al registrar venta:', err);
    res.status(500).send('Error al registrar la venta');
  }
};

// Mostrar formulario para tipos de ticket
exports.renderTiposTicket = async (req, res) => {
  try {
    const tipos = await pool.query('SELECT * FROM tipos_tickets');
    res.render('tickets/tipos', { tipos: tipos.rows });
  } catch (err) {
    console.error('Error al cargar tipos de ticket:', err);
    res.status(500).send('Error al cargar los tipos de ticket');
  }
};

// Registrar nuevo tipo de ticket
exports.crearTipoTicket = async (req, res) => {
  const { nombre, precio } = req.body;
  try {
    await pool.query(
      `INSERT INTO tipos_tickets (nombre, precio)
       VALUES ($1, $2)`,
      [nombre, precio]
    );
    res.redirect('/tickets/tipos');
  } catch (err) {
    console.error('Error al registrar tipo de ticket:', err);
    res.status(500).send('Error al registrar tipo de ticket');
  }
};
