'use strict';

const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const responseFormatter = require('./formatter/response');
const compression = require('compression');
const methodOverride = require('method-override');
const logger = require('./bootstrap/bunyan');

const app = module.exports = express();

app.set('title', 'officeLedger-API');
process.env.PORT = config.get('port');

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.use(methodOverride());
app.use(compression());
app.use('/apidoc', express.static(__dirname + '/apidoc'));

app.use(responseFormatter.formatResponse);
require('./routes/appRoutes')(app);

require('./bootstrap/globalAsync')().then(() => {
  app.listen(process.env.PORT);
  logger.info('Server Started');
}).catch(function(e) {
  logger.error(e);
});

process.on('unhandledRejection', (err) => {
  logger.error(err);
});

