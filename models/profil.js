const mongoose = require('mongoose');

const profilSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  adresse: {
    pays: { type: String, required: true },
    ville: { type: String, required: true },
    codePostal: { type: String, required: true },
  },
  antecedentsAcademiques: [{
    niveau: { type: String, required: true },
    diplome: { type: String, required: true },
    etablissement: { type: String, required: true },
    anneeObtention: { type: Date, required: true },
  }],
  antecedentsProfessionnels: [{
    poste: { type: String, required: true },
    entreprise: { type: String, required: true },
    duree: { type: String, required: true },
  }],
  documents: [{
    type: { type: String, required: true },
    url: { type: String, required: true },
  }],
});

const Profil = mongoose.model('Profil', profilSchema);

module.exports = Profil;
