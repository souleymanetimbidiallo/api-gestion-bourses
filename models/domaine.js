const mongoose = require('mongoose');
const domaineSchema = new mongoose.Schema({
    nom: {
      type: String,
      unique: true
    },
    description: {
      type: String,
    }
  });
  
const Domaine = mongoose.model('Domaine', domaineSchema);
module.exports = Domaine;