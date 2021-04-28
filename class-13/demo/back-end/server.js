'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose');
// making a database called cats
mongoose.connect('mongodb://localhost:27017/cats', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected')
});


const UserModel = require('./models/Users.js');

// const rinat = new UserModel({
//   name: 'Rinat',
//   cats: [
//     { name: 'Richard' },
//   ]
// });

// rinat.save();

// console.log({ rinat });
// console.log(rinat.cats[0].name);

app.get('/cats', async (request, response) => {

  const { name } = request.query;
  // equivalent to below
  // const name = request.query.name;

  await UserModel.find({ name }, (err, users) => {
    if (users.length) {
      response.send(users[0].cats);
    } else {
      response.send('no users with that name :(');
    }
  });

});

app.post('/cats', async (request, response) => {

  const { catName } = request.body;

  const { name } = request.query;

  await UserModel.find({ name }, (err, users) => {

    if (users.length) {

      const user = users[0];

      const currentCats = user.cats;

      const newCat = { name: catName };

      currentCats.push(newCat);

      user.save();

      response.send(user.cats);
    } else {
      response.send('no users with that name :(');
    }
  });
});

app.delete('/cats/:index', async (request, response) => {

  const { name } = request.query;

  const index = Number(request.params.index);

  await UserModel.find({ name }, (err, users) => {

    if (users.length) {

      const user = users[0];

      const currentCats = user.cats;

      currentCats.splice(index, 1);

      user.save();

      response.send('deleted');

    } else {
      response.send('no user found');
    }

  });

});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

// terminal commands:
// mongo - enters mongo
// show dbs - shows all collections
// use <db> - switches to the collection you want to be in