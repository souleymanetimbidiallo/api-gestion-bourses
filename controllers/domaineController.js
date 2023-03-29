const Domaine = require('../models/domaine');

// Créer un nouveau domaine d'étude
exports.createDomaine = (req, res, next) => {
  const domaine = new Domaine({
    nom: req.body.nom,
    description: req.body.description
  });
  domaine.save()
    .then(() => {
      res.status(201).json({
        message: 'Domaine d\'étude enregistré !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer tous les domaines d'étude
exports.getAllDomaines = (req, res, next) => {
  Domaine.find()
    .then((domaines) => {
      res.status(200).json(domaines);
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer un domaine d'étude spécifique
exports.getOneDomaine = (req, res, next) => {
  Domaine.findOne({
    _id: req.params.id
  })
    .then((domaine) => {
      res.status(200).json(domaine);
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      });
    });
};

// Mettre à jour un domaine d'étude
exports.updateDomaine = (req, res, next) => {
  const domaine = new Domaine({
    _id: req.params.id,
    nom: req.body.nom,
    description: req.body.description
  });
  Domaine.updateOne({
    _id: req.params.id
  }, domaine)
    .then(() => {
      res.status(201).json({
        message: 'Domaine d\'étude modifié !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Supprimer un domaine d'étude
exports.deleteDomaine = (req, res, next) => {
  Domaine.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.status(200).json({
        message: 'Domaine d\'étude supprimé !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};
