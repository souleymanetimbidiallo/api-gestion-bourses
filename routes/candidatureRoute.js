var express = require('express');
var router = express.Router();

var candidature_controller = require('../controllers/candidatureController');

router.post('/candidatures', candidature_controller.createCandidature);
router.get('/candidatures', candidature_controller.getAllCandidatures);
router.get('/candidatures/:id', candidature_controller.getOneCandidature);
router.put('/candidatures/:id', candidature_controller.updateCandidature);
router.delete('/candidatures/:id', candidature_controller.deleteCandidature);

module.exports = router;