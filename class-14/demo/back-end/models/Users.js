'use strict';
const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String

});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true }, // TODO: make unique
  gifts: [giftSchema],
});

const UserModel = mongoose.model('giftRegistry', userSchema);

module.exports = UserModel;