'use strict';
const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  kitties: [kittySchema]
});



module.exports = mongoose.model('cats', catSchema);
