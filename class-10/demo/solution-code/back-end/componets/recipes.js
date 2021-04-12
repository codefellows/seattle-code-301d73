'use strict';
const superagent = require('superagent');
const Recipe = require('./recipe-constructor');

const inMemoryDB = {};

module.exports = function (request, response) {
  const ingredient = request.query.ingredient;

  if(inMemoryDB[ingredient] !== undefined){
    console.log('getting info from db', ingredient)
    console.log('db', inMemoryDB)
    return inMemoryDB[ingredient];
  } else {
    console.log('getting info from super', ingredient)
    const url = `https://api.edamam.com/search`;
    const query = {
      q:ingredient,
      app_id:process.env.FOOD_APP_ID,
      app_key:process.env.FOOD_APP_KEY
    }
  
    superagent
      .get(url)
      .query(query)
      .then(res => {
        const recipeArr = res.body.hits.map(recipe => new Recipe(recipe.recipe));
        inMemoryDB[ingredient] = recipeArr;
        console.log('putting info in db', inMemoryDB)
        response.status(200).send(recipeArr);
      })
      .catch(err => {
        console.error('error', err);
        response.status(500).send('error', err);
      })
  }

}
