'use strict';

module.exports = function (recipe) {
  this.uri = recipe.uri;
  this.name = recipe.label;
  this.image_url = recipe.image;
  this.ingredients = recipe.ingredientLines;
  this.totalTime = recipe.totalTime;
}