const mongoose = require('mongoose');
const Domaine = require('./models/domaine');
const Niveau = require('./models/niveau');
const Document = require('./models/document');
const Etudiant = require('./models/etudiant');
const Bourse = require('./models/bourse');
const Candidature = require('./models/candidature');
const dbConfig = require("./database/db")

// Charger les données JSON dans les collections correspondantes
const loadData = async () => {
  try {
    // Connexion à la base de données
    await mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database sucessfully connected!"))
    .catch(() => console.log("Database could not connected !"));

    // Vider les collections avant de charger les données
    await Domaine.deleteMany({});
    await Niveau.deleteMany({});
    await Document.deleteMany({});
    await Etudiant.deleteMany({});
    await Bourse.deleteMany({});
    await Candidature.deleteMany({});

    // Charger les données dans les collections correspondantes
    await Domaine.insertMany(require('./database/domaines.json'));
    await Niveau.insertMany(require('./database/niveaux.json'));
    await Document.insertMany(require('./database/documents.json'));
    await Etudiant.insertMany(require('./database/etudiants.json'));
    await Bourse.insertMany(require('./database/bourses.json'));
    await Candidature.insertMany(require('./database/candidatures.json'));

    // Déconnexion de la base de données
    await mongoose.disconnect();

    console.log('Chargement des données terminé.');
  } catch (error) {
    console.error(error);
  }
};

// Exécute la fonction de chargement des données
loadData();