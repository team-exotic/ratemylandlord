const express = require('express');
const apiRouter = express.Router();
// add middleware (controllers)
const propertyController = require('../controllers/propertyController');

// api routes
apiRouter.post('/property', (req, res) => {});

apiRouter.get('/property', (req, res) => {});

apiRouter.get('/city', (req, res) => {});

apiRouter.post('/rating', (req, res) => {});

apiRouter.post('/comment', (req, res) => {});

module.exports = apiRouter;
