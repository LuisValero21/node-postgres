const pool = require('../db');

// Renderizar formulario de registro
exports.renderRegistroSala = async (req, res) => {
  res.render('salas_exposiciones/registrar');
};

// Insertar nueva sala de exposición
exports.registrarSala = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    await pool.query(
      `INSERT INTO salas_exposiciones (
        id_sala_exposicion, id_estruc_fis_sala_exposicion, id_museo_sala_exposicion,
        nombre_sala_exposicion, descripcion_sala_exposicion)
       VALUES (
         DEFAULT, 1, 1, $1, $2
       )`,
      [nombre, descripcion]
    );
    res.redirect('/salas_exposiciones/registrar');
  } catch (err) {
    console.error('Error al registrar sala de exposición:', err);
    res.status(500).send('Error al registrar la sala de exposición');
  }
};

// Listar salas de exposición
exports.listarSalas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM salas_exposiciones ORDER BY id_sala_exposicion');
    res.render('salas_exposiciones/listar', { salas: result.rows });
  } catch (err) {
    console.error('Error al listar salas de exposición:', err);
    res.status(500).send('Error al cargar las salas de exposición');
  }
};
