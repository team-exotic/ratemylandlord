const db = require('../models/model.js');
const propertyController = {};

//ADD PROPERTY
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
//ADD RATING
propertyController.addRating = (req, res, next) => {};

//GET COMMENTS
propertyController.getComments = (req, res, next) => {
  const { propertyId } = req.body;
  const commentQuery = {
    text:
      'SELECT comment, created_at FROM "comments" WHERE property_id=$1 ORDER BY id DESC',
    values: [propertyId]
  };
  db.query(commentQuery)
    .then((comments) => {
      console.log('comments received:', comments.rows);
      res.locals.comments = comments.rows;
      return next();
    })
    .catch((err) => {
      next((res.locals.err = err));
    });
};

//ADD COMMENT
propertyController.addComment = (req, res, next) => {
  // console.log('userId cookie inside addComment', req.cookies.userId);
  const { propertyId, comment } = req.body;
  const commentQuery = {
    text:
      'INSERT INTO "comments" (property_id, comment, created_at, created_by) VALUES ($1,$2,NOW(),$3)',
    values: [propertyId, comment, req.cookies.userId]
  };
  db.query(commentQuery)
    .then((comment) => {
      console.log('this is the comment res:', comment.rows);
      res.locals.comment = comment.rows;
      return next();
    })
    .catch((err) => {
      next({
        log: `error in middleware propertyController.addComment: ${err}`
      });
    });
};

// //GET ADDRESSES - gives list of a matching addresses
// propertyController.searchByAddress = (req, res, next) => {
//   const { address, name } = req.body;
//   let propertyQuery;
//   if (name !== '') {
//     propertyQuery = {
//       text: 'SELECT * FROM "property" WHERE name=$1 OR address=$2 ',
//       values: [name, address]
//     };
//   } else {
//     propertyQuery = {
//       text: 'SELECT * FROM "property" WHERE address=$1',
//       values: [address]
//     };
//   }
//   db.query(propertyQuery)
//     .then((property) => {
//       console.log('in db query for searchbyaddress data received:', property.rows);
//       if (property.rows.length === 0) {
//         return (res.locals.matchedFound = false);
//       } else {
//         res.locals.property = property.rows; // [{id:'',name: '', address: '', image: ''},etc.]
//       }
//       return next();
//     })
//     .catch((err) => {
//       next({
//         log: `error in middleware propertyController.searchByAddress: ${err}`
//       });
//     });
// };

//SEARCH BY CITY
propertyController.searchByCityNameAddress = (req, res, next) => {
  let { address } = req.body;
  const userQuery = {
    text: `
    SELECT * FROM "property"
    WHERE address LIKE ('%' ||$1|| '%') OR name LIKE ('%' ||$1|| '%')
    `,
    values: [address]
  };
  db.query(userQuery)
    .then((properties) => {
      res.locals.properties = properties.rows;
      return next();
    })
    .catch((err) => {
      return next(`Error in searchByCity middleware: ${err}`);
    });
};

//--- find the profile page (property row w/all comments and sections)----//

propertyController.propertyProfile = (req, res, next) => {
  const { id } = req.body;
  const profileQuery = {
    text: `WITH property_ratings as (
      SELECT 
       property_id,
       AVG(timely_maintenance) as tm,
       AVG(appropriate_distance) as dist,
       AVG(respectful) as res,
       AVG(communication) as comm,
       AVG(flexibility) as flex,
       AVG(transparency) as tran,
       AVG(organized) as org,
       AVG(professionalism) as prof
      FROM "rating"
      GROUP BY property_id
      ),
      property_comments as (
      SELECT 
       property_id,
       comment,
       created_at
      FROM comments
      )
      SELECT 
        p.*,
        pr.*,
        pc.*
      FROM
       "property" p
       LEFT OUTER JOIN property_ratings pr
        on p.id = pr.property_id
       LEFT OUTER JOIN property_comments pc
        on p.id = pc.property_id
      WHERE
       p.id = $1 ORDER BY pc.id DESC `,
    values: [id]
  };
  db.query(profileQuery)
    .then((profile) => {
      console.log('this is returned sql res for profile', profile.rows);
      let profileRow = profile.rows.filter((curr) => {
        return (
          (curr['tm'] = Number(curr['tm'].slice(0, 4))),
          (curr['dist'] = Number(curr['dist'].slice(0, 4))),
          (curr['res'] = Number(curr['res'].slice(0, 4))),
          (curr['comm'] = Number(curr['comm'].slice(0, 4))),
          (curr['flex'] = Number(curr['flex'].slice(0, 4))),
          (curr['tran'] = Number(curr['tran'].slice(0, 4))),
          (curr['org'] = Number(curr['org'].slice(0, 4))),
          (curr['prof'] = Number(curr['prof'].slice(0, 4))),
          (curr['overallRating'] =
            (curr['tm'] +
              curr['dist'] +
              curr['res'] +
              curr['comm'] +
              curr['flex'] +
              curr['tran'] +
              curr['org'] +
              curr['prof']) /
            8)
        );
      });
      console.log('this is profileRow', profileRow);
      res.locals.propertyProfile = profileRow;
      return next();
    })
    .catch((err) => {
      next({
        log: `error in middleware propertyController.propertyProfile: ${err}`
      });
    });
};

module.exports = propertyController;
