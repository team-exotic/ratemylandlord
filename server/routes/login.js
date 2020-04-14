const express = require('express');

const loginRouter = express.Router();

// add middleware (controllers)
//or signup
loginRouter.post(
  '/login',
  userController.verifyUser,
  cookieController.setCookie, //setcookie and store token in user table w/expiration?
  (req, res) => {
    if (res.locals.err) {
      res.redirect('/login', { error: res.locals.err });
    }
    res.redirect('/'); // last page they were in
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
