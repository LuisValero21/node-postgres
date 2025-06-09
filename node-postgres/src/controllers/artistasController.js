const db = require('../db');

module.exports = {
  async listarArtistas(req, res) {
    try {
      const result = await db.query('SELECT * FROM artistas ORDER BY id_artista');
      res.render('artistas/listar', { artistas: result.rows });
    } catch (err) {
      console.error('Error al listar artistas:', err);
      res.status(500).send('Error al obtener artistas.');
    }
  },

  async renderRegistrarArtista(req, res) {
    res.render('artistas/registrar');
  },

  async crearArtista(req, res) {
    const {
      primer_nombre_artista,
      segundo_nombre_artista,
      primer_apellido_artista,
      segundo_apellido_artista,
      fecha_nacimiento_artista,
      fecha_fallecimiento_artista,
      nombre_artistico_artista,
      resumen_caracteristicas_artista
    } = req.body;

    try {
      await db.query(`
        INSERT INTO artistas (
          primer_nombre_artista, segundo_nombre_artista, primer_apellido_artista, segundo_apellido_artista,
          fecha_nacimiento_artista, fecha_fallecimiento_artista,
          nombre_artistico_artista, resumen_caracteristicas_artista
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      `, [
        primer_nombre_artista, segundo_nombre_artista,
        primer_apellido_artista, segundo_apellido_artista,
        fecha_nacimiento_artista, fecha_fallecimiento_artista,
        nombre_artistico_artista, resumen_caracteristicas_artista
      ]);

      res.redirect('/artistas');
    } catch (err) {
      console.error('Error al registrar artista:', err);
      res.status(500).send('Error al registrar artista.');
    }
  }
};
