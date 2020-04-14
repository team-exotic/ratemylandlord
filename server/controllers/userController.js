const db = require('../models/model.js');
const userController = {};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const userQuery = {
    text: '',
    values: ''
  };
  db.query();
};

module.exports = userController;
