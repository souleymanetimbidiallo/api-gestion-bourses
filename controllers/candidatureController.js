const Candidature = require('../models/candidature');

// Créer une nouvelle candidature
exports.createCandidature = (req, res, next) => {
  const candidature = new Candidature({
    etudiant: req.body.etudiant,
    bourse: req.body.bourse,
    dateDepot: Date.now(),
    etat: "en cours",
    resultat_selection: false,
    commentaire_selection: "",
    documents: req.body.documents
  });
  candidature.save()
    .then(() => {
      res.status(201).json({
        message: 'Candidature enregistrée !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer toutes les candidatures
exports.getAllCandidatures = (req, res, next) => {
  Candidature.find()
    .populate('etudiant')
    .populate('bourse')
    .populate('documents')
    .then((candidatures) => {
      res.status(200).json(candidatures);
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer une candidature spécifique
exports.getOneCandidature = (req, res, next) => {
  Candidature.findOne({
    _id: req.params.id
  })
    .populate('etudiant')
    .populate('bourse')
    .populate('documents')
    .then((candidature) => {
      res.status(200).json(candidature);
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      });
    });
};

// Mettre à jour une candidature
exports.updateCandidature = (req, res, next) => {
  const candidature = new Candidature({
    _id: req.params.id,
    etudiant: req.body.etudiant,
    bourse: req.body.bourse,
    dateDepot: Date.now(),
    etat: req.body.etat,
    resultat_selection: req.body.resultat_selection,
    commentaire_selection: req.body.commentaire_selection,
    documents: req.body.documents
  });
  Candidature.updateOne({
    _id: req.params.id
  }, candidature)
    .then(() => {
      res.status(201).json({
        message: 'Candidature modifiée !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Supprimer une candidature
exports.deleteCandidature = (req, res, next) => {
  Candidature.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.status(200).json({
        message: 'Candidature supprimée !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};
