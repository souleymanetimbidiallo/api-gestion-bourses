const Niveau = require('../models/niveau');

// Créer un nouveau niveau d'étude
exports.createNiveau = (req, res, next) => {
  const Niveau = new Niveau({
    nom: req.body.nom,
    description: req.body.description
  });
  Niveau.save()
    .then(() => {
      res.status(201).json({
        message: 'Niveau d\'étude enregistré !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer tous les niveaux d'étude
exports.getAllNiveau = (req, res, next) => {
  Niveau.find()
    .then((niveaux) => {
      res.status(200).json(niveaux);
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer un niveau d'étude spécifique
exports.getOneNiveau = (req, res, next) => {
  Niveau.findOne({
    _id: req.params.id
  })
    .then((Niveau) => {
      res.status(200).json(Niveau);
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      });
    });
};

// Mettre à jour un niveau d'étude
exports.updateNiveau = (req, res, next) => {
  const Niveau = new Niveau({
    _id: req.params.id,
    nom: req.body.nom,
    description: req.body.description
  });
  Niveau.updateOne({
    _id: req.params.id
  }, Niveau)
    .then(() => {
      res.status(201).json({
        message: 'Niveau d\'étude modifié !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Supprimer un niveau d'étude
exports.deleteNiveau = (req, res, next) => {
  Niveau.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.status(200).json({
        message: 'Niveau d\'étude supprimé !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};
