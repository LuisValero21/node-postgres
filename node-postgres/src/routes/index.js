const express = require('express');
const empleadosProfesionalesRouter = require('./empleadosProfesionalesRoutes');
const obrasRouter = require('./obrasRoutes');
const museosRouter = require('./museos.route');
// Agrega más routers según necesidad

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/empleados-profesionales', empleadosProfesionalesRouter);
  router.use('/obras', obrasRouter);
  router.use('/museos', museosRouter);
}

module.exports = routerApi;
