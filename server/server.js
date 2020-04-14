// import libraries
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.port || 8000;
// parse JSON and cookies
app.use(express.json());
app.use(cookieParser());
//serve static files
app.use('/public', express.static(path.join(__dirname, '../public')));

//Require in routes
const loginRouter

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
