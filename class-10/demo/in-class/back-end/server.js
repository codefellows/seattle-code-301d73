'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');

const app = express();


const PORT = process.env.PORT || 3002;

app.use(cors());

app.get('/recipes', getRecipes);

const inMemoryDB = {};

function getRecipes(request, response) {

  const ingredient = request.query.ingredient;

  const dataAlreadyFetched = inMemoryDB[ingredient] !== undefined;

  if (dataAlreadyFetched) {

    console.log("********************* ALREADY FETCHED *************");

    const recipeArr = inMemoryDB[ingredient];

    response.status(200).send(recipeArr);


  } else {

    // fetch it (and remember to store it in inMemoryDB)

    const url = `https://api.edamam.com/search`;
    const query = {
      q: ingredient,
      app_id: process.env.FOOD_APP_ID,
      app_key: process.env.FOOD_APP_KEY
    }


    superagent
      .get(url)
      .query(query)
      .then(res => {
        const recipeArr = res.body.hits.map(recipe => new Recipe(recipe.recipe));
        inMemoryDB[ingredient] = recipeArr;
        response.status(200).send(recipeArr);
      })
      .catch(err => {
        console.error('error', err);
        response.status(500).send('error', err);
      })
  }
}

function Recipe(recipe) {
  this.uri = recipe.uri;
  this.label = recipe.label;
  this.image_url = recipe.image;
  this.ingredients = recipe.ingredientLines;
  this.totalTime = recipe.totalTime;
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
