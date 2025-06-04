const pool = require('../db');

// Renderizar formulario para registrar eventos
exports.renderRegistrarEvento = async (req, res) => {
  try {
    const obras = await pool.query('SELECT id_obra, titulo FROM obras');
    res.render('eventos/registrar', { obras: obras.rows });
  } catch (error) {
    console.error('Error al cargar formulario de eventos:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Guardar un nuevo evento en la base de datos
exports.crearEvento = async (req, res) => {
  const { titulo, fecha_inicio, fecha_fin, descripcion, id_obra } = req.body;
  try {
    await pool.query(
      `INSERT INTO eventos (titulo, fecha_inicio, fecha_fin, descripcion, id_obra)
       VALUES ($1, $2, $3, $4, $5)`,
      [titulo, fecha_inicio, fecha_fin, descripcion, id_obra]
    );
    res.redirect('/eventos/historial');
  } catch (error) {
    console.error('Error al crear evento:', error);
    res.status(500).send('Error interno al registrar evento');
  }
};

// Listar eventos pasados y futuros
exports.historialEventos = async (req, res) => {
  try {
    const eventos = await pool.query(`
      SELECT e.*, o.titulo AS titulo_obra
      FROM eventos e
      LEFT JOIN obras o ON e.id_obra = o.id_obra
      ORDER BY e.fecha_inicio DESC
    `);
    res.render('eventos/historial', { eventos: eventos.rows });
  } catch (error) {
    console.error('Error al listar historial de eventos:', error);
    res.status(500).send('Error interno al cargar historial');
  }
};
