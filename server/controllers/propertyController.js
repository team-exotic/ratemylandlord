const db = require('../models/model.js');
const propertyController = {};

propertyController.addProperty = (req, res, next) => {
  //body contains address, name*;
  //might have to transform how address is typed in? take into account extra spacing or commas
  const { name, address } = req.body;
  if (
    (req.body.name !== null && typeof req.body.name === 'string') ||
    (req.body.address !== null && typeof req.body.address === 'string')
  ) {
    const userQuery = {
      text: `
      INSERT INTO "property"
      (name, address)
      VALUES
      ($1, $2)
      `,
      values: [name, address]
    };
    db.query(userQuery)
      .then((landLord) => {
        res.locals.name = landLord.name;
        res.locals.address = landLord.address;
        return next();
      })
      .catch((err) => {
        return next(`Error inside createLandLord: ${err}`);
      });
  }
};

propertyController.addRating = (req, res, next) => {};

propertyController.addComment = (req, res, next) => {};

//gives list of a matching addresses
propertyController.searchByAddress = (req, res, next) => {
  const { address, name } = req.body;
  if (name !== '') {
    const propertyQuery = {
      text: 'SELECT * FROM "property" WHERE name=$1 or address=$2 ',
      values: [name, address]
    };
  } else {
    const propertyQuery = {
      text: 'SELECT * FROM "property" WHERE address=$1',
      values: [address]
    };
  }
  db.query(propertyQuery)
    .then((property) => {
      console.log('in db query for searchbyaddress data received:', property);
      if (property.rows.length === 0) {
        return (res.locals.matchedFound = false);
      } else {
        res.locals.property = property.rows;
      }
      return next();
    })
    .catch((err) => {
      next({
        log: `error in middleware propertyController.searchByAddress: ${err}`
      });
    });
};

propertyController.searchByCity = (req, res, next) => {};

//find the profile page (property row w/all comments and sections)
propertyController.propertyProfile = (req, res, next) => {};

module.exports = propertyController;
