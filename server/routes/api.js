const express = require('express');
const apiRouter = express.Router();
// add middleware (controllers)
const propertyController = require('../controllers/propertyController');

// api routes

//add a property
apiRouter.post('/property', (req, res) => {});

//search property by address
apiRouter.get('/property', propertyController.searchByAddress, (req, res) => {
  if (res.locals.matchedFound === false) {
    res.json({
      error: 'no matches found, please try again'
    });
  } else if (res.locals.err) {
    res.json({ error: res.locals.err });
  } else {
    res.status(200).json(res.locals.property);
  }
});

//get property profile page by propertyID
apiRouter.get('/property/:id', propertyController.propertyProfile, (req, res) => {
  res.status(200).json(res.locals.propertyProfile);
});

//search property by city
apiRouter.get('/city', (req, res) => {});

//post a rating on a property
apiRouter.post('/rating', (req, res) => {});

//post a comment on a property
apiRouter.post('/comment', (req, res) => {});

module.exports = apiRouter;
