const Empleado = require('../models/EmpleadoProfesional');

exports.listarEmpleadosProfesionales = async (req, res) => {
  const empleadosProfesionales = await EmpleadoProfesional.obtenerTodos();
  res.render('empleados-profesionales/listar', { empleadosProfesionales });
};

exports.formCrearEmpleadoProfesional = (req, res) => {
  res.render('empleados-profesionales/crear');
};

exports.crearEmpleadoProfesional = async (req, res) => {
  await EmpleadoProfesional.insertar(req.body);
  res.redirect('/empleados-profesionales/crear');
};

exports.formEditarEmpleadoProfesional = async (req, res) => {
  const empleadoProfesional = await EmpleadoProfesional.obtenerPorId(req.params.id);
  res.render('empleados-profesionales/editar', { empleadoProfesional });
};

exports.editarEmpleadoProfesional = async (req, res) => {
  await EmpleadoProfesional.actualizar(req.params.id, req.body);
  res.redirect('/empleados-profesionales/editar');
};

exports.eliminarEmpleadoProfesional = async (req, res) => {
  await EmpleadoProfesional.eliminar(req.params.id);
  res.redirect('/empleados-profesionales/eliminar');
};
