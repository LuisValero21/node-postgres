const express = require("express");
const path = require('path');
const empleadosProfesionalesRoutes = require('./routes/empleadosProfesionalesRoutes');
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
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/views', express.static(path.join(__dirname, 'src/views')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger);

// Rutas de los módulos
app.use('/empleados-profesionales', require('../src/routes/empleadosProfesionalesRoutes'));
app.use('/estructuras', require('../src/routes/estructurasRoutes'));
app.use('/obras', require('../src/routes/obrasRoutes'));
app.use('/eventos', require('../src/routes/eventosRoutes'));
app.use('/tickets', require('../src/routes/ticketsRoutes'));
app.use('/historiales-mantenimientos', require('../src/routes/historialMantenimientoRoutes'));

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