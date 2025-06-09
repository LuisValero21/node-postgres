const db = require('../db');

module.exports = {
  async renderRegistrar(req, res) {
    // Deberías cargar aquí las estructuras organizacionales válidas
    const estructuras = await db.query(`
      SELECT id_estruc_estructura_organizacional, id_museo_estructura_organizacional
      FROM estructuras_organizacionales
    `);
    res.render('colecciones/registrar', { estructuras: estructuras.rows });
  },

  async crear(req, res) {
    const { nombre_coleccion, descripcion_caracteristica_coleccion, id_estruc_orga_coleccion, id_museo_coleccion } = req.body;

    try {
      await db.query(`
        INSERT INTO colecciones (
          id_estruc_orga_coleccion, id_museo_coleccion,
          nombre_coleccion, descripcion_caracteristica_coleccion
        )
        VALUES ($1, $2, $3, $4)
      `, [id_estruc_orga_coleccion, id_museo_coleccion, nombre_coleccion, descripcion_caracteristica_coleccion]);

      res.redirect('/colecciones');
    } catch (error) {
      console.error('Error al crear colección:', error);
      res.status(500).send('Error al crear colección');
    }
  },

  async listar(req, res) {
    try {
      const result = await db.query(`
        SELECT * FROM COLECCIONES ORDER BY id_coleccion
      `);
      res.render('colecciones/listar', { colecciones: result.rows });
    } catch (error) {
      console.error('Error al listar colecciones:', error);
      res.status(500).send('Error al listar colecciones');
    }
  }
};
