const db = require('./db');

module.exports = {
  obtenerEmpleadosProfesionales: async () => {
    const result = await db.query('SELECT * FROM empleados_profesionales ORDER BY primer_nombre');
    return result.rows;
  },

  crearEmpleadoProfesional: async (empleadoProfesional) => {
    const query = `INSERT INTO empleados_profesionales (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, doc_identidad, sexo, id_lugar) 
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const values = [
      empleadoProfesional.primer_nombre,
      empleadoProfesional.segundo_nombre,
      empleadoProfesional.primer_apellido,
      empleadoProfesional.segundo_apellido,
      empleadoProfesional.fecha_nacimiento,
      empleadoProfesional.doc_identidad,
      empleadoProfesional.sexo,
      empleadoProfesional.id_lugar
    ];
    await db.query(query, values);
  },

  obtenerEmpleadoProfesionalPorId: async (id) => {
    const result = await db.query('SELECT * FROM empleados_profesionales WHERE id_empleado = $1', [id]);
    return result.rows[0];
  },

  actualizarEmpleadoProfesional: async (id, empleadoProfesional) => {
    const query = `UPDATE empleados_profesionales SET primer_nombre=$1, segundo_nombre=$2, primer_apellido=$3, segundo_apellido=$4, 
                   fecha_nacimiento=$5, doc_identidad=$6, sexo=$7, id_lugar=$8 WHERE id_empleado=$9`;
    const values = [
      empleadoProfesional.primer_nombre,
      empleadoProfesional.segundo_nombre,
      empleadoProfesional.primer_apellido,
      empleadoProfesional.segundo_apellido,
      empleadoProfesional.fecha_nacimiento,
      empleadoProfesional.doc_identidad,
      empleadoProfesional.sexo,
      empleadoProfesional.id_lugar,
      id
    ];
    await db.query(query, values);
  },

  eliminarEmpleado: async (id) => {
    await db.query('DELETE FROM empleados_profesionales WHERE id_empleado = $1', [id]);
  }
};