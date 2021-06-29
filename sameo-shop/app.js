const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const order = require('./models/order');
require('dotenv').config();

const app = express();
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false   })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());



app.get("/api",(req, res) => {
    res.json({message: `"Le boeuf c'est du porc ?" : Morgane le 01/06/2021 à 11h27` });
});

module.exports = app;