const mongoose = require('mongoose');

const etudiantSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    INE: { type: String },
    dateNaissance: { type: Date },
    lieuNaissance: { type: String},
    email: { type: String, required: true },
    motPasse: { type: String, required: true },
    telephone: { type: String },
    niveau: { type: mongoose.Schema.Types.ObjectId, ref: 'Niveau' },
    domaine: { type: mongoose.Schema.Types.ObjectId, ref: 'Domaine' },
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
    created: { type: Date, default: Date.now }
});

const Etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = Etudiant;
