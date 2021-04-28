'use strict';
const mongoose = require('mongoose');



const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cats: [catSchema]
});

const User = mongoose.model('user', userSchema);

module.exports = User;