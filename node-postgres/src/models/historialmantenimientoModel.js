const pool = require('../config/db');

// Registrar nuevo historial de mantenimiento
const registrarHistorialMantenimiento = async ({ id_mantenimiento, fecha_inicio, fecha_fin, observaciones, id_empleado }) => {
  const result = await pool.query(
    `INSERT INTO historiales_mantenimientos 
     (id_mantenimiento, fecha_inicio, fecha_fin, observaciones, id_empleado)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [id_mantenimiento, fecha_inicio, fecha_fin, observaciones, id_empleado]
  );
  return result.rows[0];
};

// Obtener todos los historiales con detalles
const obtenerHistorialMantenimientos = async () => {
  const result = await pool.query(`
    SELECT h.id, o.titulo AS nombre_obra, e.nombre AS nombre_empleado,
           h.fecha_inicio, h.fecha_fin, h.observaciones
    FROM historiales_mantenimientos h
    JOIN mantenimientos_obras m ON h.id_mantenimiento = m.id
    JOIN obras o ON m.id_obra = o.id
    JOIN empleados_profesionales e ON h.id_empleado = e.id_empleado
    ORDER BY h.fecha_inicio DESC
  `);
  return result.rows;
};

module.exports = {
  registrarHistorialMantenimiento,
  obtenerHistorialMantenimientos
};
