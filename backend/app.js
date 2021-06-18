// database mysql
const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

// import framework express
const express = require('express');

// import package body-parser qui permet d'extraire l'objet JSON des requêtes POST
const bodyParser = require('body-parser');

//import package pour upload images et travailler avec les répertoires et chemin de fichier
const path = require('path');

// Importation du package Helmet vous aide à protéger votre application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP.
const helmet = require('helmet');


// déclaration des routes ( user)
const userRoutes = require('./routes/user');


// création d'un application express
const app = express();

// middleware header qui permet à toutes les demandes de toutes les origines d'accèder à l'api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// middleware qui permet de transformer le corps de la requête en un objet JSON utilisable
app.use(bodyParser.json());


// middleware qui permet de charger les fichiers qui sont dans le repertoire image
app.use('/images', express.static(path.join(__dirname, 'images')));

// routes dédiées (user)
app.use('/api/auth', userRoutes);


// export de l'app express pour y accéder depuis server.js
module.exports = app;