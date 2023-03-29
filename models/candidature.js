const mongoose = require('mongoose');

const candidatureSchema = new mongoose.Schema({
  etudiant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Etudiant',
    required: true
  },
  bourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bourse',
    required: true
  },
  dateDepot: {
    type: Date,
    default: Date.now
  },
  etat: {
    type: String,
    enum: ['en cours', 'en attente', 'acceptée', 'refusée'],
    default: 'en cours'
  },
  resultat_selection: { type: Boolean},
  commentaire_selection: { type: String},

  documents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document'
  }]
});

const Candidature = mongoose.model('Candidature', candidatureSchema);

module.exports = Candidature;
