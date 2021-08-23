const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { usersRouter, transactionsRouter } = require('./routes/api/');
require('./utils/passport-config');

const app = express();

// Middlewares
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routing
app.use('/transactions', transactionsRouter);
app.use('/users', usersRouter);
app.use((_, res) => {
  res.status(404).json({ status: 'error', code: '404', message: 'Not found' });
});

// Error handler
app.use((err, _, res, __) => {
  err.status = err.status || 500;
  res.status(err.status).json({
    status: err.status === 500 ? 'fail' : 'error',
    code: err.status,
    message: err.message,
  });
});

module.exports = app;
