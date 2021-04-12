'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');
const { search } = require('superagent');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get('/photo', (request, response) => {
  const searchQuery = request.query.query;

  const url = 'https://api.unsplash.com/photos/';
  const query = {
    client_id: process.env.UNSPLASH_PRIVATE_KEY,
    query: searchQuery
  }

  superagent
    .get(url)
    .query(query)
    .then(results => {
      const photoArray = results.body.map(photo => new Photo(photo));
      response.status(200).send(photoArray)
    })
    .catch(error => {
      console.error('error from superagent', error);
      response.status(500).send('server error');
    });
});

function Photo(obj) {
  this.img_url = obj.urls.regular;
  this.original_image = obj.links.self;
  this.photographer = obj.user.name;
}

app.get('*', notFound);

function notFound(request, response) {
  response.status(404).send('the page you are looking for is not there');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
