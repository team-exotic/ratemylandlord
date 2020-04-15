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

// serve static files
app.use('/public', express.static(path.join(__dirname, '../client/public')));

// serve index.html
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html'))
);

// Require in routes
const loginRouter = require('./routes/login');
const apiRouter = require('./routes/api');

// route handlers
app.use('/login', loginRouter);
app.use('/api', apiRouter);

// catch-all route handler for any unknown route requests
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res) => {
  console.log(`global error handler caught unknown middleware error: ${err}`);
  res.status(400).json({ err: 'an error has occurred' });
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

module.exports = app;
