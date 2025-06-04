const db = require('./db');

module.exports = {
  registrarObra: async (obra) => {
    const query = `INSERT INTO obras (titulo, autor, fecha_creacion, tipo, descripcion, id_coleccion) 
                   VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [obra.titulo, obra.autor, obra.fecha_creacion, obra.tipo, obra.descripcion, obra.id_coleccion];
    await db.query(query, values);
  },
  obtenerColecciones: async () => {
    const result = await db.query('SELECT * FROM colecciones');
    return result.rows;
  }
};