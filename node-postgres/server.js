const express = require('express');
const path = require('path');
const app = express();

// Middleware para analizar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos HTML de la carpeta views
app.use('/views', express.static(path.join(__dirname, 'views')));

// Importación de rutas de API
const empleadosProfesionalesRoutes = require('./src/routes/empleadosProfesionalesRoutes');
const estructurasRoutes = require('./routes/estructurasRoutes');
const obrasRoutes = require('./routes/obrasRoutes');
const eventosRoutes = require('./routes/eventosRoutes');
const ticketsRoutes = require('./routes/ticketsRoutes');
const historialmantenimientoRoutes = require('./routes/historialmantenimientoRoutes');

// Formularios adicionales
const resumenMuseoRoutes = require('./routes/resumenMuseoRoutes');
const esculturasRoutes = require('./routes/esculturasRoutes');

// Rutas de API
app.use('/api/empleados-profesionales', empleadosProfesionalesRoutes);
app.use('/api/estructuras', estructurasRoutes);
app.use('/api/obras', obrasRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/historiales-mantenimientos', historialmantenimientoRoutes);

// Formularios adicionales
app.use('/api/resumen-museo', resumenMuseoRoutes);
app.use('/api/esculturas', esculturasRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});