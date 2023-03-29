var express = require('express');
var router = express.Router();

var etudiant_controller = require('../controllers/etudiantController');

router.post('/etudiants', etudiant_controller.createEtudiant);
router.get('/etudiants', etudiant_controller.getAllEtudiants);
router.get('/etudiants/:id', etudiant_controller.getOneEtudiant);
router.put('/etudiants/:id', etudiant_controller.updateEtudiant);
router.delete('/etudiants/:id', etudiant_controller.deleteEtudiant);

/*router.post('/etudiants/:id/documents', etudiant_controller.createDocument);
router.delete('/etudiants/:id/documents/:doc_id', etudiant_controller.deleteDocument);
router.put('/etudiants/:id/documents/:doc_id', etudiant_controller.updateDocument);
router.get('/etudiants/:id/documents/:doc_id', etudiant_controller.getOneDocument);
router.get('/etudiants/:id/documents', etudiant_controller.getAllDocuments);*/

module.exports = router;