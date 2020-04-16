const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  //create random number for cookie value and assign to isLoggedIn key
  const secret = Math.floor(Math.random() * 99);
  res.cookie('isLoggedIn', `${secret}`, { maxAge: 1800000 });
  res.cookie(`userId`, `${res.locals.user.id}`, { maxAge: 1800000 });
  return next();
};

cookieController.verifyUser = (req, res, next) => {
  console.log(req);
  if (req.cookies.isLoggedIn) {
    return next();
  } else {
    return res.send(`You must be signed in to view this page`);
  }
};

module.exports = cookieController;
