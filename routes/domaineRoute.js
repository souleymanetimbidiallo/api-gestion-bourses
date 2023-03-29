var express = require('express');
var router = express.Router();

var domaine_controller = require('../controllers/domaineController');

router.post('/domaines', domaine_controller.createDomaine);
router.get('/domaines', domaine_controller.getAllDomaines);
router.get('/domaines/:id', domaine_controller.getOneDomaine);
router.put('/domaines/:id', domaine_controller.updateDomaine);
router.delete('/domaines/:id', domaine_controller.deleteDomaine);

module.exports = router;