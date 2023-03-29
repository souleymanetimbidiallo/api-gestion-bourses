const Etudiant = require('../models/etudiant');

// CREATE
exports.createEtudiant = (req, res) => {
    const etudiant = new Etudiant({
        nom: req.body.nom,
        prenom: req.body.prenom,
        INE: req.body.INE,
        dateNaissance: req.body.dateNaissance,
        lieuNaissance: req.body.lieuNaissance,
        email: req.body.email,
        motPasse: req.body.motPasse,
        telephone: req.body.telephone,
        niveau: req.body.niveau,
        domaine: req.body.domaine,
        documents: req.body.documents
    });
    etudiant.save()
        .then(() => res.status(201).json({ message: 'Etudiant créé !' }))
        .catch(error => res.status(400).json({ error }));
};

// READ
exports.getOneEtudiant = (req, res) => {
    Etudiant.findOne({ _id: req.params.id })
        .populate('niveau')
        .populate('domaine')
        .populate('documents')
        .then(etudiant => res.status(200).json(etudiant))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllEtudiants = (req, res) => {
    Etudiant.find()
        .populate('niveau')
        .populate('domaine')
        .populate('documents')
        .then(etudiants => res.status(200).json(etudiants))
        .catch(error => res.status(400).json({ error }));
};

// UPDATE
exports.updateEtudiant = (req, res) => {
    const etudiant = new Etudiant({
        _id: req.params.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        INE: req.body.INE,
        dateNaissance: req.body.dateNaissance,
        lieuNaissance: req.body.lieuNaissance,
        email: req.body.email,
        motPasse: req.body.motPasse,
        telephone: req.body.telephone,
        niveau: req.body.niveau,
        domaine: req.body.domaine,
        documents: req.body.documents
    });
    Etudiant.updateOne({ _id: req.params.id }, etudiant)
        .then(() => res.status(200).json({ message: 'Etudiant modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

// DELETE
exports.deleteEtudiant = (req, res) => {
    Etudiant.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Etudiant supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
