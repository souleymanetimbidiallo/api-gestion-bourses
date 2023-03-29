var express = require('express');
var router = express.Router();

var document_controller = require('../controllers/documentController');

router.post('/documents', document_controller.createDocument);
router.get('/documents', document_controller.getAllDocuments);
router.get('/documents/:id', document_controller.getOneDocument);
router.put('/documents/:id', document_controller.updateDocument);
router.delete('/documents/:id', document_controller.deleteDocument);

module.exports = router;