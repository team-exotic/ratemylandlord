const express = require('express');
const apiRouter = express.Router();
// add middleware (controllers)
const propertyController = require('../controllers/propertyController');

// api routes

//add a property
apiRouter.post('/property', (req, res) => {});

//get property by address
apiRouter.get('/property', (req, res) => {});

//get property by city
apiRouter.get('/city', (req, res) => {});

//post a rating on a property
apiRouter.post('/rating', (req, res) => {});

//post a comment on a property
apiRouter.post('/comment', (req, res) => {});

module.exports = apiRouter;
