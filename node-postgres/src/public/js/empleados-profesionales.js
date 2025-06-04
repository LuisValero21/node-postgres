document.getElementById('formEmpleadoProfesional').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    primer_nombre: e.target.primer_nombre.value,
    segundo_nombre: e.target.segundo_nombre.value,
    primer_apellido: e.target.primer_apellido.value,
    segundo_apellido: e.target.segundo_apellido.value,
    fecha_nacimiento: e.target.fecha_nacimiento.value,
    doc_identidad: e.target.doc_identidad.value,
    sexo: e.target.sexo.value,
    lugar_nacimiento: e.target.lugar_nacimiento.value
  };
  await fetch('/api/empleados-profesionales/crear', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
});
