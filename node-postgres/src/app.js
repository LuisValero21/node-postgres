const express = require("express");
const path = require('path');
const empleadosProfesionalesRoutes = require('./routes/empleadosProfesionalesRoutes');
const empleadosProfesionalesController = require('./controllers/empleadosProfesionalesController');
const estructurasRoutes = require('./routes/estructuras');
const obrasRoutes = require('./routes/obras');
const artistasRoutes = require('./routes/artistas');
const coleccionesRoutes = require('./routes/colecciones');
const eventosRoutes = require('./routes/eventosRoutes');
const salasExposicionesRoutes = require('./routes/salasExposicionesRoutes');
const formulariosRoutes = require('./routes/formulariosRoutes');
const ticketsRoutes = require('./routes/ticketsRoutes');
const historialMantenimientoRoutes = require('./routes/historialMantenimientoRoutes');
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 3000;

dotenv.config();
const app = express();

const routerApi = require('./routes');

const logger = require('./middleware/logger');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/css', express.static(path.join(__dirname, 'src/public/css')));
app.use('/js', express.static(path.join(__dirname, 'src/public/js')));
app.use('/views', express.static(path.join(__dirname, 'src/views')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger);

// Rutas de los módulos
app.use('/empleados-profesionales', empleadosProfesionalesRoutes);
app.use('/estructuras', estructurasRoutes);
app.use('/obras', obrasRoutes);
app.use('/artistas', artistasRoutes);
app.use('/colecciones', coleccionesRoutes);
app.use('/eventos', eventosRoutes);
app.use('/salas-exposiciones', salasExposicionesRoutes);
app.use('/formularios', formulariosRoutes);
app.use('/tickets', ticketsRoutes);
app.use('/historiales-mantenimientos', historialMantenimientoRoutes);
app.use('/api/empleados-profesionales', empleadosProfesionalesRoutes);

// Página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

routerApi(app);

module.exports = app;