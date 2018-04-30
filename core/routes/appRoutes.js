'use strict';

const routes = require('./routes')();

function setupRoutes(app) {
  app.use('/api/business', routes.business);
  app.use('/api/client', routes.client);
  app.use('/api/transaction', routes.transaction);
}

function appRoutes(app) {
  app.use('/', routes.main);

  setupRoutes(app);
}

module.exports = appRoutes;
