'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const SnackHandlers = require('./snack-handlers')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/snacks', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// TODO: look into why bind necessary
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('Mongoose connected'));

// routes
app.post('/snacks', SnackHandlers.create);
app.get('/snacks', SnackHandlers.getAll);
app.get('/snacks/:id', SnackHandlers.getOne);
app.put('/snacks/:id', SnackHandlers.update);
app.delete('/snacks/:id', SnackHandlers.delete);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));