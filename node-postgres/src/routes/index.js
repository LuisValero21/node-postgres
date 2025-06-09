const express = require('express');
const empleadosProfesionalesRouter = require('./empleadosProfesionalesRoutes');
const obrasRouter = require('./obras');
const artistasRouter = require('./artistas');
const coleccionesRouter = require('./colecciones');
const museosRouter = require('./museos.route');
const salasExposicionesRouter = require('./salasExposicionesRoutes');
// Agrega más routers según necesidad

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/empleados-profesionales', empleadosProfesionalesRouter);
  router.use('/obras', obrasRouter);
  router.use('/artistas', artistasRouter);
  router.use('/colecciones', coleccionesRouter);
  router.use('/museos', museosRouter);
  router.use('/salas_exposiciones', salasExposicionesRouter);

}

module.exports = routerApi;
