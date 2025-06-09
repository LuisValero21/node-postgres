const db = require('../db');
const EmpleadoProfesional = require('./EmpleadoProfesional');

const Empleado = {
  obtenerTodos: async () => {
    const { rows } = await db.query('SELECT * FROM empleados_profesionales ORDER BY id_empleado');
    return rows;
  },

  obtenerPorId: async (id) => {
    const { rows } = await db.query('SELECT * FROM empleados_profesionales WHERE id_empleado = $1', [id]);
    return rows[0];
  },

  crear: async (empleadoProfesional) => {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, doc_identidad, sexo, id_lugar } = empleadoProfesional;
    const { rows } = await db.query(
      `INSERT INTO empleados_profesionales (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, doc_identidad, sexo, id_lugar)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, doc_identidad, sexo, id_lugar]
    );
    return rows[0];
  },

  actualizar: async (id, empleadoProfesional) => {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, doc_identidad, sexo, id_lugar } = empleadoProfesional;
    const { rows } = await db.query(
      `UPDATE empleados_profesionales SET primer_nombre = $1, segundo_nombre = $2, primer_apellido = $3, segundo_apellido = $4,
       fecha_nacimiento = $5, doc_identidad = $6, sexo = $7, id_lugar = $8 WHERE id_empleado = $9 RETURNING *`,
      [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, doc_identidad, sexo, id_lugar, id]
    );
    return rows[0];
  },

  eliminar: async (id) => {
    await db.query('DELETE FROM empleados_profesionales WHERE id_empleado = $1', [id]);
  }
};

module.exports = EmpleadoProfesional;
