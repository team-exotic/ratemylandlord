const { Pool } = require('pg');
const dotenv = require('dotenv').config();

const PG_URI = process.env.URI;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`query executed`, text);
    //console.log('object', pool.query(text, params, callback));
    return pool.query(text, params, callback);
  }
};
