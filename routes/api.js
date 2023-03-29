var express = require('express');
var router = express.Router();
const multer = require('../middlewares/multer-config');

// Require controller modules.
var userController = require('../controllers/userController');
var document_controller = require('../controllers/documentController');
var etudiant_controller = require('../controllers/etudiantController');
var niveau_controller = require('../controllers/niveauController');
var domaine_controller = require('../controllers/domaineController');
var bourse_controller = require('../controllers/bourseController');
var candidature_controller = require('../controllers/candidatureController');

router.get('/', document_controller.getAllDocuments);


/// USER ROUTES ///
router.get('/users', userController.users);
router.post('/signup', multer, userController.signup);
router.post('/login', userController.login);
router.get('/users/:id', userController.user_detail);
router.put('/users/:id', multer, userController.user_update);
router.delete('/users/:id', userController.user_delete);

/// DOCUMENT ROUTES ///
router.post('/documents', document_controller.createDocument);
router.get('/documents', document_controller.getAllDocuments);
router.get('/documents/:id', document_controller.getOneDocument);
router.put('/documents/:id', document_controller.updateDocument);
router.delete('/documents/:id', document_controller.deleteDocument);

/// NIVEAU ROUTES ///
router.post('/niveaux', niveau_controller.createNiveau);
router.get('/niveaux', niveau_controller.getAllNiveau);
router.get('/niveaux/:id', niveau_controller.getOneNiveau);
router.put('/niveaux/:id', niveau_controller.updateNiveau);
router.delete('/niveaux/:id', niveau_controller.deleteNiveau);


/// DOMAINE ROUTES ///
router.post('/domaines', domaine_controller.createDomaine);
router.get('/domaines', domaine_controller.getAllDomaines);
router.get('/domaines/:id', domaine_controller.getOneDomaine);
router.put('/domaines/:id', domaine_controller.updateDomaine);
router.delete('/domaines/:id', domaine_controller.deleteDomaine);

/// ETUDIANT ROUTES ///
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

/// BOURSE ROUTES ///
router.post('/bourses', bourse_controller.createBourse);
router.get('/bourses', bourse_controller.getAllBourses);
router.get('/bourses/:id', bourse_controller.getOneBourse);
router.put('/bourses/:id', bourse_controller.updateBourse);
router.delete('/bourses/:id', bourse_controller.deleteBourse);

/// CANDIDATURE ROUTES ///
router.post('/candidatures', candidature_controller.createCandidature);
router.get('/candidatures', candidature_controller.getAllCandidatures);
router.get('/candidatures/:id', candidature_controller.getOneCandidature);
router.put('/candidatures/:id', candidature_controller.updateCandidature);
router.delete('/candidatures/:id', candidature_controller.deleteCandidature);

module.exports = router;
