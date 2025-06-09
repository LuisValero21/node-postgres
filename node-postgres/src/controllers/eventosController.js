const pool = require('../db');

// Renderiza el formulario
exports.renderRegistrarEvento = async (req, res) => {
  try {
    res.sendFile(require('path').join(__dirname, '../views/eventos/registrar.html'));
  } catch (error) {
    console.error('Error al cargar formulario de eventos:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Insertar evento
exports.crearEvento = async (req, res) => {
  const {
    titulo_evento,
    fecha_inicio_evento,
    fecha_fin_evento,
    costo_evento,
    cantidad_personas_invitadas_evento,
    nombre_instituto_evento
  } = req.body;

  try {
    // Asignación temporal del id_museo_evento (en implementación final, debería provenir del usuario autenticado o contexto)
    const id_museo_evento = 1;

    await pool.query(
      `INSERT INTO eventos (
        id_evento, id_museo_evento, titulo_evento, fecha_inicio_evento,
        fecha_fin_evento, costo_evento, cantidad_personas_invitadas_evento, nombre_instituto_evento
      ) VALUES (
        DEFAULT, $1, $2, $3, $4, $5, $6, $7
      )`,
      [
        id_museo_evento,
        titulo_evento,
        fecha_inicio_evento,
        fecha_fin_evento,
        costo_evento || null,
        cantidad_personas_invitadas_evento || null,
        nombre_instituto_evento || null
      ]
    );

    res.redirect('/eventos/historial');
  } catch (error) {
    console.error('Error al crear evento:', error);
    res.status(500).send('Error interno al registrar evento');
  }
};

// Listar eventos
exports.historialEventos = async (req, res) => {
  try {
    const eventos = await pool.query(`SELECT * FROM eventos ORDER BY fecha_inicio_evento DESC`);
    res.render('eventos/historial', { eventos: eventos.rows });
  } catch (error) {
    console.error('Error al listar historial de eventos:', error);
    res.status(500).send('Error interno al cargar historial');
  }
};
