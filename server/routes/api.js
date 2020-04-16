const express = require('express');
const apiRouter = express.Router();
// add middleware (controllers)
const propertyController = require('../controllers/propertyController');
const cookieController = require('../controllers/cookieController');

// api routes

//add a property
apiRouter.post('/property', propertyController.addProperty, (req, res) => {
  res.redirect('/');
});

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

//get property by city
apiRouter.get('/city', propertyController.searchByCity, (req, res) => {
  res.status(200).send(res.locals.properties);
});
//get property profile page by propertyID
apiRouter.get('/property/:id', propertyController.propertyProfile, (req, res) => {
  res.status(200).json(res.locals.propertyProfile);
});

//post a rating on a property
apiRouter.post('/rating', (req, res) => {});

//post a comment on a property
apiRouter.post(
  '/comment',
  cookieController.verifyUser,
  propertyController.addComment,
  (req, res, err) => {
    if (res.locals.comment) {
      res.status(200).json(res.locals.comment);
    }
  }
);

//get comments by property
apiRouter.get('/comment', propertyController.getComments, (req, res) => {
  if (res.locals.comments) {
    res.status(200).json(res.locals.comments);
  }
});

module.exports = apiRouter;
