'use strict';

// imports
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const notFound = require('./components/not-found.js');
const getJobs = require('./components/jobs.js');

// set up
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

// route handlers
app.get('/jobs', getJobs);
app.use('*', notFound);



// listen
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
