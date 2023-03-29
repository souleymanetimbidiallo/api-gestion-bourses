const mongoose = require('mongoose');

const NiveauSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    unique: true
  },
  description: {type: String}
});

const Niveau = mongoose.model('Niveau', NiveauSchema);

module.exports = Niveau;
