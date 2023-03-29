const Document = require('../models/document');

// Créer un nouveau document
exports.createDocument = (req, res, next) => {
  const document = new Document({
    nom: req.body.nom,
    description: req.body.description,
    format: req.body.format,
    chemin: "chemin fichier", //req.files.path,
    dateSoumission: Date.now(),
    etat: "en attente"
  });
  document.save()
    .then(() => {
      res.status(201).json({
        message: 'Document enregistré !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer tous les documents
exports.getAllDocuments = (req, res, next) => {
  Document.find()
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Récupérer un document spécifique
exports.getOneDocument = (req, res, next) => {
  Document.findOne({
    _id: req.params.id
  })
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((error) => {
      res.status(404).json({
        error: error
      });
    });
};

// Mettre à jour un document
exports.updateDocument = (req, res, next) => {
  const document = new Document({
    _id: req.params.id,
    nom: req.body.name,
    description: req.body.description,
    format: req.body.format,
    chemin: "chemin", //req.file.path,
    dateSoumission: Date.now(),
    etat: "en attente"
  });
  Document.updateOne({
    _id: req.params.id
  }, document)
    .then(() => {
      res.status(201).json({
        message: 'Document modifié !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};

// Supprimer un document
exports.deleteDocument = (req, res, next) => {
  Document.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.status(200).json({
        message: 'Document supprimé !'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      });
    });
};
