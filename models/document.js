const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  format: {
    type: String,
    required: true
  },
  chemin: {
    type: String,
    required: true
  },
  dateSoumission: {
    type: Date,
    default: Date.now
  },
  etat: {
    type: String,
    enum: ['en attente', 'validé', 'rejeté'],
    default: 'en attente'
  }
});

module.exports = mongoose.model('Document', documentSchema);
