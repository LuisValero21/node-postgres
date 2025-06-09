const pool = require('../db');

const obtenerEventos = async () => {
  const result = await pool.query('SELECT * FROM eventos ORDER BY fecha_inicio_evento DESC');
  return result.rows;
};

const crearEvento = async ({
  titulo_evento,
  fecha_inicio_evento,
  fecha_fin_evento,
  costo_evento,
  cantidad_personas_invitadas_evento,
  nombre_instituto_evento
}) => {
  const id_museo_evento = 1; // de momento hardcoded

  const result = await pool.query(
    `INSERT INTO eventos (
      id_evento, id_museo_evento, titulo_evento, fecha_inicio_evento,
      fecha_fin_evento, costo_evento, cantidad_personas_invitadas_evento, nombre_instituto_evento
    ) VALUES (
      DEFAULT, $1, $2, $3, $4, $5, $6, $7
    ) RETURNING *`,
    [
      id_museo_evento,
      titulo_evento,
      fecha_inicio_evento,
      fecha_fin_evento,
      costo_evento,
      cantidad_personas_invitadas_evento,
      nombre_instituto_evento
    ]
  );

  return result.rows[0];
};

module.exports = { obtenerEventos, crearEvento };
