var express = require('express');
var router = express.Router();

var niveau_controller = require('../controllers/niveauController');


router.post('/niveaux', niveau_controller.createNiveau);
router.get('/niveaux', niveau_controller.getAllNiveau);
router.get('/niveaux/:id', niveau_controller.getOneNiveau);
router.put('/niveaux/:id', niveau_controller.updateNiveau);
router.delete('/niveaux/:id', niveau_controller.deleteNiveau);

module.exports = router;