const Bourse = require('../models/bourse');

// Créer une nouvelle bourse
exports.createBourse = (req, res, next) => {
  const bourse = new Bourse({
    nom: req.body.nom,
    description: req.body.description,
    montant: req.body.montant,
    niveaux: req.body.niveaux,
    domaines: req.body.domaines,
    dateLimite: req.body.dateLimite,
    paysDestination: req.body.paysDestination,
    universiteDestination: req.body.universiteDestination
  });
  bourse.save()
    .then(() => {
      res.status(201).json({
        message: 'Bourse enregistrée !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer toutes les bourses
exports.getAllBourses = (req, res, next) => {
  Bourse.find()
    .populate('niveaux')
    .populate('domaines')
    .then((bourses) => {
      res.status(200).json(bourses);
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer une bourse spécifique
exports.getOneBourse = (req, res, next) => {
  Bourse.findOne({
    _id: req.params.id
  })
    .populate('niveaux')
    .populate('domaines')
    .then((bourse) => {
      res.status(200).json(bourse);
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      });
    });
};

// Mettre à jour une bourse
exports.updateBourse = (req, res, next) => {
  const bourse = new Bourse({
    _id: req.params.id,
    nom: req.body.nom,
    description: req.body.description,
    montant: req.body.montant,
    niveaux: req.body.niveaux,
    domaines: req.body.domaines,
    dateLimite: req.body.dateLimite,
    paysDestination: req.body.paysDestination,
    universiteDestination: req.body.universiteDestination
  });
  Bourse.updateOne({
    _id: req.params.id
  }, bourse)
    .then(() => {
      res.status(201).json({
        message: 'Bourse modifiée !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Supprimer une bourse
exports.deleteBourse = (req, res, next) => {
  Bourse.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.status(200).json({
        message: 'Bourse supprimée !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};
