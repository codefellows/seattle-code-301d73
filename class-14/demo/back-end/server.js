'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

const app = express();
const Gift = require('./modules/Gift');

app.use(cors());

app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gifts', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// TODO: look into why bind necessary
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('Mongoose connected'));


app.get('/gift', Gift.getAllGifts);
app.post('/gift', Gift.createGift);
app.delete('/gift/:index', Gift.deleteGift);
app.put('/gift/:index', Gift.updateGift);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));