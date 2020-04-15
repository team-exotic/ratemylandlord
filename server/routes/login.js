const express = require('express');
const loginRouter = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

// add middleware (controllers)
//or signup
loginRouter.post(
  '/login',
  userController.verifyUser,
  cookieController.verifyUser, //setcookie and store token in user table w/expiration?
  (req, res) => {
    console.log('in login post after response came back');
    if (res.locals.err) {
      res.redirect('/login', { error: res.locals.err });
    } else if (res.locals.user) {
      res.status(200).json(res.locals.user);
      //res.redirect('/'); // last page they were in
    } else if (res.locals.matchedFound === false) {
      res.redirect('/signup', {
        message: 'that user account does not exist, please sign up'
      });
    }
  }
);

loginRouter.post(
  '/signup',
  userController.createUser,
  cookieController.setCookie,
  (req, res) => {
    if (res.locals.err) {
      res.redirect('/signup', { error: res.locals.err });
    }
    res.redirect('/'); // last page they were in
  }
);
// api routes

module.exports = loginRouter;
